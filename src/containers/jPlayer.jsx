import React from 'react';
import merge from 'lodash.merge';
import screenfull from 'screenfull';

import { connectWithId } from '../util/index';
import { defaultOptions, statusDefaultValues, formats } from '../util/constants';
import JPlayer from '../components/jPlayer';
import actions, { setMedia } from '../actions/jPlayerActions';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  timeFormats: jPlayers[id].timeFormats,
  mediaSettings: jPlayers[id].mediaSettings,
  media: jPlayers[id].media,
  supplied: jPlayers[id].supplied,
  error: jPlayers[id].error,
  paused: jPlayers[id].paused,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  seeking: jPlayers[id].seeking,
  loop: jPlayers[id].loop,
  keyEnabled: jPlayers[id].keyEnabled,
  id,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  setMedia: media => dispatch(setMedia(media, id)),
  updateOption: (key, value) => dispatch(actions.updateOption(key, value, id)),
  ...stateProps,
});

class JPlayerContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
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
        message: React.PropTypes.string,
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
      attributes: {},
      timeFormats: defaultOptions.timeFormats,
      mediaSettings: defaultOptions.mediaSettings,
      error: statusDefaultValues.error,
      media: defaultOptions.media,
      supplied: defaultOptions.supplied,
      loop: defaultOptions.loop,
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
  toggleFullScreen = () => (
    this.props.updateOption('fullScreen', screenfull.isFullscreen)
  )
  render() {
    return (
      <JPlayer
        id={this.props.id} mediaSettings={this.props.mediaSettings}
        paused={this.props.paused} fullScreen={this.props.fullScreen}
        muted={this.props.muted} volume={this.props.volume}
        seeking={this.props.seeking} loop={this.props.loop}
        keyEnabled={this.props.keyEnabled} {...this.props.attributes}
      >
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(JPlayerContainer);
