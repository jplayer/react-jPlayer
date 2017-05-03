import React from 'react';
import PropTypes from 'prop-types';

import { connectWithId } from 'react-jplayer-utils';
import BufferBar from './bufferBar';

const mapStateToProps = ({ jPlayers }, { id, ...attributes }) => ({
  bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
  duration: jPlayers[id].duration,
  bufferColour: jPlayers[id].bufferColour,
  attributes,
});

class BufferBarContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: PropTypes.object.isRequired,
      bufferedTimeRanges: PropTypes.arrayOf(PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
      })).isRequired,
      bufferColour: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      if (this.props.bufferedTimeRanges.length === 0) {
        this.clearBuffer();
      }
      this.fillBufferPartially();
    }
  }
  setCanvas = (ref) => {
    this.canvas = ref;
  }
  clearBuffer = () => {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  fillBufferPartially = () => {
    const modifier = this.canvas.width / this.props.duration;
    const context = this.canvas.getContext('2d');

    this.props.bufferedTimeRanges.forEach((bufferedTimeRange) => {
      const startX = bufferedTimeRange.start * modifier;
      const endX = bufferedTimeRange.end * modifier;
      const width = endX - startX;

      context.fillStyle = this.props.bufferColour;
      context.fillRect(startX, 0, width, this.canvas.height);
    });
  }
  render() {
    return <BufferBar setCanvas={this.setCanvas} attributes={this.props.attributes} />;
  }
}

export default connectWithId(mapStateToProps)(BufferBarContainer);
