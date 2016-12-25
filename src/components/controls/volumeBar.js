import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {mute, volume, addUniqueToArray, removeFromArrayByValue} from "../../actions/jPlayerActions";
import * as reducer from "../../reducers/index";

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
            // Using $(e.currentTarget) to enable multiple volume bars
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
                this.setState(state => reducer.addUniqueToArray(state, addUniqueToArray(keys.VOLUME_BAR_CLASS, classNames.HIDDEN)));
            } else {
                this.setState(state => reducer.removeFromArrayByValue(state, removeFromArrayByValue(keys.VOLUME_BAR_CLASS, classNames.HIDDEN)));
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