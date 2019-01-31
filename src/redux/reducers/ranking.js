import { FETCH_RANKING_REQUEST, FETCH_RANKING_SUCCESS, FETCH_ADD_RANK_REQUEST, FETCH_ADD_RANK_SUCCESS } from "../actionTypes"

export default function (state = { leaderboard: [], isFetching: false, isFetchingAdd: false}, action) {
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
        isFetchingAdd: false
      }
    }
    default:
      return state
  }
}