import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mapStateToProps} from "../../util/index";
import {play, pause} from "../../actions/jPlayerActions";
import jPlayerConnect from "../../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    paused: jPlayers[id].paused
});

const Play = (props) => {
    const onPlayClick = () => props.paused ? props.dispatch(play(props.id)) : props.dispatch(pause(props.id))
    return <a className={classNames.PLAY} onClick={onPlayClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(jPlayerConnect(Play, mapJPlayerProps));