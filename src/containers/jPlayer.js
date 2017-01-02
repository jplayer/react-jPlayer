import React from "react";
import {connect} from "react-redux";
import merge from "lodash.merge";
import screenfull from "screenfull";
import {default as setClassNames} from "classnames";

import {classNames, keys, formats, timeFormats, loopOptions, errors, errorMessages, errorHints} from "../util/constants";
import {testPlaybackRate, uaBlocklist, testCanPlayType, absoluteMediaUrls, updateOption} from "../util/index";
import actions, {setMedia, clearMedia} from "../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, {...ownProps}) => {
    return {
        ...jPlayers[selector],
        attributes: ownProps,
        selector
    };
}

class JPlayer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    
        this.timeFormats = merge(timeFormats, this.props.timeFormats);
    }
    static get propTypes() {
        return {
            stateClass: React.PropTypes.objectOf(React.PropTypes.string)
        }
    }
    setFormats = () => {
        const mediaSettings = merge({}, this.props.mediaSettings);

        // Create the formats array, with prority based on the order of the supplied formats string
        this.props.supplied.forEach(supplied => {
            const suppliedTrimmed = supplied.trim();

            mediaSettings.video = formats[suppliedTrimmed].MEDIA === "video" ? true : false;

            if(formats[suppliedTrimmed]) { // Check format is valid.
                var duplicateFound = mediaSettings.formats.some(format => format === suppliedTrimmed);

                if(!duplicateFound) {
                    mediaSettings.formats.push(suppliedTrimmed);
                }
            }
        });

        const mediaElement = document.createElement(mediaSettings.video ? "video" : "audio");

        mediaSettings.formats.forEach(format => {
            mediaSettings.available = mediaElement.canPlayType && testCanPlayType(mediaElement); // Test is for IE9 on Win Server 2008.
            mediaSettings.playableFormat = {
                [format]: mediaSettings.available && mediaElement.canPlayType(formats[format].CODEC)
            };
        });

        this.props.dispatch(actions.updateOption("mediaSettings", mediaSettings, this.props.selector));
    }
    _updateSize = (nextProps) => {
        // Video html resized if necessary at this time, or if native video controls being used.
        if(nextProps.mediaSettings.available && nextProps.mediaSettings.video && (!nextProps.waitForPlay || nextProps.nativeVideoControls)) {
            this.setState({videoStyle: {
                //width: !this.props.width,
                //height: this.props.height
            }});
        }
    }
    _logErrors = (nextProps) => {
        if (nextProps.logErrors && nextProps.error !== this.props.error) {
            console.error(nextProps.error);
        }
    }
    playerClasses = () => {
        return setClassNames(classNames.JPLAYER, this.props.attributes.className, {
            "jp-video": this.props.mediaSettings.video,
            "jp-video-270p": this.props.sizeCssClass !== undefined,
            "jp-video-full": this.props.sizeFullCssClass !== undefined,
            "jp-audio": !this.props.mediaSettings.video,
            [classNames.states.PLAYING]: !this.props.paused,
            [classNames.states.FULL_SCREEN]: this.props.fullScreen,
            [classNames.states.MUTED]: this.props.muted,
            [classNames.states.VOLUME_LOW]: !this.props.muted && this.props.volume < 0.5,
            [classNames.states.VOLUME_HIGH]: !this.props.muted && this.props.volume >= 0.5,
            [classNames.states.SEEKING]: this.props.seeking,
            [classNames.states.LOOPED]: this.props.loop === loopOptions.LOOP,
            [classNames.states.SHUFFLED]: this.props.shuffled
        });
    }
    toggleFullScreen = () => this.props.dispatch(actions.updateOption("fullScreen", screenfull.isFullscreen, this.props.selector))
    componentWillReceiveProps(nextProps) {
        this._updateSize(nextProps);
        this._logErrors(nextProps);
    }
    componentWillMount() {
        this.setFormats();
        // Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
        // if(this.props.keyEnabled && !focusInstance) {
        // 	focusInstance = this;
        // }

        document.addEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
    }
    componentDidMount() {
        this.props.dispatch(setMedia(this.props.media, this.props.selector));
    }
    componentWillUnmount() {
        document.removeEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
    }
    render() {
        const playerClasses = this.playerClasses();

        return (
            <div {...this.props.attributes} className={playerClasses}>
                {this.props.children}
            </div>
        );
    }
}
export default connect(mapStateToProps)(JPlayer);
export const defaultValues = {
    mediaSettings: {
		video: false,
		formats: [], // Order defines priority.
		available: false,
		playableFormat: []
	},
}

export const statusDefaultValues = {
    paused: true,
    format: {},
    formatType: "",
    waitForPlay: true, // Same as waitForLoad except in case where preloading.
    waitForLoad: true,
    srcSet: false,
    video: false, // True if playing a video
    seekPercent: 0,
    currentPercentRelative: 0,
    currentPercentAbsolute: 0,
    newTime: 0,
    currentTime: 0,
    duration: 0,
    remaining: 0,
    videoWidth: 0, // Intrinsic width of the video in pixels.
    videoHeight: 0, // Intrinsic height of the video in pixels.
    readyState: 0,
    networkState: 0,
    ended: 0
};

export const jPlayerDefaultOptions = {
    preload: "metadata", // HTML5 Spec values: none, metadata, auto.
    globalPause: true,
    captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.	
    minPlaybackRate: 0.5,
    maxPlaybackRate: 4,
    supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
    loopOptions: ["loop-playlist"],
    playbackRate: 1.0,
    defaultPlaybackRate: 1.0,
    bufferColour: "#dddddd", // Canvas fillStyle property Colour, gradient or pattern (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
    volume: 0.8, // The volume. Number 0 to 1
    barDrag: true,
    playbackRateTextDigits: 1, //The number of digits to appear after the decimal point
    media: {}
};