import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import ArgumentsLayout from './layouts/ArgumentsLayout';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Post from './components/Post';
import { args } from './model/mock-payload';
import './App.scss';

const App = () => (
  <Router>
    <div className='app'>
      <Header />

      <Route exact path='/'         component={ArgumentsLayout} />
      <Route       path='/login'    component={Login} />
      <Route       path='/register' component={Register} />
      <Route       path='/post'     component={Post} />
    </div>
  </Router>
);

export default App;