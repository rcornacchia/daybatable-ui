import axios from 'axios';
import config from '../../config';

export function login(body) {
  const url = `${config.server}/auth/authenticate`;
  return axios.post(url, body);
}