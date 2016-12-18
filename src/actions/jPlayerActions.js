import {actionTypes} from "../util/constants";
import generator from "./generator";

export const updateOption = (key, value) => Promise.resolve({
    type: actionTypes.jPlayer.UPDATE_OPTION,
    key: key,
    value: value
});
export const addUniqueToArray = generator(actionTypes.jPlayer.ARRAY_ADD_UNIQUE, "key", "value");
export const removeFromArrayByValue = generator(actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE, "key", "value");