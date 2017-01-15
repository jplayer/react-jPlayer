import React from 'react';

import { classes, defaultOptions } from '../util/constants';

class Buffer extends React.Component {
  static get propTypes() {
    return {
      bufferedTimeRanges: React.PropTypes.arrayOf(React.PropTypes.shape({
        start: React.PropTypes.number.isRequired,
        end: React.PropTypes.number.isRequired,
      })).isRequired,
      bufferColour: React.PropTypes.string,
      duration: React.PropTypes.number.isRequired,
    };
  }
  static get defaultProps() {
    return {
      bufferColour: defaultOptions.bufferColour,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      this.newCanvas(nextProps);
    }
  }
  newCanvas = ({ bufferedTimeRanges, bufferColour, duration }) => {
    const modifier = this.canvas.width / duration;
    const context = this.canvas.getContext('2d');

    bufferedTimeRanges.forEach((bufferedTimeRange) => {
      const startX = bufferedTimeRange.start * modifier;
      const endX = bufferedTimeRange.end * modifier;
      const width = endX - startX;

      context.fillStyle = bufferColour;
      context.fillRect(startX, 0, width, this.canvas.height);
    });
  }
  render() {
    return (
      <canvas
        {...this.props} ref={ref => (this.canvas = ref)}
        className={classes.BUFFER_BAR}
      />
    );
  }
}

export default Buffer;
