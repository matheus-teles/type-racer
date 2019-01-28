import React from 'react';
import { connect } from "react-redux";
import { playAgain } from "../redux/actions";

import './EndModal.sass';


class EndModal extends React.Component {

  componentDidMount() {
  }

  handleButtonClick = () => {
    this.props.playAgain();
  }
  render() {
    return (
      <div className="EndModal">
        <div className="end-modal">
          <button className="btn">JOGAR NOVAMENTE</button>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { playAgain }
)(EndModal)