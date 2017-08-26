import axios from 'axios';
import config from '../../config';

export const register = payload => {
  const url = `${config.server}/auth/register`;
  return axios.post(url, payload);
}

export const checkIfUserExists = payload => {
  const url = `${config.server}/api/validate`;
  return axios.post(url, payload);
}