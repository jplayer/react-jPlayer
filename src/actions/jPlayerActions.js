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
export const setPlayHead = (percent, id) => ({
  type: actionTypes.jPlayer.PLAY_HEAD,
  percent,
  id,
});
export const setVolume = (volumeValue, id) => ({
  type: actionTypes.jPlayer.VOLUME,
  id,
  volumeValue,
});
export const setMute = (muteValue, id) => ({
  type: actionTypes.jPlayer.MUTE,
  muteValue,
  id,
});
export const setDuration = (id, remainingDuration) => ({
  type: actionTypes.jPlayer.DURATION,
  remainingDuration,
  id,
});
export const setPlaybackRate = (playbackRateValue, id) => ({
  type: actionTypes.jPlayer.PLAYBACK_RATE,
  playbackRateValue,
  id,
});
export const setLoop = (loopValue, id) => ({
  type: actionTypes.jPlayer.LOOP,
  loopValue,
  id,
});
export const setFullScreen = (fullScreenValue, id) => ({
  type: actionTypes.jPlayer.FULL_SCREEN,
  fullScreenValue,
  id,
});
export const setFocus = id => ({
  type: actionTypes.jPlayer.FOCUS,
  id,
});
