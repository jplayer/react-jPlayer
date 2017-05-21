import { initialState } from 'react-jplayer-utils';

import { defaultOptions, defaultStatus } from '../util/constants';

export default (connectedJPlayers) => {
  const jPlayers = initialState(connectedJPlayers, {
    ...defaultStatus,
    ...defaultOptions,
  }, 'options');

  return jPlayers;
};
