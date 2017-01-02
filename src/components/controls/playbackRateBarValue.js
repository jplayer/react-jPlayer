import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../../util/constants";
import {playbackRate} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    verticalPlaybackRate: jPlayers[selector].verticalPlaybackRate,
    minPlaybackRate: jPlayers[selector].minPlaybackRate,
    maxPlaybackRate: jPlayers[selector].maxPlaybackRate,
    playbackRate: jPlayers[selector].playbackRate,
    playbackRateEnabled: jPlayers[selector].playbackRateEnabled,
    attributes: ownProps,
    selector
});

const PlaybackRateBarValue = (props) => <div className={classNames.PLAYBACK_RATE_BAR_VALUE} style={style(props.selector)} {...props.attributes} />;

const style = (props) => {
    const ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
    const playbackRateBarValue = (ratio * 100) + "%";
    
    return {
        width: !props.verticalPlaybackRate ? playbackRateBarValue : null,
        height: props.verticalPlaybackRate ? playbackRateBarValue : null
    };
}

export default connect(mapStateToProps)(PlaybackRateBarValue);