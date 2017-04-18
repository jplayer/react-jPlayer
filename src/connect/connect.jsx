import { connect } from 'react-redux';
import { connect as jPlayerConnect, jPlayerDefaultOptions, jPlayerDefaultStatus } from 'react-jplayer-utils';

import { setOption, setMedia, clearMedia, play, pause, setPlayHead,
  setVolume, setMute, focus } from '../actions/actions';

const mapStateToProps = ({ jPlayers }, { id, ...props }) => {
  const newJPlayers = {};

  Object.keys(jPlayers).forEach((jPlayerKey) => {
    const jPlayer = jPlayers[jPlayerKey];
    const options = {};
    const status = {};

    Object.keys(jPlayerDefaultOptions).forEach((key) => {
      if (jPlayer[key] !== undefined) {
        options[key] = jPlayer[key];
      }
    });

    Object.keys(jPlayerDefaultStatus).forEach((key) => {
      if (jPlayer[key] !== undefined) {
        status[key] = jPlayer[key];
      }
    });

    newJPlayers[jPlayerKey] = {
      options,
      status,
    };
  });

  const { [id]: jPlayer, ...otherJPlayers } = newJPlayers;

  const returnedJPlayers = {
    ...props,
    ...jPlayer,
    id,
  };

  if (Object.keys(otherJPlayers).some(otherJPlayer => otherJPlayer)) {
    returnedJPlayers.jPlayers = otherJPlayers;
  }

  return returnedJPlayers;
};

const mapDispatchToProps = {
  setOption,
  setMedia,
  clearMedia,
  play,
  pause,
  setPlayHead,
  setVolume,
  setMute,
  focus,
};

const Connect = (jPlayer, options) => {
  const ConnectedPlaylist = connect(mapStateToProps, mapDispatchToProps)(jPlayer);

  return jPlayerConnect(jPlayer, options, ConnectedPlaylist);
};

export default Connect;
