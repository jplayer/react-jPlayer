import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset, addUniqueToArray, removeFromArrayByValue, updateObjectByKey} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    verticalVolume: state.jPlayer.verticalVolume,
    noVolume: state.jPlayer.noVolume,
    muted: state.jPlayer.muted,
    barDrag: state.jPlayer.barDrag
});

export default connect(mapStateToProps)(
    class extends React.Component {
        constructor(props) {
            super();

            this.state = {
                volumeBarClass: [classNames.VOLUME_BAR]
            }
        }
        onVolumeBarClick = (e) => !this.props.barDrag ? this.moveVolumeBar(e) : null
        onVolumeBarMouseMove = (e) => this.props.barDrag && this.dragging ? this.moveVolumeBar(e) : null
        onVolumeBarMouseDown = () => this.dragging = true
        onVolumeBarMouseUp = () => this.dragging = false
        moveVolumeBar = (e) => {
            var offset = getOffset(this.volumeBar),
                x = e.pageX - offset.left,
                w = getWidth(this.volumeBar),
                y = getHeight(this.volumeBar) - e.pageY + offset.top,
                h = getHeight(this.volumeBar);

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
        componentWillMount() {
            document.addEventListener("mouseup", this.onVolumeBarMouseUp);
            document.addEventListener("mousemove", this.onVolumeBarMouseMove);
        }
        componentWillUnMount() {
            document.removeEventListener("mouseup", this.onVolumeBarMouseUp);
            document.removeEventListener("mousemove", this.onVolumeBarMouseMove);
        }
        render() {
            return (
                <div ref={(ref) => this.volumeBar = ref} className={this.state.volumeBarClass.join(" ")} onClick={this.onVolumeBarClick} onMouseDown={this.onVolumeBarMouseDown}>
                    {this.props.children}
                </div>
            );
        }
    }  
);