import constants from "../util/constants";

export default (state={}, action) => {
    const newState = {...state};
    
    switch (action.type) {
        case constants.ActionType.UPDATE_OTHERS_OPTION:
            newState[action.payload.optionKey] = action.payload.optionValue;
            break;
        default:
            return newState;
    }
};