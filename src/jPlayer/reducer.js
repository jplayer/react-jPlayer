import constants from "../util/constants";

export default (state={}, action) => {
    switch (action.type) {
        case constants.ActionType.UPDATE_OPTION:
            return Object.assign({}, state, {[action.payload.key]: action.payload.value})
        case constants.ActionType.UPDATE_OTHERS_OPTION:
            return Object.assign({}, state, {[action.payload.key]: action.payload.value})
        default:
            return state;
    }
};