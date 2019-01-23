import React, { Component } from 'react';
import Screen from './components/Screen.js';
import { setSentence } from "./redux/actions";
import { connect } from "react-redux";

import './App.sass';

class App extends Component {

  componentDidMount() {
    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies",
    { headers: new Headers({
      "X-RapidAPI-Key": "e782dc4ba9msh4ca95d20f07e11ep108574jsn694c8d7c08a4",
      "Content-Type": "application/x-www-form-urlencoded"})
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.props.setSentence(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Screen />
        </div>
      </div>
    );
  }
}

export default connect(
	null,
	{ setSentence }
)(App)
