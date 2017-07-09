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
import { syncHistoryWithStore } from 'react-router-redux';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import { syncHistory, syncParams} from 'react-router-redux-params';
import { routes } from './routes';

const store = configureStore(rootReducer);
syncParams(store, routes, browserHistory);

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={ArgumentsLayout} />
          <Route path="login" component={Login} />
          <Route path="post" component={Post} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);