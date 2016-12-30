import React from "react";
import {connect} from "react-redux";

import {classNames} from "../util/constants";
import {duration} from "../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    toggleDuration: state.jPlayer.toggleDuration,
    captureDuration: state.jPlayer.captureDuration,
    durationText: state.jPlayer.durationText,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    (props) => {
        const onDurationClick = (e) => {
            if(props.toggleDuration) {
                if(props.captureDuration) {
                    e.stopPropagation();
                }
                props.dispatch(duration());
            }
        }

        return <div className={classNames.DURATION} onClick={onDurationClick} {...props.attributes}>{props.durationText}</div>
    }
);