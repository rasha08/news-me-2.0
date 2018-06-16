import { includes } from 'lodash';
import { getValidBirthYears } from './registration.service';

export const isEmailValid = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

export const isStringAplhaNumeric = username => {
  const re = /^[a-zA-Z0-9]{3,30}$/;

  return re.test(String(username).toLowerCase());
}


export const isUserBirthYearValid = birthYear => {
  const userBirthYear = parseInt(birthYear, 10);
  const validBirthYears = getValidBirthYears();

  return includes(validBirthYears, userBirthYear);
}