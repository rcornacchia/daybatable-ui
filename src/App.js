import React, { Component } from 'react';
import Arguments from './containers/Arguments/Arguments';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import { args } from './model/mock-payload';
import './App.scss';

class App extends Component {
  render() {
    const forArgs = args.for;
    const againstArgs = args.against;

    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Daybatable</h2>
        </div>
        <div>
          <Login />
        </div>
        <div>
          <Register />
        </div>
        <div>
          <Arguments position='for' />
          <Arguments position='against' />
        </div>
      </div>
    );
  }
}

export default App;
