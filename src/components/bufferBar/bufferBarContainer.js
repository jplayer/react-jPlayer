import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers, lifecycle as setLifecycle } from 'recompose';

import { connectWithId } from 'react-jplayer-utils';
import BufferBar from './bufferBar';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
  duration: jPlayers[id].duration,
  bufferColour: jPlayers[id].bufferColour,
});

const handlers = () => {
  let canvas;

  return {
    setCanvas: () => (ref) => {
      canvas = ref;
    },
    clearBuffer: () => () => {
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    },
    fillBufferPartially: props => () => {
      const modifier = canvas.width / props.duration;
      const context = canvas.getContext('2d');

      props.bufferedTimeRanges.forEach((bufferedTimeRange) => {
        const startX = bufferedTimeRange.start * modifier;
        const endX = bufferedTimeRange.end * modifier;
        const width = endX - startX;

        context.fillStyle = props.bufferColour;
        context.fillRect(startX, 0, width, canvas.height);
      });
    },
  };
};

const propTypes = {
  bufferedTimeRanges: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
  })).isRequired,
  bufferColour: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  setCanvas: PropTypes.func.isRequired,
  clearBuffer: PropTypes.func.isRequired,
  fillBufferPartially: PropTypes.func.isRequired,
};

const lifecycle = {
  componentDidUpdate(prevProps) {
    if (prevProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      if (this.props.bufferedTimeRanges.length === 0) {
        this.props.clearBuffer();
      }
      this.props.fillBufferPartially();
    }
  },
};

export default compose(
  connectWithId(mapStateToProps),
  withHandlers(handlers),
  setPropTypes(propTypes),
  setLifecycle(lifecycle),
)(BufferBar);
