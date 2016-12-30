import React from "react";
import {connect} from "react-redux";
import {Motion, spring} from "react-motion";

import {classNames} from "../util/constants";

const mapStateToProps = (state, ownProps) => ({
    smoothPlayBar: state.jPlayer.smoothPlayBar,
    currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
    currentPercentRelative: state.jPlayer.currentPercentRelative,
    currentTime: state.jPlayer.currentTime,
    duration: state.jPlayer.duration,
    playHeadPercent: state.jPlayer.playHeadPercent,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    (props) => (
        <Motion style={{smoothWidth: spring(props.currentPercentAbsolute, [250])}}>
            {values => <div className={classNames.PLAY_BAR} style={{width: props.smoothPlayBar ? `${values.smoothWidth}%` : `${props.currentPercentRelative}%`}} {...props.attributes} />}
        </Motion>
    )
);