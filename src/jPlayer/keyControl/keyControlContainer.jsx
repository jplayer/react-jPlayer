import React from 'react';
import merge from 'lodash.merge';

import { keyIgnoreElementNames, loopOptions } from '../../util/constants';
import { play, pause, setMute, setVolume, setLoop, setFullScreen } from '../_actions/actions';
import { connectWithId } from '../../util/index';

const mapStateToProps = ({ jPlayers }, { uid }) => ({
  paused: jPlayers[uid].paused,
  fullScreen: jPlayers[uid].fullScreen,
  muted: jPlayers[uid].muted,
  volume: jPlayers[uid].volume,
  loop: jPlayers[uid].loop,
  keyBindings: jPlayers[uid].keyBindings,
  focus: jPlayers[uid].focus,
});

const mergeProps = (stateProps, { dispatch }, { uid }) => ({
  focus: stateProps.focus,
  keyBindings: merge({}, {
    play: {
      key: 80, // p
      fn: () => (stateProps.paused ? dispatch(play(uid)) :
                                      dispatch(pause(uid))),
    },
    fullScreen: {
      key: 70, // f
      fn: () => dispatch(setFullScreen(!stateProps.fullScreen, uid)),
    },
    mute: {
      key: 77, // m
      fn: () => dispatch(setMute(!stateProps.muted, uid)),
    },
    volumeUp: {
      key: 190, // .
      fn: () => {
        dispatch(setVolume(stateProps.volume + 0.1, uid));
      },
    },
    volumeDown: {
      key: 188, // ,
      fn: () => dispatch(setVolume(stateProps.volume - 0.1, uid)),
    },
    loop: {
      key: 76, // l
      fn: () => (stateProps.loop === loopOptions.LOOP ?
                  dispatch(setLoop(loopOptions.OFF, uid)) :
                  dispatch(setLoop(loopOptions.LOOP, uid))),
    },
  }, stateProps.keyBindings),
});

class KeyControlContainer extends React.Component {
  static get propTypes() {
    return {
      focus: React.PropTypes.bool.isRequired,
      keyBindings: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
    };
  }
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown = (event) => {
    if (keyIgnoreElementNames.some(name => name.toUpperCase()
        === event.target.nodeName.toUpperCase()) || !this.props.focus) {
      return;
    }
    Object.keys(this.props.keyBindings).forEach((key) => {
      const keyBinding = this.props.keyBindings[key];

      if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
        event.preventDefault();
        keyBinding.fn();
      }
    });
  }
  render() {
    return null;
  }
}

export default connectWithId(mapStateToProps, null, mergeProps)(KeyControlContainer);
