import React, { Component } from 'react';
import { connect } from 'react-redux';
import DebateTopic from './DebateTopic';
import { GET_UPCOMING_DEBATES, VOTE_UPCOMING_DEBATE } from './actionTypes';

class UpcomingDebates extends Component {
  componentDidMount() {
    this.props.getUpcomingDebates();
  }

  upcomingDebateVote = debateId => {
    this.props.upcomingDebateVote(debateId);
  }

  render() {
    const { debates } = this.props;

    return (
      <div>
        {
          debates.map((debate, i) =>
            <DebateTopic
              key={i}
              debateId={debate._id}
              topic={debate.topic}
              votes={debate.votes || []}
              upcomingDebateVote={this.upcomingDebateVote}
            />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  debates: state.upcomingDebates.debates,
});

const mapDispatchToProps = dispatch => ({
  getUpcomingDebates: () => dispatch({ type: GET_UPCOMING_DEBATES }),
  upcomingDebateVote: debateId => dispatch({ type: VOTE_UPCOMING_DEBATE, debateId })
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingDebates);