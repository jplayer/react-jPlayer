import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mapStateToProps} from "../../util/index";
import {fullScreen, focus} from "../../actions/jPlayerActions";
import jPlayerConnect from "../../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    fullScreen: jPlayers[id].fullScreen
});

const FullScreen = (props) => {
    const onFullScreenClick = () => props.dispatch(fullScreen(!props.fullScreen, props.id))
    return <a className={classNames.FULL_SCREEN} onClick={onFullScreenClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(jPlayerConnect(FullScreen, mapJPlayerProps));