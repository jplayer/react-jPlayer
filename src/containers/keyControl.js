import React from 'react';
import merge from 'lodash.merge';

import { keyIgnoreElementNames, loopOptions } from '../util/constants';
import { play, pause, setMute, setVolume, setLoop, setFullScreen } from '../actions/jPlayerActions';
import { connectWithId } from '../util/index';

const mapStateToProps = ({ jPlayers }, { id }) => ({
  paused: jPlayers[id].paused,
  mediaSettings: jPlayers[id].mediaSettings,
  audioFullScreen: jPlayers[id].audioFullScreen,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  loop: jPlayers[id].loop,
  keyBindings: jPlayers[id].keyBindings,
  focus: jPlayers[id].focus,
});

const mergeProps = (stateProps, { dispatch }, { id }) => ({
  focus: stateProps.focus,
  keyBindings: merge({}, {
    play: {
      key: 80, // p
      fn: () => (stateProps.paused ? dispatch(play(id)) :
                                      dispatch(pause(id))),
    },
    fullScreen: {
      key: 70, // f
      fn: () => {
        if ((stateProps.mediaSettings.available && stateProps.mediaSettings.video)
            || stateProps.audioFullScreen) {
          dispatch(setFullScreen(!stateProps.fullScreen, id));
        }
      },
    },
    mute: {
      key: 77, // m
      fn: () => dispatch(setMute(!stateProps.muted, id)),
    },
    volumeUp: {
      key: 190, // .
      fn: () => {
        dispatch(setVolume(stateProps.volume + 0.1, id));
      },
    },
    volumeDown: {
      key: 188, // ,
      fn: () => dispatch(setVolume(stateProps.volume - 0.1, id)),
    },
    loop: {
      key: 76, // l
      fn: () => (stateProps.loop === loopOptions.LOOP ?
                  dispatch(setLoop(loopOptions.OFF, id)) :
                  dispatch(setLoop(loopOptions.LOOP, id))),
    },
  }, stateProps.keyBindings),
});

class KeyControl extends React.Component {
  static get propTypes() {
    return {
      focus: React.PropTypes.bool.isRequired,
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
    Object.keys(this.keyBindings).forEach((key) => {
      const keyBinding = this.keyBindings[key];

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

export default connectWithId(mapStateToProps, null, mergeProps)(KeyControl);
