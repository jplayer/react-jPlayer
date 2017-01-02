import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    verticalVolume: jPlayers[selector].verticalVolume,
    muted: jPlayers[selector].muted,
    volume: jPlayers[selector].volume,
    attributes: ownProps
});

const VolumeBarValue = (props) => <div className={classNames.VOLUME_BAR_VALUE} style={style(props)} {...props.attributes} />;

const style = (props) => {
    const volumeBarValuePercentage = `${props.muted ? 0 : (props.volume * 100)}%`;
    
    return {
        width: !props.verticalVolume ? volumeBarValuePercentage : null,
        height: props.verticalVolume ? volumeBarValuePercentage : null
    };
}

export default connect(mapStateToProps)(VolumeBarValue);