import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootReducer from './reducers';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import PostForm from './containers/PostForm';
import PostsLayout from './layouts/PostsLayout';
import DevTools from './containers/DevTools';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

const store = configureStore(rootReducer);
store.dispatch({ type: 'INIT' });

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={PostsLayout} />
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
          <Route path="post" component={PostForm} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);