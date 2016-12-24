import {actionTypes} from "../util/constants";
import generator from "./generator";

// export const updateOption = (key, value) => Promise.resolve({
//     type: actionTypes.jPlayer.UPDATE_OPTION,
//     key: key,
//     value: value
// });
export const updateOption = generator(actionTypes.jPlayer.UPDATE_OPTION, "key", "value");
export const addUniqueToArray = generator(actionTypes.jPlayer.ARRAY_ADD_UNIQUE, "key", "value");
export const removeFromArrayByValue = generator(actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE, "key", "value");
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
export const fullScreen = generator(actionTypes.jPlayer.FULL_SCREEN, "fullScreen");