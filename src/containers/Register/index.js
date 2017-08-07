import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { register } from './actions';
import './Register.scss';

class Register extends Component {
  submit = e => {
    e.preventDefault();
    this.props.register();
  }

  render() {
    return (
      <div className='register-container'>
        <form className='register-form' onSubmit={this.submit}>
          <Field name='email'
            component={TextField}
            floatingLabelText='Email' />
          <br />
          <Field name='username'
            component={TextField}
            floatingLabelText='Username' />
          <br />
          <Field name='password'
            component={TextField}
            floatingLabelText='Password'
            type='password' />
          <br />
          <Field name='firstName'
            component={TextField}
            floatingLabelText='First Name' />
          <br />
          <Field name='lastName'
            component={TextField}
            floatingLabelText='Last Name' />
          <br />
          <RaisedButton label='Register' type='submit' />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: () => dispatch(register())
  }
}

Register = reduxForm({ form: 'register' })(Register);
export default connect(null, mapDispatchToProps)(Register);