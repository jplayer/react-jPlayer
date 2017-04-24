import { initialState, jPlayerDefaultOptions, jPlayerInternalStatus,
  jPlayerDefaultStatus } from 'react-jplayer-utils';

export default connectedJPlayers =>
  initialState(connectedJPlayers, {
    ...jPlayerInternalStatus,
    ...jPlayerDefaultStatus,
    ...jPlayerDefaultOptions,
}, 'options');
