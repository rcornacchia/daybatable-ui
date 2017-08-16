import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, RadioButtonGroup } from 'redux-form-material-ui';
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import { post } from './actions';
import './Post.scss';

const validate = values => {
  const errors = {};
  const requiredFields = [ 'position', 'postText' ];
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warning: ''
    }
  }

  submit = e => {
    e.preventDefault();
    const { formValues } = this.props;
    const values = formValues.post && formValues.post.values;
    console.log(values);
    if (values && values.position && values.postText) {
      this.props.post();
    }

    if (!values || !values.postText || !values.position) {
      this.setState({
        warning: 'Oops, missed a field.'
      })
    }
  }

  render() {
    const { warning } = this.state;

    return (
      <div className='post-container'>
        <form className='post-form' onSubmit={this.submit}>
          <h3>Post an Argument</h3>
          <Field name='position' component={RadioButtonGroup} >
            <RadioButton value='for' label='for' iconStyle={{fill: '#00A8E8'}} />
            <RadioButton value='against' label='against' iconStyle={{fill: '#F22B4A'}} />
          </Field>
          <Field name ='postText'
            className='post-textfield'
            component={TextField}
            floatingLabelText='Argument'
            multiLine
            rows={3} 
            style={styles.textfield}/>
          <br />
          <RaisedButton label='submit' type='submit'/>
          <span className='radio-button-warning'>{warning}</span>          
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  formValues: state.form
})

const mapDispatchToProps = dispatch => {
  return {
    post: () => dispatch(post())
  }
}

const styles = {
  textfield: {
    width: 500
  },
  iconStyle: {
    fill: 'red'
  }
}

Post = reduxForm({
  form: 'post',
  validate
})(Post);
export default connect(mapStateToProps, mapDispatchToProps)(Post);