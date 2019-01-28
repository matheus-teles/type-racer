import React from 'react';

import './DelayedMessage.sass'


class DelayedMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { presentedMessage: "" }
  }

	componentDidMount() {
		this.props.message.split("").forEach((letter, index) => {
			this.setDelay(letter, index)
		});
	}
	setDelay(letter, index) {
    setTimeout(() => {
      this.setState((state, props) => ({
        presentedMessage: state.presentedMessage + letter
      }));
    }, 100 * index + 1)
	}
	render() {
		return (
			<div className="DelayedMessage">
				<h1>
        {this.state.presentedMessage}<span className="flashing-text"></span>
				</h1>
			</div>
		)
	}
}

export default DelayedMessage