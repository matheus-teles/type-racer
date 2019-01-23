import React from 'react';
import './StartButton.sass';

const StartButton = (props) => {

    const handleButtonClick = () => {
        props.onGameStart();
    }

    return (
        <div className="StartButton">
            <button type="button" className="btn btn-success" onClick={handleButtonClick}>START</button>
        </div>
    )
}

export default StartButton