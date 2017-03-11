import { actionTypes } from '../util/constants';

export const setOption = (key, value, id) => ({
  type: actionTypes.jPlayer.SET_OPTION,
  key,
  value,
  id,
});
export const setMedia = (media, id) => ({
  type: actionTypes.jPlayer.SET_MEDIA,
  media,
  id,
});
export const clearMedia = id => ({
  type: actionTypes.jPlayer.CLEAR_MEDIA,
  id,
});
export const play = ({ time, id } = {}) => ({
  type: actionTypes.jPlayer.PLAY,
  time,
  id,
});
export const pause = ({ time, id } = {}) => ({
  type: actionTypes.jPlayer.PAUSE,
  time,
  id,
});
export const setPlayHead = (percent, id) => ({
  type: actionTypes.jPlayer.PLAY_HEAD,
  percent,
  id,
});
export const setVolume = (volume, id) => ({
  type: actionTypes.jPlayer.VOLUME,
  volume,
  id,
});
export const setMute = (mute, id) => ({
  type: actionTypes.jPlayer.MUTE,
  mute,
  id,
});
export const setDuration = ({ remainingDuration, id } = {}) => ({
  type: actionTypes.jPlayer.DURATION,
  remainingDuration,
  id,
});
export const setPlaybackRate = (playbackRate, id) => ({
  type: actionTypes.jPlayer.PLAYBACK_RATE,
  playbackRate,
  id,
});
export const setLoop = (loop, id) => ({
  type: actionTypes.jPlayer.LOOP,
  loop,
  id,
});
export const setFullScreen = (fullScreen, id) => ({
  type: actionTypes.jPlayer.FULL_SCREEN,
  fullScreen,
  id,
});
export const setFocus = id => ({
  type: actionTypes.jPlayer.FOCUS,
  id,
});
