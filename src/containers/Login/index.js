import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from './actions';
import { Field, reduxForm } from 'redux-form';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '' };
  }

  submit = e => {
    e.preventDefault();
    if (this.props.valid) {
      this.props.login();
    } else {
      this.setState({ warning: 'Incorrect combination.' })
    }
  }

  render() {
    const { warning } = this.state;
    const { message } = this.props;
    return (
      <Paper className='login-container'>
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
          <div className='login-button'>
            <RaisedButton label='Login' type='submit' />
          </div>
          <span className='warning'>{warning}</span>
        </form>
        <div className='login-error-message'>
          <span className='warning'>{message}</span>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  message: state.user.message
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
})

const validate = values => {
  const errors = {};
  const requiredFields = [ 'username', 'password' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  })
  return errors;
}

Login = reduxForm({
  form: 'login',
  validate
})(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);