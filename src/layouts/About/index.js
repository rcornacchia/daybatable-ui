import React, { Component } from 'react';
import './About.scss'

const About = () => (
  <div className='landing-page'>
    <div className='section'>
      <div>This site hosts one debate every single day.</div>
      <div>The debate only lasts 24 hours.</div>
      <div>There are three ways to participate:</div>
    </div>
    <div className='section'>
      <ol>
        <li>Vote for a side</li>
        <li>Post an argument for a side</li>
        <li>Vote on other people's arguments</li>
      </ol>
    </div>
  </div>
)

export default About;