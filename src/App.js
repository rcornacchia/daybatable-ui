import React from 'react';
import { Router, Route } from 'react-router';
import Header from './components/Header';
import ArgumentsLayout from './layouts/ArgumentsLayout';
import Login from './containers/Login';
import Register from './containers/Register';
import Post from './containers/Post';
import { args } from './model/mock-payload';
import './App.scss';

const App = props => (
  <Router history={props.history}>
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