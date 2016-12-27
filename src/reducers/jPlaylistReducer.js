import {actionTypes} from "../util/constants";
import {addUniqueToArray, removeFromArrayByValue, removeFromArrayByIndex, updateOption} from "../util/index";

// export default (state={}, action) => {
//     switch (action.type) {
//         case actionTypes.jPlaylist.ARRAY_ADD_UNIQUE:
//             return addUniqueToArray(state, action);
//         case actionTypes.jPlaylist.ARRAY_REMOVE_BY_VALUE:
//             return removeFromArrayByValue(state, action);
//         case actionTypes.jPlaylist.ARRAY_REMOVE_BY_INDEX:
//             return removeFromArrayByIndex(state, action);
//         case actionTypes.jPlaylist.UPDATE_OPTION:
//             return updateOption(state, action);
//         default:
//             return state;
//     }
// }