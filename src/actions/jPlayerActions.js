import { actionTypes } from '../util/constants';

export default {
  updateOption: (key, value, id) => ({
    type: actionTypes.jPlayer.UPDATE_OPTION,
    key,
    value,
    id,
  }),
};
export const setMedia = (media, id) => ({
  type: actionTypes.jPlayer.SET_MEDIA,
  id,
  media,
});
export const clearMedia = id => ({
  type: actionTypes.jPlayer.CLEAR_MEDIA,
  id,
});
export const play = (id, time) => ({
  type: actionTypes.jPlayer.PLAY,
  time,
  id,
});
export const pause = (id, time) => ({
  type: actionTypes.jPlayer.PAUSE,
  id,
  time,
});
export const playHead = (percent, id) => ({
  type: actionTypes.jPlayer.PLAY_HEAD,
  percent,
  id,
});
export const volume = (volumeValue, id) => ({
  type: actionTypes.jPlayer.VOLUME,
  id,
  volumeValue,
});
export const mute = (muteValue, id) => ({
  type: actionTypes.jPlayer.MUTE,
  muteValue,
  id,
});
export const duration = (id, remainingDuration) => ({
  type: actionTypes.jPlayer.DURATION,
  remainingDuration,
  id,
});
export const playbackRate = (playbackRateValue, id) => ({
  type: actionTypes.jPlayer.PLAYBACK_RATE,
  playbackRateValue,
  id,
});
export const loop = (loopValue, id) => ({
  type: actionTypes.jPlayer.LOOP,
  loopValue,
  id,
});
export const fullScreen = (fullScreenValue, id) => ({
  type: actionTypes.jPlayer.FULL_SCREEN,
  fullScreenValue,
  id,
});
export const focus = id => ({
  type: actionTypes.jPlayer.FOCUS,
  id,
});
