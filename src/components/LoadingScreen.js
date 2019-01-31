import React, { Component } from 'react'
import { connect } from "react-redux";
import MainText from './MainText.js'
import { changeScreen } from "../redux/gameActions";
import './LoadingScreen.sass'
import { GAME_SCREEN } from '../shared/constants'

class LoadingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {countdown: 3}
  }

  tick() {
    this.setState((state) => ({
      countdown: state.countdown - 1
    }))
    if(this.state.countdown === 0) {
      this.props.changeScreen(GAME_SCREEN)
      clearInterval(this.interval)
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
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
	{ changeScreen }
)(LoadingScreen)
