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
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitHandler(event) {
    console.log(this.state);
    const { username, password } = this.state;
    login(username, password);
  }

  render() {
    return (
      <div className='loginForm'>
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
        <button onClick={this.submitHandler}>Login</button>
      </div>
    )
  }
}

export default Login;