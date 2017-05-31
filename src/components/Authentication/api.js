import axios from 'axios';

export function login(username, password) {
  const url = 'http://localhost:3000/auth/authenticate';
  const headers = {"Access-Control-Allow-Origin": "*"};

  axios.post(url, { username, password }, {"Access-Control-Allow-Origin": "*"})
       .then(res => console.log(res))
       .catch(err => console.log(err));
}