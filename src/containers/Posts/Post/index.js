import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.incrementVote = this.incrementVote.bind(this);
  }

  incrementVote() {
    const { upvote, post, userId } = this.props;
    upvote({ post, userId }); 
  }

  render() {
    const { position, post, upvote } = this.props;
    return (
      <div className={`post ${position}`}>
        <a className='vote-btn' onClick={this.incrementVote}>+</a>
        <p className="post-body votes">{post.votes.length}</p>
        <p className="post-body">{post.post}</p>
      </div>
    )
  }
}

export default Post;
