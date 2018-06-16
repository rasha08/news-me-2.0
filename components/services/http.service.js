import axios from 'axios';

const API_URL = 'http://api-news-me.ml/';
const REGISTRATION = 'public/users/register';
const LOGIN = 'public/users/login';
const LOGIN_WITH_TOKEN = 'public/users/login-with-token';

export const submitDataToApi = (type, data) => {
  switch(type) {
    case 'registration':
        return axios.post(`${API_URL}${REGISTRATION}`, data);
    case 'login':
        return axios.post(`${API_URL}${LOGIN}`, data);
    case 'loginWithToken':
        return axios.post(`${API_URL}${LOGIN_WITH_TOKEN}`, data);
    default:
        return console.log('KITA POZDRAV');
  }
}