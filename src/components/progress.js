import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";
import {getOffset, getWidth, addUniqueToArray, removeFromArrayByValue, updateObjectByKey, limitValue, convertTime} from "../util/index";
import actions, {playHead} from "../actions/jPlayerActions";

const mapStateToProps = (state) => ({
    seekPercent: state.jPlayer.seekPercent,
    seeking: state.jPlayer.seeking,
    remaining: state.jPlayer.remaining,
    media: state.jPlayer.media,
    currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
    currentPercentRelative: state.jPlayer.currentPercentRelative,
    smoothPlayBar: state.jPlayer.smoothPlayBar,
    playHeadPercent: state.jPlayer.playHeadPercent,
    barDrag: state.jPlayer.barDrag
});

export default connect(mapStateToProps)(
    class extends React.PureComponent {
        constructor() {
            super();
            
            this.state = {
                seekBarClass: [classNames.SEEK_BAR]
            }
        }
        static get defaultProps() {
            return {
                onSeekBarClick: React.PropTypes.func,
                seekBarStyle: React.PropTypes.object
            }
        }
        onSeekBarClick = (e) => !this.props.barDrag ? this.movePlayHead(e) : null
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
        updateBarStyles = (nextProps) => {
            this.setState({seekBarStyle: {width: `${nextProps.seekPercent}%`}});

            if (nextProps.seeking) {
                this.setState(state => updateObjectByKey(state, "seekBarClass", addUniqueToArray(state.seekBarClass, classNames.states.SEEKING)));
            } else {
                this.setState(state => updateObjectByKey(state, "seekBarClass", removeFromArrayByValue(state.seekBarClass, classNames.states.SEEKING)));
            }
        }
        componentWillReceiveProps(nextProps) {
            this.updateBarStyles(nextProps);
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
                <div className="jp-progress">
                    <div ref={ref => this.seekBar = ref} className={this.state.seekBarClass.join(" ")} style={this.state.seekBarStyle} onClick={this.onSeekBarClick} 
                        onMouseDown={this.onSeekBarMouseDown}>
                        {this.props.children}
                    </div>
                </div>
            );
        }
    }
)