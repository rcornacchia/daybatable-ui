import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootReducer from './reducers';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import Post from './containers/Post';
import ArgumentsLayout from './layouts/ArgumentsLayout';
import DevTools from './containers/DevTools';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

const store = configureStore(rootReducer);
store.dispatch({ type: 'INIT' });

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={ArgumentsLayout} />
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
          <Route path="post" component={Post} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);