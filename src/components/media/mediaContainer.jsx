import React from 'react';

import { connectWithId, urlNotSupportedError, convertTime, canSetVolume,
  toPercentage, toRelativePercentage } from '../../util/index';
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
  children,
});

const mapDispatchToProps = {
  setOption,
  pause,
};

class MediaContainer extends React.Component {
  static get propTypes() {
    return {
      onProgress: React.PropTypes.func,
      onTimeUpdate: React.PropTypes.func,
      onDurationChange: React.PropTypes.func,
      onRateChange: React.PropTypes.func,
      onSeeking: React.PropTypes.func,
      onSeeked: React.PropTypes.func,
      onPlay: React.PropTypes.func,
      onRepeat: React.PropTypes.func,
      onEnded: React.PropTypes.func,
      onError: React.PropTypes.func,
      onPlaying: React.PropTypes.func,
      onPause: React.PropTypes.func,
      onWaiting: React.PropTypes.func,
      onSuspend: React.PropTypes.func,
      onVolumeChange: React.PropTypes.func,
      onLoadStart: React.PropTypes.func,
      onLoadedMetadata: React.PropTypes.func,
      onAbort: React.PropTypes.func,
      onEmptied: React.PropTypes.func,
      onStalled: React.PropTypes.func,
      onLoadedData: React.PropTypes.func,
      onCanPlay: React.PropTypes.func,
      onCanPlayThrough: React.PropTypes.func,
      loop: React.PropTypes.bool.isRequired,
      showRemainingDuration: React.PropTypes.bool.isRequired,
      src: React.PropTypes.string.isRequired,
      playHeadPercent: React.PropTypes.number.isRequired,
      paused: React.PropTypes.bool.isRequired,
      setOption: React.PropTypes.func.isRequired,
      pause: React.PropTypes.func.isRequired,
      id: React.PropTypes.string.isRequired,
      timeFormats: React.PropTypes.shape({
        showHour: React.PropTypes.bool.isRequired,
        showMin: React.PropTypes.bool.isRequired,
        showSec: React.PropTypes.bool.isRequired,
        padHour: React.PropTypes.bool.isRequired,
        padMin: React.PropTypes.bool.isRequired,
        padSec: React.PropTypes.bool.isRequired,
        sepHour: React.PropTypes.string.isRequired,
        sepMin: React.PropTypes.string.isRequired,
        sepSec: React.PropTypes.string.isRequired,
      }).isRequired,
      /* eslint-disable react/no-unused-prop-types */
      newTime: React.PropTypes.number,
      autoplay: React.PropTypes.bool.isRequired,
      defaultPlaybackRate: React.PropTypes.number.isRequired,
      muted: React.PropTypes.bool.isRequired,
      playbackRate: React.PropTypes.number.isRequired,
      preload: React.PropTypes.string.isRequired,
      volume: React.PropTypes.number.isRequired,
      /* eslint-enable react/no-unused-prop-types */
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]).isRequired,
    };
  }
  static get defaultProps() {
    return {
      onProgress: Function.prototype,
      onTimeUpdate: Function.prototype,
      onDurationChange: Function.prototype,
      onRateChange: Function.prototype,
      onSeeking: Function.prototype,
      onSeeked: Function.prototype,
      onPlay: Function.prototype,
      onRepeat: Function.prototype,
      onEnded: Function.prototype,
      onError: Function.prototype,
      onPlaying: Function.prototype,
      onPause: Function.prototype,
      onWaiting: Function.prototype,
      onSuspend: Function.prototype,
      onVolumeChange: Function.prototype,
      onLoadStart: Function.prototype,
      onLoadedMetadata: Function.prototype,
      onAbort: Function.prototype,
      onEmptied: Function.prototype,
      onStalled: Function.prototype,
      onLoadedData: Function.prototype,
      onCanPlay: Function.prototype,
      onCanPlayThrough: Function.prototype,
      newTime: null,
    };
  }
  constructor(props) {
    super(props);

    this.state = {};

    this.events = {
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
      onTimeUpdate: () => {
        this.updateMediaStatus();
        this.props.onTimeUpdate();
      },
      onDurationChange: () => {
        this.updateMediaStatus();
        this.props.onDurationChange();
      },
      onSeeking: () => {
        this.props.setOption(this.props.id, 'seeking', true);
        this.props.onSeeking();
      },
      onSeeked: () => {
        this.props.setOption(this.props.id, 'seeking', false);
        this.props.onSeeked();
      },
      onPlay: () => {
        this.props.setOption(this.props.id, 'paused', false);
        this.props.onPlay();
      },
      onEnded: () => {
        // Pause so that the play/pause button resets and the poster is shown again
        this.props.pause(this.props.id, 0);
        this.updateMediaStatus();

        if (this.props.loop) {
          this.props.onRepeat();
        }
        this.props.onEnded();
      },
      onError: () => {
        this.props.setOption(this.props.id, 'error', urlNotSupportedError(this.props.src));
        this.props.onError();
      },
      onRateChange: this.props.onRateChange,
      onPlaying: this.props.onPlaying,
      onPause: this.props.onPause,
      onWaiting: this.props.onWaiting,
      onSuspend: this.props.onSuspend,
      onVolumeChange: this.props.onVolumeChange,
      onLoadStart: this.props.onLoadStart,
      onLoadedMetadata: this.props.onLoadedMetadata,
      onAbort: this.props.onAbort,
      onEmptied: this.props.onEmptied,
      onStalled: this.props.onStalled,
      onLoadedData: this.props.onLoadedData,
      onCanPlay: this.props.onCanPlay,
      onCanPlayThrough: this.props.onCanPlayThrough,
    };
  }
  componentDidMount() {
    this.currentMedia.src = this.props.src;
    this.props.setOption(this.props.id, 'volumeSupported', canSetVolume());

    this.updateCurrentMedia(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateCurrentMedia(nextProps);

    if (nextProps.src !== this.props.src) {
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
        this.currentMedia.currentTime = toRelativePercentage(nextProps.playHeadPercent,
          this.getSeekableEnd());
        // Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
        this.props.setOption(
          this.props.id,
          'currentPercentRelative',
          this.getCurrentPercentRelative(),
        );
      }
    }

    if (nextProps.paused !== this.props.paused) {
      if (nextProps.paused) {
        this.currentMedia.pause();
      } else {
        this.currentMedia.play();
      }
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
  updateMediaStatus = () => {
    let seekPercent = 0;
    let durationText = '';

    const currentTimeText = convertTime(this.currentMedia.currentTime, this.props.timeFormats);
    const currentPercentAbsolute = toPercentage(this.currentMedia.currentTime,
      this.currentMedia.duration);

    if (this.currentMedia.seekable.length > 0) {
      seekPercent = toPercentage(this.getSeekableEnd(), this.currentMedia.duration);
    }

    if (this.props.showRemainingDuration) {
      const timeRemaining = this.currentMedia.duration - this.currentMedia.currentTime;

      durationText = (timeRemaining > 0 ? '-' : '') +
        convertTime(timeRemaining, this.props.timeFormats);
    } else {
      durationText = convertTime(this.currentMedia.duration, this.props.timeFormats);
    }

    this.props.setOption(this.props.id, 'durationText', durationText);
    this.props.setOption(this.props.id, 'currentTimeText', currentTimeText);
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
