import React from 'react';
import { connect } from 'react-redux';
import './Topic.scss'

const Topic = ({ topic }) => {
  return (
    <div className='topic-container'>
      <div className='topic'>{topic}</div>
    </div>
  )
}

const mapStateToProps = state => ({
  topic: state.debate.topic
})

export default connect(mapStateToProps)(Topic);