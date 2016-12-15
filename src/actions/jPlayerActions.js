import {actionTypes} from "../util/constants";
import generator from "./generator";

export const updateOption = generator(actionTypes.jPlayer.UPDATE_OPTION, "key", "value");
export const addUniqueToArray = generator(actionTypes.ARRAY_ADD_UNIQUE, "key", "value");
export const removeFromArrayByValue = generator(actionTypes.ARRAY_REMOVE_BY_VALUE, "key", "value");
export const removeFromArrayByIndex = generator(actionTypes.ARRAY_REMOVE_BY_INDEX, "key", "value");
export const createControl = generator(actionTypes.jPlayer.CREATE_CONTROL, "key", "onClick", "className", "html");