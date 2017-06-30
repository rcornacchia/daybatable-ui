import axios from 'axios';

export function register(username, password, email, firstName, lastName) {
  const url = 'http://localhost:3000/auth/register';

  axios.post(url, { username, password, email, firstName, lastName })
       .then(res => console.log(res))
       .catch(err => console.log(err));
}