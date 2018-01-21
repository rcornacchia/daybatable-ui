import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import Card from '../../components/Card';
import { register } from './actions';
import { checkIfUserExists } from './api';
import './Register.scss';

const renderTextField = props => (
  <TextField 
    label={props.label}
    error={props.touched && props.error}
    {...props} />
);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '' };
  }

  submit = e => {
    e.preventDefault();
    (this.props.valid) ? this.props.register()
                       : this.setState({ warning: 'Oops, missing data' });
  }

  render() {
    const { warning } = this.state;
    const { message } = this.props;

    return (
      <Card marginTop='20px'>
        <div className='register-container'>
          <form className='register-form' onSubmit={this.submit}>
            <Field name='email'
              style={style}        
              component={renderTextField}
              label='Email' />
            <Field name='username'
              style={style}
              component={renderTextField}
              label='Username' />
            <Field name='password'
              style={style}          
              component={TextField}
              label='Password'
              type='password' />
            <Field name='repeatPassword'
              style={style}          
              component={TextField}
              label='Re-enter password'
              type='password' />
            <Field name='firstName'
              style={style}
              component={TextField}
              label='First Name' />
            <Field name='lastName'
              style={style}
              component={TextField}
              label='Last Name' />
            <div className='register-button'>
              <Button raised type='submit'>Register</ Button>
            </div>
            <span className='warning'>{warning}</span>     
          </form>
          <div className='register-error-message'>
            <span className='warning'>{message}</span>
          </div>
        </div>
      </Card>
    );
  }
}

const asyncValidate = values => {
  const { username, email } = values;
  return checkIfUserExists({ username, email })
    .then(response => {
      const { usernameTaken, emailTaken } = response.data;
      let throwableObject = {};
      if (usernameTaken) throwableObject.username = 'That username is taken';
      if (emailTaken) throwableObject.email = 'That email is taken';

      if (usernameTaken || emailTaken) throw throwableObject;
    });
}

const validate = values => {
  const errors = {};
  const requiredFields = [ 'email', 'password', 'repeatPassword', 'firstName', 'lastName' ];
  
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && values.password.length < 5) {
    errors.password = 'Password must be at least 5 characters';
  }

  if (values.repeatPassword && values.repeatPassword.length < 5) {
    errors.repeatPassword = 'Password must be at least 5 characters';
  }

  if (values.password !== values.repeatPassword) {
    errors.repeatPassword = `Passwords don't match`;
  }
  return errors;
}

const mapStateToProps = state => ({
  message: state.user.message
});

const mapDispatchToProps = dispatch => ({
  register: () => dispatch(register())
});

const style = {
  display: 'block'
}

Register = reduxForm({
  form: 'register',
  validate,
  asyncValidate,
  asyncBlurFields: [ 'username', 'email' ]
})(Register);
export default connect(mapStateToProps, mapDispatchToProps)(Register);