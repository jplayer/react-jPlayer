import {actionTypes} from "../util/constants";

export default (state={}, action) => {
    switch (action.type) {
        case actionTypes.jPlayer.UPDATE_OPTION:
            return {
                ...state, 
                [action.key]: action.value
            }
        default:
            return state;
    }
}