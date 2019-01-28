import React from 'react';
import { connect } from "react-redux";

import StartScreen from "./StartScreen"
import LoadingScreen from "./LoadingScreen"
import GameScreen from "./GameScreen"


const Screen = (props) => {
    if(props.current_screen === 0) return <StartScreen />
    if(props.current_screen === 1) return <LoadingScreen />
    if(props.current_screen === 2) return <GameScreen />
}

const mapStateToProps = (state) => {
    return {  ...state.game }
}

export default connect(mapStateToProps)(Screen);