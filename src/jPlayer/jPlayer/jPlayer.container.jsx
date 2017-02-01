import React from 'react';
import merge from 'lodash.merge';
import screenfull from 'screenfull';
import classNames from 'classnames';

import { connectWithId } from '../../util/index';
import { defaultOptions, statusDefaultValues, formats,
   classes, loopOptions } from '../../util/constants';
import JPlayer from './jPlayer';
import { setOption, setMedia } from '../_actions/actions';

const formatPropTypes = {};

Object.keys(formats).forEach((key) => {
  formatPropTypes[key] = React.PropTypes.string;
});

const mapStateToProps = ({ jPlayers }, { uid, children, ...attributes }) => ({
  timeFormats: jPlayers[uid].timeFormats,
  media: jPlayers[uid].media,
  error: jPlayers[uid].error,
  fullScreen: jPlayers[uid].fullScreen,
  keyEnabled: jPlayers[uid].keyEnabled,
  children,
  attributes: {
    ...attributes,
    className: classNames(attributes.className, classes.JPLAYER, {
      [classes.AUDIO]: !jPlayers[uid].mediaSettings.video,
      [classes.VIDEO]: jPlayers[uid].mediaSettings.video,
      [classes.states.PLAYING]: !jPlayers[uid].paused,
      [classes.states.FULL_SCREEN]: jPlayers[uid].fullScreen,
      [classes.states.MUTED]: jPlayers[uid].muted,
      [classes.states.VOLUME_LOW]: !jPlayers[uid].muted && jPlayers[uid].volume < 0.5,
      [classes.states.VOLUME_HIGH]: !jPlayers[uid].muted && jPlayers[uid].volume >= 0.5,
      [classes.states.SEEKING]: jPlayers[uid].seeking,
      [classes.states.LOOPED]: jPlayers[uid].loop === loopOptions.LOOP,
      // 'jp-video-270p': sizeCssClass !== undefined,
      // 'jp-video-full': sizeFullCssClass !== undefined,
    }),
  },
});

const mergeProps = (stateProps, { dispatch }, { uid }) => ({
  setMedia: media => dispatch(setMedia(media, uid)),
  setOption: (key, value) => dispatch(setOption(key, value, uid)),
  ...stateProps,
});

class JPlayerContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.objectOf(React.PropTypes.node),
      timeFormats: React.PropTypes.object,
      media: React.PropTypes.shape({
        title: React.PropTypes.string,
        artist: React.PropTypes.string,
        sources: React.PropTypes.shape(formatPropTypes).isRequired,
        poster: React.PropTypes.string,
        free: React.PropTypes.bool,
      }).isRequired,
      setOption: React.PropTypes.func.isRequired,
      setMedia: React.PropTypes.func.isRequired,
      error: React.PropTypes.shape({
        context: React.PropTypes.string,
        message: React.PropTypes.string,
        hint: React.PropTypes.string,
      }),
      fullScreen: React.PropTypes.bool.isRequired,
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
      error: statusDefaultValues.error,
      media: defaultOptions.media,
      supplied: defaultOptions.supplied,
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
      this.props.setOption('fullScreen', false);
    }
  }
  logErrors = ({ error }) => {
    if (error !== this.props.error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
  render() {
    return (
      <JPlayer
        setJPlayer={this.setJPlayer} keyEnabled={this.props.keyEnabled}
        {...this.props.attributes}
      >
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(JPlayerContainer);
