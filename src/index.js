import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import ReactGA from 'react-ga';
import io from 'socket.io-client';
import configureStore from './store/configureStore';
import rootReducer from './reducers';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import PostForm from './containers/PostForm';
import About from './layouts/About';
import PostsLayout from './layouts/PostsLayout';
import UpcomingDebates from './containers/UpcomingDebates';
import DevTools from './containers/DevTools';
import CreateDebateForm from './containers/CreateDebateForm';
import config from './config';

// Google Analytics
ReactGA.initialize('UA-106316218-1'); 

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const store = configureStore(rootReducer);
store.dispatch({ type: 'INIT' });

render(
  <Provider store={store}>
      <div>
        <Router history={browserHistory} onUpdate={logPageView}>
          <Route path='/' component={App}>
            <IndexRoute component={PostsLayout} />
            <Route path='about' component={About} />          
            <Route path='login' component={Login} />
            <Route path='register' component={Register} />
            <Route path='create' component={CreateDebateForm} />
            <Route path='upcoming' component={UpcomingDebates} />
          </Route>
        </Router>
        <DevTools />
      </div>
  </Provider>,
  document.getElementById('root')
);

const socket = io(config.socket);
socket.on('post_created', post => store.dispatch({ type: 'POST_ADD', post }));
socket.on('user_connected', () => console.log('user connected'));

export default socket;