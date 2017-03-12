import merge from 'lodash.merge';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';

const getInitialStates = (jPlayers) => {
  const jPlayerStates = {};
  let newJPlayers = jPlayers;

  if (typeof (jPlayers) !== 'object') {
    newJPlayers = { jPlayers };
  }

  Object.keys(newJPlayers).forEach((key) => {
    const jPlayer = newJPlayers[key];

    jPlayerStates[jPlayer.id] = merge({}, {
      ...internalStatus,
      ...defaultStatus,
      ...defaultOptions,
    }, jPlayer.options);
  });

  return jPlayerStates;
};

export default getInitialStates;
