import React, { Component } from 'react'
import { connect } from "react-redux";

import './Speedometer.sass'

class Speedometer extends Component {

  velocimeter() {
    if (this.props.value <= this.props.min) return 4
    if (this.props.value > this.props.max) return this.props.max
    return this.props.value * 1.76
  }
	render() {
		const divStyle = {
			transform: `rotate(${this.velocimeter()}deg)`
		}
		return (
			<div className="Speedometer">
				<div className="speedometer">
					<div className="velocimeter">
            <div className="display-value">
              <span className="speed">{this.props.value}</span>
              <span>WPM</span>
            </div>
						<div className="pointer" style={divStyle}></div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { ...state.game }
}

export default connect(mapStateToProps)(Speedometer);