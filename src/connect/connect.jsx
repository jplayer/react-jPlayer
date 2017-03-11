import React from 'react';
import { connect } from 'react-redux';

import { setOption, setMedia, clearMedia, play, pause, setPlayHead,
  setVolume, setMute, setDuration, setPlaybackRate, setLoop,
  setFullScreen, setFocus } from '../actions/actions';

const mapStateToProps = (state, { uid, ...props }) => {
  const otherPlayers = {};

  Object.keys(state.jPlayers).forEach((key) => {
    if (key !== uid) {
      otherPlayers[key] = state.jPlayers[key];
    }
  });

  if (Object.keys(otherPlayers).length) {
    return {
      ...props,
      ...state.jPlayers[uid],
      jPlayers: otherPlayers,
    };
  }

  return {
    ...props,
    ...state.jPlayers[uid],
  };
};

const mapDispatchToProps = (dispatch, { currentId }) => ({
  setOption: (key, value, uid = currentId) => dispatch(setOption(key, value, uid)),
  setMedia: (media, uid = currentId) => dispatch(setMedia(media, uid)),
  clearMedia: (uid = currentId) => dispatch(clearMedia(uid)),
  play: ({ time, uid = currentId }) => dispatch(play({ time, uid })),
  pause: ({ time, uid = currentId }) => dispatch(pause({ time, uid })),
  setPlayHead: (percent, uid = currentId) => dispatch(setPlayHead(percent, uid)),
  setVolume: (volume, uid = currentId) => dispatch(setVolume(volume, uid)),
  setMute: (mute, uid = currentId) => dispatch(setMute(mute, uid)),
  setDuration: ({ remainingDuration, uid = currentId }) =>
    dispatch(setDuration({ remainingDuration, uid })),
  setPlaybackRate: (playbackRate, uid = currentId) =>
    dispatch(setPlaybackRate(playbackRate, uid)),
  setLoop: (loop, uid = currentId) => dispatch(setLoop(loop, uid)),
  setFullScreen: (fullScreen, uid = currentId) => dispatch(setFullScreen(fullScreen, uid)),
  setFocus: (uid = currentId) => dispatch(setFocus(uid)),
});

const Connect = (jPlayer) => {
  const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(jPlayer);

  // IE9 doesn't support fn.name
  const playerName = jPlayer.name === undefined ?
    jPlayer.toString().match(/^function\s*([^\s(]+)/)[1] : jPlayer.name;

  return class extends React.Component {
    static get uid() {
      return playerName;
    }
    static get options() {
      return jPlayer.options;
    }
    static get childContextTypes() {
      return {
        uid: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      uid: playerName,
    });
    render() {
      return <ConnectedPlayer uid={playerName} {...this.props} />;
    }
  };
};

export default Connect;
