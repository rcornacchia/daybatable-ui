import React, { Component } from 'react';
import { connect } from 'react-redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from './actions';
import { Field, reduxForm } from 'redux-form';
import './Login.scss';

class Login extends Component {
  submit = e => {
    e.preventDefault();
    this.props.login();
  }

  render() {
    return (
      <div className='login-container'>
        <form className='login-form' onSubmit={this.submit} >
          <div>
            <label>username</label>
            <Field name='username'
              component='input'
              type='text' />
          </div>
          <div>
            <label>password</label>
            <Field name='password'
              component='input'
              type='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}

Login = reduxForm({ form: 'login' })(Login);
export default connect(null, mapDispatchToProps)(Login);