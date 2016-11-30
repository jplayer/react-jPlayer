import constants from "../util/constants";
import merge from "lodash.merge";
import remove from "lodash/remove";
import get from "lodash/get";
import set from "lodash/set";

export default (state={}, action) => {
    switch (action.type) {
        case constants.ActionType.UPDATE_OPTION:
            return {
                ...state, 
                [action.payload.key]: action.payload.value, 
                jPlayerSelector: action.payload.identifier,
                globalVolume: action.payload.globalVolume
            }
        case constants.ActionType.ADD_CLASS:
            //Don't add duplicates or empty strings
            const found = action.payload.existingClasses.some((v) => v === action.payload.classToAdd);
            const addState = {...state};
            
            if (!found) {
                set(addState, action.payload.key, [...action.payload.existingClasses, action.payload.classToAdd]);

                return addState;
            }
            return state;
        case constants.ActionType.REMOVE_CLASS:
            const filteredClasses = action.payload.existingClasses.filter((v) => v !== action.payload.classToRemove);
            const removeState = {...state};

            set(removeState, action.payload.key, filteredClasses);

            return removeState;
        default:
            return state;
    }
};