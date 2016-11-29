import constants from "../util/constants";

export const updateOption = (key, value, identifier, globalVolume) => ({
    type: constants.ActionType.UPDATE_OPTION,
    payload: {
        key,
        value,
        identifier,
        globalVolume
    } 
});