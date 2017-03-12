import { actionNames } from '../util/constants';

export const setOption = (key, value, id) => ({
  type: actionNames.SET_OPTION,
  key,
  value,
  id,
});
export const setMedia = (media, id) => ({
  type: actionNames.SET_MEDIA,
  media,
  id,
});
export const clearMedia = id => ({
  type: actionNames.CLEAR_MEDIA,
  id,
});
export const play = (time, id) => ({
  type: actionNames.PLAY,
  time,
  id,
});
export const pause = (time, id) => ({
  type: actionNames.PAUSE,
  time,
  id,
});
export const setPlayHead = (percent, id) => ({
  type: actionNames.PLAY_HEAD,
  percent,
  id,
});
export const setVolume = (volume, id) => ({
  type: actionNames.VOLUME,
  volume,
  id,
});
export const setMute = (mute, id) => ({
  type: actionNames.MUTE,
  mute,
  id,
});
export const setDuration = (remainingDuration, id) => ({
  type: actionNames.DURATION,
  remainingDuration,
  id,
});
export const setPlaybackRate = (playbackRate, id) => ({
  type: actionNames.PLAYBACK_RATE,
  playbackRate,
  id,
});
export const setLoop = (loop, id) => ({
  type: actionNames.LOOP,
  loop,
  id,
});
export const setFullScreen = (fullScreen, id) => ({
  type: actionNames.FULL_SCREEN,
  fullScreen,
  id,
});
export const setFocus = id => ({
  type: actionNames.FOCUS,
  id,
});
