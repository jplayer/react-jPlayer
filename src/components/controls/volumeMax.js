import React from "react";
import {connect} from "react-redux";

import {addUniqueToArray, removeFromArrayByValue,updateObjectByKey} from "../../util/index";
import {classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    muted: state.jPlayer.muted,
    attributes: ownProps
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
                this.setState(state => updateObjectByKey(state, "volumeMaxClass", addUniqueToArray(state.volumeMaxClass, classNames.HIDDEN)));
            } else {
                this.setState(state => updateObjectByKey(state, "volumeMaxClass", removeFromArrayByValue(state.volumeMaxClass, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updateVolumeMaxStyles(nextProps);
        }
        render() {
            return <a className={this.state.volumeMaxClass.join(" ")} onClick={this.props.onVolumeMaxClick} {...this.props.attributes}>{this.props.children}</a>
        }
    }  
);