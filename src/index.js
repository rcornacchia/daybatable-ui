import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootReducer from './reducers';
import App from './App';
import DevTools from './containers/DevTools';

const store = configureStore(rootReducer);

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);