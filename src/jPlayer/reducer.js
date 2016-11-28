import constants from "../util/constants";

export default (state={}, action) => {
    switch (action.type) {
        case constants.ActionType.UPDATE_OTHERS_OPTION:
            return {
                [action.payload.optionKey]: action.payload.optionValue
            }
        default:
            return state;
    }
};