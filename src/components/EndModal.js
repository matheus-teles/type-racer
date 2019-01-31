import React from 'react'
import { connect } from "react-redux"
import { playAgain } from "../redux/gameActions"
import { addRank } from "../redux/rankingActions"
import Speedometer from "./Speedometer"

import './EndModal.sass';


class EndModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nickname: ""
    }
  }

  componentDidMount() {
  }

  handleInputChange = (e) => {
    this.setState({
      nickname: e.target.value
    })
  }

  handleButtonClick = () => {
    this.props.playAgain();
  }

  handleSubmitScore = (e) => {
    e.preventDefault()
    const formData = {
      nickname: this.state.nickname,
      wpm: Math.floor(60 * this.props.game.wordsMatched.length / ((this.props.game.ended_at - this.props.game.started_at) / 1000)),
      race_text: this.props.game.wordsMatched.join(" ")
    }
    this.props.addRank(formData)
  }

  render() {
    const wpm = Math.floor(60 * this.props.game.wordsMatched.length / ((this.props.game.ended_at - this.props.game.started_at) / 1000))
    return (
      <div className="EndModal">
        <div className="end-modal">
          <Speedometer min={0} max={100} value={wpm} />
          <div className="end-modal-body clearfix">
            <form onSubmit={this.handleSubmitScore} className="clearfix">
              <input
                type="text"
                value={this.state.nickname}
                onChange={this.handleInputChange}
                placeholder="Seu apelido"
              />
              <button type="submit" className="standard-button">SALVAR PLACAR</button>
            </form>
            <button type="button" className="standard-button" onClick={this.handleButtonClick}>JOGAR NOVAMENTE</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(
  mapStateToProps,
  { playAgain, addRank }
)(EndModal)