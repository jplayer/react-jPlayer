import { initialState } from 'react-jplayer-utils';
import shortid from 'shortid';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';

export default (connectedJPlayers) => {
  const jPlayers = initialState(connectedJPlayers, {
    ...internalStatus,
    ...defaultStatus,
    ...defaultOptions,
  }, 'options');

  Object.keys(jPlayers).forEach((key) => {
    jPlayers[key].media = {
      ...jPlayers[key].media,
      id: shortid.generate(),
    };
  });

  return jPlayers;
};
