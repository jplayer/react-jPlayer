import {combineReducers} from "redux";
import get from "lodash/get";
import set from "lodash/set";
import {actionTypes} from "../util/constants";
import jPlayerReducer from "./jPlayerReducer";
import jPlaylistReducer from "./jPlaylistReducer";

export const updateArray = (state, action) => {
    const existingArray = get(state, action.key, []);
    const newState = {...state};

    switch (action.type) {
        case actionTypes.ARRAY_ADD_UNIQUE:
            //Don't add duplicates
            const found = existingArray.some((v) => v === action.value);
            
            if (!found) {
                set(newState, action.key, [...existingArray, action.value]);

                return newState;
            }
            return state;
        case actionTypes.ARRAY_REMOVE_BY_VALUE:
            const filteredArrayByValue = existingArray.filter((v) => v !== action.value);
           
            set(newState, action.key, filteredArrayByValue);

            return newState;
        case actionTypes.ARRAY_REMOVE_BY_INDEX:
            const filteredArrayByIndex = existingArray.filter((_, i) => i !== action.value);
           
            set(newState, action.key, filteredArrayByIndex);

            return newState;
        default:
            return state;
    }
}

export const updateOption = (state, action) => {
     return {
        ...state, 
        [action.key]: action.value
    }
}

export const createControl = (state, action) => {
    const newControl = {
        [action.key]: {
            html: action.html || state.controls[action.key],
            onClick: action.onClick,
            className: action.className
        }
    };

    const newState = {...state};
    newState.controls = {...state.controls, ...newControl};
    
    return newState;
}

export default combineReducers({
    jPlayer: jPlayerReducer,
    jPlaylist: jPlaylistReducer
});