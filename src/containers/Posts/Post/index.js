import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
  vote = () => {
    const { upvote, post, userId, warn } = this.props;
    (userId) ? upvote({ post, userId }) : warn();
  }

  unvote = () => {
    const { unvote, post, userId, warn } = this.props;
    (userId) ? unvote({ post, userId}) : warn();
  }

  render() {
    const { position, post, upvote, userId } = this.props;
    let btn;
    if (!post.votes.find(id => id === userId)) {
      btn = (
        <a className={`votes vote-btn post-vote-btn ${position}-btn post-vote-btn`} onClick={this.vote}>
          <span className='plus-button'>+</span>
          <span className='number-votes'>{post.votes.length}</span>
        </a>
      );
    } else {
      btn = (
        <a className={`votes vote-btn post-vote-btn ${position}-btn voted-${position}`} onClick={this.unvote}>
          <span className='number-votes'>{post.votes.length}</span>
        </a>
      );
    }

    return (
      <div className={`post ${position}`}>
        {btn}
        <div className='post-body'>{post.postText}</div>
      </div>
    )
  }
}

export default Post;
