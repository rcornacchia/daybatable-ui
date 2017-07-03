import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootReducer from './reducers';
import App from './App';
import DevTools from './containers/DevTools';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './containers/Login';

const store = configureStore(rootReducer);
const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
  <Provider store={store}>
    <div>
      <App history={history}/>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);

// render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>

//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )