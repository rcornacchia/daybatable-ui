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
    let upvoteBtn;
    (!post.votes.find(id => id === userId)) ? upvoteBtn = <a className='vote-btn' onClick={this.vote}>+</a>
                                            : upvoteBtn = <a className='vote-btn' onClick={this.unvote}>-</a>;

    return (
      <div className={`post ${position}`}>
        { upvoteBtn }
        <p className="post-body votes">{post.votes.length}</p>
        <p className="post-body">{post.post}</p>
      </div>
    )
  }
}

export default Post;
