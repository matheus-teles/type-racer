import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { fetchRanking } from "../redux/rankingActions";

import './Leaderboard.sass'
import LeaderboardItem from './LeaderboardItem';


class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.fetchRanking()
  }

  isCurrentPlayerInRank = () => {
    if(this.props.currentRank && this.props.leaderboard.find((item) => { return item.id === this.props.currentRank.id })){
      return true
    }
    return false
  }

  showPlayers = () => {
    if(this.props.isFetching) return <tr><td>Carregando</td></tr>
    if(this.props.leaderboard.length === 0) return <tr><td>Não há placares registrados</td></tr>
    if(!this.isCurrentPlayerInRank()) {
      return (
        this.props.leaderboard.slice(0, this.props.leaderboard.length - 1).concat([this.props.currentRank]).map(player => 
              <LeaderboardItem player={player} key={player.id} />
            )
        )
    }
    return (
      this.props.leaderboard.map(player => 
        <LeaderboardItem player={player} key={player.id} />
      )
    )
  }
  render() {
    return (
      <div className="Leaderboard">
        <h1>PLACAR</h1>
        <table className="table">
          <tbody>
            {this.showPlayers()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return { ...state.ranking }
}

export default connect(
  mapStateToProps,
  { fetchRanking }
)(Leaderboard)