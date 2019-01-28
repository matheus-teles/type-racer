import React, { Component } from 'react'
import { connect } from "react-redux";

import './Timer.sass'

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {now: Date.now()}
	}
	tick() {
		this.setState({
			now: Date.now()
		})
	}
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000)
	}
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
				<div className="speedometer">
					<div className="velocimeter">
						<div className="display-value">
							<span className="speed">{wpm}</span>
							<span>WPM</span>
						</div>
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