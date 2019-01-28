import React, { Component } from 'react';
import WordsInput from './WordsInput.js';
import MainText from './MainText.js';
import Timer from './Timer.js';

class GameScreen extends Component {

  render() {
    return (
      <div className="GameScreen">
        <MainText />
        <WordsInput />
        <Timer />
      </div>
    );
  }
}


export default GameScreen;
