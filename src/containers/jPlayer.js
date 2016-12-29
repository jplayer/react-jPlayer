import React from "react";
import {connect} from "react-redux";
import merge from "lodash.merge";
import screenfull from "screenfull";
import {default as setClassNames} from "classnames";

import {classNames, keys, formats, timeFormats, loopOptions, errors, errorMessages, errorHints} from "../util/constants";
import {testPlaybackRate, uaBlocklist, testCanPlayType, absoluteMediaUrls, addUniqueToArray, removeFromArrayByValue, updateOption, updateObjectByKey} from "../util/index";
import actions, {setMedia, clearMedia} from "../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    ...state.jPlayer,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                [keys.PLAYER_CLASS]: [],
            };
		
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

            this.props.dispatch(actions.updateOption("mediaSettings", mediaSettings));
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
        _updatePlayerStyles = (nextProps) => {
            if(!nextProps.paused) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.PLAYING)));
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.PLAYING)));
            }
            if(nextProps.fullScreen) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.FULL_SCREEN)));
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.FULL_SCREEN)));
            }
            if(nextProps.noVolume) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.NO_VOLUME)));;
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.NO_VOLUME)));;
            }
            if(nextProps.muted) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.MUTED)));;
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.MUTED)));;
            }
            if (nextProps.seeking) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.SEEKING)));;
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.SEEKING)));;
            }
            if(nextProps.loop === loopOptions.LOOP) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.LOOPED)));;
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.LOOPED)));;
            }
            // if(nextProps.loop === loopOptions.LOOP) {
            //     this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.LOOPED)));;
            // } else if (nextProps.loop === loopOptions.LOOP_PLAYLIST) {
            //     this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.LOOPED)));;
            //     this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.LOOPED_PLAYLIST)));;
            // } else {
            //     this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.LOOPED_PLAYLIST)));;
            // }
            if (nextProps.shuffled) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.SHUFFLED)));;
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.SHUFFLED)));;
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updatePlayerStyles(nextProps);
			this._updateSize(nextProps);
            this._logErrors(nextProps);
        }
		componentWillMount() {
			this.setFormats();
            // Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
			// if(this.props.keyEnabled && !focusInstance) {
			// 	focusInstance = this;
			// }

            document.addEventListener(screenfull.raw.fullscreenchange, () => this.props.dispatch(actions.updateOption("fullScreen", screenfull.isFullscreen)));
		}
        componentDidMount() {
            if (Object.keys(this.props.media).length) {
                this.props.dispatch(setMedia(this.props.media));   
            }
            
            if(this.props.mediaSettings.video) {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, "jp-video")));;
                if (this.props.sizeCssClass !== undefined) {
                    this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, "jp-video-270p")));;
                }

                if (this.props.sizeFullCssClass !== undefined) {
                    this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, "jp-video-full")));;
                }
            } else {
                this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, "jp-audio")));;
            }
        }
        render() {
            return (
                <div id={this.props.cssSelectorAncestor} className={this.state[keys.PLAYER_CLASS].join(" ")} {...this.props.attributes}>
                    {this.props.children}
                </div>
            );
        }
    }
)

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
    ended: 0,
	src: ""
};

export const jPlayerDefaultOptions = {
    jPlayerSelector: "jplayer_1",
    cssSelectorAncestor: "jp_container_1",
    preload: "metadata", // HTML5 Spec values: none, metadata, auto.
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