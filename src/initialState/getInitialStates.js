import merge from 'lodash.merge';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';

const getInitialStates = (jPlayers) => {
  const jPlayerStates = {};
  let newJPlayers = jPlayers;

  if (!Array.isArray(jPlayers)) {
    newJPlayers = [jPlayers];
  }

  newJPlayers.forEach((jPlayer) => {
    jPlayerStates[jPlayer.id] = merge({}, {
      ...internalStatus,
      ...defaultStatus,
      ...defaultOptions,
    }, jPlayer.options);
  });

  return {
    jPlayers: jPlayerStates,
  };
};

export default getInitialStates;
