import { actionNames } from '../util/constants';

export const setMedia = (id, media) => ({
  type: actionNames.SET_MEDIA,
  id,
  media,
});
export const clearMedia = id => ({
  type: actionNames.CLEAR_MEDIA,
  id,
});
export const play = (id, time) => ({
  type: actionNames.PLAY,
  id,
  time,
});
export const pause = (id, time) => ({
  type: actionNames.PAUSE,
  id,
  time,
});
export const setPlayHead = (id, percent) => ({
  type: actionNames.PLAY_HEAD,
  id,
  percent,
});
export const setVolume = (id, volume) => ({
  type: actionNames.VOLUME,
  id,
  volume,
});
export const setMute = (id, mute) => ({
  type: actionNames.MUTE,
  id,
  mute,
});
export const focus = id => ({
  type: actionNames.FOCUS,
  id,
});
export const setOption = (id, key, value) => ({
  type: actionNames.SET_OPTION,
  id,
  key,
  value,
});
