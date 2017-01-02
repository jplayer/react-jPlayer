import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mute} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    muted: jPlayers[selector].muted,
    attributes: ownProps,
    selector
});

const Mute = (props) => {
    const onMuteClick = () => props.dispatch(mute(!props.muted, props.selector))
    return <a className={classNames.MUTE} onClick={onMuteClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(Mute);