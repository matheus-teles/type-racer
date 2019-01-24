import React from 'react';
import { connect } from "react-redux";
import { startGame } from "../redux/actions";

import './StartScreen.sass';

class StartScreen extends React.Component {

	handleButtonClick = () => {
		this.props.startGame();
	}
	render() {
		return (
			<div className="StartScreen">
				<button type="button" className="btn btn-success" onClick={this.handleButtonClick}>START</button>
			</div>
		)
	}
}

export default connect(
	null,
	{ startGame }
)(StartScreen)