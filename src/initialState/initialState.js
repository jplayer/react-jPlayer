import { initialState } from 'react-jplayer-utils';

import { defaultOptions, defaultStatus, internalStatus } from '../util/constants';

export default (connectedJPlayers) => {
  const jPlayers = initialState(connectedJPlayers, {
    ...internalStatus,
    ...defaultStatus,
    ...defaultOptions,
  }, 'options');

  return jPlayers;
};
