import {combineReducers} from "redux";
import get from "lodash/get";
import set from "lodash/set";
import {actionTypes} from "../util/constants";
import jPlayerReducer from "./jPlayerReducer";
import jPlaylistReducer from "./jPlaylistReducer";

export default combineReducers({
    jPlayer: jPlayerReducer,
    jPlaylist: jPlaylistReducer
});