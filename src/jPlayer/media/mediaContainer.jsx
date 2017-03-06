import React from 'react';

import { loopOptions } from '../../util/constants';
import { connectWithId, urlNotSupportedError, convertTime, canSetVolume,
  toPercentage, toRelativePercentage } from '../../util/index';
import { setOption, pause } from '../_actions/actions';

const mapStateToProps = ({ jPlayers }, { uid, children }) => ({
  loop: jPlayers[uid].loop,
  showRemainingDuration: jPlayers[uid].showRemainingDuration,
  src: jPlayers[uid].src,
  currentTime: jPlayers[uid].currentTime,
  playHeadPercent: jPlayers[uid].playHeadPercent,
  paused: jPlayers[uid].paused,
  defaultPlaybackRate: jPlayers[uid].defaultPlaybackRate,
  playbackRate: jPlayers[uid].playbackRate,
  preload: jPlayers[uid].preload,
  volume: jPlayers[uid].volume,
  muted: jPlayers[uid].muted,
  autoplay: jPlayers[uid].autoplay,
  newTime: jPlayers[uid].newTime,
  require: jPlayers[uid].mediaSettings.require,
  timeFormats: jPlayers[uid].timeFormats,
  children,
});

const mapDispatchToProps = (dispatch, { uid }) => ({
  setOption: (key, value) => dispatch(setOption(key, value, uid)),
  pause: time => dispatch(pause(uid, time)),
});

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
      loop: React.PropTypes.string.isRequired,
      showRemainingDuration: React.PropTypes.bool.isRequired,
      src: React.PropTypes.string.isRequired,
      playHeadPercent: React.PropTypes.number.isRequired,
      paused: React.PropTypes.bool.isRequired,
      setOption: React.PropTypes.func.isRequired,
      pause: React.PropTypes.func.isRequired,
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
      newTime: React.PropTypes.number.isRequired,
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
        this.props.setOption('bufferedTimeRanges', bufferedTimeRanges);
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
        this.props.setOption('seeking', true);
        this.props.onSeeking();
      },
      onSeeked: () => {
        this.props.setOption('seeking', false);
        this.props.onSeeked();
      },
      onPlay: () => {
        this.props.setOption('paused', false);
        this.props.onPlay();
      },
      onEnded: () => {
        // Pause so that the play/pause button resets and the poster is shown again
        this.props.pause(0);
        this.updateMediaStatus();

        if (this.props.loop === 'loop') {
          this.props.onRepeat();
        }
        this.props.onEnded();
      },
      onError: () => {
        this.props.setOption('error', urlNotSupportedError(this.props.src));
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
    this.props.setOption('volumeSupported', canSetVolume());

    this.updateCurrentMedia(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateCurrentMedia(nextProps);

    if (nextProps.src !== this.props.src) {
      this.currentMedia.src = nextProps.src;
    }

    if (nextProps.newTime !== null) {
      this.currentMedia.currentTime = nextProps.newTime;
      this.props.setOption('newTime', null);
    }

    if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
      // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
      // Hasn't fully loaded the song????
      if (this.currentMedia.seekable.length > 0) {
        this.currentMedia.currentTime = toPercentage(nextProps.playHeadPercent,
          this.getSeekableEnd());
        // Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
        this.props.setOption('currentPercentRelative', this.getCurrentPercentRelative());
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
      currentPercentRelative = toRelativePercentage(this.currentMedia.currentTime,
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

    const remaining = this.currentMedia.duration - this.currentMedia.currentTime;
    const currentTimeText = convertTime(this.currentMedia.currentTime, this.props.timeFormats);
    const currentPercentAbsolute = toPercentage(this.currentMedia.currentTime,
      this.currentMedia.duration);

    if (this.currentMedia.seekable.length > 0) {
      seekPercent = toPercentage(this.getSeekableEnd(), this.currentMedia.duration);
    }

    if (this.props.showRemainingDuration) {
      durationText = (remaining > 0 ? '-' : '') + convertTime(remaining, this.props.timeFormats);
    } else {
      durationText = convertTime(this.currentMedia.duration, this.props.timeFormats);
    }

    this.props.setOption('durationText', durationText);
    this.props.setOption('currentTimeText', currentTimeText);
    this.props.setOption('seekPercent', seekPercent);
    this.props.setOption('currentPercentRelative', this.getCurrentPercentRelative());
    this.props.setOption('currentPercentAbsolute', currentPercentAbsolute);
    this.props.setOption('currentTime', this.currentMedia.currentTime);
    this.props.setOption('remaining', remaining);
    this.props.setOption('duration', this.currentMedia.duration);
    this.props.setOption('playbackRate', this.currentMedia.playbackRate);
  }
  updateCurrentMedia = ({ defaultPlaybackRate, playbackRate, preload, volume,
    muted, autoplay, loop }) => {
    this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
    this.currentMedia.playbackRate = playbackRate;
    this.currentMedia.preload = preload;
    this.currentMedia.volume = volume;
    this.currentMedia.muted = muted;
    this.currentMedia.autoplay = autoplay;
    this.currentMedia.loop = loop === loopOptions.LOOP;
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
