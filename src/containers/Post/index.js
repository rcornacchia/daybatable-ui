import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
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
          
          <label>Argument<Field name='argument' component='textarea' /></label>
          <button type='submit'>Submit</button>
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
