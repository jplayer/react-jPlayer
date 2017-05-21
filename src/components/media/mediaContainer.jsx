import React from 'react';
import PropTypes from 'prop-types';
import { connectWithId, toPercentage, toRelativePercentage,
  convertTime, canSetVolume } from 'react-jplayer-utils';

import urlNotSupportedError from '../../util/errorHandlers/urlNotSupportedError';
import { setOption, pause } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id, children }) => ({
  loop: jPlayers[id].loop,
  showRemainingDuration: jPlayers[id].showRemainingDuration,
  src: jPlayers[id].src,
  currentTime: jPlayers[id].currentTime,
  playHeadPercent: jPlayers[id].playHeadPercent,
  paused: jPlayers[id].paused,
  defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
  playbackRate: jPlayers[id].playbackRate,
  preload: jPlayers[id].preload,
  volume: jPlayers[id].volume,
  muted: jPlayers[id].muted,
  autoplay: jPlayers[id].autoplay,
  newTime: jPlayers[id].newTime,
  timeFormats: jPlayers[id].timeFormats,
  mediaId: jPlayers[id].media.id,
  otherJPlayerIds: Object.keys(jPlayers).filter(key => key !== id),
  pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
  children,
});

const mapDispatchToProps = {
  setOption,
  pause,
};

