import PropTypes from 'prop-types';
import { compose, setPropTypes, defaultProps as setDefaultProps, mapProps, withHandlers } from 'recompose';
import { connectWithId } from 'react-jplayer-utils';

import Events from './events';
import urlNotSupportedError from '../../../util/errorHandlers/urlNotSupportedError';
import { setOption, pause, play } from '../../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  src: jPlayers[id].src,
  pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
  otherJPlayerIds: Object.keys(jPlayers).filter(key => key !== id),
});

const defaultProps = {
  onDurationChange: Function.prototype,
  onEnded: Function.prototype,
  onError: Function.prototype,
  onPlay: Function.prototype,
  onProgress: Function.prototype,
  onSeeked: Function.prototype,
  onSeeking: Function.prototype,
  onTimeUpdate: Function.prototype,
};

const propTypes = {
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
  currentMedia: PropTypes.object,
  updateMediaStatus: PropTypes.func.isRequired,
  otherJPlayerIds: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

const firstHandlers = {
  pauseOthers: props => () => {
    props.otherJPlayerIds.forEach(id => props.pause(id));
  },
};

const secondHandlers = {
  onDurationChange: props => () => {
    props.updateMediaStatus();
    props.onDurationChange();
  },
  onEnded: props => () => {
    props.pause(props.id, 0);
    props.updateMediaStatus();
    props.onEnded();
  },
  onError: props => () => {
    props.setOption(props.id, 'error', urlNotSupportedError(props.src));
    props.onError();
  },
  onPlay: props => () => {
    if (props.pauseOthersOnPlay) {
      props.pauseOthers();
    }
    props.play(props.id);
    props.onPlay();
  },
  onProgress: props => () => {
    const bufferedTimeRanges = [];

    for (let i = 0; i < props.currentMedia.buffered.length; i += 1) {
      bufferedTimeRanges.push({
        start: props.currentMedia.buffered.start(i),
        end: props.currentMedia.buffered.end(i),
      });
    }
    props.updateMediaStatus();
    props.setOption(props.id, 'bufferedTimeRanges', bufferedTimeRanges);
    props.onProgress();
  },
  onSeeked: props => () => {
    props.setOption(props.id, 'seeking', false);
    props.onSeeked();
  },
  onSeeking: props => () => {
    props.setOption(props.id, 'seeking', true);
    props.onSeeking();
  },
  onTimeUpdate: props => () => {
    props.updateMediaStatus();
    props.onTimeUpdate();
  },
};

const propsMapper = props => ({
  children: props.children,
  onAbort: props.onAbort,
  onCanPlay: props.onCanPlay,
  onCanPlayThrough: props.onCanPlayThrough,
  onDurationChange: props.onDurationChange,
  onEmptied: props.onEmptied,
  onEncrypted: props.onEncrypted,
  onEnded: props.onEnded,
  onError: props.onError,
  onLoadedData: props.onLoadedData,
  onLoadedMetadata: props.onLoadedMetadata,
  onLoadStart: props.onLoadStart,
  onPause: props.onPause,
  onPlay: props.onPlay,
  onPlaying: props.onPlaying,
  onProgress: props.onProgress,
  onRateChange: props.onRateChange,
  onSeeked: props.onSeeked,
  onSeeking: props.onSeeking,
  onStalled: props.onStalled,
  onSuspend: props.onSuspend,
  onTimeUpdate: props.onTimeUpdate,
  onVolumeChange: props.onVolumeChange,
  onWaiting: props.onWaiting,
});

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
    pause,
    play,
  }),
  setDefaultProps(defaultProps),
  setPropTypes(propTypes),
  withHandlers(firstHandlers),
  withHandlers(secondHandlers),
  mapProps(propsMapper),
)(Events);
