import { FETCH_RANKING_REQUEST, FETCH_RANKING_SUCCESS, FETCH_ADD_RANK_REQUEST, FETCH_ADD_RANK_SUCCESS } from './actionTypes'
import { resetGame, changeScreen } from './gameActions';
import { RANKING_SCREEN } from '../shared/constants'

export const fetchRankingSuccess = (leaderboard) => ({
  type: FETCH_RANKING_SUCCESS,
  payload: {
    leaderboard
  }
});

export const fetchRankingRequest = () => ({
  type: FETCH_RANKING_REQUEST
});

export const fetchRanking = () => {
  return (dispatch) => {
    dispatch(fetchRankingRequest())
    return fetch("http://localhost:3001/leaderboards")
            .then(res => res.json())
            .then((result) => { dispatch(fetchRankingSuccess(result.ranking))},
            (error) => { dispatch(fetchRankingSuccess([{error}]))})
  }
};

export const addRank = (formData) => {
  return (dispatch) => {
    dispatch(fetchAddRankRequest())
    return fetch("http://localhost:3001/leaderboards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          })
          .then(response => {
            console.log(response)
            dispatch(fetchAddRankSuccess())
            dispatch(changeScreen(RANKING_SCREEN))
            dispatch(resetGame())
          })
  }
}

export const fetchAddRankRequest = () => ({
  type: FETCH_ADD_RANK_REQUEST
});

export const fetchAddRankSuccess = () => ({
  type: FETCH_ADD_RANK_SUCCESS
});