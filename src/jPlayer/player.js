import React from "react";
import * as util from "../util/index";
import controls from "./controls";
import * as constants from "../util/constants";

export default (WrappedComponent, AdditionalControls) => {
	const Controls = controls(AdditionalControls);
    return class extends React.Component {
		constructor(props) {
			super(props);
			
			this.state = {};

			this.assignStyle = util.assignStyle.bind(this);
		}
		static get defaultProps() {
			return {
				[constants.keys.PLAYER_CLASS]: []
			};
		}
		componentWillReceiveProps(prevProps, prevState) {
			if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
				this.assignStyle({width: this.props.width, height: this.props.height}, "PlayerStyle");
			}
		}
		render() {
			return (
				<WrappedComponent>
					<div id={this.props.cssSelectorAncestor} className={this.props[constants.keys.PLAYER_CLASS].join(" ")}>
						{this.props.children}
						<div className={"jp-jplayer"} style={this.state.PlayerStyle}>
						</div>
						{/*<Player className={"jp-jplayer"}>
							<Poster posterClass={this.props[constants.keys.POSTER_CLASS].join(" ")} src={this.state.posterSrc} onLoad={this._posterLoad} onClick={() => this._trigger(this.props.onClick)} /> 
							<Audio ref={(audio) => this.audio = audio} require={this.require.audio} events={this.mediaEvent}>
								{this.state.tracks}
							</Audio>
							<Video ref={(video) => this.video = video} require={this.require.video} videoClass={this.props[constants.keys.VIDEO_CLASS].join(" ")} style={this.state.videoStyle} onClick={() => this._trigger(this.props.onClick)} events={this.mediaEvent}>
								{this.state.tracks}
							</Video>		
						</Player>
						<GUI nativeVideoControls={this.props.nativeVideoControls} fullWindow={this.props.fullWindow} autoHide={this.autoHide} fadeInConfig={this.props.guiFadeInAnimation} fadeOutConfig={this.props.guiFadeOutAnimation}>
							<Controls {...this.props}>
								{...this.props.additionalControls}
								<AdditionalControls {...this.props}/>
							</Controls>
							<Progress />
						</GUI>
						<constants.browserUnsupported />	*/}
					</div>
				</WrappedComponent>
			);
		}
	}
};