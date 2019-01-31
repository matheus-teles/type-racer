import { FETCH_RANKING_REQUEST, FETCH_RANKING_SUCCESS, FETCH_ADD_RANK_REQUEST, FETCH_ADD_RANK_SUCCESS, RESET_CURRENT_SCORE } from './actionTypes'

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
            .then((result) => { dispatch(fetchRankingSuccess(result.ranking))})
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
          .then(res => res.json())
          .then(response => {
            dispatch(fetchAddRankSuccess(response))
          })
  }
}

export const fetchAddRankRequest = () => ({
  type: FETCH_ADD_RANK_REQUEST
});

export const fetchAddRankSuccess = (currentRank) => ({
  type: FETCH_ADD_RANK_SUCCESS,
  payload: {
    currentRank
  }
});

export const resetCurrentScore = () => ({
  type: RESET_CURRENT_SCORE
})