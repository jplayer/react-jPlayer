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

export const play = (time) => {
    return (dispatch, getState) => {
        const state = getState().jPlayer;

        if(state.srcSet) {	
            this.currentMedia.play();
            if (!isNaN(time)) {
                this.currentMedia.currentTime = time;	
            }
        } else {
            this._urlNotSetError("play");
            this.props.dispatch(updateOption("paused", true));
        }
    }
}