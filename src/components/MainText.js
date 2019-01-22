import React from 'react';
import './MainText.sass';

const MainText = (props) => {
    return (
        <div className="MainText">
        {props.sentence.length === 0 ? "Voce venceu" : props.sentence.join(" ")}
        </div>
    );
}

export default MainText