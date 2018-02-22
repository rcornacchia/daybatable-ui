import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';

const About = () => (
  <Container>
    <AboutContainer>
      <Card>
        <AboutText>
          <div className='section'>
            <div>This site hosts one debate everyday.</div>
            <div>The debate starts at noon Eastern Time, and ends 24 hours later.</div>
            <div>The upcoming debate with the most votes is selected as the next debate.</div>
            <br />
            <div><strong>There are five ways to participate:</strong></div>
          </div>
          <div className='section'>
            <ol>
              <li>Vote for a side</li>
              <li>Post an argument for a side</li>
              <li>Vote on other people's arguments</li>
              <li>Suggest an upcoming debate topic</li>
              <li>Vote for an upcoming debate</li>
            </ol>
          </div>
        </AboutText>
      </Card>
    </AboutContainer>
  </Container>
)

export default About;

const AboutText = styled.div`
  margin: 0 auto;
  font-family: 'Courier';
  font-size: 18px;
`

const AboutContainer = styled.div`
  position: relative;
  top: 20px;
`

const Container = styled.div`
  height: calc(100vh - 61px);
  width: 100vw;
  background: linear-gradient(to right, #00A8E8, #F22B4A);
`