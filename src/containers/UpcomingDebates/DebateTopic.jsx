import React, { Component } from 'react';
import styled from 'styled-components';
import CrunchyButton from '../../components/CrunchyButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 7px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  border-radius: 2px;
  background-color: #FFF;
  font-size: 16px;
`;

const Topic = styled.div`
  display: inline-block;
  margin-left: 10px;
`

class DebateTopic extends Component {
  vote = () => {
    const { upcomingDebateVote, debateId } = this.props;
    upcomingDebateVote(debateId);
  }

  render() {
    const { debateId, topic, votes } = this.props;
    return (
      <Container>
        <CrunchyButton type='unvoted' size='small' action={this.vote}>
          {votes.length}
        </CrunchyButton>
        <Topic>{topic}</Topic>
      </Container>
    );
  }
}

export default DebateTopic;