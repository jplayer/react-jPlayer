import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    verticalVolume: state.jPlayer.verticalVolume,
    noVolume: state.jPlayer.noVolume,
    muted: state.jPlayer.muted,
    volume: state.jPlayer.volume,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor() {
            super();
            
            this.state = {};
        }
        _updateVolumeBarValueStyles = (nextProps) => {
            const volumeBarValue = nextProps.muted ? 0 : (nextProps.volume * 100) + "%";
            
            this.setState({volumeBarValueStyle: {
                width: !nextProps.verticalVolume ? volumeBarValue : null,
                height: nextProps.verticalVolume ? volumeBarValue : null
            }});
        }
        componentDidMount() {
            this._updateVolumeBarValueStyles(this.props);
        }
        componentWillReceiveProps(nextProps) {
            this._updateVolumeBarValueStyles(nextProps);
        }
        render() {
            return <div className={classNames.VOLUME_BAR_VALUE} style={this.state.volumeBarValueStyle} {...this.props.attributes} />
        }
    }  
);