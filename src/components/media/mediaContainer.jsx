import { connectWithId, toPercentage, toRelativePercentage } from 'react-jplayer-utils';
import { compose, lifecycle as setLifecycle, withHandlers } from 'recompose';

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

  const getSeekableEnd = () => {
    if (currentMedia.seekable.length > 0) {
      return currentMedia.seekable.end(currentMedia.seekable.length - 1);
    }

    return NaN;
  };
  const getCurrentPercentRelative = () => toPercentage(currentMedia.currentTime, getSeekableEnd());
  const getSeekPercent = () => toPercentage(getSeekableEnd(), currentMedia.duration);

  return {
    setCurrentMedia: () => (ref) => {
      currentMedia = ref;
    },
    updateMediaStatus: props => () => {
      const currentPercentAbsolute = toPercentage(currentMedia.currentTime, currentMedia.duration);

      // Is infinite when live streaming
      if (isFinite(currentMedia.duration)) {
        props.setOption(props.id, 'duration', currentMedia.duration);
      }

      props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
      props.setOption(props.id, 'seekPercent', getSeekPercent());
      props.setOption(props.id, 'currentPercentAbsolute', currentPercentAbsolute);
      props.setOption(props.id, 'currentTime', currentMedia.currentTime);
      props.setOption(props.id, 'playbackRate', currentMedia.playbackRate);
    },
    updateMediaSrc: props => () => {
      if (props.src !== null) {
        currentMedia.src = props.src;
      }
    },
    updateMediaTime: props => () => {
      currentMedia.currentTime = props.newTime;
      props.setOption(props.id, 'newTime', null);
    },
    updateMediaTimeAfterSeeking: props => () => {
      const seekableEnd = getSeekableEnd();

      // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
      // Hasn't fully loaded the song????
      if (isFinite(seekableEnd)) {
        currentMedia.currentTime = toRelativePercentage(
          props.playHeadPercent,
          seekableEnd,
        );

        /* Media events don't fire fast enough to give a smooth animation
          when dragging so we update it here as well, same problem as above? */
        props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
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
    if (prevProps.src !== this.props.src) {
      this.props.updateMediaSrc();
    }

    if (this.props.newTime !== null) {
      this.props.updateMediaTime();
    }

    if (prevProps.playHeadPercent !== this.props.playHeadPercent) {
      this.props.updateMediaTimeAfterSeeking();
    }

    this.props.updateMediaPlayState();
    this.props.updateOtherMediaValues();
  },
};

export default compose(
  connectWithId(mapStateToProps, {
    setOption,
  }),
  withHandlers(handlers),
  setLifecycle(lifecycle),
)(Media);
