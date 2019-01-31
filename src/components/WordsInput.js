import React, { Component } from 'react';
import { connect } from "react-redux";
import { checkInput } from "../redux/gameActions";

import './WordsInput.sass';

class WordsInput extends Component {
  
    handleWordsInputChange = (e) => {
        this.props.checkInput(e.target.value);
    }

    render() {
        const wordInput = this.props.game.wordInput
        return (
        <div className="WordsInput">
            <input
            type="text"
            autoFocus={true}
            value={wordInput}
            onChange={this.handleWordsInputChange} 
            />
        </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state }
  }

export default connect(
	mapStateToProps,
	{ checkInput }
)(WordsInput)