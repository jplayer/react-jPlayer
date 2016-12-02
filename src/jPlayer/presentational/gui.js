import React from "react";
import {Motion, spring} from "react-motion";
import * as util from "../util/index";

export class extends React.Component {
	constructor() {
		super();
		
		this.state = {};
	}
	_setFading = (event) => {	
		if (!this.state.isFadingIn) {
			this.fadeHoldTimeout = setTimeout(() => {
				this.setState({isFadingIn: false});
			}, this.props.autoHide.hold);
		}
		
		this.setState({isFadingIn: true});
	}
	render() {
		return (
			this.props.fullWindow && this.props.autoHide.full || !this.props.fullWindow && this.props.autoHide.restored ?
				<div className={this.props.nativeVideoControls ? util.className.hidden : null} onMouseMove={this._setFading} style={{width: "100%", height: "100%", position: "fixed", top: "0"}}>
					<Motion defaultStyle={{opacityToInterpTo: 1}} style={{opacityToInterpTo: spring(this.state.isFadingIn ? 1 : 0, this.state.isFadingIn ? this.props.fadeInConfig : this.props.fadeOutConfig)}}>
						{values => <div className="jp-gui" onMouseLeave={() => this.setState({isFadingIn: false})} onMouseEnter={() => clearTimeout(this.fadeHoldTimeout)} style={{opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : ""}}>
							{this.props.children}
						</div>}
					</Motion>
				</div>
			:	<div className={this.props.nativeVideoControls ? "jp-gui " + util.className.hidden : "jp-gui"}>{this.props.children}</div>
		);
	}
};