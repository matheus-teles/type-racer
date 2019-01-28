import React from 'react';

import './DelayedMessage.sass'


class DelayedMessage extends React.Component {
  constructor(props) {
    super(props)
		this.state = { presentedMessage: "" }
		this.timeouts = []
  }

	componentDidMount() {
		this.props.message.split("").forEach((letter, index) => {
			this.setDelay(letter, index)
		});
	}

	compo

	componentWillUnmount() {
		this.timeouts.forEach(timeout => {
			clearTimeout(timeout)
		})
	}
	setDelay(letter, index) {
    this.timeouts.push(setTimeout(() => {
      this.setState((state, props) => ({
        presentedMessage: state.presentedMessage + letter
      }));
    }, 80 * index + 1))
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