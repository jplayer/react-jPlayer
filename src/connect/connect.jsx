import { connect } from 'react-redux';
import { connect as jPlayerConnect } from 'react-jplayer-utils';

import { setOption, setMedia, clearMedia, play, pause, setPlayHead,
  setVolume, setMute, focus } from '../actions/actions';
import getConnectedJPlayers from '../util/getConnectedJPlayers';

const mapStateToProps = ({ jPlayers }, { id, ...props }) => {
  const newJPlayers = getConnectedJPlayers(jPlayers);
  const { [id]: jPlayer, ...otherJPlayers } = newJPlayers;

  const returnedJPlayer = {
    ...props,
    ...jPlayer,
    id,
  };

  if (Object.keys(otherJPlayers).some(otherJPlayer => otherJPlayer)) {
    returnedJPlayer.jPlayers = otherJPlayers;
  }

  return returnedJPlayer;
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
  const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(jPlayer);

  return jPlayerConnect(jPlayer, { options }, ConnectedPlayer);
};

export default Connect;
