import React from "react";

export default class extends React.Component {
	element = () => this.audioElement
	render() {
		return (
			this.props.require && 
            <audio ref={(audioElement) => this.audioElement = audioElement} {...this.props.events}>
                {this.props.children}
            </audio>
		);
	}
}