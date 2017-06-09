import React, { Component } from 'react';
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
            <textarea name='argument'
                      onChange={this.handleChange} />
          </label>
          <button className='submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Post;