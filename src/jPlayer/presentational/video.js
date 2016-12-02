import React from "react";

export default class extends React.Component {
	element = () => this.videoElement
	render(){
		return (
			this.props.require &&
				<video ref={(videoElement) => this.videoElement = videoElement} className={this.props.videoClass} style={this.props.style} onClick={this.props.onClick} {...this.props.events}>
					{this.props.children}
				</video>
		);
	}
}