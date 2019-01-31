import React, { Component } from 'react';
import WordsInput from './WordsInput.js';
import MainText from './MainText.js';
import Timer from './Timer.js';
import EndModal from './EndModal.js';
import { connect } from "react-redux";
import { startGame } from "../redux/gameActions";

class GameScreen extends Component {

  componentDidMount() {
    this.props.startGame()
  }

  render() {
    return (
      <div className="GameScreen">
        <MainText />
        <WordsInput />
        <Timer />
        {this.props.game.ended_at &&
        <EndModal />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { ...state }
}

export default connect(
  mapStateToProps,
  { startGame }
  )(GameScreen);
