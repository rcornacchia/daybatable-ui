import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './Post.scss';

class Post extends Component {
  render() {
    return (
      <div className='post-container'>
        <form className='post-form'>
          <button className='for-btn'>For</button>
          <button className='against-btn'>Against</button>
          
          <label>
            Argument
            <Field name='argument'
              component='textarea' />
          </label>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'post' })(Post);