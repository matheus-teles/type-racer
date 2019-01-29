import React, { Component } from 'react';
import Screen from './components/Screen.js';
import './App.sass';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Screen />
        </div>
      </div>
    );
  }
}

export default App
