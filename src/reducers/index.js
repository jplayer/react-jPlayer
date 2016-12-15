import {combineReducers} from "redux";
import jPlayerReducer from "./jPlayerReducer";
import jPlaylistReducer from "./jPlaylistReducer";

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