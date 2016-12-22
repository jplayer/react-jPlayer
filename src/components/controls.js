import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";
import {updateOption, addUniqueToArray, removeFromArrayByValue} from "../actions/jPlayerActions";
import * as reducer from "../reducers/index";
import Control from "./control";

const mapStateToProps = (state) => ({
    ...state.jPlayer
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor() {
            super();
            
            this.state = {
                playbackRateBarClass: [],
                playbackRateBarValueClass: [],
                volumeBarClass: [],
                volumeBarValueClass: []
            }
        }
        static get defaultProps() {
            return {
                playlistControls: {}    
            }
        }
        static get propTypes() {
            return {
                onPlayClick: React.PropTypes.func,
                onMuteClick: React.PropTypes.func,
                onVolumeMaxClick: React.PropTypes.func,
                onRepeatClick: React.PropTypes.func,
                onFullScreenClick: React.PropTypes.func,
                onShuffleClick: React.PropTypes.func,
                onPreviousClick: React.PropTypes.func,
                onNextClick: React.PropTypes.func,
                onVolumeBarClick: React.PropTypes.func,
                onPlaybackRateBarClick: React.PropTypes.func,
                className: React.PropTypes.string,
                onKeyDown: React.PropTypes.func,
                controls: React.PropTypes.object.isRequired,
                playlistControls: React.PropTypes.object,
                volumeBarClass: React.PropTypes.arrayOf(React.PropTypes.string),
                volumeBarValueClass: React.PropTypes.arrayOf(React.PropTypes.string),
                volumeBarValueStyle: React.PropTypes.object,
                playbackRateBarClass: React.PropTypes.arrayOf(React.PropTypes.string),
                playbackRateBarValueClass: React.PropTypes.arrayOf(React.PropTypes.string),
                playbackRateBarValueStyle: React.PropTypes.object
            }
        }
        static get contextTypes() {
            return {
                getCurrentMedia: React.PropTypes.func,
                play: React.PropTypes.func,
                pause: React.PropTypes.func,
                blur: React.PropTypes.func,
                volume: React.PropTypes.func,
                mute: React.PropTypes.func,
                incrementLoop: React.PropTypes.func,
                fullScreen: React.PropTypes.func,
                playbackRate: React.PropTypes.func,
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
                playbackRate;

            if(this.props.verticalPlaybackRate) {
                ratio = y/h;
            } else {
                ratio = x/w;
            }

            playbackRate = ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate) + this.props.minPlaybackRate;
            this.context.playbackRate(playbackRate);
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
        onKeyDown = (e) => {
            for (var key in this.keyBindings) {
                const keyBinding = this.keyBindings[key];

                if (keyBinding.key === e.charCode) {
                    keyBinding.fn();
                }
            }
        }
        _updatePlaybackRateStyles = (nextProps) => {
            var playbackRate = nextProps.playbackRate,
                ratio = (playbackRate - nextProps.minPlaybackRate) / (nextProps.maxPlaybackRate - nextProps.minPlaybackRate);
            if(nextProps.playbackRateEnabled) {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYBACK_RATE_BAR_CLASS, classNames.HIDDEN)));
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYBACK_RATE_BAR_VALUE_CLASS, classNames.HIDDEN)));
                
                const playbackRateBarValue = (ratio * 100) + "%";

                this.setState({playbackRateBarValueStyle: {
                    width: !nextProps.verticalPlaybackRate ? playbackRateBarValue : null,
                    height: nextProps.verticalPlaybackRate ? playbackRateBarValue : null
                }});
            } else {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYBACK_RATE_BAR_CLASS, classNames.HIDDEN)));
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYBACK_RATE_BAR_VALUE_CLASS, classNames.HIDDEN)));
            }
        }
        _updateVolumeStyles = (nextProps) => {
            if(nextProps.noVolume) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VOLUME_BAR_CLASS, classNames.HIDDEN)));
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VOLUME_BAR_VALUE_CLASS, classNames.HIDDEN)));
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VOLUME_MAX_CLASS, classNames.HIDDEN)));
            } else {
                const volumeValue = nextProps.muted ? 0 : (nextProps.volume * 100) + "%";
                
                this.setState({volumeBarValueStyle: {
                    width: !nextProps.verticalVolume ? volumeValue : null,
                    height: nextProps.verticalVolume ? volumeValue : null
                }});

                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VOLUME_BAR_CLASS, classNames.HIDDEN)));
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VOLUME_BAR_VALUE_CLASS, classNames.HIDDEN)));
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VOLUME_MAX_CLASS, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updatePlaybackRateStyles(nextProps);
            this._updateVolumeStyles(nextProps);
        }
        render() {
            return (
                <div className="jp-controls" onKeyDown={this.onKeyDown}>
                    {React.Children.map(this.props.children, child => 
                        <Control onPlayClick={this.onPlayClick} onMuteClick={this.onMuteClick} onVolumeMaxClick={this.onVolumeMaxClick} onRepeatClick={this.onRepeatClick}
                            onFullScreenClick={this.onFullScreenClick} onShuffleClick={this.onShuffleClick} onPreviousClick={this.onPreviousClick} onNextClick={this.onNextClick}>
                            {child}
                        </Control>
                    )}
                    <div className={this.state.volumeBarClass.join(" ")} onClick={this.onVolumeBarClick}>
                        <div className={this.state.volumeBarValueClass.join(" ")} style={this.state.volumeBarValueStyle} />
                    </div>
                    <div className={this.state.playbackRateBarClass.join(" ")} onClick={this.onPlaybackRateBarClick}>
                        <div className={this.state.playbackRateBarValueClass.join(" ")} style={this.state.playbackRateBarValueStyle}/>
                    </div>
                </div>
            );
        }
    }
)