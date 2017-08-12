import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
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
          <div>
            <label><Field name='position' component='input' type='radio' value='for'/> For</label>
            <label><Field name='position' component='input' type='radio' value='against'/> Against</label>
          </div>
          <Field name ='postText'
            className='post-textfield'
            component={TextField}
            floatingLabelText='Argument'
            multiLine
            rows={3} />
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

Post = reduxForm({ form: 'post' })(Post);
export default connect(null, mapDispatchToProps)(Post);