import React from 'react';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import styled from 'styled-components';
import { upvoteDebate, downvoteDebate } from './actions';
import { openPostForm, closePostForm } from '../PostForm/actions';
import CrunchyButton from '../../components/CrunchyButton';
import './Position.scss';

class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnType: 'unvoted' }
    this.openPostForm = (...args) => this._openPostForm.bind(this, ...args);
  }

  warn = () => notify.show('Please register or login', 'error');  
  
  handleClick = () => this.setState({ ...this.state, btnType: 'primary' });
  
  _openPostForm = (position, positionName) => {
    this.props.userId ? this.props.openPostForm(position, positionName)
                      : this.warn();
  }

  vote = () => {
    const { debate, position, userId } = this.props;
    if (!userId) {
      this.warn();
    } else {
      console.log('test')
      if (position === 'for' && debate.votesFor.find(id => id === userId)) {
        this.props.downvoteDebate(debate.debateId, position, userId)
      } else if (position === 'against' && debate.votesAgainst.find(id => id === userId)) {
        this.props.downvoteDebate(debate.debateId, position, userId)
      } else {
        this.props.upvoteDebate(debate.debateId, position, userId);
      }
    }
  }

  render() {
    if (!this.props.debate.topic) return false;
    const { position, userId, currentPosition, debate } = this.props;
    const { forPosition, againstPosition } = debate;
    const positionName = (position == 'for') ? forPosition : againstPosition;
    const votes = (position === 'for') ? debate.votesFor && debate.votesFor.length                                   
                                       : debate.votesAgainst && debate.votesAgainst.length;

    let btnType = 'unvoted';
    if (position === 'for' && debate.votesFor.find(id => id === userId)) {
      btnType = 'for';
    } else if (position === 'against' && debate.votesAgainst.find(id => id === userId)) {
      btnType = 'against';
    }

    let addBtnType = 'unvoted';
    if (currentPosition == 'for' && position == 'for') addBtnType = 'for';
    if (currentPosition == 'against' && position == 'against') addBtnType = 'against';

    return (
      <div className='position-container position'>
        <div className='left'>
          <div className='position-btn'>
            <CrunchyButton type={btnType} action={this.vote} size='small'>
              {(btnType === 'unvoted') && <i className='material-icons material-icon'>keyboard_arrow_up</i>}
              {votes} {(votes !== 1) ? 'votes' : 'vote'}
            </CrunchyButton>
          </div>
        </div>
        <div className={`position position-border position-border-${position} position-title`}>
          {positionName.toUpperCase()}
        </div>
        <div className='right'>
          <div className='add-post-btn'>
            <CrunchyButton type={addBtnType} action={this.openPostForm(position, positionName)}>
              <i className='material-icons material-icon'>add</i>
              Add Post
            </CrunchyButton>
          </div>
        </div>
      </div>    
    )
  }
}

const mapStateToProps = (state, props) => ({
  userId: state.user.userId,
  debate: state.debate,
  currentPosition: state.posts.postFormPosition
});

const mapDispatchToProps = dispatch => ({
  upvoteDebate: (debateId, position, userId) => dispatch(upvoteDebate(debateId, position, userId)),
  downvoteDebate: (debateId, position, userId) => dispatch(downvoteDebate(debateId, position, userId)),
  openPostForm: (position, positionName) => dispatch(openPostForm(position, positionName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Position);