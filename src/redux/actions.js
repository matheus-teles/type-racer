import { CHECK_INPUT, START_GAME, START_COUNTDOWN, SET_SENTENCE } from "./actionTypes";

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

export const checkInput = (wordInput) => ({
  type: CHECK_INPUT,
  payload: {
    wordInput: wordInput
  }
});

export const setSentence = (sentence) => ({
  type: SET_SENTENCE,
  payload: {
    sentence: sentence.split(" ")
  }
});



