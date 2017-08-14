import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, RadioButtonGroup } from 'redux-form-material-ui';
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import { post } from './actions';
import './Post.scss';

class Post extends Component {
  submit = e => {
    e.preventDefault();
    this.props.post();
  }

  render() {
    return (
      <div className='post-container'>
        <form className='post-form' onSubmit={this.submit}>
          <Field name='position' component={RadioButtonGroup}>
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
          <RaisedButton label='submit' type='submit' />
        </form>
      </div>
    )
  }
}

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

Post = reduxForm({ form: 'post' })(Post);
export default connect(null, mapDispatchToProps)(Post);