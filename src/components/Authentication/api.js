import axios from 'axios';

export function login(username, password) {
  const url = 'http://localhost:3000/auth/authenticate';

  axios.post(url, { username, password })
       .then(res => {
        console.log(res);
         if (res.data.success) {
           const { token, user } = res.data;
           const { username, email, admin } = user;

           localStorage.setItem("token", token);
           localStorage.setItem("username", username);
           localStorage.setItem("email", email);
           localStorage.setItem("admin", admin);
         }
       })
       .catch(err => console.log(err));
}

export function register(username, password, email, firstName, lastName) {
  const url = 'http://localhost:3000/auth/register';

  axios.post(url, { username, password, email, firstName, lastName })
       .then(res => console.log(res))
       .catch(err => console.log(err));
}