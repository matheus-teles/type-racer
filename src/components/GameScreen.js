import React, { Component } from 'react';
import WordsInput from './WordsInput.js';
import MainText from './MainText.js';
import Timer from './Timer.js';

class GameScreen extends Component {

  render() {
    return (
      <div className="GameScreen">
        <div className="container">
          <MainText  />
          <WordsInput />
          <Timer />
        </div>
      </div>
    );
  }
}


export default GameScreen;
