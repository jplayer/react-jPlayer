import PropTypes from 'prop-types';
import { compose, defaultProps as setDefaultProps, mapProps, withHandlers, getContext } from 'recompose';
import { connectWithId } from 'react-jplayer-utils';

import Events from './events';
import urlNotSupportedError from '../../../util/errorHandlers/urlNotSupportedError';
import { setOption, pause, play } from '../../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  src: jPlayers[id].src,
  pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
  otherJPlayerIds: Object.keys(jPlayers).filter(key => key !== id),
});

const contextTypes = {
  internalEvents: PropTypes.shape({
    onAbort: PropTypes.func,
    onCanPlay: PropTypes.func,
    onCanPlayThrough: PropTypes.func,
    onDurationChange: PropTypes.func,
    onEmptied: PropTypes.func,
    onEncrypted: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
    onLoadedData: PropTypes.func,
    onLoadedMetadata: PropTypes.func,
    onLoadStart: PropTypes.func,
    onPause: PropTypes.func,
    onPlay: PropTypes.func,
    onPlaying: PropTypes.func,
    onProgress: PropTypes.func,
    onRateChange: PropTypes.func,
    onSeeked: PropTypes.func,
    onSeeking: PropTypes.func,
    onStalled: PropTypes.func,
    onSuspend: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onVolumeChange: PropTypes.func,
    onWaiting: PropTypes.func,
  }),
};

const defaultProps = {
  internalEvents: {},
};

const mapEvents = (ownerProps) => {
  const events = {};

  Object.keys(ownerProps.internalEvents).forEach((key) => {
    events[key] = (e) => {
      ownerProps.internalEvents[key](e);
      ownerProps[key](e);
    };
  });

  return {
    ...ownerProps,
    ...events,
  };
};

const firstHandlers = {
  pauseOthers: props => () => {
    props.otherJPlayerIds.forEach(id => props.pause(id));
  },
};

const secondHandlers = {
  onDurationChange: props => (e) => {
    props.updateMediaStatus();
    props.onDurationChange(e);
  },
  onEnded: props => (e) => {
    props.pause(props.id, 0);
    props.updateMediaStatus();
    props.onEnded(e);
  },
  onError: props => (e) => {
    props.setOption(props.id, 'error', urlNotSupportedError(props.src));
    props.onError(e);
  },
  onPlay: props => (e) => {
    if (props.pauseOthersOnPlay) {
      props.pauseOthers();
    }
    props.play(props.id);
    props.onPlay(e);
  },
  onProgress: props => (e) => {
    const bufferedTimeRanges = [];

    for (let i = 0; i < e.currentTarget.buffered.length; i += 1) {
      bufferedTimeRanges.push({
        start: e.currentTarget.buffered.start(i),
        end: e.currentTarget.buffered.end(i),
      });
    }
    props.updateMediaStatus();
    props.setOption(props.id, 'bufferedTimeRanges', bufferedTimeRanges);
    props.onProgress(e);
  },
  onSeeked: props => (e) => {
    props.setOption(props.id, 'seeking', false);
    props.onSeeked(e);
  },
  onSeeking: props => (e) => {
    props.setOption(props.id, 'seeking', true);
    props.onSeeking(e);
  },
  onTimeUpdate: props => (e) => {
    props.updateMediaStatus();
    props.onTimeUpdate(e);
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
    pause,
    play,
  }),
  getContext(contextTypes),
  setDefaultProps(defaultProps),
  mapProps(mapEvents),
  withHandlers(firstHandlers),
  withHandlers(secondHandlers),
)(Events);
