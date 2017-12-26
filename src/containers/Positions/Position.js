import React from 'react';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import styled from 'styled-components';
import { upvoteDebate } from './actions';
import CrunchyButton from '../../components/CrunchyButton';
import './Position.scss';

class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnType: 'unvoted' }
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
    const { position, userId, debate } = this.props;

    if (!debate.topic) return false;
    console.log(position);
    console.log(debate)

    const { forPosition, againstPosition } = debate;

    let btnType = 'unvoted';
    if (position === 'for' && debate.votesFor.find(id => id === userId)) {
      btnType = 'for';
    } else if (position === 'against' && debate.votesAgainst.find(id => id === userId)) {
      btnType = 'against';
    }

    const positionTitle = (position == 'for') ? forPosition : againstPosition;
    const votes = (position === 'for') ? debate.votesFor && debate.votesFor.length                                   
                                       : debate.votesAgainst && debate.votesAgainst.length;
    console.log(positionTitle)
    console.log(forPosition)
    console.log(againstPosition)

    return (
      <div className='position-container'>
        <div className='left'>
          <div className='position-btn'>
            <CrunchyButton type={btnType} action={this.upvote} size='small'>
              {(btnType === 'unvoted') && <i className='material-icons material-icon'>keyboard_arrow_up</i>}
              {votes} {(votes !== 1) ? 'votes' : 'vote'}
            </CrunchyButton>
          </div>
        </div>
        <div className={`position position-border position-border-${position} position-title`}>
          {positionTitle.toUpperCase()}
        </div>
        <div className='right'>
          <div className='add-post-btn'>
            <CrunchyButton type='unvoted'>
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
  debate: state.debate
});

const mapDispatchToProps = dispatch => ({
  upvoteDebate: (debateId, position, userId) => dispatch(upvoteDebate(debateId, position, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Position);