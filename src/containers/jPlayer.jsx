import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash.merge';
import screenfull from 'screenfull';
import classNames from 'classnames';

import { classes, formats, timeFormats, loopOptions } from '../util/constants';
import { testCanPlayType } from '../util/index';
import actions, { setMedia } from '../actions/jPlayerActions';
import KeyControl from '../components/keyControl';

export const mapStateToProps = ({ jPlayers }, ownProps) => ({
  ...jPlayers[ownProps.id],
  attributes: ownProps,
});

class JPlayer extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
      timeFormats: React.PropTypes.object,
      mediaSettings: React.PropTypes.shape({
        video: React.propTypes.bool,
        formats: React.propTypes.array,
        available: React.propTypes.bool,
        playableFormat: React.propTypes.array,
      }),
      media: React.PropTypes.shape({
        media: {
          title: React.PropTypes.string,
          artist: React.PropTypes.string,
          mp3: React.PropTypes.string,
          poster: React.PropTypes.string,
          free: React.PropTypes.bool,
        },
      }),
      supplied: React.PropTypes.arrayOf(React.PropTypes.string),
      error: React.PropTypes.shape({
        context: React.PropTypes.string,
        message: React.PropTypes.string,
        hint: React.PropTypes.string,
      }),
      dispatch: React.PropTypes.func,
      attributes: React.PropTypes.node,
      paused: React.PropTypes.bool,
      fullScreen: React.PropTypes.bool,
      muted: React.PropTypes.bool,
      volume: React.PropTypes.number,
      seeking: React.PropTypes.number,
      loop: React.PropTypes.string,
      shuffled: React.PropTypes.bool,
      children: React.PropTypes.element,
      keyEnabled: React.PropTypes.bool,
    };
  }
  constructor(props) {
    super(props);

    this.state = {};

    this.timeFormats = merge(timeFormats, this.props.timeFormats);
  }
  componentWillMount() {
    this.setFormats();

    document.addEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
  }
  componentDidMount() {
    this.props.dispatch(setMedia(this.props.media, this.props.id));
  }
  componentWillReceiveProps(nextProps) {
    this.updateSize(nextProps);
    this.logErrors(nextProps);
  }
  componentWillUnmount() {
    document.removeEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
  }
  setFormats = () => {
    const mediaSettings = merge({}, this.props.mediaSettings);

    // Create the formats array, with prority based on the order of the supplied formats string
    this.props.supplied.forEach((supplied) => {
      const suppliedTrimmed = supplied.trim();

      mediaSettings.video = formats[suppliedTrimmed].MEDIA === 'video';

      if (formats[suppliedTrimmed]) { // Check format is valid.
        const duplicateFound = mediaSettings.formats.some(format => format === suppliedTrimmed);

        if (!duplicateFound) {
          mediaSettings.formats.push(suppliedTrimmed);
        }
      }
    });

    const mediaElement = document.createElement(mediaSettings.video ? 'video' : 'audio');

    mediaSettings.formats.forEach((format) => {
      mediaSettings.available = mediaElement.canPlayType && testCanPlayType(mediaElement); // Test is for IE9 on Win Server 2008.
      mediaSettings.playableFormat = {
        [format]: mediaSettings.available && mediaElement.canPlayType(formats[format].CODEC),
      };
    });

    this.props.dispatch(actions.updateOption('mediaSettings', mediaSettings, this.props.id));
  }
  updateSize = () => {
        // Video html resized if necessary at this time, or if native video controls being used.
    // if (nextProps.mediaSettings.available && nextProps.mediaSettings.video
    //  && (!nextProps.waitForPlay || nextProps.nativeVideoControls)) {
    //   this.setState({ videoStyle: {
    //      width: !this.props.width,
    //      height: this.props.height
    //   } });
    // }
  }
  logErrors = (nextProps) => {
    if (nextProps.error !== this.props.error) {
      console.error(nextProps.error);
    }
  }
  playerClasses = () => classNames(classes.JPLAYER, this.props.attributes.className, {
    'jp-video': this.props.mediaSettings.video,
    // 'jp-video-270p': this.props.sizeCssClass !== undefined,
    // 'jp-video-full': this.props.sizeFullCssClass !== undefined,
    'jp-audio': !this.props.mediaSettings.video,
    [classes.states.PLAYING]: !this.props.paused,
    [classes.states.FULL_SCREEN]: this.props.fullScreen,
    [classes.states.MUTED]: this.props.muted,
    [classes.states.VOLUME_LOW]: !this.props.muted && this.props.volume < 0.5,
    [classes.states.VOLUME_HIGH]: !this.props.muted && this.props.volume >= 0.5,
    [classes.states.SEEKING]: this.props.seeking,
    [classes.states.LOOPED]: this.props.loop === loopOptions.LOOP,
    [classes.states.SHUFFLED]: this.props.shuffled,
  })
  toggleFullScreen = () => (
    this.props.dispatch(actions.updateOption('fullScreen', screenfull.isFullscreen, this.props.id))
  )
  render() {
    const playerClasses = this.playerClasses();

    return (
      <div {...this.props.attributes} className={playerClasses}>
        {this.props.children}
        {this.props.keyEnabled && <KeyControl />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(JPlayer);

export const defaultValues = {
  mediaSettings: {
    video: false,
    formats: [], // Order defines priority.
    available: false,
    playableFormat: [],
  },
};

export const statusDefaultValues = {
  paused: true,
  format: {},
  formatType: '',
  waitForPlay: true, // Same as waitForLoad except in case where preloading.
  waitForLoad: true,
  srcSet: false,
  video: false, // True if playing a video
  seekPercent: 0,
  currentPercentRelative: 0,
  currentPercentAbsolute: 0,
  newTime: 0,
  currentTime: 0,
  duration: 0,
  remaining: 0,
  videoWidth: 0, // Intrinsic width of the video in pixels.
  videoHeight: 0, // Intrinsic height of the video in pixels.
  readyState: 0,
  networkState: 0,
  ended: 0,
};

export const jPlayerDefaultOptions = {
  preload: 'metadata', // HTML5 Spec values: none, metadata, auto.
  globalPause: true,
  captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.
  minPlaybackRate: 0.5,
  maxPlaybackRate: 4,
  supplied: ['mp3'], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
  loopOptions: ['loop-playlist'],
  playbackRate: 1.0,
  defaultPlaybackRate: 1.0,
  bufferColour: '#dddddd', // Canvas fillStyle property Colour, gradient or pattern (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  volume: 0.8, // The volume. Number 0 to 1
  barDrag: true,
  playbackRateText: 1, // The number of digits to appear after the decimal point
  media: {},
  global: [],
};
