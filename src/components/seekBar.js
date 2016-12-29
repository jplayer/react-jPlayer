import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";
import {getOffset, getWidth, addUniqueToArray, removeFromArrayByValue, updateObjectByKey, limitValue, convertTime} from "../util/index";
import actions, {playHead} from "../actions/jPlayerActions";

const mapStateToProps = (state, ownProps) => ({
    seekPercent: state.jPlayer.seekPercent,
    seeking: state.jPlayer.seeking,
    remaining: state.jPlayer.remaining,
    media: state.jPlayer.media,
    currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
    currentPercentRelative: state.jPlayer.currentPercentRelative,
    smoothPlayBar: state.jPlayer.smoothPlayBar,
    playHeadPercent: state.jPlayer.playHeadPercent,
    barDrag: state.jPlayer.barDrag,
    attributes: ownProps
});

export default connect(mapStateToProps)(
    class extends React.Component {
        onSeekBarClick = (e) => this.movePlayHead(e)
        onSeekBarMouseMove = (e) => this.props.barDrag && this.dragging ? this.movePlayHead(e) : null
        onSeekBarMouseDown = () => this.dragging = true
        onSeekBarMouseUp = () => this.dragging = false
        movePlayHead = (e) => {
            var offset = getOffset(this.seekBar),
                x = e.pageX - offset.left,
                w = getWidth(this.seekBar),
                percentage = 100 * x / w;
            
            this.props.dispatch(playHead(percentage));
        }
        componentWillMount() {
            document.addEventListener("mouseup", this.onSeekBarMouseUp);
            document.addEventListener("mousemove", this.onSeekBarMouseMove);
        }
        componentWillUnMount() {
            document.removeEventListener("mouseup", this.onSeekBarMouseUp);
            document.removeEventListener("mousemove", this.onSeekBarMouseMove);
        }
        render() {
            return (
                <div ref={ref => this.seekBar = ref} className={classNames.SEEK_BAR} style={{width: `${this.props.seekPercent}%`}} onClick={this.onSeekBarClick} 
                    onMouseDown={this.onSeekBarMouseDown} {...this.props.attributes}>
                    {this.props.children}
                </div>
            );
        }
    }
)

