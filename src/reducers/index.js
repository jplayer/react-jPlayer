import {combineReducers} from "redux";
import get from "lodash/get";
import set from "lodash/set";
import {actionTypes} from "../util/constants";
import jPlayerReducer from "./jPlayerReducer";
import jPlaylistReducer from "./jPlaylistReducer";

export const addUniqueToArray = (state, action) => {
    const existingArray = get(state, action.key, []);
    const newState = {...state};
    const found = existingArray.some((v) => v === action.value);
            
    if (!found) {
        set(newState, action.key, [...existingArray, action.value]);

        return newState;
    }
}

export const removeFromArrayByValue = (state, action) => {
    const existingArray = get(state, action.key, []);
    const newState = {...state};
    const filteredArrayByValue = existingArray.filter((v) => v !== action.value);
           
    set(newState, action.key, filteredArrayByValue);

    return newState;
}

export const removeFromArrayByIndex = (state, action) => {
    const existingArray = get(state, action.key, []);
    const newState = {...state};
    const filteredArrayByIndex = existingArray.filter((_, i) => i !== action.value);
           
    set(newState, action.key, filteredArrayByIndex);

    return newState;
}

export const updateOption = (existingObject, newValues) => {
     return {
        ...existingObject, 
        ...newValues
    }
}

export default combineReducers({
    jPlayer: jPlayerReducer,
    jPlaylist: jPlaylistReducer
});