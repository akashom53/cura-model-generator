import React, { Component } from 'react'
import dartIcon from '../../../assets/dart_icon_selected.svg'

export default class FileItem extends Component {

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
				className={`file-item ${this.props.selected ? 'selected' : this.state.hover ? 'hover' : ''}`}
				onMouseEnter={(_) => this.onMouseEnter()}
				onMouseLeave={(_) => this.onMouseExit()}
				onClick={this.props.onClick}>
				<img src={dartIcon} />
				<h1>{this.props.fileName}</h1>
			</div>
		)
	}
}
