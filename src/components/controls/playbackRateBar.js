import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {playbackRate, addUniqueToArray, removeFromArrayByValue} from "../../actions/jPlayerActions";
import * as reducer from "../../reducers/index";

const mapStateToProps = (state) => ({
    verticalPlaybackRate: state.jPlayer.verticalPlaybackRate,
    minPlaybackRate: state.jPlayer.minPlaybackRate,
    maxPlaybackRate: state.jPlayer.maxPlaybackRate,
    playbackRate: state.jPlayer.playbackRate,
    playbackRateEnabled: state.jPlayer.playbackRateEnabled
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                playbackRateBarClass: [classNames.PLAYBACK_RATE_BAR]
            }
        }
        onPlaybackRateBarClick = (e) => {
            // Using e.currentTarget to enable multiple playbackRate bars
            var bar = e.currentTarget,
                offset = getOffset(bar),
                x = e.pageX - offset.left,
                w = getWidth(bar),
                y = getHeight(bar) - e.pageY + offset.top,
                h = getHeight(bar),
                ratio,
                playbackRateValue;

            if(this.props.verticalPlaybackRate) {
                ratio = y/h;
            } else {
                ratio = x/w;
            }

            playbackRateValue = ratio * (this.props.maxPlaybackRate - this.props.minPlaybackRate) + this.props.minPlaybackRate;
            this.props.dispatch(playbackRate(playbackRateValue));
        }
        _updatePlaybackRateBarStyles = (nextProps) => {
            if(nextProps.playbackRateEnabled) {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.PLAYBACK_RATE_BAR_CLASS, classNames.HIDDEN)));
            } else {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.PLAYBACK_RATE_BAR_CLASS, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updatePlaybackRateBarStyles(nextProps);
        }
        render() {
            return (
                <div className={this.state.playbackRateBarClass.join(" ")} onClick={this.onPlaybackRateBarClick}>
                    {this.props.children}
                </div>
            );
        }
    }  
);