import React from "react";
import {connect} from "react-redux";
import merge from "lodash.merge";

import {classNames, keys, formats, timeFormats, loopOptions, noFullWindows, noVolumes, errors, errorMessages, errorHints} from "../util/constants";
import {testCanPlayType, absoluteMediaUrls} from "../util/index";
import reducer from "../reducers/index";
import {setMedia, clearMedia, updateOption, addUniqueToArray, removeFromArrayByValue} from "../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    ...state.jPlayer
});

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

export default connect(mapStateToProps)(
    class extends React.PureComponent {
        constructor(props) {
            super(props);
            
            this.state = {
                [keys.PLAYER_CLASS]: [],
            };
			// The key control object, defining the key codes and the functions to execute.
			this.keyBindings = merge({
				// The parameter, f = this.focusInstance, will be checked truethy before attempting to call any of these functions.
				// Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
				play: {
					key: 80, // p
					fn: () => this.props.paused ? this.play() : this.pause()
				},
				fullScreen: {
					key: 70, // f
					fn: () => {
						if(this.props.mediaSettings.available && this.props.mediaSettings.video || this.props.audioFullScreen) {
							this.fullScreen(!this.props.fullScreen);
						}
					}
				},
				muted: {
					key: 77, // m
					fn: () => this.mute(!this.props.muted)
				},
				volumeUp: {
					key: 190, // .
					fn: () =>  this.volume(this.props.volume + 0.1)
				},
				volumeDown: {
					key: 188, // ,
					fn: () => this.volume(this.props.volume - 0.1)
				},
				loop: {
					key: 76, // l
					fn: () => this.incrementLoop()
				}
			}, this.props.keyBindings);
			this.timeFormats = merge(timeFormats, this.props.timeFormats);	

			this.loopOptions = [
				loopOptions.OFF,
				loopOptions.LOOP		
			].concat(this.props.loopOptions);

			this.noFullWindow = merge({
				...noFullWindows
			}, this.props.noFullWindow);

			this.noVolume = merge({
				...noVolumes
			}, this.props.noVolume);
        }
        static get propTypes() {
            return {
                stateClass: React.PropTypes.objectOf(React.PropTypes.string)
            }
        }
        static get childContextTypes() {
 			return {
 				setCurrentMedia: React.PropTypes.func,
                getCurrentMedia: React.PropTypes.func,
                setMedia: React.PropTypes.func,
				clearMedia: React.PropTypes.func,
				play: React.PropTypes.func,
				pause: React.PropTypes.func,
				playHead: React.PropTypes.func,
				focus: React.PropTypes.func,
				volume: React.PropTypes.func,
				mute: React.PropTypes.func,
				unmute: React.PropTypes.func,
				incrementLoop: React.PropTypes.func,
				fullScreen: React.PropTypes.func,
				duration: React.PropTypes.func,
				playbackRate: React.PropTypes.func,
             }
        }
        getChildContext = () => ({
            setCurrentMedia: (ref) => this.currentMedia = ref,
            getCurrentMedia: () => this.state.currentMedia,
            setMedia: this.setMedia,
			clearMedia: this.clearMedia,
			play: this.play,
			pause: this.pause,
			playHead: this.playHead,
			focus: this.focus,
			volume: this.volume,
			mute: this.mute,
			unmute: this.unmute,
			incrementLoop: this.incrementLoop,
			fullScreen: this.fullScreen,
			duration: this.duration,
			playbackRate: this.playbackRate
        })
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

            this.props.dispatch(updateOption("mediaSettings", mediaSettings));
        }
		_urlNotSetError = (context) => {
			this._error({
				type: errors.URL_NOT_SET,
				context: context,
				message: errorMessages.URL_NOT_SET,
				hint: errorHints.URL_NOT_SET
			});
		}
		_trigger = (func, error) => {
			// var jPlayerOptions = {
			// 	version: Object.assign({}, version),
			// 	element: this.currentMedia,
			// 	error: Object.assign({}, error)
			// }

			// if (func !== undefined) {
			// 	func.bind(this)(jPlayerOptions);
			// }
		}
		_error = (error) => this._trigger(this.props.onError, error);
		// updateOnOptionsChanged = (key) => {
		// 	switch (key) {
		// 		case "noVolume":
		// 			this._updateMute();
		// 			this.props.dispatch(updateOption("noVolume", uaBlocklist(this.props.noVolume));
		// 			break;
		// 		// case "keyEnabled":
		// 		// 	if(!value && this === focusInstance) {
		// 		// 		focusInstance = null;
		// 		// 	}
		// 		// 	break;
		// 		default:
		// 			break;
		// 	}	
		// }
        setMedia = (media) => {
			
		}
		clearMedia = () => {
            
		}
		play = (time) => {
			
		}
		pause = (time) => {
			if(this.props.srcSet) {
				this.currentMedia.pause();
				if (!isNaN(time)) {
					this.currentMedia.currentTime = time;
				}
			} else {
				this._urlNotSetError("pause");
			}
		}
		playHead = (percent) => {
			const limitedPercent = limitValue(percent, 0, 100);

			if(this.props.srcSet) {
				this.currentMedia.currentTime = percent * this.currentMedia.seekable.end(this.currentMedia.seekable.length-1) / 100;	
			} else {
				this._urlNotSetError("playHead");
			}
		}
		volume = (volume) => {
			volume = limitValue(volume, 0, 1);
            this.props.dispatch(updateOption("volume", volume));
		}
        mute = (mute) => this.props.dispatch(updateOption("muted", mute));
        duration = () => this.props.dispatch(updateOption("remainingDuration", !this.props.remainingDuration))
        playbackRate = (playbackRate) => this.props.dispatch(updateOption("playbackRate", limitValue(playbackRate, this.props.minPlaybackRate, this.props.maxPlaybackRate)))
		incrementLoop = () => {
			var loopIndex = this.loopOptions.indexOf(this.props.loop || this.loopOptions[0]);

			if (loopIndex >= this.loopOptions.length - 1) {
				loopIndex = -1;
			}
            this.props.dispatch(updateOption("loop", this.loopOptions[++loopIndex]));
		}
		_loop = () => this._trigger(this.props.onRepeat)
		fullScreen = (fullScreen) => {
			fullScreen ? screenfull.request(document.getElementById(this.props.jPlayerSelector)) : screenfull.exit();
            this.props.dispatch(updateOption("fullScreen", fullScreen));
			// var wkv = nativeFeatures.fullscreen.used.webkitVideo;
			// if(!wkv || wkv && !this.props.waitForPlay) {
			// 	if(fullScreen) {
			// 		this._requestFullscreen();
			// 	} else {
			// 		this._exitFullscreen();
			// 	}
			// 	if(!wkv) {
            //         this.props.dispatch(updateOption("fullWindow", this.props.fullScreen));
			// 	}
			// }
		}
		// fullWindow = () => {
		// 	const sizeClass = this.props.fullWindow ? this.props.sizeFullCssClass : this.props.sizeCssClass;
		// 	this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.PLAYER_CLASS, this.props.cssClass);
		// 	this.setState(state => reducer.addUniqueToArray(state, reducer.addUniqueToArray(keys.PLAYER_CLASS, this.stateClass[sizeClass]);
		// 	//this.props.dispatch(updateOption("cssClass", sizeClass, () => this._trigger(this.props.onResize));		
		// }
		// _requestFullscreen = () => {
		// 	var e = document.querySelector(this.props.cssSelectorAncestor),
		// 		fs = nativeFeatures.fullscreen;

		// 	// This method needs the video element. For iOS and Android.
		// 	if(fs.used.webkitVideo) {
		// 		e = this.currentMedia;
		// 	}

		// 	if(fs.api.fullscreenEnabled) {
		// 		fs.api.requestFullscreen(e);
		// 	}
		// }
		// _exitFullscreen = () => {
		// 	var fs = nativeFeatures.fullscreen,
		// 		e;

		// 	// This method needs the video element. For iOS and Android.
		// 	if(fs.used.webkitVideo) {
		// 		e = this.video.element();
		// 	}

		// 	if(fs.api.fullscreenEnabled) {
		// 		fs.api.exitFullscreen(e);
		// 	}
		// }
        _updatePlayerStyles = (nextProps) => {
            if(!nextProps.paused) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.PLAYING)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.PLAYING)));
            }
            if(!nextProps.noFullWindow && nextProps.fullWindow) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.FULL_SCREEN)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.FULL_SCREEN)));
            }
            if(nextProps.noVolume) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.NO_VOLUME)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.NO_VOLUME)));
            }
            if(nextProps.muted) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.MUTED)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.MUTED)));
            }
            if (nextProps.seeking) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.SEEKING)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.SEEKING)));
            }
            if(nextProps.loop === "loop") {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.LOOPED)));
            } else if (nextProps.loop === "loop-playlist") {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.LOOPED)));
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.LOOPED_PLAYLIST)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.LOOPED_PLAYLIST)));
            }
            if (nextProps.shuffled) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states.SHUFFLED)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYER_CLASS, classNames.states.SHUFFLED)));
            }
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
        componentWillReceiveProps(nextProps) {
            this._updatePlayerStyles(nextProps);
			this._updateSize(nextProps);
        }
		componentWillMount() {
			this.setFormats();
			this.props.dispatch(setMedia(this.props.media));
		}
        componentDidMount() {
            if(this.props.mediaSettings.video) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, "jp-video")));
                if (this.props.sizeCssClass !== undefined) {
                    this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, "jp-video-270p")));
                }

                if (this.props.sizeFullCssClass !== undefined) {
                    this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, "jp-video-full")));
                }
            } else {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, "jp-audio")));
            }

            const sizeClass = this.props.fullScreen ? this.props.sizeFullCssClass : this.props.sizeCssClass;

            if (this.props.sizeClass !== undefined) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYER_CLASS, classNames.states[sizeClass])));
            }
        }
        render() {
            const {setCurrentMedia, ...childProps} = {...this.getChildContext()}

            return (
                <div id={this.props.cssSelectorAncestor} className={this.state[keys.PLAYER_CLASS].join(" ")}>
                    {React.Children.map(this.props.children, child => React.cloneElement(child, childProps))}
                </div>
            );
        }
    }
)

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
    volume: 0.8, // The volume. Number 0 to 1
	mediaSettings: {
		video: false,
		formats: [], //Order defines priority.
		available: false,
		playableFormat: []
	},
};