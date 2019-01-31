import React, { Component } from 'react'
import { connect } from "react-redux";
import Speedometer from "./Speedometer"

import './Timer.sass'

class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {current_end: Date.now()}
	}

	tick() {
		if(this.props.game.ended_at) { 
			clearInterval(this.interval)
			this.setState({
				current_end: this.props.game.ended_at
			})
		} else {
			this.setState({
				current_end: Date.now()
			})
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000)
	}

	render() {
		const wpm = Math.floor(60 * this.props.game.wordsMatched.length / ((this.state.current_end - this.props.game.started_at) / 1000))
		return (
			<div className="Timer">
				<Speedometer min={4} max={100} value={wpm} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state }
}

export default connect(mapStateToProps)(Timer);