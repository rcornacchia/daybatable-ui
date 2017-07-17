import axios from 'axios';
import config from '../../config';

export const login = body => {
  const url = `${config.server}/auth/authenticate`;
  return axios.post(url, body);
}