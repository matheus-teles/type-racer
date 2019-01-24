import { START_GAME, CHECK_INPUT, SET_SENTENCE } from "../actionTypes";

const initialState = {
  sentence: "",
  wordsMatched: [],
  wordInput: "",
  started_at: null,
  current_screen: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      const { started_at, current_screen } = action.payload;
      return {
        ...state,
        started_at,
        current_screen
      };
    }
    case CHECK_INPUT: {
      const { wordInput } = action.payload;
      if (state.sentence.length === 1 && state.sentence[0] === wordInput) {
        return {
          ...state,
          sentence: state.sentence.slice(1),
          wordsMatched: [...state.wordsMatched, wordInput],
          wordInput: ""
        }
      }
      if (state.sentence[0] + " " === wordInput) {
        return {
          ...state,
          sentence: state.sentence.slice(1),
          wordsMatched: [...state.wordsMatched, wordInput],
          wordInput: ""
        };
      }
      return {
        ...state,
        wordInput
      };
    }
    case SET_SENTENCE: {
      const { sentence } = action.payload;
      return {
        ...state,
        sentence
      }
    }
    default:
      return state;
  }
}
