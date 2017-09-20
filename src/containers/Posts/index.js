import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { upvotePost, unvotePost, upvoteDebate } from './actions';
import AwesomeButton from 'react-awesome-button';
import 'react-awesome-button/src/react-awesome-button.scss';
import './Posts.scss';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '', btnType: 'unvoted' }
  }

  upvote = () => {
    const { upvoteDebate, debate, position, userId } = this.props;
    (userId) ? upvoteDebate(debate.debateId, position, userId)
             : this.warn();
  }

  warn = () => this.setState({ warning: 'Please register or login' });

  handleClick = () => {
    console.log('click');
    this.setState({ ...this.state, btnType: 'primary' });
  }

  render() {
    const { warning } = this.state;
    const { position, posts, upvotePost, unvotePost, userId, debate } = this.props;
    const { forPosition, againstPosition } = debate;
    let btnType = 'unvoted';

    if (!posts) return false;

    let positionTitle = '';
    (position == 'for') ? positionTitle = forPosition
                        : positionTitle = againstPosition;

    let votes = 0;
    (position === 'for') ? votes = debate.votesFor && debate.votesFor.length
                         : votes = debate.votesAgainst && debate.votesAgainst.length;

    const sortedPosts = Object.keys(posts).map(id => posts[id]);
    sortedPosts.sort((a, b) => b.votes.length - a.votes.length);
    
    let voteBtn = (
      <a className={`vote-btn ${position}-btn position-btn`} onClick={this.upvote}>
        <span className='plus-button'>+</span>
        <span className='number-votes'>{votes}</span>
      </a>
    );
    if (position === 'for' && debate.votesFor.find(id => id === userId)) {
      // voteBtn = (
      //   <a className={`vote-btn ${position}-btn position-btn voted-${position}`} onClick={this.upvote}>
      //     <span className='number-votes'>{votes}</span>
      //   </a>
      // );
      btnType = 'for';
    } else if (position === 'against' && debate.votesAgainst.find(id => id === userId)) {
      // voteBtn = (
      //   <a className={`vote-btn ${position}-btn position-btn voted-${position}`} onClick={this.upvote}>
      //     <span className='number-votes'>{votes}</span>
      //   </a>
      // );
      btnType = 'against';
    }

    return (
      <div className='Posts'>
        <div className='position-title'>
          <div className='left'>
            <div className='position-btn'>
              <AwesomeButton type={btnType} action={this.upvote}>
                {votes} {(votes !== 1) ? 'votes' : 'vote'}
              </AwesomeButton>
            </div>
          </div>
          <div className={`position position-border position-border-${position}`}>{positionTitle.toUpperCase()}</div>
          <div className='right'/>
            <span className={`warning warning-${position}`}>{warning}</span>
          </div>
        {
          !!posts && sortedPosts.map((post, i) => {
            return (
              <Post key={`${position}-${i}`} 
                post={post} 
                position={position}
                upvote={upvotePost}
                unvote={unvotePost}
                userId={userId}
                warn={this.warn} />
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
    upvoteDebate: (debateId, position, userId) => dispatch(upvoteDebate(debateId, position, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);