import React, { Component } from 'react';
import CrunchyButton from '../../components/CrunchyButton';

class DebateTopic extends Component {
  vote = () => {
    const { upcomingDebateVote, debateId } = this.props;
    upcomingDebateVote(debateId);
  }

  render() {
    const { debateId, topic, votes } = this.props;
    return (
      <div>
        <CrunchyButton type='unvoted' size='small' action={this.vote}>
          {votes.length}
        </CrunchyButton>
        {topic}
      </div>
    );
  }
}

export default DebateTopic;