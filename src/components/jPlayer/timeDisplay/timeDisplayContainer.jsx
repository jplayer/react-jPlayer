import PropTypes from 'prop-types';
import { connectWithId, convertTime } from 'react-jplayer-utils';
import { compose, setPropTypes, lifecycle as setLifecycle, withHandlers } from 'recompose';

import { setOption } from '../../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  timeFormats: jPlayers[id].timeFormats,
  currentTime: jPlayers[id].currentTime,
  duration: jPlayers[id].duration,
  showRemainingDuration: jPlayers[id].showRemainingDuration,
});

const propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  showRemainingDuration: PropTypes.bool.isRequired,
  timeFormats: PropTypes.shape({
    showHour: PropTypes.bool.isRequired,
    showMin: PropTypes.bool.isRequired,
    showSec: PropTypes.bool.isRequired,
    padHour: PropTypes.bool.isRequired,
    padMin: PropTypes.bool.isRequired,
    padSec: PropTypes.bool.isRequired,
    sepHour: PropTypes.string.isRequired,
    sepMin: PropTypes.string.isRequired,
    sepSec: PropTypes.string.isRequired,
  }).isRequired,
};

const handlers = {
  setDurationText: props => () => {
    let durationText = '';

    if (props.showRemainingDuration) {
      const timeRemaining = props.duration - props.currentTime;

      durationText = (timeRemaining > 0 ? '-' : '') +
        convertTime(timeRemaining, props.timeFormats);
    } else {
      durationText = convertTime(props.duration, props.timeFormats);
    }

    props.setOption(props.id, 'durationText', durationText);
  },
  setCurrentTimeText: props => () => {
    const currentTimeText = convertTime(props.currentTime, props.timeFormats);

    props.setOption(props.id, 'currentTimeText', currentTimeText);
  },
};

const lifecycle = {
  componentWillReceiveProps(prevProps) {
    if (prevProps.timeFormats !== this.props.timeFormats ||
      prevProps.currentTime !== this.props.currentTime) {
      this.props.setCurrentTimeText();
    }

    if (prevProps.timeFormats !== this.props.timeFormats ||
      prevProps.currentTime !== this.props.currentTime ||
      prevProps.duration !== this.props.duration ||
      prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
      this.props.setDurationText();
    }
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  setPropTypes(propTypes),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(() => null);

