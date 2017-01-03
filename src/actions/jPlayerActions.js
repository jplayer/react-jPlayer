import {actionTypes} from "../util/constants";
import generator from "./generator";

export default {
    updateOption: (key, value, id) => ({
        type: actionTypes.jPlayer.UPDATE_OPTION,
        key,
        value,
        id
    })
}

export const setMedia = (media, id) => ({
    type: actionTypes.jPlayer.SET_MEDIA,
    id,
    media
});
export const clearMedia = (id) => ({
    type: actionTypes.jPlayer.CLEAR_MEDIA,
    id
});
export const play = (id, time) => ({
    type: actionTypes.jPlayer.PLAY,
    time,
    id
});
export const pause = (id, time) => ({
    type: actionTypes.jPlayer.PAUSE,
    id,
    time
});
export const playHead = (percent, id) => ({
    type: actionTypes.jPlayer.PLAY_HEAD,
    percent,
    id
});
export const volume = (volume, id) => ({
    type: actionTypes.jPlayer.VOLUME,
    id,
    volume
});
export const mute = (mute, id) => ({
    type: actionTypes.jPlayer.MUTE,
    mute,
    id
});
export const duration = (id, remainingDuration) => ({
    type: actionTypes.jPlayer.DURATION,
    remainingDuration,
    id
});
export const playbackRate = (playbackRate, id) => ({
    type: actionTypes.jPlayer.PLAYBACK_RATE,
    playbackRate,
    id
});
export const loop = (loop, id) => ({
    type: actionTypes.jPlayer.LOOP,
    loop,
    id
});
export const fullScreen = (fullScreen, id, element) => ({
    type: actionTypes.jPlayer.FULL_SCREEN,
    fullScreen,
    element,
    id
});
export const focus = (id) => ({
    type: actionTypes.jPlayer.FOCUS,
    id
});