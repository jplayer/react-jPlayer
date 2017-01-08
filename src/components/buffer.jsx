import React from 'react';

import { classes } from '../util/constants';

class Buffer extends React.Component {
  static get propTypes() {
    return {
      bufferedTimeRanges: React.PropTypes.arrayOf(React.PropTypes.shape({
        start: React.PropTypes.number,
        end: React.PropTypes.number,
      })),
      bufferColour: React.PropTypes.string,
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      this.newCanvas(nextProps);
    }
  }
  newCanvas = (nextProps) => {
    const modifier = this.canvas.width / nextProps.duration;
    const context = this.canvas.getContext('2d');

    nextProps.bufferedTimeRanges.forEach((bufferedTimeRange) => {
      const startX = bufferedTimeRange.start * modifier;
      const endX = bufferedTimeRange.end * modifier;
      const width = endX - startX;

      context.fillStyle = this.props.bufferColour;
      context.fillRect(startX, 0, width, this.canvas.height);
    });
  }
  render() {
    return (
      <canvas
        ref={ref => (this.canvas = ref)} className={classes.BUFFER_BAR}
        {...this.props.attributes}
      />
    );
  }
}

export default Buffer;
