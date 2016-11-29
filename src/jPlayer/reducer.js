import constants from "../util/constants";

export default (state={}, action) => {
    switch (action.type) {
        case constants.ActionType.UPDATE_OPTION:
            return {
                ...state, 
                [action.payload.key]: action.payload.value, 
                jPlayerSelector: action.payload.identifier,
                globalVolume: action.payload.globalVolume
            }
        default:
            return state;
    }
};