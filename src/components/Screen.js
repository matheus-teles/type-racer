import React from 'react';
import { connect } from "react-redux";

import StartScreen from "./StartScreen"
import LoadingScreen from "./LoadingScreen"
import GameScreen from "./GameScreen"
import RankingScreen from "./RankingScreen"

import {START_SCREEN, LOADING_SCREEN, GAME_SCREEN, RANKING_SCREEN} from "../shared/constants"


const Screen = (props) => {
    if(props.current_screen === START_SCREEN) return <StartScreen />
    if(props.current_screen === LOADING_SCREEN) return <LoadingScreen />
    if(props.current_screen === GAME_SCREEN) return <GameScreen />
    if(props.current_screen === RANKING_SCREEN) return <RankingScreen />
}

const mapStateToProps = (state) => {
    return {  ...state }
}

export default connect(mapStateToProps)(Screen);