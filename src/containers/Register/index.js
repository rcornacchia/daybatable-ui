import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from './actions';
import './Register.scss';

class Register extends Component {
  submit = e => {
    e.preventDefault();
    this.props.register();
  }

  render() {
    return (
      <div className='register-form'>
        <form className='register-form' onSubmit={this.submit}>
          <label>email</label>
          <Field name='email'
            component='input' />
          <label>username</label>
          <Field name='username'
            component='input' />
          <label>password</label>
          <Field name='password'
            component='input'
            type='password' />
          <label>First Name</label>
          <Field name='firstName'
            component='input' />
          <label>Last Name</label>
          <Field name='lastName'
            component='input' />
          <button type='submit'>Register</button>
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