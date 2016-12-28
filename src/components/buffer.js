import React from "react";
import {connect} from "react-redux";

import {Motion, spring} from "react-motion";

const mapStateToProps = (state) => ({
    bufferedTimeRanges: state.jPlayer.bufferedTimeRanges,
    duration: state.jPlayer.duration
});

export default connect(mapStateToProps)(
    class extends React.Component {
        newCanvas = (nextProps) => {
            const inc = this.canvas.width / nextProps.duration;
            const context = this.canvas.getContext("2d");

            nextProps.bufferedTimeRanges.forEach(bufferedTimeRange => {
                const startX = bufferedTimeRange.start * inc;
                const endX = bufferedTimeRange.end * inc;
                const width = endX - startX;

                console.log(bufferedTimeRange.start);
                console.log(bufferedTimeRange.end);

                context.fillStyle = "red";
                context.strokeStyle = "white";
                context.fillRect(startX, 0, width, this.canvas.height);
            });
        }
        componentWillReceiveProps(nextProps) {
            if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
                this.newCanvas(nextProps);
            }
        }
        render() {
           // const bufferPercentage = (this.props.buffer / this.props.duration) * 100;

            // return <canvas ref={ref => this.canvas = ref} className="jp-buffer-bar" style={{width: `${bufferPercentage}%`}} />
            return <canvas ref={ref => this.canvas = ref} className="jp-buffer-bar" />
        }
    }
)