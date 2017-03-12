import merge from 'lodash.merge';

import { defaultOptions, statusDefaultValues } from '../util/constants';

const getInitialStates = (jPlayers) => {
  const jPlayerStates = {};
  let newJPlayers = jPlayers;

  if (typeof (jPlayers) !== 'object') {
    newJPlayers = { jPlayers };
  }

  Object.keys(newJPlayers).forEach((key) => {
    const jPlayer = newJPlayers[key];

    jPlayerStates[jPlayer.id] = merge({}, {
      ...statusDefaultValues,
      ...defaultOptions,
    }, jPlayer.options);
  });

  return jPlayerStates;
};

export default getInitialStates;
