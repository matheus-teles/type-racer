import React from 'react';
import { connect } from "react-redux";
import { playAgain } from "../redux/actions";
import Speedometer from "./Speedometer"

import './EndModal.sass';


class EndModal extends React.Component {

  componentDidMount() {
  }

  handleButtonClick = () => {
    this.props.playAgain();
  }
  render() {
    const wpm = Math.floor(60 * this.props.wordsMatched.length / ((this.props.ended_at - this.props.started_at) / 1000))
    return (
      <div className="EndModal">
        <div className="end-modal">
        <Speedometer min={0} max={100} value={wpm} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return { ...state.game }
}

export default connect(
  mapStateToProps,
  { playAgain }
)(EndModal)