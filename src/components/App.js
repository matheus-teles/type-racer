import React, { Component } from 'react';
import WordsInput from './WordsInput.js';
import MainText from './MainText.js';
import Timer from './Timer.js';

import './App.sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordInput: "",
      sentence: SENTENCES[0].split(" "),
      wordsMatched: [],
      secondsPassed: null
    }

    this.handleWordsInputChange = this.handleWordsInputChange.bind(this);
    this.handleOnGameStart = this.handleOnGameStart.bind(this);
  }

  handleWordsInputChange(wordInput) {
    if(this.state.sentence[0] + " " === wordInput) {
        this.setState({
          sentence: this.state.sentence.slice(1),
          wordsMatched: [...this.state.wordsMatched, wordInput],
          wordInput: ""
        });
    } else {
      this.setState({
        wordInput: wordInput
      });
    }
  }

  tick() {
    if(this.state.sentence.length === 0){
      clearInterval(this.interval)
      return
    }
    this.setState({
      secondsPassed: this.state.secondsPassed + 1
    });
  }
  
  handleOnGameStart() {
    this.setState({
      secondsPassed: 0
    });
    this.interval = setInterval(() => this.tick(), 1000);
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <MainText 
            sentence={this.state.sentence}
            wordInput={this.state.wordInput}
            wordsMatched={this.state.wordsMatched}
            onGameStart={this.handleOnGameStart}
            secondsPassed={this.state.secondsPassed} />
          <WordsInput
            wordInput={this.state.wordInput}
            onWordsInputChange={this.handleWordsInputChange} />
          <Timer
            wordsMatched={this.state.wordsMatched}
            secondsPassed={this.state.secondsPassed} />
        </div>
      </div>
    );
  }
}

const SENTENCES = [
  "ERA UMA VEZ um homem chamado Gepeto que fazia lindos bonecos de madeira. Vivia sozinho e o seu sonho era ter um filho com quem partilhar todo o seu amor e carinho."
]

export default App;
