import React from "react";
import * as constants from "../util/constants";

export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	onLoad = () => {
		if(!this.props.video || this.props.waitForPlay) {
			this.props.updateOption(constants.keys.POSTER_CLASS, constants.classNames.HIDDEN);
		}
	}
	render() {
		return (
			<img className={this.props.posterClass} src={this.props.src} onLoad={this.onLoad} onClick={this.props.onClick} />
		);
	}
}