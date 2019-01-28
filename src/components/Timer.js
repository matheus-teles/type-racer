import React, { Component } from 'react'
import { connect } from "react-redux";
import Speedometer from "./Speedometer"

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
		if(this.props.ended_at) { 
			clearInterval(this.interval)
			this.setState({
				now: this.props.ended_at
			})
		}
	}
	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000)
	}
	render() {
		const wpm = Math.floor(60 * this.props.wordsMatched.length / ((this.state.now - this.props.started_at) / 1000))
		return (
			<div className="Timer">
				<Speedometer min={4} max={100} value={wpm} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state.game }
}

export default connect(mapStateToProps)(Timer);