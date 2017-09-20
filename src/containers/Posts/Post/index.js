import React, { Component } from 'react';
import moment from 'moment';
import Button from '../../../components/Button';
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
    const date = post && moment(post.datePosted).fromNow();

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
        <div>
          <div className='vote-btn-container'>
            {btn}
          </div>
          <div className='post-username-container'>
            <span className='post-username'>{post.username}</span>
            <span className='post-date'> posted {date}</span>
          </div>
        </div>
        <div className='post-container'>
          <div>{post.postText}</div>
        </div>
      </div>
    )
  }
}

export default Post;