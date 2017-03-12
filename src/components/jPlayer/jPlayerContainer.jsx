import React from 'react';
import screenfull from 'screenfull';
import classNames from 'classnames';

import { connectWithId, traverseParentsUntilClassName } from '../../util/index';
import { formats, classes } from '../../util/constants';
import JPlayer from './jPlayer';
import { setOption, setMedia } from '../../actions/actions';

const formatPropTypes = {};

Object.keys(formats).forEach((key) => {
  formatPropTypes[key] = React.PropTypes.string;
});

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  media: jPlayers[id].media,
  error: jPlayers[id].error,
  fullScreen: jPlayers[id].fullScreen,
  keyEnabled: jPlayers[id].keyEnabled,
  paused: jPlayers[id].paused,
  guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
  guiFadeHoldTime: jPlayers[id].guiFadeHoldTime,
  children,
  attributes: {
    ...attributes,
    className: classNames(attributes.className, classes.JPLAYER, {
      [classes.states.AUDIO]: !jPlayers[id].mediaSettings.video,
      [classes.states.VIDEO]: jPlayers[id].mediaSettings.video,
      [classes.states.PLAYING]: !jPlayers[id].paused,
      [classes.states.IDLE]: jPlayers[id].currentTime === 0,
      [classes.states.FULL_SCREEN]: jPlayers[id].fullScreen,
      [classes.states.MUTED]: jPlayers[id].muted,
      [classes.states.VOLUME_LOW]: !jPlayers[id].muted && jPlayers[id].volume < 0.5,
      [classes.states.VOLUME_HIGH]: !jPlayers[id].muted && jPlayers[id].volume >= 0.5,
      [classes.states.SEEKING]: jPlayers[id].seeking,
      [classes.states.LOOPED]: jPlayers[id].loop,
      [classes.states.NO_BROWSER_SUPPORT]: !jPlayers[id].mediaSettings.foundSupported,
      [classes.states.NO_VOLUME_SUPPORT]: !jPlayers[id].volumeSupported,
      // 'jp-state-video-270p': sizeCssClass !== undefined,
      // 'jp-state-video-full': sizeFullCssClass !== undefined,
    }),
  },
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  setMedia: media => dispatch(setMedia(media, id)),
  setOption: (key, value) => dispatch(setOption(key, value, id)),
  ...stateProps,
});

class JPlayerContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: React.PropTypes.object,
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
      }).isRequired,
      fullScreen: React.PropTypes.bool.isRequired,
      children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.element),
        React.PropTypes.element,
      ]).isRequired,
      keyEnabled: React.PropTypes.bool.isRequired,
      paused: React.PropTypes.bool.isRequired,
      guiFadeHoldTime: React.PropTypes.number.isRequired,
      guiFadeHoldTimeout: React.PropTypes.number,
    };
  }
  static get defaultProps() {
    return {
      attributes: null,
      guiFadeHoldTimeout: null,
    };
  }
  componentWillMount() {
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, this.closeFullScreen);
    }
  }
  componentDidMount() {
    this.props.setMedia(this.props.media);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error !== this.props.error) {
      this.logError(nextProps);
    }
    if (nextProps.fullScreen !== this.props.fullScreen) {
      this.setFullScreen(nextProps);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.paused !== this.props.paused) {
      this.startGuiFadeOutTimer();
    }
  }
  componentWillUnmount() {
    if (screenfull.enabled) {
      document.removeEventListener(screenfull.raw.fullscreenchange, this.closeFullScreen);
    }
  }
  onMouseMove = (e) => {
    if (this.props.fullScreen) {
      if (this.props.paused) {
        if (traverseParentsUntilClassName(e.target, classes.GUI)) {
          return;
        }
      }
      this.startGuiFadeOutTimer();
    }
  }
  setJPlayer = ref => (this.jPlayer = ref)
  setFullScreen = ({ fullScreen }) => {
    if (fullScreen) {
      if (screenfull.enabled) {
        screenfull.request(this.jPlayer);
      }
      // Legacy browsers don't implement full screen api
      // Safari 5.1 doesn't hide the other elements even with fullscreen api
      document.body.style.visibility = 'hidden';
    } else {
      if (screenfull.enabled) {
        screenfull.exit();
      }
      document.body.style.visibility = 'visible';
    }
  }
  startGuiFadeOutTimer = () => {
    if (this.props.fullScreen && !this.props.paused) {
      clearTimeout(this.props.guiFadeHoldTimeout);
      this.props.setOption('guiFadeOut', false);
      this.props.setOption('guiFadeHoldTimeout', setTimeout(this.startGuiFadeOut,
        this.props.guiFadeHoldTime));
    }
  }
  startGuiFadeOut = () => {
    if (this.props.fullScreen && !this.props.paused) {
      this.props.setOption('guiFadeOut', true);
    }
  }
  closeFullScreen = () => {
    if (!screenfull.isFullscreen) {
      this.props.setOption('fullScreen', false);
    }
  }
  // eslint-disable-next-line no-console
  logError = ({ error }) => console.error(error);
  render() {
    return (
      <JPlayer
        setJPlayer={this.setJPlayer} keyEnabled={this.props.keyEnabled}
        onMouseMove={this.onMouseMove} {...this.props.attributes}
      >
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(JPlayerContainer);
