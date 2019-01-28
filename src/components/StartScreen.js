import React from 'react';
import { connect } from "react-redux";
import { startCountdown } from "../redux/actions";
import DelayedMessage from './DelayedMessage';

import './StartScreen.sass';

const DESCRIPTION = "Ao iniciar, uma frase aleatória aparece, e seu objetivo é digitá-la o mais rápido possível."

class StartScreen extends React.Component {

	handleButtonClick = () => {
		this.props.startCountdown();
	}
	render() {
		return (
			<div className="StartScreen">
				<div className="game-description">
					<DelayedMessage message={DESCRIPTION}/>
					<button type="button" className="btn btn-success" onClick={this.handleButtonClick}>START</button>
				</div>
			</div>
		)
	}
}

export default connect(
	null,
	{ startCountdown }
)(StartScreen)