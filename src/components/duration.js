import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";
import {duration} from "../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    toggleDuration: jPlayers[selector].toggleDuration,
    captureDuration: jPlayers[selector].captureDuration,
    durationText: jPlayers[selector].durationText,
    attributes: ownProps,
    selector
});

const Duration = (props) => {
    const onDurationClick = (e) => {
        if(props.toggleDuration) {
            if(props.captureDuration) {
                e.stopPropagation();
            }
            props.dispatch(duration(props.selector));
        }
    }
    return <div className={classNames.DURATION} onClick={onDurationClick} {...props.attributes}>{props.durationText}</div>
}

export default connect(mapStateToProps)(Duration);