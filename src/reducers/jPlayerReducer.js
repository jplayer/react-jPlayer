import {actionTypes} from "../util/constants";
import merge from "lodash.merge";
import remove from "lodash/remove";
import get from "lodash/get";
import set from "lodash/set";
import {updateOption, createControl} from "./index";

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

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.ARRAY_ADD_UNIQUE:        
        case actionTypes.ARRAY_REMOVE_BY_VALUE:
        case actionTypes.ARRAY_REMOVE_BY_INDEX:
            return updateArray(state, action);
        case actionTypes.jPlayer.UPDATE_OPTION:
            return updateOption(state, action);
        case actionTypes.jPlayer.CREATE_CONTROL:
            return createControl(state, action);
        default:
            return state;
    }
}