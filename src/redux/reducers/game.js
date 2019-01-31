import { START_GAME, FETCH_SENTENCE_SUCCESS, END_GAME, RESET_GAME, INPUT_MATCH, INPUT_DONT_MATCH, FETCH_SENTENCE_REQUEST, CHANGE_SCREEN } from "../actionTypes";

const initialState = {
    sentence: "",
    wordsMatched: [],
    wordInput: "",
    started_at: null,
    ended_at: null,
    isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      const { started_at } = action.payload;
      return {
        ...state,
        started_at
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
    case END_GAME: {
      const { ended_at } = action.payload;
      return {
        ...state,
        ended_at
      }
    }
    case FETCH_SENTENCE_SUCCESS: {
      const { sentence } = action.payload;
      return {
        ...state,
        isFetching: false,
        sentence
      }
    }
    case CHANGE_SCREEN: {
      const { current_screen } = action.payload;
      return {
        ...state,
        current_screen
      } 
    }
    case FETCH_SENTENCE_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }
    case RESET_GAME: {
      return {
        ...state,
        sentence: "",
        wordsMatched: [],
        wordInput: "",
        started_at: null,
        ended_at: null,
        isFetching: false
      }
    }
    default:
      return state;
  }
}
