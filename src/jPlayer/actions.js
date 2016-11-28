import constants from "../util/constants";

export const updateOption = (key, value) => ({
    type: constants.ActionType.UPDATE_OPTION,
    payload: {
        key,
        value
    } 
});

export const updateOthersOption = (key, value) => ({
    type: constants.ActionType.UPDATE_OTHERS_OPTION,
    payload: {
        key,
        value
    } 
});