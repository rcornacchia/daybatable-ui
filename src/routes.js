import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from './App';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { ArgumentsLayout } from './layouts/ArgumentsLayout';

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={ArgumentsLayout} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
  </Route>
);