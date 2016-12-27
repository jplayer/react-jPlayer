import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";
import {getOffset, getWidth, addUniqueToArray, removeFromArrayByValue, updateObjectByKey, limitValue} from "../util/index";
import convertTime from "../util/convertTime";
import actions, {playHead, duration} from "../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    seekPercent: state.jPlayer.seekPercent,
    seeking: state.jPlayer.seeking,
    duration: state.jPlayer.duration,
    remaining: state.jPlayer.remaining,
    media: state.jPlayer.media,
    currentTime: state.jPlayer.currentTime,
    currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
    currentPercentRelative: state.jPlayer.currentPercentRelative,
    smoothPlayBar: state.jPlayer.smoothPlayBar,
    playHeadPercent: state.jPlayer.playHeadPercent
});

export default connect(mapStateToProps)(
    class extends React.PureComponent {
        constructor() {
            super();
            
            this.state = {
                seekBarClass: [classNames.SEEK_BAR]
            }
        }
        static get defaultProps() {
            return {
                onSeekBarClick: React.PropTypes.func,
                onDurationClick: React.PropTypes.func,
                seekBarStyle: React.PropTypes.object,
                currentTimeText: React.PropTypes.string,
                durationText: React.PropTypes.string
            }
        }
        onSeekBarClick = (e) => {
            var bar = e.currentTarget,
                offset = getOffset(bar),
                x = e.pageX - offset.left,
                w = getWidth(bar),
                percentage = 100 * x / w;
    
            this.props.dispatch(playHead(percentage));
        }
        onDurationClick = (e) => {
            if(this.props.toggleDuration) {
                if(this.props.captureDuration) {
                    e.stopPropagation();
                }
                this.props.dispatch(duration());
            }
        }
        onProgressMouseDown = () => this.dragging = true
        onProgressMouseOut = () => this.dragging = false
        // onProgressMouseMove = (e) => {
        //     if (this.dragging) {
        //         var position = e.pageX - getOffset(e.currentTarget).left;
        //         var percentage = 100 * position / getWidth(e.currentTarget);

        //     // this.setState({width: `${percentage}%`});
        //         this.props.dispatch(playHead(percentage));
        //     }
        // }
        updateBarStyles = (nextProps) => {
            this.setState({seekBarStyle: {width: `${nextProps.seekPercent}%`}});

            if (nextProps.seeking) {
                this.setState(state => updateObjectByKey(state, "seekBarClass", addUniqueToArray(state.seekBarClass, classNames.states.SEEKING)));
            } else {
                this.setState(state => updateObjectByKey(state, "seekBarClass", removeFromArrayByValue(state.seekBarClass, classNames.states.SEEKING)));
            }
        }
        updateDurationText = (nextProps) => {
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
        updateCurrentTimeText = (nextProps) => {
            var currentTimeText = convertTime(nextProps.currentTime);
            this.setState({currentTimeText, currentTimeText});
        }
        componentWillReceiveProps(nextProps) {
            this.updateBarStyles(nextProps);
            this.updateDurationText(nextProps);
            this.updateCurrentTimeText(nextProps);
        }
        render() {
            return (
                <div className="jp-progress">
                    <div className={this.state.seekBarClass.join(" ")} style={this.state.seekBarStyle} onMouseMove={this.onSeekBarClick}>                         
                        {React.cloneElement(React.Children.only(this.props.children), {
                            smoothPlayBar: this.props.smoothPlayBar,
                            currentPercentAbsolute: this.props.currentPercentAbsolute,
                            currentPercentRelative: this.props.currentPercentRelative,
                            currentTime: this.props.currentTime,
                            duration: this.props.duration,
                            playHeadPercent: this.props.playHeadPercent
                        })}
                        <div className={classNames.CURRENT_TIME}>{this.state.currentTimeText}</div>
                        <div className={classNames.DURATION} onClick={this.onDurationClick}>{this.state.durationText}</div>
                    </div>
                </div>
            );
        }
    }
)