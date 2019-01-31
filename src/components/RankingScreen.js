import React from 'react';
import { connect } from "react-redux";
import { changeScreen } from "../redux/gameActions";

import './RankingScreen.sass';
import Leaderboard from './Leaderboard';

import { START_SCREEN } from '../shared/constants'

class RankingScreen extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isLoading: true
		}
	}

	handleButtonClick = () => {
		this.props.changeScreen(START_SCREEN);
  }
  
	render() {
		return (
			<div className="RankingScreen container">
				<div className="ranking-wrapper">
          <Leaderboard />
					<button type="button" className="standard-button" onClick={this.handleButtonClick}>VOLTAR</button>
				</div>
			</div>
		)
	}
}

export default connect(
	null,
	{ changeScreen }
)(RankingScreen)