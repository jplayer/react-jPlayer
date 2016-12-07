import React from "react";
import Video from "./jPlayer/video";
import Audio from "./jPlayer/audio";
import jPlayer from "./jPlayer/index";
import {formats} from "./util/constants";
import {testPlaybackRate, testCanPlayType} from "./util/index";

const media = (...WrappedComponents) => class extends React.Component {
	constructor(props) {
		super(props);
	
		WrappedComponents = jPlayer(...WrappedComponents);
		
        this.setFormats();
        this.setPlayableFormat();
	}
	static get defaultProps() {
		return {
			supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
			playbackRate: 1.0,
			defaultPlaybackRate: 1.0,		
			volume: 0.8, // The volume. Number 0 to 1.
		}
	}
    setFormats = () => {
		this.medias = {
			audio: {
				NAME: "audio",
				formats: [] //Order defines priority.
			},
			video: {
				NAME: "video",
				formats: []
			}
		};
        // Create the formats array, with prority based on the order of the supplied formats string
		for (var index1 = 0; index1 < this.props.supplied.length; index1++) {
			const format = this.props.supplied[index1].replace(/^\s+|\s+$/g, ""); //trim
			const media = this.medias[formats[format].MEDIA];

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
		for (var key in this.medias) {
			const media = this.medias[key];
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
    setMediaRef = (ref) => {
        this.currentMedia = ref;
    }
	componentDidMount() {
		const playBackRateEnabled = testPlaybackRate(this.currentMedia);

		this.props.updateOption("playbackRateEnabled", playBackRateEnabled);

        // Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
        if(playBackRateEnabled) {
            this.currentMedia.defaultPlaybackRate = this.props.defaultPlaybackRate;
            this.currentMedia.playbackRate = this.props.playbackRate;
        }

		this.currentMedia.volume = this.props.volume;
		this.currentMedia.muted = this.props.muted;
		this.currentMedia.autoplay = this.props.autoPlay;
		this.currentMedia.loop = this.props.loop === "loop" ? true : false;
	}
	render() {
		return (
			<WrappedComponents {...this.props} {...this.medias}>
			    <Audio mediaRef={this.setMediaRef} require={this.medias.audio.require} />
				<Video mediaRef={this.setMediaRef} require={this.medias.video.require} />
			</WrappedComponents>
		);
	}
}

export default media;