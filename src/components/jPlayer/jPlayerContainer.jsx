import React from 'react';
import screenfull from 'screenfull';
import classNames from 'classnames';
import merge from 'lodash.merge';
import { connectWithId, traverseParentsUntilClassName, KeyControl } from 'react-jplayer-utils';
import PropTypes from 'prop-types';

import formatPropTypes from '../../util/formatPropTypes';
import { classes } from '../../util/constants';
import JPlayer from './jPlayer';
import { setOption, setMedia, play, pause, setMute, setVolume } from '../../actions/actions';

const mapStateToProps = ({ jPlayers }, { id, customStates, children,
keyBindings, ...attributes }) => ({
  media: jPlayers[id].media,
  error: jPlayers[id].error,
  fullScreen: jPlayers[id].fullScreen,
  keyEnabled: jPlayers[id].keyEnabled,
  paused: jPlayers[id].paused,
  guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
  guiFadeHoldTime: jPlayers[id].guiFadeHoldTime,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  loop: jPlayers[id].loop,
  keyBindings,
  id,
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
      ...customStates,
    }),
  },
});

const mergeProps = (stateProps, { dispatch }) => ({
  ...stateProps,
  dispatch,
  keyBindings: merge({}, {
    play: {
      key: 80, // p
      fn: () => (stateProps.paused ? dispatch(play(stateProps.id)) :
                                      dispatch(pause(stateProps.id))),
    },
    fullScreen: {
      key: 70, // f
      fn: () => dispatch(setOption(stateProps.id, 'fullScreen', !stateProps.fullScreen)),
    },
    mute: {
      key: 77, // m
      fn: () => dispatch(setMute(stateProps.id, !stateProps.muted)),
    },
    volumeUp: {
      key: 190, // .
      fn: () => {
        dispatch(setVolume(stateProps.id, stateProps.volume + 0.1));
      },
    },
    volumeDown: {
      key: 188, // ,
      fn: () => dispatch(setVolume(stateProps.id, stateProps.volume - 0.1)),
    },
    loop: {
      key: 76, // l
      fn: () => dispatch(setOption(stateProps.id, 'loop', !stateProps.loop)),
    },
  }, stateProps.keyBindings),
});

class JPlayerContainer extends React.Component {
  static get propTypes() {
    return {
      attributes: PropTypes.object,
      media: PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        sources: PropTypes.shape(formatPropTypes).isRequired,
        poster: PropTypes.string,
        free: PropTypes.bool,
        id: PropTypes.string,
      }).isRequired,
      keyBindings: PropTypes.object.isRequired,
      id: PropTypes.string.isRequired,
      dispatch: PropTypes.func.isRequired,
      error: PropTypes.shape({
        context: PropTypes.string,
        message: PropTypes.string,
        hint: PropTypes.string,
      }),
      fullScreen: PropTypes.bool.isRequired,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
      ]).isRequired,
      paused: PropTypes.bool.isRequired,
      guiFadeHoldTime: PropTypes.number.isRequired,
      guiFadeHoldTimeout: PropTypes.number,
    };
  }
  static get defaultProps() {
    return {
      attributes: null,
      guiFadeHoldTimeout: null,
      error: null,
    };
  }
  componentWillMount() {
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, this.closeFullScreen);
    }
    this.props.dispatch(setMedia(this.props.id, this.props.media));
    this.requestFullScreen();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error !== this.props.error) {
      this.logError(nextProps);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.paused !== this.props.paused) {
      this.startGuiFadeOutTimer();
    }
    if (prevProps.fullScreen !== this.props.fullScreen) {
      this.requestFullScreen();
      this.exitFullScreen();
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
  requestFullScreen = () => {
    if (this.props.fullScreen) {
      if (screenfull.enabled) {
        screenfull.request(this.jPlayer);
      }
      // Legacy browsers don't implement full screen api
      // Safari 5.1 doesn't hide the other elements even with fullscreen api
      document.body.style.visibility = 'hidden';
    }
  }
  exitFullScreen = () => {
    if (!this.props.fullScreen) {
      if (screenfull.enabled) {
        screenfull.exit();
      }
      document.body.style.visibility = 'visible';
    }
  }
  startGuiFadeOutTimer = () => {
    if (this.props.fullScreen && !this.props.paused) {
      clearTimeout(this.props.guiFadeHoldTimeout);
      this.props.dispatch(setOption(this.props.id, 'guiFadeOut', false));
      this.props.dispatch(setOption(this.props.id, 'guiFadeHoldTimeout', setTimeout(this.startGuiFadeOut,
        this.props.guiFadeHoldTime)));
    }
  }
  startGuiFadeOut = () => {
    if (this.props.fullScreen && !this.props.paused) {
      this.props.dispatch(setOption(this.props.id, 'guiFadeOut', true));
    }
  }
  closeFullScreen = () => {
    if (!screenfull.isFullscreen) {
      this.props.dispatch(setOption(this.props.id, 'fullScreen', false));
    }
  }
  // eslint-disable-next-line no-console
  logError = ({ error }) => console.error(error);
  render() {
    return (
      <JPlayer
        setJPlayer={this.setJPlayer} onMouseMove={this.onMouseMove}
        {...{ id: this.props.id, ...this.props.attributes }}
      >
        <KeyControl keyBindings={this.props.keyBindings} />
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(JPlayerContainer);
