import React, { Component } from 'react';
import './WordsInput.sass';

class WordsInput extends Component {
  
    handleWordsInputChange = (e) => {
        this.props.onWordsInputChange(e.target.value);
    }

    render() {
        const wordInput = this.props.wordInput
        return (
        <div className="WordsInput">
            <input
            type="text"
            value={wordInput}
            onChange={this.handleWordsInputChange} 
            />
        </div>
        );
    }
}

export default WordsInput