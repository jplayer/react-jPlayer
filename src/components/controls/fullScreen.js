import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {fullScreen} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    fullScreen: jPlayers[selector].fullScreen,
    attributes: ownProps,
    selector
});

const FullScreen = (props) => {
    const onFullScreenClick = () => props.dispatch(fullScreen(!props.fullScreen, props.selector))
    return <a className={classNames.FULL_SCREEN} onClick={onFullScreenClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(FullScreen);