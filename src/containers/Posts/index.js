import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { upvotePost, upvoteDebate } from './actions';
import './Posts.scss';

class Posts extends Component {
  upvote = () => {
    const { upvoteDebate, debate, position } = this.props;
    upvoteDebate(debate.debateId, position);
  }

  render() {
    const { position, posts, upvotePost, userId, debate } = this.props;
    let voteBtn = <a className='vote-btn' onClick={this.upvote}>+</a>;
    let votes = 0;
    (position === 'for') ? votes = debate.votesFor && debate.votesFor.length
                         : votes = debate.votesAgainst && debate.votesAgainst.length;

    return (
      <div className='Posts'>
        <div className='position'>
          <h2>{votes} {voteBtn} {position}</h2>
        </div>
        {
          !!posts && Object.keys(posts).map((post, i) => {
            return (
              <Post key={`${position}-${i}`} 
                post={posts[post]} 
                position={position}
                upvote={upvotePost}
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
    upvoteDebate: (debateId, position) => dispatch(upvoteDebate(debateId, position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);