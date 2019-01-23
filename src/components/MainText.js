import React from 'react';
import StartButton from './StartButton.js';

import './MainText.sass';

const MainText = (props) => {
    const wordsMatchedList = props.wordsMatched.map((word, index) => 
        <span key={index} className="matched">{word}</span>
    )
    const nextWord = <span><span className="next-word">{props.sentence[0]}</span><span> </span></span>;
    const afterNextWord = props.sentence.slice(1).join(" ")
    const handleOnGameStart = () => {
        props.onGameStart();
    }
    
    return (
        <div className="MainText">
            { props.secondsPassed == null ? <StartButton onGameStart={handleOnGameStart} /> : "" }
            { wordsMatchedList }
            { nextWord }
            { afterNextWord }
        </div>
    );
}

export default MainText