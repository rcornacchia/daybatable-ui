import axios from 'axios';
import config from '../../config';

export function login(username, password) {
  const url = `${config.server}/auth/authenticate`;
  return axios.post(url, { username, password });
    // .then(res => {
    //   console.log(res);
    //   if (res.data.success) {
    //     const { token, user } = res.data;
    //     const { username, email, admin } = user;

    //     localStorage.setItem("token", token);
    //     localStorage.setItem("username", username);
    //     localStorage.setItem("email", email);
    //     localStorage.setItem("admin", admin);
    //   }
    // })
    // .catch(err => console.log(err));
}