import {actionTypes} from "../util/constants";

export const updateOption = (key, value, identifier, globalVolume) => ({
    type: actionTypes.UPDATE_OPTION,
    payload: {
        key,
        value,
        identifier,
        globalVolume
    } 
});

export const addClass = (key, existingClasses, classToAdd) => ({
    type: actionTypes.ADD_CLASS,
    payload: {
        key,
        existingClasses,
        classToAdd
    } 
});

export const removeClass = (key, classToRemove) => ({
    type: actionTypes.REMOVE_CLASS,
    payload: {
        key,
        classToRemove
    } 
});