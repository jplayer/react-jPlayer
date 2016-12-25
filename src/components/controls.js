import React from "react";
import {connect} from "react-redux";
import merge from "lodash.merge";
import screenfull from "screenfull";

import {keys, classNames, keyIgnoreElementNames, loopOptions} from "../util/constants";
import {pause, mute, volume, loop, fullScreen} from "../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    ...state.jPlayer
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super(props);

            this.keyBindings = merge({
				play: {
					key: 80, // p
					fn: () => this.props.paused ? this.props.dispatch(play()) : this.props.dispatch(pause())
				},
				fullScreen: {
					key: 70, // f
					fn: () => {
						if(this.props.mediaSettings.available && this.props.mediaSettings.video || this.props.audioFullScreen) {
							this.fullScreen(!screenfull.isFullscreen);
						}
					}
				},
				muted: {
					key: 77, // m
					fn: () => this.props.dispatch(mute(!this.props.muted))
				},
				volumeUp: {
					key: 190, // .
					fn: () => this.props.dispatch(volume(this.props.volume + 0.1))
				},
				volumeDown: {
					key: 188, // ,
					fn: () =>  this.props.dispatch(volume(this.props.volume - 0.1))
				},
				loop: {
					key: 76, // l
					fn: () => this.props.loop === loopOptions.LOOP ? this.props.dispatch(loop(loopOptions.OFF)) : this.props.dispatch(loop(loopOptions.LOOP))
				}
			}, this.props.keyBindings);
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
                controls: React.PropTypes.object,
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
        onVideoPlayClick = () => this.props.dispatch(play())
        onKeyDown = (event) => {
            if (keyIgnoreElementNames.some(name => name.toUpperCase() === event.target.nodeName.toUpperCase())) {
                return;
            }

            for (var key in this.keyBindings) {
                const keyBinding = this.keyBindings[key];

                if (keyBinding.key === event.keyCode ||
                    keyBinding.key === event.key) {
                    event.preventDefault();
                    keyBinding.fn();
                }
            }
        }
        componentWillMount() {
            document.addEventListener("keydown", this.onKeyDown);
        }
        componentWillUnmount() {
            document.removeEventListener("keydown", this.onKeyDown);
        }
        render() {
            return (
                <div className="jp-controls">
                    {this.props.children}
                </div>
            );
        }
    }
)

// shuffle: (<a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
// previous: (<a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
// next: (<a className={classNames.NEXT} onClick={props.onNextClick}>{props.children}</a>)