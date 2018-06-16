import { get } from 'lodash';
import { submitDataToApi } from './http.service';
import { isEmailValid, isStringAplhaNumeric } from './validation.service';
import { setKey, removeKey, getKey } from './local-storage.service';

let loginData = {}
let shouldSetRememeberMeToken = false;

export const updateLoginObject = (value, key) => {
  if (key === 'rememberMe') {
    shouldSetRememeberMeToken = value;
    return;
  }

  loginData[key] = value;
}

export const resetLoginData = () => {
  loginData = {};
  shouldSetRememeberMeToken = false;
}

export const submitLoginData = () => {
  if (isLoginDataValid()) {
    return submitDataToApi('login', loginData).then(res => {
      setRememeberMeTokenIfNeeded(res);
      resetLoginData();

      return res;
    });
  }

  return new Promise((resolve, reject) => {
    reject({data:{message: 'All fields must be valid!'}});
  })
}

const isLoginDataValid = () => {
  return  isEmailValid(get(loginData, 'email')) && isStringAplhaNumeric(get(loginData, 'password'));
}

const setRememeberMeTokenIfNeeded = (res) => {
  if (shouldSetRememeberMeToken) {
    setKey('NEWS_TOKEN', get(res, 'data._id'));
  } else {
    removeKey('NEWS_TOKEN')
  }
}

export const checkIfUserLoggedIn = () => {
  const userToken =getKey('NEWS_TOKEN')

  return userToken ?
    submitDataToApi('loginWithToken', {token: userToken}) :
    new Promise((resolve, reject) => {
      reject();
    })
}

export const logout = () => removeKey('NEWS_TOKEN');
