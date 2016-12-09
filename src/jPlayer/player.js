import React from "react";
import * as util from "../util/index";
import controls from "./controls";
import * as constants from "../util/constants";
import Controls from "./controls";

export default (WrappedComponent, AdditionalControls) => class extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {};

		controlProps = controlProps.bind(this);
	}
	static get defaultProps() {
		return {
			[constants.keys.PLAYER_CLASS]: []
		};
	}
	componentWillReceiveProps(prevProps, prevState) {
		if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
			//this.assignStyle({width: this.props.width, height: this.props.height}, "PlayerStyle");
		}
	}
	render() {
		return (
			<WrappedComponent>
				<div id={this.props.cssSelectorAncestor} className={this.props[constants.keys.PLAYER_CLASS].join(" ")}>
					{this.props.children}				
					<div className={"jp-jplayer"} style={this.state.PlayerStyle}>					
						<Poster posterClass={this.props[constants.keys.POSTER_CLASS].join(" ")} src={this.state.posterSrc} onLoad={this._posterLoad} onClick={() => this._trigger(this.props.onClick)} /> 
						<Audio ref={(audio) => this.audio = audio} require={this.require.audio} events={this.mediaEvent}>
							{this.state.tracks}
						</Audio>
						<Video ref={(video) => this.video = video} require={this.require.video} videoClass={this.props[constants.keys.VIDEO_CLASS].join(" ")} style={this.state.videoStyle} onClick={() => this._trigger(this.props.onClick)} events={this.mediaEvent}>
							{this.state.tracks}
						</Video>		
					</div>
					<GUI nativeVideoControls={this.props.nativeVideoControls} fullWindow={this.props.fullWindow} autoHide={this.autoHide} fadeInConfig={this.props.guiFadeInAnimation} fadeOutConfig={this.props.guiFadeOutAnimation}>
						<Controls {...controlProps()}>
							{React.cloneElement(AdditionalControls)}
						</Controls>
						<Progress />
					</GUI>
					<BrowserUnsupported />
				</div>
			</WrappedComponent>
		);
	}
}

function controlProps() {
	return {
		keyBindings: this.props.keyBindings,
		paused: this.props.paused,
		play: this.props.play,
		pause: this.props.pause,
		video: this.props.pause,
		audioFullScreen: this.props.audioFullScreen,
		setFullScreen: this.props.setFullScreen,
		fullScreen: this.props.fullScreen,
		mute: this.props.mute,
		muted: this.props.muted,
		setVolume: this.props.setVolume,
		volume: this.props.volume,
		setPlayHead: this.props.playhead,
		setPlaybackRate: this.props.setPlaybackRate,
		verticalPlaybackRate: this.props.verticalPlaybackRate,
		minPlaybackRate: this.props.minPlaybackRate,
		maxPlaybackRate: this.props.maxPlaybackRate,
		verticalVolume: this.props.verticalVolume,
		incrementLoop: this.props.incrementLoop,
		repeatClass: this.props.repeatClass,
		fullScreenClass: this.props.incrementLoop,
		volumeBarClass:this.props.volumeBarClass,
		volumeBarValueClass: this.props.volumeBarValueClass,
		playbackRateBarClass:this.props.playbackRateBarClass,
		playbackRateBarValueClass:this.props.playbackRateBarValueClass,
		html: {...this.props.html}
	}
}