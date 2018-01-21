import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import './About.scss'

const About = () => (
  <Card marginTop='25px'>
    <AboutContainer>
      <div className='section'>
        <div>This site hosts one debate everyday.</div>
        <div>The debate starts at noon Eastern Time, and ends 24 hours later.</div>
        <div>There are three ways to participate:</div>
      </div>
      <div className='section'>
        <ol>
          <li>Vote for a side</li>
          <li>Post an argument for a side</li>
          <li>Vote on other people's arguments</li>
        </ol>
      </div>
    </AboutContainer>
  </Card>
)

export default About;

const AboutContainer = styled.div`
  display: block;
  font-family: 'Courier';
  width: 330pt;
  margin: 0 auto;
`