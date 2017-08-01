import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
  vote = () => {
    const { upvote, post, userId } = this.props;
    upvote({ post, userId }); 
  }

  unvote = () => {
    const { unvote, post, userId } = this.props;
    unvote({ post, userId});
  }

  render() {
    const { position, post, upvote, userId } = this.props;
    let btn;
    if (!post.votes.find(id => id === userId)) {
      btn = (<a className={`post-body votes vote-btn post-vote-btn ${position}-btn`} 
                onClick={this.vote}>
              { post.votes.length } +
            </a>);
    } else {
      btn = (<a className={`post-body votes vote-btn post-vote-btn ${position}-btn`}
                onClick={this.unvote}>
              { post.votes.length } -
            </a>);
    }

    return (
      <div className={`post ${position}`}>
        {btn}
        <p className='post-body'>{post.postText}</p>
      </div>
    )
  }
}

export default Post;
