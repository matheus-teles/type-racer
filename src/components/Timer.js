import React, { Component } from 'react'

import './Timer.sass'

class Timer extends Component {
    render() {
        return (
            <div className="Timer">
                { this.props.secondsPassed ?
                <h1>{Math.ceil(this.props.wordsMatched.length / this.props.secondsPassed * 60)} Wpm</h1> : ""
            }
            </div>
        )
    }
}

export default Timer