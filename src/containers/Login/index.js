import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
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
        <form onSubmit={this.submit} >
          <Field name='username'
            component={TextField}
            floatingLabelText='username'
            type='text' />
          <br />
          <Field name='password'
            component={TextField}
            floatingLabelText='password'
            type='password' />
          <br />
          <RaisedButton label='Login' type='submit' />
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