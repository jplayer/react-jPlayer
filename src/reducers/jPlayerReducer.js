import {actionTypes} from "../util/constants";
import {updateArray, updateOption, createControl} from "./index";

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.ARRAY_ADD_UNIQUE:
        case actionTypes.ARRAY_REMOVE_BY_VALUE:
        case actionTypes.ARRAY_REMOVE_BY_INDEX:
            return updateArray(state, action);
        case actionTypes.jPlayer.UPDATE_OPTION:
            return updateOption(state, action);
        case actionTypes.jPlayer.CREATE_CONTROL:
            return createControl(state, action);
        default:
            return state;
    }
}