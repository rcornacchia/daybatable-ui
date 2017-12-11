import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { upvotePost, unvotePost, upvoteDebate } from './actions';
import { notify } from 'react-notify-toast';
import CrunchyButton from '../../components/CrunchyButton';
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
  
  warn = () => notify.show('Please register or login', 'error');  

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

    const positionTitle = 
      (position == 'for')
      ? forPosition
      : againstPosition;

    const votes =
      (position === 'for') 
      ? debate.votesFor && debate.votesFor.length                                   
      : debate.votesAgainst && debate.votesAgainst.length;

    const sortedPosts = Object.keys(posts).map(id => posts[id]);
    sortedPosts.sort((a, b) => b.votes.length - a.votes.length);
    
    if (position === 'for' && debate.votesFor.find(id => id === userId)) {
      btnType = 'for';
    } else if (position === 'against' && debate.votesAgainst.find(id => id === userId)) {
      btnType = 'against';
    }

    return (
      <div className='Posts'>
        <div className='position-title'>
          <div className='left'>
            <div className='position-btn'>
              <CrunchyButton type={btnType} action={this.upvote} size='small'>
                {votes} {(votes !== 1) ? 'votes' : 'vote'}
              </CrunchyButton>
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