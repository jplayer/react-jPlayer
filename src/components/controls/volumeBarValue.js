import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../../util/constants";
import {mute, volume, addUniqueToArray, removeFromArrayByValue} from "../../actions/jPlayerActions";
import * as reducer from "../../reducers/index";

const mapStateToProps = (state) => ({
    verticalVolume: state.jPlayer.verticalVolume,
    noVolume: state.jPlayer.noVolume,
    muted: state.jPlayer.muted,
    volume: state.jPlayer.volume
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                volumeBarValueClass: [classNames.VOLUME_BAR_VALUE]
            }
        }
        _updateVolumeBarValueStyles = (nextProps) => {
            if(nextProps.noVolume) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VOLUME_BAR_VALUE_CLASS, classNames.HIDDEN)));
            } else {
                const volumeBarValue = nextProps.muted ? 0 : (nextProps.volume * 100) + "%";
                
                this.setState({volumeBarValueStyle: {
                    width: !nextProps.verticalVolume ? volumeBarValue : null,
                    height: nextProps.verticalVolume ? volumeBarValue : null
                }});

                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VOLUME_BAR_VALUE_CLASS, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updateVolumeBarValueStyles(nextProps);
        }
        render() {
            return <div className={this.state.volumeBarValueClass.join(" ")} style={this.state.volumeBarValueStyle} {...this.props} />
        }
    }  
);