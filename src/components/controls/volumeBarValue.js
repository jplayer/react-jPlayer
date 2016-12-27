import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

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
                this.setState(state => updateObjectByKey(state, "volumeBarValueClass", addUniqueToArray(state.volumeBarValueClass, classNames.HIDDEN)));
            } else {
                const volumeBarValue = nextProps.muted ? 0 : (nextProps.volume * 100) + "%";
                
                this.setState({volumeBarValueStyle: {
                    width: !nextProps.verticalVolume ? volumeBarValue : null,
                    height: nextProps.verticalVolume ? volumeBarValue : null
                }});

                this.setState(state => updateObjectByKey(state, "volumeBarValueClass", removeFromArrayByValue(state.volumeBarValueClass, classNames.HIDDEN)));
            }
        }
        componentDidMount() {
            this._updateVolumeBarValueStyles(this.props);
        }
        componentWillReceiveProps(nextProps) {
            this._updateVolumeBarValueStyles(nextProps);
        }
        render() {
            return <div className={this.state.volumeBarValueClass.join(" ")} style={this.state.volumeBarValueStyle} />
        }
    }  
);