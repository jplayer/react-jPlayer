import React from 'react';
import { connect } from 'react-redux';

import { setOption, setMedia, clearMedia, play, pause, setPlayHead,
  setVolume, setMute, setDuration, setPlaybackRate, setLoop,
  setFullScreen, setFocus } from '../actions/actions';

const mapStateToProps = state => ({
  ...state.jPlayers,
});

const getActions = (dispatch, id) => ({
  setOption: (key, value) => dispatch(setOption(key, value, id)),
  setMedia: media => dispatch(setMedia(media, id)),
  clearMedia: () => dispatch(clearMedia(id)),
  play: time => dispatch(play({ time, id })),
  pause: time => dispatch(pause({ time, id })),
  setPlayHead: percent => dispatch(setPlayHead(percent, id)),
  setVolume: volume => dispatch(setVolume(volume, id)),
  setMute: mute => dispatch(setMute(mute, id)),
  setDuration: remainingDuration => dispatch(setDuration({ remainingDuration, id })),
  setPlaybackRate: playbackRate => dispatch(setPlaybackRate(playbackRate, id)),
  setLoop: loop => dispatch(setLoop(loop, id)),
  setFullScreen: fullScreen => dispatch(setFullScreen(fullScreen, id)),
  setFocus: () => dispatch(setFocus(id)),
});

const mergeProps = (jPlayers, { dispatch }, { id, ...props }) => {
  const newJPlayers = {};

  Object.keys(jPlayers).forEach((key) => {
    const jPlayer = jPlayers[key];

    newJPlayers[key] = {
      ...jPlayer,
      ...getActions(dispatch, jPlayer.id),
    };
  });

  const { [id]: jPlayer, ...otherPlayers } = newJPlayers;

  const returnedJPlayers = {
    ...jPlayer,
    ...props,
  };

  if (Object.keys(otherPlayers).length) {
    returnedJPlayers.jPlayers = otherPlayers;
  }

  return returnedJPlayers;
};

const Connect = (jPlayer) => {
  const ConnectedPlayer = connect(mapStateToProps, null, mergeProps)(jPlayer);

  // IE9 doesn't support fn.name
  const playerName = jPlayer.name === undefined ?
    jPlayer.toString().match(/^function\s*([^\s(]+)/)[1] : jPlayer.name;

  return class extends React.Component {
    static get id() {
      return playerName;
    }
    static get options() {
      return jPlayer.options;
    }
    static get childContextTypes() {
      return {
        id: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      id: playerName,
    });
    render() {
      return <ConnectedPlayer id={playerName} {...this.props} />;
    }
  };
};

export default Connect;
