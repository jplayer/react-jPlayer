import React from 'react';

import { connectWithId, urlNotSupportedError, convertTime } from '../util/index';
import { loopOptions, defaultOptions, statusDefaultValues } from '../util/constants';
import actions, { pause } from '../actions/jPlayerActions';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
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
  title: jPlayers[id].media.title,
  newTime: jPlayers[id].newTime,
  fullScreen: jPlayers[id].fullScreen,
  require: jPlayers[id].mediaSettings.require,
  guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  updateOption: (key, value) => dispatch(actions.updateOption(key, value, id)),
  pause: time => dispatch(pause(id, time)),
  ...stateProps,
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
      guiFadeHoldTime: React.PropTypes.number,
      guiFadeHoldTimeout: React.PropTypes.number,
      fullScreen: React.PropTypes.bool,
      loop: React.PropTypes.string,
      showRemainingDuration: React.PropTypes.bool.isRequired,
      src: React.PropTypes.string.isRequired,
      currentTime: React.PropTypes.number,
      playHeadPercent: React.PropTypes.number.isRequired,
      paused: React.PropTypes.bool.isRequired,
      updateOption: React.PropTypes.func.isRequired,
      pause: React.PropTypes.func.isRequired,
      autoplay: React.PropTypes.bool,
      defaultPlaybackRate: React.PropTypes.number,
      muted: React.PropTypes.bool,
      playbackRate: React.PropTypes.number,
      preload: React.PropTypes.string,
      volume: React.PropTypes.number,
      title: React.PropTypes.string,
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
    };
  }
  static get defaultProps() {
    return {
      onProgress: () => null,
      onTimeUpdate: () => null,
      onDurationChange: () => null,
      onRateChange: () => null,
      onSeeking: () => null,
      onSeeked: () => null,
      onPlay: () => null,
      onRepeat: () => null,
      onEnded: () => null,
      onError: () => null,
      onPlaying: () => null,
      onPause: () => null,
      onWaiting: () => null,
      onSuspend: () => null,
      onVolumeChange: () => null,
      onLoadStart: () => null,
      onLoadedMetadata: () => null,
      onAbort: () => null,
      onEmptied: () => null,
      onStalled: () => null,
      onLoadedData: () => null,
      onCanPlay: () => null,
      onCanPlayThrough: () => null,
      guiFadeHoldTime: defaultOptions.guiFadeHoldTime,
      guiFadeHoldTimeout: null,
      fullScreen: statusDefaultValues.fullScreen,
      loop: loopOptions.OFF,
      autoplay: defaultOptions.autoplay,
      defaultPlaybackRate: defaultOptions.defaultPlaybackRate,
      muted: defaultOptions.muted,
      playbackRate: defaultOptions.playbackRate,
      preload: defaultOptions.preload,
      volume: defaultOptions.volume,
      title: defaultOptions.media.title,
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
        this.props.updateOption('bufferedTimeRanges', bufferedTimeRanges);
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
        this.props.updateOption('seeking', true);
        this.props.onSeeking();
      },
      onSeeked: () => {
        this.props.updateOption('seeking', false);
        this.props.onSeeked();
      },
      onPlay: () => {
        this.props.updateOption('paused', false);
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
        this.props.updateOption('error', urlNotSupportedError(this.props.src));
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

    this.updateCurrentMedia(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateCurrentMedia(nextProps);

    if (nextProps.src !== this.props.src) {
      this.currentMedia.src = nextProps.src;
    }

    if (nextProps.newTime !== null) {
      this.currentMedia.currentTime = nextProps.newTime;
      this.props.updateOption('newTime', null);
    }

    if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
      // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
      // Hasn't fully loaded the song????
      if (this.currentMedia.seekable.length > 0) {
        this.currentMedia.currentTime = nextProps.playHeadPercent *
                (this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / 100);
        // Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
        this.props.updateOption('currentPercentRelative', this.getCurrentPercentRelative());
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
  onMouseMove = () => {
    if (this.props.fullScreen) {
      clearTimeout(this.props.guiFadeHoldTimeout);
      this.props.updateOption('guiFadeOut', false);
      this.props.updateOption('guiFadeHoldTimeout', setTimeout(() => {
        if (this.props.fullScreen) {
          this.props.updateOption('guiFadeOut', true);
        }
      }, this.props.guiFadeHoldTime));
    }
  }
  getCurrentPercentRelative = () => {
    let currentPercentRelative = 0;

    if (this.currentMedia.seekable.length > 0) {
      currentPercentRelative = 100 * (this.currentMedia.currentTime /
            this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1));
    }
    return currentPercentRelative;
  }
  setCurrentMedia = ref => (this.currentMedia = ref)
  updateMediaStatus = () => {
    let seekPercent = 0;
    let durationText = '';

    const remaining = this.currentMedia.duration - this.currentMedia.currentTime;
    const currentTimeText = convertTime(this.currentMedia.currentTime);
    const currentPercentAbsolute = 100 * (this.currentMedia.currentTime /
            this.currentMedia.duration);

    if (this.currentMedia.seekable.length > 0) {
      seekPercent = 100 * (this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) /
             this.currentMedia.duration);
    }

    if (this.props.showRemainingDuration) {
      durationText = (remaining > 0 ? '-' : '') + convertTime(remaining);
    } else {
      durationText = convertTime(this.currentMedia.duration);
    }

    this.props.updateOption('durationText', durationText);
    this.props.updateOption('currentTimeText', currentTimeText);
    this.props.updateOption('seekPercent', seekPercent);
    this.props.updateOption('currentPercentRelative', this.getCurrentPercentRelative());
    this.props.updateOption('currentPercentAbsolute', currentPercentAbsolute);
    this.props.updateOption('currentTime', this.currentMedia.currentTime);
    this.props.updateOption('remaining', remaining);
    this.props.updateOption('duration', this.currentMedia.duration);
    this.props.updateOption('playbackRate', this.currentMedia.playbackRate);
  }
  updateCurrentMedia = ({ defaultPlaybackRate, playbackRate, preload, volume,
    muted, autoplay, loop }) => {
    this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
    this.currentMedia.playbackRate = playbackRate;
    this.currentMedia.preload = preload;
    this.currentMedia.volume = volume;
    this.currentMedia.muted = muted;
    this.currentMedia.autoplay = autoplay;
    this.currentMedia.loop = loop === 'loop';
  }
  render() {
    return (
      React.cloneElement(React.Children.only(this.props.children),
        {
          ...this.events,
          ref: this.setCurrentMedia,
          onMouseMove: this.onMouseMove,
        },
      )
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(MediaContainer);
