import React from "react";
import {connect} from "react-redux";

import * as constants from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
	fullScreen: state.jPlayer.fullScreen,
	full: state.jPlayer.full,
	hold: state.jPlayer.hold,
	fadeInConfig: state.jPlayer.fadeInConfig,
	fadeOutConfig: state.jPlayer.fadeOutConfig,
	attributes: ownProps
});

export default connect(mapStateToProps)(
	class extends React.Component {
		constructor(props) {
			super(props);
			
			this.state = {};
		}
		static get propTypes() {
			return {
				restored: React.PropTypes.bool, // Controls the interface autohide feature.
				full: React.PropTypes.bool, // Controls the interface autohide feature.
				hold: React.PropTypes.number, // Milliseconds. The period of the pause before autohide beings.
				nativeVideoControls: React.PropTypes.bool,
				fadeInConfig: React.PropTypes.object,
				fadeOutConfig: React.PropTypes.object
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
				this.props.fullScreen && this.props.full || !this.props.fullScreen && this.props.restored ?
					<div className={this.props.nativeVideoControls ? constants.classNames.HIDDEN : null} onMouseMove={this._setFading} style={STYLE}>
						<Motion defaultStyle={{opacityToInterpTo: 1}} style={{opacityToInterpTo: spring(this.state.isFadingIn ? 1 : 0, this.state.isFadingIn ? this.props.fadeInConfig : this.props.fadeOutConfig)}}>
							{values => 
								<div className="jp-gui" onMouseLeave={() => this.setState({isFadingIn: false})} onMouseEnter={() => clearTimeout(this.fadeHoldTimeout)} 
									style={{opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : ""}} {...this.props.attributes}>
									{this.props.children}
								</div>
							}
						</Motion>
					</div>
				:	<div className={this.props.nativeVideoControls ? "jp-gui " + constants.className.HIDDEN : "jp-gui"} {...this.props.attributes}>{this.props.children}</div>
			);
		}
	}
);

const STYLE = {
	width: "100%", 
	height: "100%", 
	position: "fixed", 
	top: "0"
}