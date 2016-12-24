import React from "react";
import {connect} from "react-redux";
import merge from "lodash.merge";

import {testPlaybackRate, uaBlocklist} from "../util/index";
import {keys, classNames} from "../util/constants";
import {updateOption, addUniqueToArray, removeFromArrayByValue, pause} from "../actions/jPlayerActions";
import * as reducer from "../reducers/index";

const mapStateToProps = (state) => ({
    ...state.jPlayer
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {};
            this.events = {
                onProgress: () => {
                    this._updateMediaStatus();
                    this.props.onProgress();		
                },
                onTimeUpdate: () => {	
                    this._updateMediaStatus();
                    this.props.onTimeUpdate();
                },
                onDurationChange: () => {
                    this._updateMediaStatus();
                    this.props.onDurationChange();
                },
                onPlay: () => {
                    //When the autoPlay option is true
                    this.props.dispatch(updateOption("paused", false));
                    this.props.onPlay();
                },
                onEnded: () => {
                    // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
                    this.props.dispatch(pause());
                    // With override true. Otherwise Chrome leaves progress at full.
                    this._updateMediaStatus(true);
                 
                    if (this.props.loop === "loop") {	
                        this.props.onRepeat();
                    }
                    this.props.onEnded();
                },
                onError: () => {		
                    this.props.dispatch(pause());
                    this.props.dispatch(updateOption("seeking", false));
                    if(this.props.srcSet) { // Deals with case of clearMedia() causing an error event.
                        this.props.dispatch(updateOption("waitForLoad", true));
                        this.props.dispatch(updateOption("waitForPlay", true));
                        
                        if(this.mediaSettings.video.available && !this.props.nativeVideoControls) {
                            this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VIDEO_CLASS, classNames.HIDDEN)));
                        }

                        if(validString(this.props.media.poster) && !this.props.nativeVideoControls) {
                            this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.POSTER_CLASS, classNames.HIDDEN)));
                        }
                        this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));

                        this._error({
                            type: errors.URL,
                            context: this.props.src, // this.src shows absolute urls. Want context to show the url given.
                            message: errorMessages.URL,
                            hint: errorHints.URL
                        });
                    }
                    this.props.onError();
                },
                onPlaying: this.props.onPlaying,
                onPause: this.props.onPause,
                onWaiting: this.props.onWaiting,
                onSeeking: this.props.onSeeking,
                onSeeked: this.props.onSeeked,
                onSuspend: this.props.onSuspend,
                onVolumeChange: this.props.onVolumeChange,
                onRateChange: this.props.onRateChange,
                onLoadedData: this.props.onLoadedData,
                onLoadStart: this.props.onLoadStart,
                onAbort: this.props.onAbort,
                onEmptied: this.props.onEmptied,
                onStalled: this.props.onStalled,
                onLoadedMetadata: this.props.onLoadedMetadata,
                onCanPlay: this.props.onCanPlay,
                onCanPlayThrough: this.props.onCanPlayThrough
            };
        }
        static get defaultProps() {
            return {
                onProgress: () => null,
                onTimeUpdate: () => null,
                onDurationChange: () => null,
                onPlay: () => null,
                onEnded: () => null,
                onError: () => null
            }
        }
		static get contextTypes() {
			return {
				setCurrentMedia: React.PropTypes.func,
				getCurrentMedia: React.PropTypes.func
			}
		}
		_updateMediaStatus = (override) => {
			let ct = 0, cpa = 0, sp = 0, cpr = 0;

			const duration = this.currentMedia.duration;

			ct = this.currentMedia.currentTime;
			cpa = (duration > 0) ? 100 * ct / duration : 0;
			if((typeof this.currentMedia.seekable === "object") && (this.currentMedia.seekable.length > 0)) {
				sp = (duration > 0) ? 100 * this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / duration : 100;
				cpr = (duration > 0) ? 100 * this.currentMedia.currentTime / this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) : 0; // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
			} else {
				sp = 100;
				cpr = cpa;
			}

			if(override) {
				ct = 0;
				cpr = 0;
				cpa = 0;
			}

            this.props.dispatch(updateOption("seekPercent", sp));
            this.props.dispatch(updateOption("currentPercentRelative", cpr));
            this.props.dispatch(updateOption("currentPercentAbsolute", cpa));
            this.props.dispatch(updateOption("currentTime", ct));
            this.props.dispatch(updateOption("remaining", duration - ct));
            this.props.dispatch(updateOption("duration", this.currentMedia.duration));
            this.props.dispatch(updateOption("videoWidth", this.currentMedia.videoWidth));
            this.props.dispatch(updateOption("videoHeight", this.currentMedia.videoHeight));
            this.props.dispatch(updateOption("playbackRate", this.currentMedia.playbackRate));
            this.props.dispatch(updateOption("ended", this.currentMedia.ended));
		}
        _updateCurrentMedia = (nextProps) => {
            if(nextProps.playbackRateEnabled) {
                this.currentMedia.defaultPlaybackRate = nextProps.defaultPlaybackRate;
                this.currentMedia.playbackRate = nextProps.playbackRate;
            }

            if (nextProps.src !== this.currentMedia.src) {
                this.currentMedia.src = nextProps.src;
            }

            if (nextProps.newCurrentTime !== this.props.newCurrentTime) {
                this.currentMedia.currentTime = nextProps.newCurrentTime;
            }

            if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
                this.currentMedia.currentTime = nextProps.playHeadPercent * this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / 100;	
            }
            
            if (nextProps.paused !== this.props.paused) {
                nextProps.paused ? this.currentMedia.pause() : this.currentMedia.play();
            }

			this.currentMedia.preload = nextProps.preload;
            this.currentMedia.volume = nextProps.volume;
            this.currentMedia.muted = nextProps.muted; 
            this.currentMedia.autoplay = nextProps.autoplay;
            this.currentMedia.loop = nextProps.loop === "loop" ? true : false;
        }
        componentWillReceiveProps(nextProps) {
            // if (prevProps.width !== nextProps.width || prevProps.height !== nextProps.height) {
            // 	this.setState({playerStyle: {width: nextProps.width, height: nextProps.height}});
            // }
            //Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
            this._updateCurrentMedia(nextProps);
        }
        componentWillMount() {
			// Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
			// if(this.props.keyEnabled && !focusInstance) {
			// 	focusInstance = this;
			// }

            this.props.dispatch(updateOption("noVolume", uaBlocklist(this.props.noVolume)));
            this.props.dispatch(updateOption("noFullWindow", uaBlocklist(this.props.noFullWindow)));
        }
        componentDidMount() {
            this.props.dispatch(updateOption("playbackRateEnabled", testPlaybackRate(this.currentMedia)));  
            if(this.props.nativeVideoControls) {
				this.setState(state => reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(keys.VIDEO_CLASS, classNames.HIDDEN)));
				this.setState({videoStyle: {
					//width: this.props.width, 
					//height: this.props.height
				}});
			} else {
				this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VIDEO_CLASS, classNames.HIDDEN)));
			}

			this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VIDEO_PLAY_CLASS, classNames.HIDDEN)));
        }
        render() {
            return (
                <div className={"jp-jplayer"} style={this.state.playerStyle}>
                    {React.Children.map(this.props.children, child => React.cloneElement(child,
                        {
                            ...this.events,
                            setCurrentMedia: ref => this.currentMedia = ref 
                        }
                    ))}
                </div>
            );
        }
    }
)