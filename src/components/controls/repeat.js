import React from "react";
import {connect} from "react-redux";

import {classNames, loopOptions} from "../../util/constants";
import {mapStateToProps} from "../../util/index";
import {mute, loop} from "../../actions/jPlayerActions";
import jPlayerConnect from "../../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    loop: jPlayers[id].loop
});

const Repeat = (props) => {
    const onRepeatClick = () => props.loop === loopOptions.LOOP ? props.dispatch(loop(loopOptions.OFF, props.id)) : props.dispatch(loop(loopOptions.LOOP, props.id))
    return <a className={classNames.REPEAT} onClick={onRepeatClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(jPlayerConnect(Repeat, mapJPlayerProps));