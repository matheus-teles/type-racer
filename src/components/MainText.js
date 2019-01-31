import React, { Component } from 'react';
import { connect } from "react-redux";

import './MainText.sass';

class MainText extends Component {
	componentDidUpdate() {
		const top = document.getElementById("next-words").offsetTop
		document.getElementById("scrollable-content").scrollTop = top - 100
	}
	nextWord() {
		if(this.props.game.sentence.length === 0) return
		const letters = this.props.game.sentence[0].split("")
		const inputs = this.props.game.wordInput.split("")
		const matched = []
		let unmatched = ""
		let i = 0
		while (i < letters.length && inputs[i] === letters[i]) {
			matched.push(letters[i])
			i++
		}
		if(i < inputs.length && i <= letters.length && inputs[i] !== letters[i]) {
			unmatched = letters[i]
			i++
		}
		return <span>
						 <span className="matched next-word">{matched.join("")}</span>
						 <span className="unmatched next-word">{unmatched}</span>
						 <span className="next-word">{letters.slice(i).join("")}</span>
						 <span> </span>
					 </span>
	}
	render() {
		const wordsMatchedList = this.props.game.wordsMatched.map((word, index) =>
			<span key={index} className="matched">{word}</span>
		)
		const afterNextWord = this.props.game.sentence.slice(1).join(" ");

		return (
			<div className="MainText">
				<div id="scrollable-content" className="scrollable-content">
					{wordsMatchedList}
					<span id='next-words'>{this.nextWord()}
					{afterNextWord}</span>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { ...state }
}

export default connect(mapStateToProps)(MainText);