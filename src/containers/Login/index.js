import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card from '../../components/Card';
import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from './actions';
import { Field, reduxForm } from 'redux-form';
import './Login.scss';

const Form = styled.form`
  display: block;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '' };
  }

  submit = e => {
    e.preventDefault();
    (this.props.valid)
      ? this.props.login()
      : this.setState({ warning: 'Incorrect combination.' })
  }

  render() {
    const { warning } = this.state;
    const { message } = this.props;
    return (
      <Card marginTop='20px'>
        <div className='login-container'>
          <form onSubmit={this.submit} >
            <Field name='username'
              component={TextField}
              style={styles.textfield}
              label='username'
              type='text' />
            <br />
            <Field name='password'
              component={TextField}
              style={styles.textfield}
              label='password'
              type='password' />
            <br />
            <div className='login-button'>
              <Button raised type='submit'>Login</Button>
            </div>
            <span className='warning'>{warning}</span>
          </form>
          <div className='login-error-message'>
            <span className='warning'>{message}</span>
          </div>
        </div>
      </Card>
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

const styles = {
  textfield: { width: 300 },
  iconStyle: { fill: 'red' }
}