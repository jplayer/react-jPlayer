import React from "react";
import {connect} from "react-redux";
import {keys, classNames} from "../util/constants";
import {getOffset, getWidth} from "../util/index";
import convertTime from "../util/convertTime";
import {addUniqueToArray, removeFromArrayByValue} from "../reducers/index";
import * as jPlayerActions from "../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    seekPercent: state.jPlayer.seekPercent,
    seeking: state.jPlayer.seeking,
    duration: state.jPlayer.duration,
    remaining: state.jPlayer.remaining,
    media: state.jPlayer.media,
    currentTime: state.jPlayer.currentTime,
    currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
    currentPercentRelative: state.jPlayer.currentPercentRelative
});

export default connect(mapStateToProps)(
    class extends React.PureComponent {
        constructor() {
            super();
            
            this.state = {
                seekBarClass: []
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
        _updateBarStyles = (nextProps) => {
            this.setState({seekBarStyle: {width: `${nextProps.seekPercent}%`}});
            if (nextProps.seeking) {
                this.setState(state => addUniqueToArray(state, jPlayerActions.addUniqueToArray(keys.SEEK_BAR_CLASS, classNames.seeking)));
            } else {
                this.setState(state => removeFromArrayByValue(state, jPlayerActions.removeFromArrayByValue(keys.SEEK_BAR_CLASS, classNames.seeking)))
            }
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
        _updateCurrentTimeText = (nextProps) => {
            var currentTimeText = convertTime(nextProps.currentTime);
            this.setState({currentTimeText, currentTimeText});
        }
        componentWillReceiveProps(nextProps) {
            this._updateBarStyles(nextProps);
            this._updateDurationText(nextProps);
            this._updateCurrentTimeText(nextProps);
        }
        render() {
            return (
                <div className="jp-progress">
                    <div className={this.state.seekBarClass.join(" ")} style={this.state.seekBarStyle} onClick={this.onSeekBarClick}>                         
                        {React.cloneElement(React.Children.only(this.props.children), {
                            smoothPlayBar: this.props.smoothPlayBar,
                            currentPercentAbsolute: this.props.currentPercentAbsolute,
                            currentPercentRelative: this.props.currentPercentRelative
                        })}
                        <div className={classNames.CURRENT_TIME}>{this.state.currentTimeText}</div>
                        <div className={classNames.DURATION} onClick={this.onDurationClick}>{this.state.durationText}</div>
                    </div>
                </div>
            );
        }
    }
)