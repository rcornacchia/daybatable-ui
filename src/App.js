import React, { Component } from 'react';
import Arguments from './containers/Arguments/Arguments';
import Login from './components/Authentication/Login';
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
        <Login />
      </div>
    );
  }
}

export default App;
