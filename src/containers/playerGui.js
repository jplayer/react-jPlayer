import React from "react";
import {connect} from "react-redux";
import Gui from "../components/gui";
import Controls from "../components/controls";
import Progress from "../components/progress";
import PlayBar from "../components/playBar";
import {getOffset, getWidth, getHeight} from "../util/index";
import merge from "lodash.merge";
import convertTime from "../util/convertTime";

const mapStateToProps = (state, ownProps) => ({...state.jPlayer, playlistControls: state.jPlaylist.controls});
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    merge(stateProps.controls, stateProps.playlistControls);
    return Object.assign({}, ownProps, stateProps, dispatchProps);
};

export default WrappedComponent => connect(mapStateToProps, null, mergeProps)(
    class extends React.PureComponent {
        constructor(props) {
            super();
            this.state = {};
        }
        static get contextTypes() {
            return {
                play: React.PropTypes.func,
                pause: React.PropTypes.func,
                mute: React.PropTypes.func,
                volume: React.PropTypes.func,
                playbackRate: React.PropTypes.func,
                incrementLoop: React.PropTypes.func,
                fullScreen: React.PropTypes.func,
                duration: React.PropTypes.duration
            }
        }
        onMuteClick = () => this.context.mute(!this.props.muted)
        onPlayClick = () => this.props.paused ? this.context.play() : this.context.pause()
        onPlaybackRateBarClick = (e) => {
            // Using e.currentTarget to enable multiple playbackRate bars
            var bar = e.currentTarget,
                offset = getOffset(bar),
                x = e.pageX - offset.left,
                w = getWidth(bar),
                y = getHeight(bar) - e.pageY + offset.top,
                h = getHeight(bar),
                ratio,
                pbr;

            if(this.props.verticalPlaybackRate) {
                ratio = y/h;
            } else {
                ratio = x/w;
            }

            pbr = ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate) + this.props.minPlaybackRate;
            this.context.playbackRate(pbr);
        }
        onVolumeBarClick = (e) => {
            // Using $(e.currentTarget) to enable multiple volume bars
            var bar = e.currentTarget,
                offset = getOffset(bar),
                x = e.pageX - offset.left,
                w = getWidth(bar),
                y = getHeight(bar) - e.pageY + offset.top,
                h = getHeight(bar);

            this.props.verticalVolume ? this.context.volume(y/h) : this.context.volume(x/w)

            if(this.props.muted) {
                this.context.mute(false);
            }
        }
        onVolumeMaxClick = () => {
            this.context.volume(1);

            if(this.props.muted) {
                this.context.mute(false);
            }
        }
        onVideoPlayClick = () => this.context.play()
        onRepeatClick = () => this.context.incrementLoop()
        onFullScreenClick = () => this.context.fullScreen(!this.props.fullScreen)
        onSeekBarClick = (e) => {
            // Using $(e.currentTarget) to enable multiple seek bars
            var bar = e.currentTarget,
                offset = getOffset(bar),
                x = e.pageX - offset.left,
                w = getWidth(bar),
                p = 100 * x / w;

            this.context.playHead(p);
        }
        onDurationClick = (e) => {
            if(this.props.toggleDuration) {
                if(this.props.captureDuration) {
                    e.stopPropagation();
                }
                this.context.duration();
            }
        }
        onShuffleClick = (event) => {
            event.preventDefault();

            this.context.shuffle(!this.props.shuffled);
            this.context.blur(event.target);
        }
        onPreviousClick = (event) => {
            event.preventDefault();

            this.context.previous();
            this.context.blur(event.target);
        }
        onNextClick = (event) => {
            event.preventDefault();

            this.context.next();
            this.context.blur(event.target);
        }
        onKeyDown = (e) => {
            for (var key in this.keyBindings) {
                const keyBinding = this.keyBindings[key];

                if (keyBinding.key === e.charCode) {
                    keyBinding.fn();
                }
            }
        }
        _updateCurrentTimeText = (nextProps) => {
            var currentTimeText = convertTime(nextProps.currentTime);
            this.setState({currentTimeText, currentTimeText});
        }
        _updateDurationText = (nextProps) => {
            var durationText = '',
				duration = nextProps.duration,
				remaining = nextProps.remaining;

			if(nextProps.media.duration === 'string') {
				durationText = nextProps.media.duration;
			} else {
				if(nextProps.media.duration === 'number') {
					duration = nextProps.media.duration;
					remaining = duration - nextProps.currentTime;
				}
				if(nextProps.remainingDuration) {
					durationText = (remaining > 0 ? '-' : '') + convertTime(remaining);
				} else {
					durationText = convertTime(duration);
				}
			}
            this.setState({durationText, durationText});
        }
        _updateBarStyles = (nextProps) => {
            this.setState({seekBarStyle: {width: `${nextProps.seekPercent}%`}});

            nextProps.smoothPlayBar ? this.setState({playBarStyle: {width: `${nextProps.currentPercentAbsolute}%`}})
                                    : this.setState({playBarStyle: {width: `${nextProps.currentPercentRelative}%`}});
		}
        componentWillReceiveProps = (nextProps) => {
            this._updateCurrentTimeText(nextProps);
            this._updateDurationText(nextProps);
            this._updateBarStyles(nextProps);
        }
        render() {
            return (
                <WrappedComponent>
                    {this.props.children}
                    <Gui {...this.props.autoHide} nativeVideoControls={this.props.nativeVideoControls} fullWindow={this.props.fullWindow} fadeInConfig={this.props.guiFadeInAnimation} 
                    fadeOutConfig={this.props.guiFadeOutAnimation}>     
                        <Controls className={"jp-controls"} onKeyDown={this.onKeyDown} controls={this.props.controls} onMuteClick={this.onMuteClick} onPlayClick={this.onPlayClick} 
                            onPlaybackRateBarClick={this.onPlaybackRateBarClick} onVolumeBarClick={this.onVolumeBarClick} onVolumeMaxClick={this.onVolumeMaxClick} onVideoPlayClick={this.onVideoPlayClick} 
                            onRepeatClick={this.onRepeatClick} onFullScreenClick={this.onFullScreenClick} onSeekBarClick={this.onSeekBarClick} onDurationClick={this.onDurationClick} 
                            onShuffleClick={this.onShuffleClick} onPreviousClick={this.onPreviousClick} onNextClick={this.onNextClick} />
                        <Progress className={"jp-progress"} seekBarClick={this.onSeekBarClick} onDurationClick={this.onDurationClick} seekBarStyle={this.state.seekBarStyle} 
                        currentTimeText={this.state.currentTimeText} durationText={this.state.durationText}>
                            <PlayBar smoothPlayBar={this.props.smoothPlayBar} currentPercentAbsolute={this.props.currentPercentAbsolute} playBarStyle={this.state.playBarStyle} />
                        </Progress>					
                    </Gui>
                </WrappedComponent>
            );
        }
    }
)