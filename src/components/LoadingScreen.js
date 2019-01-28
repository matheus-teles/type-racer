import React, { Component } from 'react'
import { connect } from "react-redux";
import MainText from './MainText.js'
import { startGame } from "../redux/actions";
import './LoadingScreen.sass'

class LoadingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {countdown: 3}
  }

  tick() {
    this.setState((state, props) => ({
      countdown: state.countdown - 1
    }))
    if(this.state.countdown === 0) {
      this.props.startGame()
      clearInterval(this.interval)
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
    // document.getElementById("countdown").style.opacity = 0.2 * this.state.countdown
  }

  render() {
    return (
      <div className="LoadingScreen">
        <MainText  />
        <div id="countdown" className="countdown">
          <h1>{this.state.countdown}</h1>
        </div>
      </div>
    );
  }
}


export default connect(
	null,
	{ startGame }
)(LoadingScreen)
