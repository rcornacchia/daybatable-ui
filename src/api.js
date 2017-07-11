import axios from 'axios';

export const get = url => {
  return axios.get(url, headers);
}

export const post = (url, data) => (axios.post(url, data, { headers }));

const headers = {
  'Authorization': 'Bearer ' + getToken()
}

function getToken() {
  return localStorage.getItem('token');
}