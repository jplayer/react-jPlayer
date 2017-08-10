import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { traverseParentsUntilClassName } from 'react-jplayer-utils';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';
import formatPropTypes from '../../util/formatPropTypes';
import { classes, defaultOptions } from '../../util/constants';
import JPlayer from './jPlayer';
import { setOption, setMedia } from '../../actions/actions';

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
    attributes,
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
      [classes.states.NO_BROWSER_SUPPORT]: jPlayers[id].mediaSettings.nonSupported,
      [classes.states.NO_VOLUME_SUPPORT]: !jPlayers[id].volumeSupported,
      ...customStates,
    }),
  });

class JPlayerContainer extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string.isRequired,
      keyBindings: PropTypes.object,
      attributes: PropTypes.object,
      media: PropTypes.shape({
        title: PropTypes.string,
        artist: PropTypes.string,
        sources: PropTypes.shape(formatPropTypes).isRequired,
        poster: PropTypes.string,
        free: PropTypes.bool,
      }).isRequired,
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
      keyBindings: null,
    };
  }
  static get childContextTypes() {
    return {
      id: PropTypes.string,
    };
  }
  getChildContext = () => ({
    id: this.props.id,
  });
  componentWillMount() {
    if (this.props.media !== defaultOptions.media) {
      this.props.dispatch(setMedia(this.props.id, this.props.media));
    }
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
  setJPlayer = (ref) => {
    this.jPlayer = ref;
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

  // eslint-disable-next-line no-console
  logError = ({ error }) => console.error(error);
  render() {
    return (
      <JPlayer
        setJPlayer={this.setJPlayer} onMouseMove={this.onMouseMove}
        {...this.props.attributes} id={this.props.id} className={this.props.className}
      >
        <KeyControl keyBindings={this.props.keyBindings} />
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connect(mapStateToProps)(JPlayerContainer);
