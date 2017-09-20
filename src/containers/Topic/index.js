import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Topic = ({ topic }) => {
  return (
    <TopicContainer>
      <TopicText>{topic}</TopicText>
    </TopicContainer>
  )
}

const mapStateToProps = state => ({
  topic: state.debate.topic
})

export default connect(mapStateToProps)(Topic);

const TopicContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 30px 0;
`

// FFBA08
const TopicText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  color: #ffffff;
  background-color: #000000;
  width: 500px;
  height: 50px;
`