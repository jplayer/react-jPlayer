import merge from 'lodash.merge';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';

const getInitialStates = (connectedJPlayers) => {
  const jPlayerStates = {};
  let newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [connectedJPlayers];
  }

  newConnectedJPlayers.forEach((connectedJPlayer) => {
    jPlayerStates[connectedJPlayer.options.id] = merge({}, {
      ...internalStatus,
      ...defaultStatus,
      ...defaultOptions,
    }, connectedJPlayer.options);
  });

  return {
    jPlayers: jPlayerStates,
  };
};

export default getInitialStates;
