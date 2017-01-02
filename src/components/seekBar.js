import React from "react";
import {connect} from "react-redux";

import {keys, classNames} from "../util/constants";
import {getOffset, getWidth, limitValue, convertTime} from "../util/index";
import actions, {playHead} from "../actions/jPlayerActions";

const mapStateToProps = ({jPlayers, selector=jPlayers.currentSelector}, ownProps) => ({
    seekPercent: jPlayers[selector].seekPercent,
    seeking: jPlayers[selector].seeking,
    remaining: jPlayers[selector].remaining,
    media: jPlayers[selector].media,
    currentPercentAbsolute: jPlayers[selector].currentPercentAbsolute,
    currentPercentRelative: jPlayers[selector].currentPercentRelative,
    smoothPlayBar: jPlayers[selector].smoothPlayBar,
    playHeadPercent: jPlayers[selector].playHeadPercent,
    barDrag: jPlayers[selector].barDrag,
    attributes: ownProps,
    selector
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
            
            this.props.dispatch(playHead(percentage, this.props.selector));
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

