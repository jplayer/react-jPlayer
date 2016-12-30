import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../../util/constants";
import {playbackRate} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    verticalPlaybackRate: state.jPlayer.verticalPlaybackRate,
    minPlaybackRate: state.jPlayer.minPlaybackRate,
    maxPlaybackRate: state.jPlayer.maxPlaybackRate,
    playbackRate: state.jPlayer.playbackRate,
    playbackRateEnabled: state.jPlayer.playbackRateEnabled,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    (props) => <div className={classNames.PLAYBACK_RATE_BAR_VALUE} style={style(props)} {...props.attributes} />
);

const style = (props) => {
    const ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
    const playbackRateBarValue = (ratio * 100) + "%";
    
    return {
        width: !props.verticalPlaybackRate ? playbackRateBarValue : null,
        height: props.verticalPlaybackRate ? playbackRateBarValue : null
    };
}