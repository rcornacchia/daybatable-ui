import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArgumentsLayout from './layouts/ArgumentsLayout';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Header from './components/Header';
import { args } from './model/mock-payload';
import './App.scss';

const App = () => (
  <Router>
    <div className='app'>
      <Header />

      <Route exact path='/'         component={ArgumentsLayout} />
      <Route       path='/login'    component={Login} />
      <Route       path='/register' component={Register} />
    </div>
  </Router>
);

export default App;