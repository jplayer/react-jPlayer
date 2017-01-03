import React from "react";
import {connect} from "react-redux";

import {getWidth, getHeight, getOffset} from "../../util/index";
import {mapStateToProps} from "../../util/index";
import {keys, classNames} from "../../util/constants";
import {mute, volume} from "../../actions/jPlayerActions";
import jPlayerConnect from "../../jPlayerConnect";

const mapJPlayerProps = (jPlayers, id) => ({
    verticalVolume: jPlayers[id].verticalVolume,
    noVolume: jPlayers[id].noVolume,
    muted: jPlayers[id].muted,
    barDrag: jPlayers[id].barDrag
});

class VolumeBar extends React.Component {
    onVolumeBarClick = (e) => this.moveVolumeBar(e)
    onVolumeBarMouseMove = (e) => this.props.barDrag && this.dragging ? this.moveVolumeBar(e) : null
    onVolumeBarMouseDown = () => this.dragging = true
    onVolumeBarMouseUp = () => this.dragging = false
    moveVolumeBar = (e) => {
        var offset = getOffset(this.volumeBar),
            x = e.pageX - offset.left,
            w = getWidth(this.volumeBar),
            y = getHeight(this.volumeBar) - e.pageY + offset.top,
            h = getHeight(this.volumeBar);

        this.props.verticalVolume ? this.props.dispatch(volume(y/h, this.props.id)) : this.props.dispatch(volume(x/w, this.props.id))
        this.props.dispatch(mute(false, this.props.id));
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
            <div ref={ref => this.volumeBar = ref} className={classNames.VOLUME_BAR} onClick={this.onVolumeBarClick} onMouseDown={this.onVolumeBarMouseDown}
                {...this.props.attributes}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(mapStateToProps)(jPlayerConnect(VolumeBar, mapJPlayerProps));