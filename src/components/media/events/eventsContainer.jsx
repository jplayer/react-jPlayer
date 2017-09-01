import { compose, defaultProps as setDefaultProps, mapProps, withHandlers } from 'recompose';
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
  currentMedia: {
    buffered: {},
  },
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

const propsMapper = ownerProps => ({
  children: ownerProps.children,
  events: {
    onAbort: ownerProps.onAbort,
    onCanPlay: ownerProps.onCanPlay,
    onCanPlayThrough: ownerProps.onCanPlayThrough,
    onDurationChange: ownerProps.onDurationChange,
    onEmptied: ownerProps.onEmptied,
    onEncrypted: ownerProps.onEncrypted,
    onEnded: ownerProps.onEnded,
    onError: ownerProps.onError,
    onLoadedData: ownerProps.onLoadedData,
    onLoadedMetadata: ownerProps.onLoadedMetadata,
    onLoadStart: ownerProps.onLoadStart,
    onPause: ownerProps.onPause,
    onPlay: ownerProps.onPlay,
    onPlaying: ownerProps.onPlaying,
    onProgress: ownerProps.onProgress,
    onRateChange: ownerProps.onRateChange,
    onSeeked: ownerProps.onSeeked,
    onSeeking: ownerProps.onSeeking,
    onStalled: ownerProps.onStalled,
    onSuspend: ownerProps.onSuspend,
    onTimeUpdate: ownerProps.onTimeUpdate,
    onVolumeChange: ownerProps.onVolumeChange,
    onWaiting: ownerProps.onWaiting,
  },
});

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
    pause,
    play,
  }),
  setDefaultProps(defaultProps),
  withHandlers(firstHandlers),
  withHandlers(secondHandlers),
  mapProps(propsMapper),
)(Events);
