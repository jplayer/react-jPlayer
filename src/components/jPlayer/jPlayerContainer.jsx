import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import KeyControl from './keyControl/keyControlContainer';
import ScreenFull from './screenFull/screenFullContainer';
import formatPropTypes from '../../util/formatPropTypes';
import { defaultOptions } from '../../util/constants';
import JPlayer from './jPlayer';
import { setOption, setMedia } from '../../actions/actions';
import states from './states/states';

const mapStateToProps = ({ jPlayers }, { id, customStates, children,
  keyBindings, ...attributes }) => ({
    media: jPlayers[id].media,
    error: jPlayers[id].error,
    fullScreen: jPlayers[id].fullScreen,
    keyEnabled: jPlayers[id].keyEnabled,
    paused: jPlayers[id].paused,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    loop: jPlayers[id].loop,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    keyBindings,
    id,
    children,
    attributes,
    className: states(jPlayers[id], customStates, attributes.className),
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
      startGuiFadeOut: PropTypes.bool.isRequired,
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
    };
  }
  static get defaultProps() {
    return {
      attributes: null,
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
  onMouseMoveCapture = () => {
    if (this.props.fullScreen) {
      if (this.props.paused || this.props.startGuiFadeOut) {
        this.props.dispatch(setOption(this.props.id, 'startGuiFadeOut', false));
      } else {
        this.props.dispatch(setOption(this.props.id, 'startGuiFadeOut', true));
      }
    }
  }
  setJPlayer = (ref) => {
    this.jPlayer = ref;
  }
  // eslint-disable-next-line no-console
  logError = ({ error }) => console.error(error);
  render() {
    return (
      <JPlayer
        setJPlayer={this.setJPlayer} onMouseMoveCapture={this.onMouseMoveCapture}
        {...this.props.attributes} id={this.props.id} className={this.props.className}
      >
        <KeyControl keyBindings={this.props.keyBindings} />
        <ScreenFull />
        {this.props.children}
      </JPlayer>
    );
  }
}

export default connect(mapStateToProps)(JPlayerContainer);
