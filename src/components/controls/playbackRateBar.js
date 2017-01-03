import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset} from "../../util/index";
import {mapStateToProps} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {playbackRate} from "../../actions/jPlayerActions";
import jPlayerConnect from "../../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    playbackRateEnabled: jPlayers[id].playbackRateEnabled,
    barDrag: jPlayers[id].barDrag,
});

class PlaybackRateBar extends React.Component {
    onPlaybackRateBarClick = (e) => this.movePlaybackRate(e)
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
        this.props.dispatch(playbackRate(playbackRateValue, this.props.id));
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
            <div ref={ref => this.playbackRateBar = ref} className={classNames.PLAYBACK_RATE_BAR} onClick={this.onPlaybackRateBarClick} onMouseDown={this.onPlaybackRateMouseDown}
                {...this.props.attributes}>
                {this.props.children}
            </div>
        );
    }
} 

export default connect(mapStateToProps)(jPlayerConnect(PlaybackRateBar, mapJPlayerProps));