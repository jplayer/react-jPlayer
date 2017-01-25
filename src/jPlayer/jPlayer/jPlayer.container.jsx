import React from 'react';
import merge from 'lodash.merge';
import screenfull from 'screenfull';

import { connectWithId } from '../../util/index';
import { defaultOptions, statusDefaultValues, formats } from '../../util/constants';
import JPlayer from './jPlayer';
import actions, { setMedia } from '../actions';

const formatPropTypes = {};

Object.entries(formats).forEach((format) => {
  const key = format[0];
  formatPropTypes[key] = React.PropTypes.string;
});

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  timeFormats: jPlayers[uid].timeFormats,
  video: jPlayers[uid].mediaSettings.video,
  media: jPlayers[uid].media,
  error: jPlayers[uid].error,
  paused: jPlayers[uid].paused,
  fullScreen: jPlayers[uid].fullScreen,
  muted: jPlayers[uid].muted,
  volume: jPlayers[uid].volume,
  seeking: jPlayers[uid].seeking,
  loop: jPlayers[uid].loop,
  keyEnabled: jPlayers[uid].keyEnabled,
  currentTime: jPlayers[uid].currentTime,
  children,
  attributes,
});

const mergeProps = (stateProps, { dispatch }, { uid }) => ({
  setMedia: media => dispatch(setMedia(media, uid)),
  updateOption: (key, value) => dispatch(actions.updateOption(key, value, uid)),
  ...stateProps,
});

class JPlayerContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      timeFormats: React.PropTypes.object,
      video: React.PropTypes.bool,
      media: React.PropTypes.shape({
        title: React.PropTypes.string,
        artist: React.PropTypes.string,
        sources: React.PropTypes.shape(formatPropTypes).isRequired,
        poster: React.PropTypes.string,
        free: React.PropTypes.bool,
      }).isRequired,
      updateOption: React.PropTypes.func.isRequired,
      setMedia: React.PropTypes.func.isRequired,
      error: React.PropTypes.shape({
        context: React.PropTypes.string,
        message: React.PropTypes.string,
        hint: React.PropTypes.string,
      }),
      currentTime: React.PropTypes.number,
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
      currentTime: statusDefaultValues.currentTime,
      timeFormats: defaultOptions.timeFormats,
      video: defaultOptions.video,
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
    document.addEventListener(screenfull.raw.fullscreenchange, this.closeFullScreen);
  }
  componentDidMount() {
    this.props.setMedia(this.props.media);
  }
  componentWillReceiveProps(nextProps) {
    this.logErrors(nextProps);
    this.setFullScreen(nextProps);
  }
  componentWillUnmount() {
    document.removeEventListener(screenfull.raw.fullscreenchange, this.closeFullScreen);
    window.removeEventListener('unload', this.unload);
  }
  setJPlayer = ref => (this.jPlayer = ref)
  setFullScreen = ({ fullScreen }) => {
    if (fullScreen !== this.props.fullScreen) {
      if (fullScreen) {
        screenfull.request(this.jPlayer);
      } else {
        screenfull.exit();
      }
    }
  }
  closeFullScreen = () => {
    if (!screenfull.isFullscreen) {
      this.props.updateOption('fullScreen', false);
    }
  }
  logErrors = ({ error }) => {
    if (error !== this.props.error) {
      console.error(error);
    }
  }
  render() {
    return (
      <JPlayer
        setJPlayer={this.setJPlayer} video={this.props.video}
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
