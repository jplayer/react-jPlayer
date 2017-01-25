import React from 'react';
import merge from 'lodash.merge';
import screenfull from 'screenfull';

import { connectWithId } from '../util/index';
import { defaultOptions, statusDefaultValues, formats } from '../util/constants';
import JPlayer from '../components/jPlayer';
import actions, { setMedia } from '../actions/jPlayerActions';

const formatPropTypes = {};

Object.entries(formats).forEach((format) => {
  const key = format[0];
  formatPropTypes[key] = React.PropTypes.string;
});

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  timeFormats: jPlayers[id].timeFormats,
  mediaSettings: jPlayers[id].mediaSettings,
  media: jPlayers[id].media,
  error: jPlayers[id].error,
  paused: jPlayers[id].paused,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  seeking: jPlayers[id].seeking,
  loop: jPlayers[id].loop,
  keyEnabled: jPlayers[id].keyEnabled,
  currentTime: jPlayers[id].currentTime,
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
      id: React.PropTypes.number.isRequired,
      timeFormats: React.PropTypes.object,
      mediaSettings: React.PropTypes.shape({
        video: React.PropTypes.bool,
        formats: React.PropTypes.array,
        available: React.PropTypes.string,
        supportedFormats: React.PropTypes.objectOf(React.PropTypes.string),
      }),
      media: React.PropTypes.shape({
        title: React.PropTypes.string,
        artist: React.PropTypes.string,
        sources: React.PropTypes.shape(formatPropTypes).isRequired,
        poster: React.PropTypes.string,
        free: React.PropTypes.bool,
        id: React.PropTypes.oneOfType([
          React.PropTypes.number,
          React.PropTypes.string,
        ]),
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
    document.addEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
  }
  componentDidMount() {
    this.props.setMedia(this.props.media);
  }
  componentWillReceiveProps(nextProps) {
    this.logErrors(nextProps);
  }
  componentWillUnmount() {
    document.removeEventListener(screenfull.raw.fullscreenchange, this.toggleFullScreen);
    window.removeEventListener('unload', this.unload);
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
