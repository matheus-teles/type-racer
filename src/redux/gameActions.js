import { START_GAME, FETCH_SENTENCE_SUCCESS, END_GAME, RESET_GAME, INPUT_MATCH, INPUT_DONT_MATCH, FETCH_SENTENCE_REQUEST, CHANGE_SCREEN } from "./actionTypes";
import { SENTENCES, START_SCREEN } from '../shared/constants'
import { resetCurrentScore } from "../redux/rankingActions";

export const checkInput = (wordInput) => {
  return (dispatch, getState) => {
    const game = getState().game
    if (game.sentence.length === 1 && game.sentence[0] === wordInput) {
      dispatch(inputMatch(wordInput))
      dispatch(endGame())
    } else if (game.sentence[0] + " " === wordInput) {
      dispatch(inputMatch(wordInput))
    } else {
      dispatch(inputDontMatch(wordInput))
    }
  }
};

export const inputDontMatch = (wordInput) => ({
  type: INPUT_DONT_MATCH,
  payload: {
    wordInput
  }
});

export const inputMatch = (wordInput) => ({
  type: INPUT_MATCH,
  payload: {
    wordInput
  }
});

export const endGame = () => ({
  type: END_GAME,
  payload: {
    ended_at: Date.now()
  }
});

export const fetchSentenceSuccess = (sentence) => ({
  type: FETCH_SENTENCE_SUCCESS,
  payload: {
    sentence: sentence.split(" ")
  }
});

export const fetchSentenceRequest = () => ({
  type: FETCH_SENTENCE_REQUEST
});

export const fetchSentence = () => {
  return (dispatch) => {
    dispatch(fetchSentenceRequest())
    return fetch("https://type-racer-api.herokuapp.com/lerolero")
            .then(res => res.json())
            .then((result) => { dispatch(fetchSentenceSuccess(result.text))},
            (error) => { dispatch(fetchSentenceSuccess(SENTENCES[Math.floor(Math.random() * 10)]))})
  }
};

export const changeScreen = (current_screen) => ({
  type: CHANGE_SCREEN,
  payload: {
    current_screen
  }
})

export const startGame = () => {
  return (dispatch) => {
    dispatch(resetCurrentScore())
    const action = {
      type: START_GAME,
      payload: {
        started_at: Date.now()
      }
    }
    dispatch(action)
  }
}

export const playAgain = () => {
  return (dispatch) => {
    dispatch(resetGame())
    dispatch(changeScreen(START_SCREEN))
  }
}

export const resetGame = () => ({
  type: RESET_GAME
})