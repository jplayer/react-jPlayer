import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import Video from "../components/video";
import Audio from "../components/audio";
import jPlayer from "./jPlayer";
import jPlaylist from "./jPlaylist";
import {keys, formats} from "../util/constants";
import {testPlaybackRate, testCanPlayType} from "../util/index";
import Poster from "../components/poster";
import NativeVideoControls from "../components//nativeVideoControls";
import * as actions from "../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => {
    return {
		supplied: state.jPlayer.supplied,
		posterOnClick: state.jPlayer.posterOnClick,	
        volume: state.jPlayer.volume,
        muted: state.jPlayer.muted,
        autoplay: state.jPlayer.autoplay,
        loop: state.jPlayer.loop,
        width: state.jPlayer.width,
        height: state.jPlayer.height,
        video: state.jPlayer.video,
        tracks: state.jPlayer.tracks,
        waitForPlay: state.jPlayer.waitForPlay,
        mediaEvent: state.jPlayer.mediaEvent,
		playbackRateEnabled: state.jPlayer.playbackRateEnabled
	}
};
const mapDispatchToProps = (dispatch) => (bindActionCreators(actions, dispatch));

const media = WrappedComponent => connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

        this.setFormats();
        this.setPlayableFormat();
	}
	static get defaultProps() {
		return {
			supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
			playbackRate: 1.0,
			defaultPlaybackRate: 1.0,		
			volume: 0.8, // The volume. Number 0 to 1.
			[keys.POSTER_CLASS]: []
		}
	}
    setFormats = () => {
		this.media = {
			audio: {
				NAME: "audio",
				formats: [], //Order defines priority.
				require: false,
				available: false,
				playableFormat: []
			},
			video: {
				NAME: "video",
				formats: [],
				require: false,
				available: false,
				playableFormat: []
			}
		};
        // Create the formats array, with prority based on the order of the supplied formats string
		for (var index1 = 0; index1 < this.props.supplied.length; index1++) {
			const format = this.props.supplied[index1].replace(/^\s+|\s+$/g, ""); //trim
			const media = this.media[formats[format].MEDIA];

			if(formats[format]) { // Check format is valid.
				var dupFound = false;

				for (var index2 = 0; index2 < media.formats.length; index2++) {
					var value2 = formats[index2];

					if(format === value2) {
						dupFound = true;
						break;
					}
				}

				if(!dupFound) {
					media.formats.push(format);
				}
			}
		}
    }
    setPlayableFormat = () => {		
		for (var key in this.media) {
			const media = this.media[key];
			const mediaElement = document.createElement(media.NAME);

			for (var priority in media.formats) {
				var format = media.formats[priority];
						
				media.require = true;
				media.available = mediaElement.canPlayType && testCanPlayType(mediaElement); // Test is for IE9 on Win Server 2008. 
				media.playableFormat = {
					[format]: media.available && mediaElement.canPlayType(formats[format].CODEC)
				}
			}
		}
    }
    setMediaRef = (ref) => this.currentMedia = ref;
	componentDidMount() {
		this.props.updateOption("playbackRateEnabled", testPlaybackRate(this.currentMedia));  
	}
	componentDidUpdate() {
		// Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
		if(this.props.playbackRateEnabled) {
            this.currentMedia.defaultPlaybackRate = this.props.defaultPlaybackRate;
            this.currentMedia.playbackRate = this.props.playbackRate;
        }

		this.currentMedia.volume = this.props.volume;
		this.currentMedia.muted = this.props.muted;
		this.currentMedia.autoplay = this.props.autoplay;	
		this.currentMedia.loop = this.props.loop === "loop" ? true : false;
	}
	componentWillReceiveProps(prevProps, prevState) {
		if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
			this.setState({playerStyle: {width: this.props.width, height: this.props.height}});
		}
	}
	render() {
		return (
			<WrappedComponent>
				<div className={"jp-jplayer"} style={this.state.playerStyle}>
					<Poster video={this.media.video} waitForPlay={this.props.waitForPlay} posterClass={this.props[keys.POSTER_CLASS].join(" ")} src={this.props.posterSrc} onClick={this.props.posterOnClick} />					
					<Audio mediaRef={this.setMediaRef} require={this.media.audio.require} events={this.props.mediaEvent}>
						{this.props.tracks}
					</Audio>
					<Video mediaRef={this.setMediaRef} require={this.media.video.require} events={this.props.mediaEvent}>
						{this.props.tracks}
						{/*<NativeVideoControls />*/}
					</Video>
				</div>
			</WrappedComponent>
		);
	}
})

export default media;