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
  margin: 0 0 30px 0;
  background-color: #000000;
`

const TopicText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 100;
  color: #ffffff;
  height: 85px;
`