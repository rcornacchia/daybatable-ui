import React, { Component } from 'react';
import styled from 'styled-components';

const About = () => (
  <Container>
    <AboutContainer>
        <AboutText>
          <div>
            <div>This site hosts one debate everyday.</div>
            <div>The debate starts at noon Eastern Time, and ends 24 hours later.</div>
            <div>The upcoming debate with the most votes is selected as the next debate.</div>
            <br />
          </div>
          <List>
            <div><strong>There are five ways to participate:</strong></div>
            <ol>
              <li>Vote for a side</li>
              <li>Post an argument for a side</li>
              <li>Vote on other people's arguments</li>
              <li>Suggest an upcoming debate topic</li>
              <li>Vote for an upcoming debate</li>
            </ol>
          </List>
        </AboutText>
    </AboutContainer>
  </Container>
)

export default About;

const AboutText = styled.div`
  margin: 0 auto;
  font-family: 'Courier';
  font-size: 20px;
  color: white;
`

const List = styled.div`
  width: 425px;
  margin: 0 auto;
`

const AboutContainer = styled.div`
  width: 853px;
  background-color: rgba(0,0,0, 0.15);
  padding: 20px;
`

const Container = styled.div`
  height: calc(100vh - 61px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #00A8E8, #F22B4A);
`