import { get } from 'lodash';
import { submitDataToApi } from './http.service';
import { isEmailValid, isStringAplhaNumeric } from './validation.service';
import { setKey, removeKey, getKey } from './local-storage.service';
import {
  setKey as setKeyInSession,
  getKey as getKeyFromSession,
  removeKey as removeKeyFromSession
} from './session-storage.service';

let loginData = {};
let shouldSetRememeberMeToken = false;

export const updateLoginObject = (value, key) => {
  if (key === 'rememberMe') {
    shouldSetRememeberMeToken = value;
    return;
  }

  loginData[key] = value;
};

export const resetLoginData = () => {
  loginData = {};
  shouldSetRememeberMeToken = false;
};

export const submitLoginData = () => {
  console.log(
    isLoginDataValid(),
    isEmailValid(get(loginData, 'email')),
    isStringAplhaNumeric(get(loginData, 'password'))
  );
  if (isLoginDataValid()) {
    return submitDataToApi('login', loginData).then(res => {
      setRememeberMeTokenIfNeeded(res);
      resetLoginData();

      return res;
    });
  }

  return new Promise((resolve, reject) => {
    reject({ data: { message: 'All fields must be valid!' } });
  });
};

const isLoginDataValid = () => {
  return (
    isEmailValid(get(loginData, 'email')) &&
    isStringAplhaNumeric(get(loginData, 'password'))
  );
};

const setRememeberMeTokenIfNeeded = res => {
  if (shouldSetRememeberMeToken) {
    setKey('NEWS_TOKEN', get(res, 'data._id'));
  } else {
    removeKey('NEWS_TOKEN');
  }

  setUserDataForHidratation(get(res, 'data'));
};

export const checkIfUserLoggedIn = () => {
  const user = getKeyFromSession('user');
  if (user) {
    return Promise.resolve({
      data: user
    });
  }

  return refreshUserData();
};

export const refreshUserData = () => {
  const userToken = getKey('NEWS_TOKEN');

  return userToken
    ? submitDataToApi('loginWithToken', { token: userToken })
    : new Promise((resolve, reject) => {
        reject();
      });
};

export const setUserDataForHidratation = userData => {
  setKeyInSession('user', userData);

  return Promise.resolve();
};

export const logout = () => {
  removeKey('NEWS_TOKEN');
  removeKeyFromSession('user');
};
