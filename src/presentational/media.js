import React from "react";
import {formats} from "../util/constants";

export default class extends React.Component {
	constructor(props) {
		super(props);

        const playBackRateEnabled = this.testPlaybackRate();

		this.props.updateOption("playbackRateEnabled", playBackRateEnabled);

        // Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
        if(playBackRateEnabled) {
            this.currentMedia.defaultPlaybackRate = this.props.defaultPlaybackRate;
            this.currentMedia.playbackRate = this.props.playbackRate;
        }
		debugger

        const formats = this.getFormats();
        const playableFormat = this.getPlayableFormat(formats);
        const supportedFormats = this.getSupportedFormats(formats);
	}
    getFormats = () => {
        var formats = []; // Array based on supplied string option. Order defines priority.

        // Create the formats array, with prority based on the order of the supplied formats string
		for (var index1 = 0; index1 < this.props.supplied.length; index1++) {
			var format = this.props.supplied[index1].replace(/^\s+|\s+$/g, ""); //trim

			if(format[format]) { // Check format is valid.
				var dupFound = false;

				for (var index2 = 0; index2 < formats.length; index2++) {
					var value2 = formats[index2];

					if(format === value2) {
						dupFound = true;
						break;
					}
				}

				if(!dupFound) {
					formats.push(format);
				}
			}
		}
		return formats;
    }
    getPlayableFormat = (formats) => {
		const audio = {
			require: false
		};
		const video = {
			require: false
		};
		let playableFormat = {};

		for (var priority in formats) {
			var format = formats[priority];
			const mediaType = formats[format].media;
			const media = document.createElement(mediaType);
			[formats[format].media].require = true;

			playableFormat = {
				[format]: mediaType.available && this._testCanPlayType(media, formats[format].CODEC),
				desired: audio.require || video.require
			}
		} 
		return playableFormat;
    }
    getSupportedFormats = (formats, playableFormat) => {
        // This is what jPlayer will support, based on solution and supplied.
		const support = {};

		for (var priotity = 0; priotity < formats.length; priotity++) {
			var format = formats[priotity];

			support[format] = playableFormat[format] && playableFormat.desired;
		}

		// If jPlayer is supporting any format in a solution, then the solution is used.
		let used = false;

		for (var formatPriority in formats) {
			var format = formats[formatPriority];

			if(support[format]) {
				used = true;
				break;
			}
		}
		return support;
    }
    _testPlaybackRate = (media) => {
        var rate = 0.5;

        // Wrapping in a try/catch, just in case older HTML5 browsers throw and error.
        try {
            if("playbackRate" in media) {
                media.playbackRate = rate;
                return media.playbackRate === rate;
            } else {
                return false;
            }
        } catch(err) {
            return false;
        }
    }
    _testCanPlayType = (media, codec) => {
        // IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
        try {
            media.canPlayType(codec); // The type is irrelevant.
            return true;
        } catch(err) {
            return false;
        }
    }
    setMediaRef = (ref) => {
        this.currentMedia = ref;
    }
	componentDidMount() {
		this.currentMedia.volume = this.props.volume;
		this.currentMedia.muted = this.props.muted;
		this.currentMedia.autoplay = this.props.autoPlay;
		this.currentMedia.loop = this.props.loop === "loop" ? true : false;

		if (this.currentMedia) {
			this.currentMedia.available = this.currentMedia.canPlayType && this._testCanPlayType(this.currentMedia, formats.mp3.CODEC); // Test is for IE9 on Win Server 2008. 
		}
	}
	render() {
		return (
            <div>
			    {this.require.audio && <Audio mediaRef={this.setMediaRef} />}
			    {this.require.video && <Video />}
            </div>
		);
	}
}