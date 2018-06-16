import { range, get } from 'lodash';
import { submitDataToApi } from './http.service';
import { isEmailValid, isStringAplhaNumeric, isUserBirthYearValid } from './validation.service';

let registrationData = {};

export const updateRegistrationObject = (value, key) => {
  registrationData[key] = value;
}

export const resetRegistrationData = () => {
  registrationData = {};
}

export const getValidBirthYears = () => {
  const currentYear = (new Date()).getFullYear();

  return range((currentYear - 16), 1933);
}

export const submitRegistrationData = () => {
  if (isRegistrationDataValid()) {
    return submitDataToApi('registration', registrationData);
  }

  return new Promise((resolve, reject) => {
    reject({data:{message: 'All fields must be valid!'}});
  })
}

const isRegistrationDataValid = () => {
  return (
    isEmailValid(get(registrationData, 'email')) &&
    isStringAplhaNumeric(get(registrationData, 'username')) &&
    isStringAplhaNumeric(get(registrationData, 'password')) &&
    isUserBirthYearValid(get(registrationData, 'birthyear'))
  );
}