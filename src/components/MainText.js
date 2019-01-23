import React from 'react';
import { connect } from "react-redux";

import './MainText.sass';

const MainText = (props) => {
    const wordsMatchedList = props.wordsMatched.map((word, index) => 
        <span key={index} className="matched">{word}</span>
    )
    const nextWord = <span><span className="next-word">{props.sentence[0]}</span><span> </span></span>;
    const afterNextWord = props.sentence.slice(1).join(" ")
    
    return (
        <div className="MainText">
            { wordsMatchedList }
            { nextWord }
            { afterNextWord }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { ...state.game }
}

export default connect(mapStateToProps)(MainText);