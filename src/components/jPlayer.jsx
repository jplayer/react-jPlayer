import React from 'react';
import merge from 'lodash.merge';
import screenfull from 'screenfull';
import classNames from 'classnames';

import { classes, defaultOptions, statusDefaultValues,
  formats, loopOptions } from '../util/constants';
import KeyControl from '../containers/keyControl';

class JPlayer extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string.isRequired,
      timeFormats: React.PropTypes.object,
      mediaSettings: React.PropTypes.shape({
        video: React.PropTypes.bool,
        formats: React.PropTypes.array,
        available: React.PropTypes.string,
        playableFormat: React.PropTypes.objectOf(React.PropTypes.string),
      }),
      media: React.PropTypes.shape({
        title: React.PropTypes.string,
        artist: React.PropTypes.string,
        mp3: React.PropTypes.string,
        poster: React.PropTypes.string,
        free: React.PropTypes.bool,
      }),
      updateOption: React.PropTypes.func.isRequired,
      setMedia: React.PropTypes.func.isRequired,
      supplied: React.PropTypes.arrayOf(React.PropTypes.string),
      error: React.PropTypes.shape({
        context: React.PropTypes.string,
        message: React.PropTypes.string.isRequired,
        hint: React.PropTypes.string,
      }),
      paused: React.PropTypes.bool.isRequired,
      fullScreen: React.PropTypes.bool.isRequired,
      muted: React.PropTypes.bool.isRequired,
      volume: React.PropTypes.number.isRequired,
      seeking: React.PropTypes.bool.isRequired,
      loop: React.PropTypes.string,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]).isRequired,
      keyEnabled: React.PropTypes.bool,
    };
  }
  static get defaultProps() {
    return {
      timeFormats: defaultOptions.timeFormats,
      mediaSettings: defaultOptions.mediaSettings,
      error: statusDefaultValues.error,
      media: defaultOptions.media,
      supplied: defaultOptions.supplied,
      loop: defaultOptions.media,
      keyEnabled: defaultOptions.keyEnabled,
    };
  }
  constructor(props) {
    super(props);

    this.state = {};

    this.timeFormats = merge(defaultOptions.timeFormats, this.props.timeFormats);
  }
  componentWillMount() {
    this.setFormats();

    document.addEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
  }
  componentDidMount() {
    this.props.setMedia(this.props.media);
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
      mediaSettings.available = mediaElement.canPlayType(formats.mp3.CODEC);
      mediaSettings.playableFormat = {
        [format]: mediaSettings.available && mediaElement.canPlayType(formats[format].CODEC),
      };
    });

    this.props.updateOption('mediaSettings', mediaSettings);
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
  playerClasses = () => classNames(classes.JPLAYER, {
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
  })
  toggleFullScreen = () => (
    this.props.updateOption('fullScreen', screenfull.isFullscreen)
  )
  render() {
    const playerClasses = this.playerClasses();

    return (
      <div {...this.props} id={this.props.id} className={playerClasses}>
        {this.props.children}
        {this.props.keyEnabled && <KeyControl />}
      </div>
    );
  }
}

export default JPlayer;
