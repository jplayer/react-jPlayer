import { actionTypes } from '../util/constants';

export default {
  updateOption: (key, value, uid) => ({
    type: actionTypes.jPlayer.UPDATE_OPTION,
    key,
    value,
    uid,
  }),
};
export const setMedia = (media, uid) => ({
  type: actionTypes.jPlayer.SET_MEDIA,
  uid,
  media,
});
export const clearMedia = uid => ({
  type: actionTypes.jPlayer.CLEAR_MEDIA,
  uid,
});
export const play = (uid, time) => ({
  type: actionTypes.jPlayer.PLAY,
  time,
  uid,
});
export const pause = (uid, time) => ({
  type: actionTypes.jPlayer.PAUSE,
  uid,
  time,
});
export const setPlayHead = (percent, uid) => ({
  type: actionTypes.jPlayer.PLAY_HEAD,
  percent,
  uid,
});
export const setVolume = (volume, uid) => ({
  type: actionTypes.jPlayer.VOLUME,
  uid,
  volume,
});
export const setMute = (mute, uid) => ({
  type: actionTypes.jPlayer.MUTE,
  mute,
  uid,
});
export const setDuration = (uid, remainingDuration) => ({
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
