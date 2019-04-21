import { isEmpty } from 'lodash';
import {
  resetRegistrationData,
  submitRegistrationData
} from './registration.service';
import { resetLoginData, submitLoginData } from './login.service';

export const getModalCssClass = modalType => {
  const open = isEmpty(modalType) ? '' : 'open';
  return `modal ${open} ${modalType}`;
};

export const getModalTitle = modalType => {
  if (modalType === 'registration') {
    return 'Register To Our Website';
  } else if (modalType === 'login') {
    return 'Login To Your Account';
  } else {
    return 'Alert';
  }
};

export const getModalButtonLabel = modalType => {
  if (modalType === 'registration') {
    return 'Register';
  } else if (modalType === 'login') {
    return 'Login';
  } else {
    return 'Ok';
  }
};

export const closeModal = modalType => {
  if (modalType === 'registration') {
    resetRegistrationData();
  } else if (modalType === 'login') {
    resetLoginData();
  } else {
    return 'Ok';
  }
};

export const submitModal = modalType => {
  console.log(modalType, 'KITA');
  if (modalType === 'registration') {
    return submitRegistrationData();
  } else if (modalType === 'login') {
    return submitLoginData();
  } else {
    return 'Ok';
  }
};
