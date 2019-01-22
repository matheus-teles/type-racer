import React, { Component } from 'react';
import WordsInput from './WordsInput.js';
import MainText from './MainText.js';

import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordInput: "",
      sentence: SENTENCES[0].split(" ")
    }

    this.handleWordsInputChange = this.handleWordsInputChange.bind(this);
  }

  handleWordsInputChange(wordInput) {
    if(this.state.sentence[0] + " " === wordInput) {
        this.setState({
          sentence: this.state.sentence.slice(1),
          wordInput: ""
        });
    } else {
      this.setState({
        wordInput: wordInput
      });
    }
  }

  render() {
    return (
      <div className="App">
        <MainText 
          sentence={this.state.sentence}
          wordInput={this.state.wordInput} />
        <WordsInput
          wordInput={this.state.wordInput}
          onWordsInputChange={this.handleWordsInputChange} />
      </div>
    );
  }
}

const SENTENCES = [
  "O rato roeu a roupa do rei de roma"
]

export default App;
