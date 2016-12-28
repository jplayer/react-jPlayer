import React from "react";
import {connect} from "react-redux";

import {Motion, spring} from "react-motion";

const mapStateToProps = (state) => ({
    bufferedTimeRanges: state.jPlayer.bufferedTimeRanges,
    duration: state.jPlayer.duration,
    bufferColour: state.jPlayer.bufferColour
});

export default connect(mapStateToProps)(
    class extends React.Component {
        newCanvas = (nextProps) => {
            const modifier = this.canvas.width / nextProps.duration;
            const context = this.canvas.getContext("2d");

            nextProps.bufferedTimeRanges.forEach(bufferedTimeRange => {
                const startX = bufferedTimeRange.start * modifier;
                const endX = bufferedTimeRange.end * modifier;
                const width = endX - startX;

                context.fillStyle = this.props.bufferColour;
                context.fillRect(startX, 0, width, this.canvas.height);
            });
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
                this.newCanvas(nextProps);
            }
        }
        render() {
            return <canvas ref={ref => this.canvas = ref} className="jp-buffer-bar" />
        }
    }
)