import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { register } from './api';
import './Register.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      email: null,
      firstName: null,
      lastName: null,
      warning: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState({
      [name]: value
    });
  }

  register() {
    const { username, password, email, firstName, lastName } = this.state;
    if (!username || !password || !email || !firstName || !lastName) {
      this.setState({ warning: 'Please fill out all fields.' });
    } else {
      register(username, password, email, firstName, lastName); 
    }
  }

  render() {
    const warning = this.state.warning;

    return (
      <div className='register-form'>
        <form className='register-form'>
          <label>
            email
            <input name="email"
                   onChange={this.handleChange} />
          </label>
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
          <label>
            First Name
            <input name="firstName"
                   onChange={this.handleChange} />
          </label>
          <label>
            Last Name
            <input name="lastName"
                   onChange={this.handleChange} />
          </label>
        </form>
        { !!warning && <div>{this.state.warning}</div> }
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Register;