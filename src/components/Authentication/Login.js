import React, { Component } from 'react';
import { login } from './api';
import { Field, reduxForm } from 'redux-form';
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

  submit = values => {
    console.log(values);
  }

  render() {
    return (
      <div className='login-container'>
        <form className='login-form' onSubmit={this.submit} >
          <div>
            <label htmlFor='username'>username</label>
            <Field name="username"
                   component='input'
                   type='text' />
          </div>
          <div>
            <label htmlFor='password'>password</label>
            <Field name="password"
                   component='input'
                   type='password' />
          </div>
        </form>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default Login = reduxForm({
  form: 'login'
})(Login);