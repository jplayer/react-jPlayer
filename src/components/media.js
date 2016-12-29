import React from "react";
import {connect} from "react-redux";

import actions, {pause} from "../actions/jPlayerActions";
import {urlNotSupportedError} from "../util/index";
import {classNames, keys, formats, timeFormats, loopOptions, noFullWindows, noVolumes, errors, errorMessages, errorHints} from "../util/constants";
import {testPlaybackRate, uaBlocklist, testCanPlayType, absoluteMediaUrls, convertTime, limitValue, addUniqueToArray, removeFromArrayByValue, updateOption, updateObjectByKey} from "../util/index";

const mapStateToProps = (state, ownProps) => ({
    ...state.jPlayer,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {};

            this.events = {
                onProgress: () => {
                    const bufferedTimeRanges = [];

                    for (var i = 0; i < this.currentMedia.buffered.length; i++) {
                        bufferedTimeRanges.push({
                            start: this.currentMedia.buffered.start(i),
                            end: this.currentMedia.buffered.end(i)
                        });
                    }

                    this.props.dispatch(actions.updateOption("bufferedTimeRanges", bufferedTimeRanges));
                    this.updateMediaStatus();
                    this.props.onProgress();
                },
                onTimeUpdate: () => {
                    this.updateMediaStatus();
                    this.props.onTimeUpdate();
                },
                onDurationChange: () => {
                    this.updateMediaStatus();
                    this.props.onDurationChange();
                },
                onRateChange: () => {
                    const playbackRateText = this.currentMedia.playbackRate.toFixed(limitValue(this.props.playbackRateTextDigits, 0, 20));
                    
                    this.props.dispatch(actions.updateOption("playbackRateText", playbackRateText));
                    this.props.onRateChange();
                },
                onSeeking: () => {
                    this.props.dispatch(actions.updateOption("seeking", true));
                    this.props.onSeeking();
                },
                onSeeked: () => {
                    this.props.dispatch(actions.updateOption("seeking", false));
                    this.props.onSeeked();
                },
                onPlay: () => {
                    //When the autoPlay option is true
                    this.props.dispatch(actions.updateOption("paused", false));
                    this.props.onPlay();
                },
                onEnded: () => {
                    // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
                    this.props.dispatch(pause());
                    this.updateMediaStatus();
                    
                    if (this.props.loop === "loop") {	
                        this.props.onRepeat();
                    }
                    this.props.onEnded();
                },
                onError: () => {
                    this.props.dispatch(actions.updateOption("error", urlNotSupportedError(this.props.originalSrc)));    
                    this.props.onError();
                },
                onPlaying: this.props.onPlaying,
                onPause: this.props.onPause,
                onWaiting: this.props.onWaiting,
                onSuspend: this.props.onSuspend,
                onVolumeChange: this.props.onVolumeChange,
                onLoadStart: this.props.onLoadStart,
                onLoadedMetadata: this.props.onLoadedMetadata,
                onAbort: this.props.onAbort,
                onEmptied: this.props.onEmptied,
                onStalled: this.props.onStalled,
                onLoadedData: this.props.onLoadedData,
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
                onError: () => null,
                onRateChange: () => null,
                onSeeking: () => null,
                onSeeked: () => null
            }
        }
        updateMediaStatus = () => {
            let seekPercent = 0,
                durationText = "";

            const remaining = this.currentMedia.duration - this.currentMedia.currentTime;

            if (this.currentMedia.seekable.length > 0) {
                seekPercent = 100 * this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / this.currentMedia.duration;
            }
    
            if(this.props.remainingDuration) {
                durationText = (remaining > 0 ? "-" : "") + convertTime(remaining);
            } else {
                durationText = convertTime(this.currentMedia.duration);
            }

            this.props.dispatch(actions.updateOption("durationText", durationText));
            this.props.dispatch(actions.updateOption("currentTimeText", convertTime(this.currentMedia.currentTime)));
            this.props.dispatch(actions.updateOption("seekPercent", seekPercent));
            this.props.dispatch(actions.updateOption("currentPercentRelative", this.getCurrentPercentRelative()));
            this.props.dispatch(actions.updateOption("currentPercentAbsolute", 100 * this.currentMedia.currentTime / this.currentMedia.duration));
            this.props.dispatch(actions.updateOption("currentTime", this.currentMedia.currentTime));
            this.props.dispatch(actions.updateOption("remaining", remaining));          
            this.props.dispatch(actions.updateOption("duration", this.currentMedia.duration));
            this.props.dispatch(actions.updateOption("playbackRate", this.currentMedia.playbackRate));
            // this.props.dispatch(updateOption("videoWidth", this.currentMedia.videoWidth));
            // this.props.dispatch(updateOption("videoHeight", this.currentMedia.videoHeight));
            // this.props.dispatch(updateOption("ended", this.currentMedia.ended));
        }
        getCurrentPercentRelative = () => {
            let currentPercentRelative = 0;
            
            if (this.currentMedia.seekable.length > 0) {
                currentPercentRelative = 100 * this.currentMedia.currentTime / this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1);
            }
            return currentPercentRelative;
        }
        _updateCurrentMedia = (nextProps) => {
            if (nextProps.src !== this.currentMedia.src) {
                this.currentMedia.src = nextProps.src;
            }

            if (nextProps.newTime !== this.props.newTime) {
                this.currentMedia.currentTime = nextProps.newTime;
            }

            if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
                //TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
                //Hasn't fully loaded the song????
                if (this.currentMedia.seekable.length > 0) {
                    this.currentMedia.currentTime = nextProps.playHeadPercent * this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / 100;
                    //Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
                    this.props.dispatch(actions.updateOption("currentPercentRelative", this.getCurrentPercentRelative()));
                }
            }
            
            if (nextProps.paused !== this.props.paused) {
                nextProps.paused ? this.currentMedia.pause() : this.currentMedia.play();
            }

            this.currentMedia.defaultPlaybackRate = nextProps.defaultPlaybackRate;
            this.currentMedia.playbackRate = nextProps.playbackRate;
			this.currentMedia.preload = nextProps.preload;
            this.currentMedia.volume = nextProps.volume;
            this.currentMedia.muted = nextProps.muted; 
            this.currentMedia.autoplay = nextProps.autoplay;
            this.currentMedia.loop = nextProps.loop === "loop" ? true : false;
        }
        componentWillReceiveProps(nextProps) {
            this._updateCurrentMedia(nextProps);
            // if (prevProps.width !== nextProps.width || prevProps.height !== nextProps.height) {
            // 	this.setState({playerStyle: {width: nextProps.width, height: nextProps.height}});
            // }
        }
        componentDidMount() {
            this.props.dispatch(actions.updateOption("playbackRateEnabled", testPlaybackRate(this.currentMedia)));  
        }
        render() {
            return (
                <div className={classNames.JPLAYER} style={this.state.playerStyle} {...this.props.attributes}>
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