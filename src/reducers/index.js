import {combineReducers} from "redux";
import jPlayerReducer from "./jPlayerReducer";
import jPlaylistReducer from "./jPlaylistReducer";

export default combineReducers({
    jPlayer: jPlayerReducer,
    jPlaylist: jPlaylistReducer
});