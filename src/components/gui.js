import React from "react";
import * as constants from "../util/constants";

export default class extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};
	}
	static get propTypes() {
		return {
			restored: React.PropTypes.bool, // Controls the interface autohide feature.
			full: React.PropTypes.bool, // Controls the interface autohide feature.
			hold: React.PropTypes.number, // Milliseconds. The period of the pause before autohide beings.
			fullWindow: React.PropTypes.bool,
			nativeVideoControls: React.PropTypes.bool,
			fadeInConfig: React.PropTypes.object,
			fadeOutConfig: React.PropTypes.object
		}
	}
	static get defaultProps() {
		return {
			fadeInConfig: {
				stiffness: 40 // Velocity of the animation (higher the faster), other properties automatically set in the Motion component
			},
			fadeOutConfig: {
				stiffness: 40 
			},
			restored: false, // Controls the interface autoHide feature.
			full: true, // Controls the interface autoHide feature.
			hold: 2000 // Milliseconds. The period of the pause before autoHide beings.
		}
	}	
	_setFading = (event) => {	
		if (!this.state.isFadingIn) {
			this.fadeHoldTimeout = setTimeout(() => {
				this.setState({isFadingIn: false});
			}, this.props.hold);
		}
		
		this.setState({isFadingIn: true});
	}
	render() {
		return (
			this.props.fullWindow && this.props.full || !this.props.fullWindow && this.props.restored ?
				<div className={this.props.nativeVideoControls ? constants.classNames.HIDDEN : null} onMouseMove={this._setFading} style={GUI_WRAPPER_STYLE}>
					<Motion defaultStyle={{opacityToInterpTo: 1}} style={{opacityToInterpTo: spring(this.state.isFadingIn ? 1 : 0, this.state.isFadingIn ? this.props.fadeInConfig : this.props.fadeOutConfig)}}>
						{values => 
							<div className="jp-gui" onMouseLeave={() => this.setState({isFadingIn: false})} onMouseEnter={() => clearTimeout(this.fadeHoldTimeout)} 
								style={{opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : ""}}>
								{this.props.children}
							</div>
						}
					</Motion>
				</div>
			:	<div className={this.props.nativeVideoControls ? "jp-gui " + constants.className.HIDDEN : "jp-gui"}>{this.props.children}</div>
		);
	}
}

const GUI_WRAPPER_STYLE = {
	width: "100%", 
	height: "100%", 
	position: "fixed", 
	top: "0"
}