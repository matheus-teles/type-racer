import React, { Component } from 'react';
import WordsInput from './WordsInput.js';
import MainText from './MainText.js';
import Timer from './Timer.js';
import EndModal from './EndModal.js';
import { connect } from "react-redux";

class GameScreen extends Component {

  render() {
    return (
      <div className="GameScreen">
        <MainText />
        <WordsInput />
        <Timer />
        {this.props.ended_at &&
        <EndModal />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { ...state.game }
}

export default connect(mapStateToProps)(GameScreen);