class MediaContainer extends React.Component {
  static get propTypes() {
    return {
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
      showRemainingDuration: PropTypes.bool.isRequired,
      src: PropTypes.string.isRequired,
      playHeadPercent: PropTypes.number.isRequired,
      setOption: PropTypes.func.isRequired,
      pause: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      mediaId: PropTypes.string,
      pauseOthersOnPlay: PropTypes.bool.isRequired,
      otherJPlayerIds: PropTypes.arrayOf(
        PropTypes.string,
      ).isRequired,
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
      /* eslint-disable react/no-unused-prop-types */
      paused: PropTypes.bool.isRequired,
      newTime: PropTypes.number,
      loop: PropTypes.bool.isRequired,
      autoplay: PropTypes.bool.isRequired,
      defaultPlaybackRate: PropTypes.number.isRequired,
      muted: PropTypes.bool.isRequired,
      playbackRate: PropTypes.number.isRequired,
      preload: PropTypes.string.isRequired,
      volume: PropTypes.number.isRequired,
      /* eslint-enable react/no-unused-prop-types */
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
      ]).isRequired,
    };
  }
  static get defaultProps() {
    return {
      onAbort: Function.prototype,
      onCanPlay: Function.prototype,
      onCanPlayThrough: Function.prototype,
      onDurationChange: Function.prototype,
      onEmptied: Function.prototype,
      onEncrypted: Function.prototype,
      onEnded: Function.prototype,
      onError: Function.prototype,
      onLoadedData: Function.prototype,
      onLoadedMetadata: Function.prototype,
      onLoadStart: Function.prototype,
      onPause: Function.prototype,
      onPlay: Function.prototype,
      onPlaying: Function.prototype,
      onProgress: Function.prototype,
      onRateChange: Function.prototype,
      onSeeked: Function.prototype,
      onSeeking: Function.prototype,
      onStalled: Function.prototype,
      onSuspend: Function.prototype,
      onTimeUpdate: Function.prototype,
      onVolumeChange: Function.prototype,
      onWaiting: Function.prototype,
      newTime: null,
      mediaId: null,
    };
  }
  constructor(props) {
    super(props);

    this.state = {};

    this.events = {
      onAbort: this.props.onAbort,
      onCanPlay: this.props.onCanPlay,
      onCanPlayThrough: this.props.onCanPlayThrough,
      onDurationChange: () => {
        this.updateMediaStatus();
        this.props.onDurationChange();
      },
      onEmptied: this.props.onEmptied,
      onEncrypted: this.props.onEncrypted,
      onEnded: () => {
        // Pause so that the play/pause button resets and the poster is shown again
        this.props.pause(this.props.id, 0);
        this.updateMediaStatus();
        this.props.onEnded();
      },
      onError: () => {
        this.props.setOption(this.props.id, 'error', urlNotSupportedError(this.props.src));
        this.props.onError();
      },
      onLoadedData: this.props.onLoadedData,
      onLoadedMetadata: this.props.onLoadedMetadata,
      onLoadStart: this.props.onLoadStart,
      onPause: this.props.onPause,
      onPlay: () => {
        this.props.setOption(this.props.id, 'paused', false);

        if (this.props.pauseOthersOnPlay) {
          this.pauseOthers();
        }

        this.props.onPlay();
      },
      onPlaying: this.props.onPlaying,
      onProgress: () => {
        const bufferedTimeRanges = [];

        for (let i = 0; i < this.currentMedia.buffered.length; i += 1) {
          bufferedTimeRanges.push({
            start: this.currentMedia.buffered.start(i),
            end: this.currentMedia.buffered.end(i),
          });
        }
        this.updateMediaStatus();
        this.props.setOption(this.props.id, 'bufferedTimeRanges', bufferedTimeRanges);
        this.props.onProgress();
      },
      onRateChange: this.props.onRateChange,
      onSeeked: () => {
        this.props.setOption(this.props.id, 'seeking', false);
        this.props.onSeeked();
      },
      onSeeking: () => {
        this.props.setOption(this.props.id, 'seeking', true);
        this.props.onSeeking();
      },
      onStalled: this.props.onStalled,
      onSuspend: this.props.onSuspend,
      onTimeUpdate: () => {
        this.updateMediaStatus();
        this.props.onTimeUpdate();
      },
      onVolumeChange: this.props.onVolumeChange,
      onWaiting: this.props.onWaiting,
    };
  }
  componentDidMount() {
    this.currentMedia.src = this.props.src;
    this.props.setOption(this.props.id, 'volumeSupported', canSetVolume());

    this.updateCurrentMedia(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateCurrentMedia(nextProps);

    if (nextProps.mediaId !== this.props.mediaId &&
        nextProps.src !== '') {
      this.currentMedia.src = nextProps.src;
    }

    if (nextProps.newTime !== null) {
      this.currentMedia.currentTime = nextProps.newTime;
      this.props.setOption(this.props.id, 'newTime', null);
    }

    if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
      // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
      // Hasn't fully loaded the song????
      if (this.currentMedia.seekable.length > 0) {
        const seekableEnd = this.getSeekableEnd();

        if (isFinite(seekableEnd)) {
          this.currentMedia.currentTime = toRelativePercentage(
            nextProps.playHeadPercent,
            seekableEnd,
          );
          /* Media events don't fire fast enough to give a smooth animation
            when dragging so we update it here as well, same problem as above? */
          this.props.setOption(
            this.props.id,
            'currentPercentRelative',
            this.getCurrentPercentRelative(),
          );
        }
      }
    }

    if (nextProps.paused) {
      this.currentMedia.pause();
    } else {
      this.currentMedia.play();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
      this.setDurationText();
    }
    if (prevProps.timeFormats !== this.props.timeFormats) {
      this.setCurrentTimeText();
    }
  }
  getCurrentPercentRelative = () => {
    let currentPercentRelative = 0;

    if (this.currentMedia.seekable.length > 0) {
      currentPercentRelative = toPercentage(this.currentMedia.currentTime,
        this.getSeekableEnd());
    }
    return currentPercentRelative;
  }
  setCurrentMedia = (ref) => {
    this.currentMedia = ref;
  }
  getSeekableEnd = () => this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1)
  setDurationText = () => {
    let durationText = '';

    if (this.props.showRemainingDuration) {
      const timeRemaining = this.currentMedia.duration - this.currentMedia.currentTime;

      durationText = (timeRemaining > 0 ? '-' : '') +
        convertTime(timeRemaining, this.props.timeFormats);
    } else {
      durationText = convertTime(this.currentMedia.duration, this.props.timeFormats);
    }

    this.props.setOption(this.props.id, 'durationText', durationText);
  }
  setCurrentTimeText = () => {
    const currentTimeText = convertTime(this.currentMedia.currentTime, this.props.timeFormats);

    this.props.setOption(this.props.id, 'currentTimeText', currentTimeText);
  }
  pauseOthers = () => {
    this.props.otherJPlayerIds.forEach(id => this.props.pause(id));
  }
  updateMediaStatus = () => {
    let seekPercent = 0;

    const currentPercentAbsolute = toPercentage(this.currentMedia.currentTime,
      this.currentMedia.duration);

    if (this.currentMedia.seekable.length > 0) {
      seekPercent = toPercentage(this.getSeekableEnd(), this.currentMedia.duration);
    }

    this.setDurationText();
    this.setCurrentTimeText();

    this.props.setOption(this.props.id, 'seekPercent', seekPercent);
    this.props.setOption(this.props.id, 'currentPercentRelative', this.getCurrentPercentRelative());
    this.props.setOption(this.props.id, 'currentPercentAbsolute', currentPercentAbsolute);
    this.props.setOption(this.props.id, 'currentTime', this.currentMedia.currentTime);
    this.props.setOption(this.props.id, 'duration', this.currentMedia.duration);
    this.props.setOption(this.props.id, 'playbackRate', this.currentMedia.playbackRate);
  }
  updateCurrentMedia = ({ defaultPlaybackRate, playbackRate, preload, volume,
    muted, autoplay, loop }) => {
    this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
    this.currentMedia.playbackRate = playbackRate;
    this.currentMedia.preload = preload;
    this.currentMedia.volume = volume;
    this.currentMedia.muted = muted;
    this.currentMedia.autoplay = autoplay;
    this.currentMedia.loop = loop;
  }
  render() {
    return (
      React.cloneElement(React.Children.only(this.props.children),
        {
          ...this.events,
          ref: this.setCurrentMedia,
        },
      )
    );
  }
}

export default connectWithId(mapStateToProps, mapDispatchToProps)(MediaContainer);
