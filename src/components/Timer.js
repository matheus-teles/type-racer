import React, { Component } from 'react'
import { connect } from "react-redux";

import './Timer.sass'

class Timer extends Component {
    render() {
        return (
            <div className="Timer">
                { this.props.started_at &&
                <h1>{Math.ceil(60 * this.props.wordsMatched.length / ((Date.now() - this.props.started_at) / 1000))} Wpm</h1>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  ...state.game }
}

export default connect(mapStateToProps)(Timer);