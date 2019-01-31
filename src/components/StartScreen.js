import React from 'react';
import { connect } from "react-redux";
import { changeScreen, fetchSentence } from "../redux/gameActions";
import DelayedMessage from './DelayedMessage';
import { LOADING_SCREEN, RANKING_SCREEN } from "../shared/constants"

import './StartScreen.sass';

const DESCRIPTION = "Ao iniciar, uma frase aleatória aparece, e seu objetivo é digitá-la o mais rápido possível."

class StartScreen extends React.Component {

	componentDidMount() {
		if(!this.props.game.sentence) this.props.fetchSentence()
  }

	handleStartButtonClick = () => {
		this.props.changeScreen(LOADING_SCREEN);
  }
  handleRankingButtonClick = () => {
		this.props.changeScreen(RANKING_SCREEN);
	}
	render() {
		return (
			<div className="StartScreen container">
				<div className="game-description">
					<h1><DelayedMessage message={DESCRIPTION} speed={40}/></h1>
					<button type="button" className="standard-button btn-ranking" onClick={this.handleRankingButtonClick}>RANKING</button>
					<button type="button" className="standard-button btn-start" disabled={this.props.game.isFetching} onClick={this.handleStartButtonClick}>{this.props.game.isFetching ? "CARREGANDO" : "JOGAR"}</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {  ...state }
}

export default connect(
	mapStateToProps,
	{ changeScreen, fetchSentence }
)(StartScreen)