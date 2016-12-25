import React from "react";
import {connect} from "react-redux";

import {classNames} from "../../util/constants";
import {mute, volume, addUniqueToArray, removeFromArrayByValue} from "../../actions/jPlayerActions";
import * as reducer from "../../reducers/index";

const mapStateToProps = (state) => ({
    muted: state.jPlayer.muted
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                volumeMaxClass: [classNames.VOLUME_MAX]
            }
        }
        onVolumeMaxClick = () => {
            this.props.dispatch(volume(1));

            if(this.props.muted) {
                this.props.dispatch(mute(false));
            }
        }
        _updateVolumeMaxStyles = (nextProps) => {
            if(nextProps.noVolume) {
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VOLUME_MAX_CLASS, classNames.HIDDEN)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VOLUME_MAX_CLASS, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updateVolumeMaxStyles(nextProps);
        }
        render() {
            return <a className={this.state.volumeMaxClass.join(" ")} onClick={this.props.onVolumeMaxClick}>{this.props.children}</a>
        }
    }  
);