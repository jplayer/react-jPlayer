import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    muted: jPlayers[selector].muted,
    attributes: ownProps,
    selector
});

const VolumeMax = (props) => {
    const onClick = (props) => {
        props.dispatch(volume(1));

        if(props.muted) {
            props.dispatch(mute(false, props.selector));
        }
    }
    return <a className={classNames.VOLUME_MAX} onClick={onClick} {...props.attributes}>{props.children}</a>
}

export default connect(mapStateToProps)(VolumeMax);