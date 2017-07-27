import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { upvotePost, unvotePost, upvoteDebate } from './actions';
import './Posts.scss';

class Posts extends Component {
  upvote = () => {
    const { upvoteDebate, debate, position, userId } = this.props;
    upvoteDebate(debate.debateId, position, userId);
  }

  render() {
    const { position, posts, upvotePost, unvotePost, userId, debate } = this.props;
    if (!posts) return false;

    const sortedPosts = Object.keys(posts).map(id => posts[id]);
    sortedPosts.sort((a, b) => b.votes.length - a.votes.length);
    
    let voteBtn = <a className='vote-btn' onClick={this.upvote}>+</a>;
    if (position === 'for' && debate.votesFor.find(id => id === userId)) {
        voteBtn = <a className='vote-btn' onClick={this.upvote}>-</a>;
    } else if (position === 'against' && debate.votesAgainst.find(id => id === userId)) {
      voteBtn = <a className='vote-btn' onClick={this.upvote}>-</a>;
    }

    let votes = 0;
    (position === 'for') ? votes = debate.votesFor && debate.votesFor.length
                         : votes = debate.votesAgainst && debate.votesAgainst.length;

    return (
      <div className='Posts'>
        <div>
          <div className='position'>{position}</div>
          <div className={`position-votes-${position}`}>{votes} {voteBtn}</div>
        </div>
        {
          !!posts && sortedPosts.map((post, i) => {
            return (
              <Post key={`${position}-${i}`} 
                post={post} 
                position={position}
                upvote={upvotePost}
                unvote={unvotePost}
                userId={userId} />
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    posts: state.posts[props.position],
    userId: state.user.userId,
    debate: state.debate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upvotePost: data => dispatch(upvotePost(data)),
    unvotePost: data => dispatch(unvotePost(data)),
    upvoteDebate: (debateId, position, userId) => dispatch(upvoteDebate(debateId, position, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);