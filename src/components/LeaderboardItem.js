import React from 'react';
import DelayedMessage from './DelayedMessage';


class LeaderboardItem extends React.Component {
  
  render() {
    const player = this.props.player
    return (
      <tr>
        <td>{player.rank}.</td>
        <td><DelayedMessage message={player.nickname} speed={100} /></td>
        <td>{player.wpm} WPM</td>
      </tr>
    )
  }
}


export default (LeaderboardItem)