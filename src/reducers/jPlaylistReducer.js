import {actionTypes} from "../util/constants";
import {updateOption, createControl} from "./index";

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.jPlaylist.UPDATE_OPTION:
            return updateOption(state, action);
        case actionTypes.jPlaylist.CREATE_CONTROL:
            return createControl(state, action);
        default:
            return state;
    }
}