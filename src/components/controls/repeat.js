import React from "react";
import {connect} from "react-redux";

import {classNames, loopOptions} from "../../util/constants";
import {mute, loop} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    loop: jPlayers[selector].loop,
    attributes: ownProps,
    selector
});

const Repeat = (props) => {
    const onRepeatClick = () => props.loop === loopOptions.LOOP ? props.dispatch(loop(loopOptions.OFF, props.selector)) : props.dispatch(loop(loopOptions.LOOP, props.selector))
    return <a className={classNames.REPEAT} onClick={onRepeatClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(Repeat);