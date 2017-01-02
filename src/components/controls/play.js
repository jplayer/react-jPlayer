import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {play, pause} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    paused: jPlayers[selector].paused,
    attributes: ownProps,
    selector
});

const Play = (props) => {
    const onPlayClick = () => props.paused ? props.dispatch(play(props.selector)) : props.dispatch(pause(props.selector))
    return <a className={classNames.PLAY} onClick={onPlayClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(Play);