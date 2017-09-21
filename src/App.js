import React from 'react';
import { Router, Route } from 'react-router';
import Notifications from 'react-notify-toast';
import Header from './containers/Header';
import './App.scss';

const App = ({ children }) => (
  <div className='app'>
    <Notifications />
    <Header />
    {children}
  </div>
);

export default App;