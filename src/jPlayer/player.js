import React from "react";
import * as util from "../util/index";

export default class extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

        this.assignStyle = util.assignStyle.bind(this);
	}
    componentWillReceiveProps(prevProps, prevState) {
        if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
			this.assignStyle({width: this.props.width, height: this.props.height}, "PlayerStyle");
		}
    }
	render() {
		return (
            <div className={this.props.className} style={this.state.PlayerStyle}>
                {this.props.children}	 
            </div>
		);
	}
};