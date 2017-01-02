import {actionTypes} from "../util/constants";
import generator from "./generator";

export default {
    updateOption: (key, value, selector) => ({
        type: actionTypes.jPlayer.UPDATE_OPTION,
        key,
        value,
        selector
    }),
    updateSelector: (newSelector) => ({
        type: actionTypes.jPlayer.UPDATE_SELECTOR,
        newSelector
    })
}

export const setMedia = (media, selector) => ({
    type: actionTypes.jPlayer.SET_MEDIA,
    selector,
    media
});
export const clearMedia = (selector) => ({
    type: actionTypes.jPlayer.CLEAR_MEDIA,
    selector
});
export const play = (selector, time) => ({
    type: actionTypes.jPlayer.PLAY,
    time,
    selector
});
export const pause = (selector, time) => ({
    type: actionTypes.jPlayer.PAUSE,
    selector,
    time
});
export const playHead = (percent, selector) => ({
    type: actionTypes.jPlayer.PLAY_HEAD,
    percent,
    selector
});
export const volume = (volume, selector) => ({
    type: actionTypes.jPlayer.VOLUME,
    selector,
    volume
});
export const mute = (mute, selector) => ({
    type: actionTypes.jPlayer.MUTE,
    mute,
    selector
});
export const duration = (selector, remainingDuration) => ({
    type: actionTypes.jPlayer.DURATION,
    remainingDuration,
    selector
});
export const playbackRate = (playbackRate, selector) => ({
    type: actionTypes.jPlayer.PLAYBACK_RATE,
    playbackRate,
    selector
});
export const loop = (loop, selector) => ({
    type: actionTypes.jPlayer.LOOP,
    loop,
    selector
});
export const fullScreen = (fullScreen, selector, element) => ({
    type: actionTypes.jPlayer.FULL_SCREEN,
    fullScreen,
    element,
    selector
});