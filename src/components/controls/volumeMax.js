import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    muted: state.jPlayer.muted,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    (props) => {
        const onClick = (props) => {
            props.dispatch(volume(1));

            if(props.muted) {
                props.dispatch(mute(false));
            }
        }

        return <a className={classNames.VOLUME_MAX} onClick={onClick} {...props.attributes}>{props.children}</a>
    }
);