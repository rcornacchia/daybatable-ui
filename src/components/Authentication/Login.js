import React, { Component } from 'react';
import { login } from './api';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  login() {
    const { username, password } = this.state;
    login(username, password);
  }

  render() {
    return (
      <div className='login-container'>
        <form className='login-form'>
          <label>
            username
            <input name="username"
                   onChange={this.handleChange} />
          </label>
          <label>
            password
            <input name="password"
                   type="password"
                   onChange={this.handleChange}/>
          </label>
        </form>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default Login;