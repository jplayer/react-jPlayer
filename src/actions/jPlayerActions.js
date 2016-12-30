import {actionTypes} from "../util/constants";
import generator from "./generator";

export default {    
    updateOption: generator(actionTypes.jPlayer.UPDATE_OPTION, "key", "value")
}

export const setMedia = generator(actionTypes.jPlayer.SET_MEDIA, "media");
export const clearMedia = generator(actionTypes.jPlayer.CLEAR_MEDIA);
export const play = generator(actionTypes.jPlayer.PLAY, "time");
export const pause = generator(actionTypes.jPlayer.PAUSE, "time");
export const playHead = generator(actionTypes.jPlayer.PLAY_HEAD, "percent");
export const volume = generator(actionTypes.jPlayer.VOLUME, "volume");
export const mute = generator(actionTypes.jPlayer.MUTE, "mute");
export const duration = generator(actionTypes.jPlayer.DURATION, "remainingDuration");
export const playbackRate = generator(actionTypes.jPlayer.PLAYBACK_RATE, "playbackRate");
export const loop = generator(actionTypes.jPlayer.LOOP, "loop");
export const fullScreen = generator(actionTypes.jPlayer.FULL_SCREEN, "fullScreen", "element");