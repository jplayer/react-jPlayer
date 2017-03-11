import merge from 'lodash.merge';

import { defaultOptions, statusDefaultValues } from '../util/constants';

const getInitialStates = (jPlayers) => {
  const jPlayerStates = {};
  let newJPlayers = jPlayers;

  if (!Array.isArray(jPlayers)) {
    newJPlayers = [jPlayers];
  }

  newJPlayers.forEach((jPlayer) => {
    jPlayerStates[jPlayer.uid] = merge({}, {
      ...statusDefaultValues,
      ...defaultOptions,
      id: jPlayer.uid,
    }, jPlayer.options);
  });

  return jPlayerStates;
};

export default getInitialStates;
