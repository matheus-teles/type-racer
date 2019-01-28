import { START_GAME, START_COUNTDOWN, SET_SENTENCE, GAME_ENDED, PLAY_AGAIN, INPUT_MATCH, INPUT_DONT_MATCH } from "./actionTypes";

export const startCountdown = () => ({
  type: START_COUNTDOWN,
  payload: {
    current_screen: 1
  }
});

export const startGame = () => ({
  type: START_GAME,
  payload: {
    started_at: Date.now(),
    current_screen: 2
  }
});

export const playAgain = () => ({
  type: PLAY_AGAIN,
  payload: {
    ended_at: Date.now(),
    current_screen: 3
  }
});

export const checkInput = (wordInput) => {
  return (dispatch, getState) => {
    const game = getState().game
    if (game.sentence.length === 1 && game.sentence[0] === wordInput) {
      dispatch(gameEnded(wordInput))
    } else if (game.sentence[0] + " " === wordInput) {
      dispatch(inputMatch(wordInput))
    } else {
      dispatch(noInputMatch(wordInput))
    }
  }
};

export const noInputMatch = (wordInput) => ({
  type: INPUT_DONT_MATCH,
  payload: {
    wordInput: wordInput
  }
});

export const inputMatch = (wordInput) => ({
  type: INPUT_MATCH,
  payload: {
    wordInput: wordInput
  }
});

export const gameEnded = (wordInput) => ({
  type: GAME_ENDED,
  payload: {
    wordInput: wordInput,
    ended_at: Date.now()
  }
});

export const setSentence = (sentence) => ({
  type: SET_SENTENCE,
  payload: {
    sentence: sentence.split(" ")
  }
});



