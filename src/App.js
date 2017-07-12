import React from 'react';
import { Router, Route } from 'react-router';
import Header from './containers/Header';
import './App.scss';

const App = ({ children }) => (
  <div className='app'>
    <Header />
    {children}
  </div>
);

export default App;