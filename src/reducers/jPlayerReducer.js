import {actionTypes} from "../util/constants";
import merge from "lodash.merge";
import remove from "lodash/remove";
import get from "lodash/get";
import set from "lodash/set";
import * as util from "../util/index";

const updateArray = (state, action) => {
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

const focus = (state={}) => {
    if(state.keyEnabled) {
        util.focusInstance = this;
    }
}

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.ARRAY_ADD_UNIQUE:        
        case actionTypes.ARRAY_REMOVE_BY_VALUE:
        case actionTypes.ARRAY_REMOVE_BY_INDEX:
           return updateArray(state, action);
        case actionTypes.jPlayer.UPDATE_OPTION:
            return {
                ...state, 
                [action.key]: action.value
            }
        case actionTypes.jPlayer.CREATE_CONTROL:
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
        case actionTypes.jPlayer.PLAY:
        	play = (time) => {
                if(state.srcSet) {
                    focus();
                    this._htmlPlay(time);
                } else {
                    this._urlNotSetError("play");
                    this.props.updateOption("paused", true);
                }
            }
            break;  
        default:
            return state;
    }
}