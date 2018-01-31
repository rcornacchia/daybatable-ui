import React from 'react';
import { Router, Route } from 'react-router';
import Notifications from 'react-notify-toast';
import Header from './containers/Header';
import socket from './socket';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    socket.emit('test');
  }

  render() {
    const { children } = this.props;
    return(
      <div className='app'>
        <Notifications />
        <Header />
        {children}
      </div>
    );
  }
}

export default App;