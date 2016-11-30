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

export const addClass = (key, existingClasses, classToAdd) => ({
    type: constants.ActionType.ADD_CLASS,
    payload: {
        key,
        existingClasses,
        classToAdd
    } 
});

export const removeClass = (key, classToRemove) => ({
    type: constants.ActionType.REMOVE_CLASS,
    payload: {
        key,
        classToRemove
    } 
});