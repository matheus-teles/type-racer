import React, { Component } from 'react'
import { connect } from "react-redux";

import './Timer.sass'

class Timer extends Component {

	render() {
		const wpm = Math.ceil(60 * this.props.wordsMatched.length / ((this.state.now - this.props.started_at) / 1000))
		function velocimeter(wpm) {
			if (wpm <= 0) return 4
			if (wpm > 100) return 100
			return wpm * 1.76
		}
		const divStyle = {
			transform: `rotate(${velocimeter(wpm)}deg)`
		}
		return (
			<div className="Timer">
				{this.props.started_at &&
					<h1>{wpm} Wpm</h1>
				}
				<div className="speedometer">
					<div className="velocimeter">
						<div className="pointer" style={divStyle}></div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state.game }
}

export default connect(mapStateToProps)(Timer);