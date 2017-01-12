import React from 'react';
import merge from 'lodash.merge';
import screenfull from 'screenfull';
import classNames from 'classnames';

import { classes, formats, timeFormats, loopOptions } from '../util/constants';
import KeyControl from '../containers/keyControl';

class JPlayer extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string,
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
      updateOption: React.PropTypes.func,
      setMedia: React.PropTypes.func,
      supplied: React.PropTypes.arrayOf(React.PropTypes.string),
      error: React.PropTypes.shape({
        context: React.PropTypes.string,
        message: React.PropTypes.string,
        hint: React.PropTypes.string,
      }),
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      paused: React.PropTypes.bool,
      fullScreen: React.PropTypes.bool,
      muted: React.PropTypes.bool,
      volume: React.PropTypes.number,
      seeking: React.PropTypes.bool,
      loop: React.PropTypes.string,
      shuffled: React.PropTypes.bool,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]),
      keyEnabled: React.PropTypes.bool,
    };
  }
  constructor(props) {
    super(props);

    this.state = {};

    this.timeFormats = merge(timeFormats, this.props.timeFormats);
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
    [classes.states.SHUFFLED]: this.props.shuffled,
  })
  toggleFullScreen = () => (
    this.props.updateOption('fullScreen', screenfull.isFullscreen)
  )
  componentWillMount() {
    this.setFormats();
    var p = classNames;

    document.addEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
  }
  render() {
    const playerClasses = this.playerClasses();

    return (
      <div {...this.props.attributes} id={this.props.id} className={playerClasses}>
        {this.props.children}
        {this.props.keyEnabled && <KeyControl />}
      </div>
    );
  }
}

export default JPlayer;
