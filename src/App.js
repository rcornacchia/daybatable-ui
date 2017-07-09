import React from 'react';
import { Router, Route } from 'react-router';
import Header from './containers/Header';
import ArgumentsLayout from './layouts/ArgumentsLayout';
import Login from './containers/Login';
import Register from './containers/Register';
import Post from './containers/Post';
import { args } from './model/mock-payload';
import './App.scss';

const App = ({ children }) => (
  <div className='app'>
    <Header />
    {children}
  </div>
);

export default App;