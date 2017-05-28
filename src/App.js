import React, { Component } from 'react';
import Arguments from './containers/Arguments/Arguments';
import './App.css';
import { args } from './model/mock-payload';


class App extends Component {
  render() {
    const forArgs = args.for;
    const againstArgs = args.against;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Daybatable</h2>
        </div>
        <Arguments position='for' args={forArgs} />
        <Arguments position='against' args={againstArgs} />
      </div>
    );
  }
}

export default App;
