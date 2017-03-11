import React from 'react';

import { connectWithId } from '../../util/index';
import BufferBar from './bufferBar';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
  duration: jPlayers[id].duration,
  bufferColour: jPlayers[id].bufferColour,
  attributes,
});

const mergeProps = stateProps => ({ ...stateProps });

class BufferBarContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.object,
      bufferedTimeRanges: React.PropTypes.arrayOf(React.PropTypes.shape({
        start: React.PropTypes.number.isRequired,
        end: React.PropTypes.number.isRequired,
      })).isRequired,
      /* eslint-disable react/no-unused-prop-types */
      bufferColour: React.PropTypes.string.isRequired,
      duration: React.PropTypes.number.isRequired,
      /* eslint-enable react/no-unused-prop-types */
    };
  }
  static get defaultProps() {
    return {
      attributes: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      if (nextProps.bufferedTimeRanges.length === 0) {
        this.clearBuffer();
      }
      this.fillBufferPartially(nextProps);
    }
  }
  setCanvas = (ref) => {
    this.canvas = ref;
  }
  clearBuffer = () => {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  fillBufferPartially = ({ bufferedTimeRanges, bufferColour, duration }) => {
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
    return <BufferBar setCanvas={this.setCanvas} {...this.props.attributes} />;
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(BufferBarContainer);
