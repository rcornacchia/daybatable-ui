import React, { Component } from 'react';

class ArgumentsLayout extends Component {
  render() {
    return (
      <div className='arguments-layout'>
        <Arguments position='for' />
        <Arguments position='against' />
      </div>
    )
  }
}