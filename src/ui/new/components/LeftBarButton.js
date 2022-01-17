import React, { Component } from 'react'

export default class LeftBarButton extends Component {
	state = {
		hover: false,
	}

	onMouseEnter = () => {
		this.setState({
			hover: true,
		})
	}

	onMouseExit = () => {
		this.setState({
			hover: false,
		})
	}

	render() {
		return (
			<div
				className={`left-bar-button ${this.props.active ? 'left-bar-button-selected' : ''}`}
				onMouseEnter={(_) => this.onMouseEnter()}
				onMouseLeave={(_) => this.onMouseExit()}
				onClick={(_) => this.props.onClick()}>

				<img src={this.props.active
					? this.props.activeIcon
					: this.props.inactiveIcon}
					className={(this.props.active || this.state.hover) ? 'mouse-enter' : 'mouse-exit'} />
			</div>
		)
	}
}

