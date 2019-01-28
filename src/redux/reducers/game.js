import { START_GAME, SET_SENTENCE, START_COUNTDOWN, GAME_ENDED, PLAY_AGAIN, INPUT_MATCH, INPUT_DONT_MATCH } from "../actionTypes";

const initialState = {
  sentence: "",
  wordsMatched: [],
  wordInput: "",
  started_at: null,
  current_screen: 0,
  ended_at: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_COUNTDOWN: {
      const { current_screen } = action.payload;
      return {
        ...state,
        current_screen
      };
    }
    case START_GAME: {
      const { started_at, current_screen } = action.payload;
      return {
        ...state,
        started_at,
        current_screen
      };
    }
    case INPUT_MATCH: {
      const { wordInput } = action.payload;
      return {
        ...state,
        sentence: state.sentence.slice(1),
        wordsMatched: [...state.wordsMatched, wordInput],
        wordInput: ""
      };
    }
    case INPUT_DONT_MATCH: {
      const { wordInput } = action.payload;
      return {
        ...state,
        wordInput
      };
    }
    case GAME_ENDED: {
      const { wordInput, ended_at } = action.payload;
      return {
        ...state,
        sentence: state.sentence.slice(1),
        wordsMatched: [...state.wordsMatched, wordInput],
        wordInput: "",
        ended_at: ended_at
      }
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
