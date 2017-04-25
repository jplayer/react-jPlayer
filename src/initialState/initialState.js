import { initialState, jPlayerDefaultOptions, jPlayerInternalStatus,
  jPlayerDefaultStatus } from 'react-jplayer-utils';
import shortid from 'shortid';

export default (connectedJPlayers) => {
  const jPlayers = initialState(connectedJPlayers, {
    ...jPlayerInternalStatus,
    ...jPlayerDefaultStatus,
    ...jPlayerDefaultOptions,
  }, 'options');

  Object.keys(jPlayers).forEach((key) => {
    jPlayers[key].media = {
      ...jPlayers[key].media,
      id: shortid.generate(),
    };
  });

  return jPlayers;
};
