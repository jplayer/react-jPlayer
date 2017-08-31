import PropTypes from 'prop-types';
import { connectWithId, toPercentage, toRelativePercentage } from 'react-jplayer-utils';
import { compose, lifecycle as setLifecycle, withHandlers, setPropTypes } from 'recompose';

import Media from './media';
import { setOption } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  loop: jPlayers[id].loop,
  src: jPlayers[id].src,
  playHeadPercent: jPlayers[id].playHeadPercent,
  paused: jPlayers[id].paused,
  defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  preload: jPlayers[id].preload,
  volume: jPlayers[id].volume,
  muted: jPlayers[id].muted,
  autoplay: jPlayers[id].autoplay,
  newTime: jPlayers[id].newTime,
  tracks: jPlayers[id].media.tracks,
});

const handlers = () => {
  let currentMedia;

  const getSeekableEnd = () => currentMedia.seekable.end(currentMedia.seekable.length - 1);
  const getCurrentPercentRelative = () => {
    let currentPercentRelative = 0;

    if (currentMedia.seekable.length > 0) {
      currentPercentRelative = toPercentage(currentMedia.currentTime, getSeekableEnd());
    }
    return currentPercentRelative;
  };

  return {
    getCurrentMedia: () => () => currentMedia,
    setCurrentMedia: () => (ref) => {
      currentMedia = ref;
    },
    updateMediaStatus: props => () => {
      let seekPercent = 0;

      const currentPercentAbsolute = toPercentage(currentMedia.currentTime, currentMedia.duration);

      if (currentMedia.seekable.length > 0) {
        seekPercent = toPercentage(getSeekableEnd(), currentMedia.duration);
      }

      props.setOption(props.id, 'seekPercent', seekPercent);
      props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
      props.setOption(props.id, 'currentPercentAbsolute', currentPercentAbsolute);
      props.setOption(props.id, 'currentTime', currentMedia.currentTime);
      props.setOption(props.id, 'duration', currentMedia.duration);
      props.setOption(props.id, 'playbackRate', currentMedia.playbackRate);
    },
    updateMediaSrc: props => () => {
      currentMedia.src = props.src;
    },
    updateMediaTime: props => () => {
      currentMedia.currentTime = props.newTime;
      props.setOption(props.id, 'newTime', null);
    },
    updateMediaTimeAfterSeeking: props => () => {
      // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
      // Hasn't fully loaded the song????
      if (currentMedia.seekable.length > 0) {
        const seekableEnd = getSeekableEnd();

        if (isFinite(seekableEnd)) {
          currentMedia.currentTime = toRelativePercentage(
            props.playHeadPercent,
            seekableEnd,
          );
          /* Media events don't fire fast enough to give a smooth animation
            when dragging so we update it here as well, same problem as above? */
          props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
        }
      }
    },
    updateMediaPlayState: props => () => {
      if (props.paused) {
        currentMedia.pause();
      } else {
        currentMedia.play();
      }
    },
    updateOtherMediaValues: props => () => {
      currentMedia.defaultPlaybackRate = props.defaultPlaybackRate;
      currentMedia.playbackRate = props.playbackRate;
      currentMedia.preload = props.preload;
      currentMedia.volume = props.volume;
      currentMedia.muted = props.muted;
      currentMedia.autoplay = props.autoplay;
      currentMedia.loop = props.loop;
    },
  };
};

const lifecycle = {
  componentDidMount() {
    if (this.props.src !== null) {
      this.props.updateMediaSrc();
    }

    this.props.updateOtherMediaValues();
  },
  componentDidUpdate(prevProps) {
    this.props.updateOtherMediaValues();

    if (this.props.newTime !== null) {
      this.props.updateMediaTime();
    }

    if (prevProps.src !== this.props.src) {
      this.props.updateMediaSrc();
    }

    if (prevProps.playHeadPercent !== this.props.playHeadPercent) {
      this.props.updateMediaTimeAfterSeeking();
    }

    if (prevProps.paused !== this.props.paused) {
      this.props.updateMediaPlayState();
    }
  },
};

const propTypes = {
  src: PropTypes.string,
  playHeadPercent: PropTypes.number.isRequired,
  setOption: PropTypes.func.isRequired,
  events: PropTypes.shape({
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
  id: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
  newTime: PropTypes.number,
  loop: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool.isRequired,
  defaultPlaybackRate: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  playbackRate: PropTypes.number.isRequired,
  preload: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  setPropTypes(propTypes),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(Media);
