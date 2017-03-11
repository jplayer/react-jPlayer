import { actionTypes } from '../util/constants';

export const setOption = (key, value, uid) => ({
  type: actionTypes.jPlayer.SET_OPTION,
  key,
  value,
  uid,
});
export const setMedia = (media, uid) => ({
  type: actionTypes.jPlayer.SET_MEDIA,
  media,
  uid,
});
export const clearMedia = uid => ({
  type: actionTypes.jPlayer.CLEAR_MEDIA,
  uid,
});
export const play = ({ time, uid }) => ({
  type: actionTypes.jPlayer.PLAY,
  time,
  uid,
});
export const pause = ({ time, uid }) => ({
  type: actionTypes.jPlayer.PAUSE,
  time,
  uid,
});
export const setPlayHead = (percent, uid) => ({
  type: actionTypes.jPlayer.PLAY_HEAD,
  percent,
  uid,
});
export const setVolume = (volume, uid) => ({
  type: actionTypes.jPlayer.VOLUME,
  volume,
  uid,
});
export const setMute = (mute, uid) => ({
  type: actionTypes.jPlayer.MUTE,
  mute,
  uid,
});
export const setDuration = ({ remainingDuration, uid }) => ({
  type: actionTypes.jPlayer.DURATION,
  remainingDuration,
  uid,
});
export const setPlaybackRate = (playbackRate, uid) => ({
  type: actionTypes.jPlayer.PLAYBACK_RATE,
  playbackRate,
  uid,
});
export const setLoop = (loop, uid) => ({
  type: actionTypes.jPlayer.LOOP,
  loop,
  uid,
});
export const setFullScreen = (fullScreen, uid) => ({
  type: actionTypes.jPlayer.FULL_SCREEN,
  fullScreen,
  uid,
});
export const setFocus = uid => ({
  type: actionTypes.jPlayer.FOCUS,
  uid,
});
