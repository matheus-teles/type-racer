import { FETCH_RANKING_REQUEST, FETCH_RANKING_SUCCESS, FETCH_ADD_RANK_REQUEST, FETCH_ADD_RANK_SUCCESS, RESET_CURRENT_SCORE } from "../actionTypes"

export default function (state = { leaderboard: [], isFetching: false, isFetchingAdd: false, currentRank: null }, action) {
  switch(action.type) {
    case FETCH_RANKING_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCH_RANKING_SUCCESS: {
      return {
        ...state,
        leaderboard: action.payload.leaderboard,
        isFetching: false
      }
    }
    case FETCH_ADD_RANK_REQUEST: {
      return {
        ...state,
        isFetchingAdd: true
      }
    }
    case FETCH_ADD_RANK_SUCCESS: {
      return {
        ...state,
        currentRank: action.payload.currentRank,
        isFetchingAdd: false
      }
    }
    case RESET_CURRENT_SCORE: {
      return {
        ...state,
        currentRank: null,
        isFetchingAdd: false
      }
    }
    default:
      return state
  }
}