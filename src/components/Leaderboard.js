import React from 'react';
import { connect } from "react-redux";
import { fetchRanking } from "../redux/rankingActions";

import './Leaderboard.sass'
import DelayedMessage from './DelayedMessage';


class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.fetchRanking()
  }
  
  render() {
    const players = !this.props.isFetching ? this.props.leaderboard.map(player => 
      <tr key={player.id}>
        <td>{player.rank}.</td>
        <td><DelayedMessage message={player.nickname} speed={100} /></td>
        <td>{player.wpm} WPM</td>
      </tr>
    ) : <td>Loading</td>
    return (
      <div className="Leaderboard">
        <h1>PLACAR</h1>
        <table className="table">
          <tbody>
            {!this.props.isFetching &&
              players}
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