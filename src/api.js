import axios from 'axios';
import config from './config';

const getheaders = () => ({ 'Authorization': 'Bearer ' + getToken() });
const getToken = () => localStorage.getItem('token');

export const get = url => {
  const headers = getHeaders();
  return axios.get(url, { headers });
}
export const post = (url, data) => {
  const headers = getHeaders();
  return axios.post(url, data, { headers: getHeaders() });
}

export const init = () => {
  const url = `${config.server}/api/init`;
  return get(url);
}

export const createDebate = () => {
  const url = `${config.server}/api/debate/create`;
  const payload = {
    topic: 'What came first, the chicken or the egg?',
    forPosition: 'Chicken',
    againstPosition: 'Egg',
    currentDebate: true,
  }
  return post(url, payload);
}

export const upvoteDebate = payload => {
  const url = `${config.server}/api/debate/upvote`;
  return post(url, payload);
}