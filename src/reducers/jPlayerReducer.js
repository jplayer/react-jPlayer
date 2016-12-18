import {actionTypes} from "../util/constants";
import {addUniqueToArray, removeFromArrayByValue, updateOption} from "./index";

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.jPlayer.ARRAY_ADD_UNIQUE:
            return addUniqueToArray(state, action);
        case actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE:
            return removeFromArrayByValue(state, action);
        case actionTypes.jPlayer.UPDATE_OPTION:
            return updateOption(state, action);
        default:
            return state;
    }
}