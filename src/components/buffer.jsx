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
  newCanvas = (nextProps) => {
    const modifier = this.canvas.width / nextProps.duration;
    const context = this.canvas.getContext('2d');

    nextProps.bufferedTimeRanges.forEach((bufferedTimeRange) => {
      const startX = bufferedTimeRange.start * modifier;
      const endX = bufferedTimeRange.end * modifier;
      const width = endX - startX;

      context.fillStyle = nextProps.bufferColour;
      context.fillRect(startX, 0, width, this.canvas.height);
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      this.newCanvas(nextProps);
    }
  }
  render() {
    return (
      <canvas
        {...this.props.attributes} ref={ref => (this.canvas = ref)}
        className={classes.BUFFER_BAR}
      />
    );
  }
}

export default Buffer;
