import React, { Component } from 'react';
import moment from 'moment';
import Button from '../../../components/Button';
import CrunchyButton from '../../../components/CrunchyButton';
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
    
    let action = this.vote;
    let btnType = 'unvoted';

    if (post.votes.find(id => id === userId)) {
      btnType = position;
      action = this.unvote;
    }

    return (
      <div className={`post ${position}`}>
        <div className='post-vote-btn-container'>
          <CrunchyButton size='icon'
            type={btnType}
            action={action}
          >
            {post.votes.length} {(post.votes.length !== 1) ? 'votes' : 'vote'}
          </CrunchyButton>
        </div>
        <div className='post-username-container'>
          <span className='post-username'> {post.username}</span>
          <span className='post-date'> posted {date}</span>
        </div>
        <div className='post-container'>
          <span>{post.postText}</span>
        </div>
      </div>
    )
  }
}

export default Post;