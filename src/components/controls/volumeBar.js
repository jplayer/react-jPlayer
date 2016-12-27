import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset, addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    verticalVolume: state.jPlayer.verticalVolume,
    noVolume: state.jPlayer.noVolume,
    muted: state.jPlayer.muted
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                volumeBarClass: [classNames.VOLUME_BAR]
            }
        }
        onVolumeBarClick = (e) => {
            var bar = e.currentTarget,
                offset = getOffset(bar),
                x = e.pageX - offset.left,
                w = getWidth(bar),
                y = getHeight(bar) - e.pageY + offset.top,
                h = getHeight(bar);

            this.props.verticalVolume ? this.props.dispatch(volume(y/h)) : this.props.dispatch(volume(x/w))

            if(this.props.muted) {
                this.props.dispatch(mute(false));
            }
        }
        _updateVolumeBarStyles = (nextProps) => {
            if(nextProps.noVolume) {
                this.setState(state => updateObjectByKey(state, "volumeBarClass", addUniqueToArray(state.volumeBarClass, classNames.HIDDEN)));
            } else {
                this.setState(state => updateObjectByKey(state, "volumeBarClass", removeFromArrayByValue(state.volumeBarClass, classNames.HIDDEN)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this._updateVolumeBarStyles(nextProps);
        }
        render() {
            return (
                <div className={this.state.volumeBarClass.join(" ")} onClick={this.onVolumeBarClick}>
                    {this.props.children}
                </div>
            );
        }
    }  
);