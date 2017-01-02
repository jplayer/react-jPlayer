import React from "react";
import {connect} from "react-redux";
import {Motion, spring} from "react-motion";

import {classNames} from "../util/constants";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    smoothPlayBar: jPlayers[selector].smoothPlayBar,
    currentPercentAbsolute: jPlayers[selector].currentPercentAbsolute,
    currentPercentRelative: jPlayers[selector].currentPercentRelative,
    currentTime: jPlayers[selector].currentTime,
    duration: jPlayers[selector].duration,
    playHeadPercent: jPlayers[selector].playHeadPercent,
    attributes: ownProps
});

const PlayBar = (props) => (
    <Motion style={{smoothWidth: spring(props.currentPercentAbsolute, [250])}}>
        {values => <div className={classNames.PLAY_BAR} style={{width: props.smoothPlayBar ? `${values.smoothWidth}%` : `${props.currentPercentRelative}%`}} {...props.attributes} />}
    </Motion>
);

export default connect(mapStateToProps)(PlayBar);