import axios from 'axios';

export function register(payload) {
  const url = 'http://localhost:3000/auth/register';
  return axios.post(url, payload);
}