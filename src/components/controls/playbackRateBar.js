import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset, addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {playbackRate} from "../../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    verticalPlaybackRate: state.jPlayer.verticalPlaybackRate,
    minPlaybackRate: state.jPlayer.minPlaybackRate,
    maxPlaybackRate: state.jPlayer.maxPlaybackRate,
    playbackRate: state.jPlayer.playbackRate,
    playbackRateEnabled: state.jPlayer.playbackRateEnabled,
    barDrag: state.jPlayer.barDrag
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                playbackRateBarClass: [classNames.PLAYBACK_RATE_BAR]
            }
        }
        onPlaybackRateBarClick = (e) => !this.props.barDrag ? this.movePlaybackRate(e) : null
        onPlaybackRateMouseMove = (e) => this.props.barDrag && this.dragging ? this.movePlaybackRate(e) : null
        onPlaybackRateMouseDown = () => this.dragging = true
        onPlaybackRateMouseUp = () => this.dragging = false
        movePlaybackRate = (e) => {
            var offset = getOffset(this.playbackRateBar),
                x = e.pageX - offset.left,
                w = getWidth(this.playbackRateBar),
                y = getHeight(this.playbackRateBar) - e.pageY + offset.top,
                h = getHeight(this.playbackRateBar),
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
                this.setState(state => updateObjectByKey(state, "playbackRateBarClass", removeFromArrayByValue(state.playbackRateBarClass, classNames.HIDDEN)));
            } else {
                this.setState(state => updateObjectByKey(state, "playbackRateBarClass", addUniqueToArray(state.playbackRateBarClass, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updatePlaybackRateBarStyles(nextProps);
        }
        componentWillMount() {
            document.addEventListener("mouseup", this.onPlaybackRateMouseUp);
            document.addEventListener("mousemove", this.onPlaybackRateMouseMove);
        }
        componentWillUnMount() {
            document.removeEventListener("mouseup", this.onPlaybackRateMouseUp);
            document.removeEventListener("mousemove", this.onPlaybackRateMouseMove);
        }
        render() {
            return (
                <div ref={(ref) => this.playbackRateBar = ref} className={this.state.playbackRateBarClass.join(" ")} onClick={this.onPlaybackRateBarClick} onMouseDown={this.onPlaybackRateMouseDown}>
                    {this.props.children}
                </div>
            );
        }
    }  
);