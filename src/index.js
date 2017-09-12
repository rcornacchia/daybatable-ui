import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import rootReducer from './reducers';
import App from './App';
import Login from './containers/Login';
import Register from './containers/Register';
import PostForm from './containers/PostForm';
import About from './layouts/About';
import PostsLayout from './layouts/PostsLayout';
import DevTools from './containers/DevTools';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-106316218-1', 'auto');
ga('send', 'pageview');


const store = configureStore(rootReducer);
store.dispatch({ type: 'INIT' });

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={PostsLayout} />
            <Route path='about' component={About} />          
            <Route path='login' component={Login} />
            <Route path='register' component={Register} />
            <Route path='post' component={PostForm} />
          </Route>
        </Router>
        <DevTools />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);