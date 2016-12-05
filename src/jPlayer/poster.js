import React from "react";

export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	onLoad = () => {
		if(!this.props.video || this.props.waitForPlay) {
			this.props.removeClass(keys.POSTER_CLASS, classNames.HIDDEN);
		}
	}
	render() {
		return (
			<img className={this.props.posterClass} src={this.props.src} style={this.props.style} onLoad={this.onLoad} onClick={this.props.onClick} />
		);
	}
}