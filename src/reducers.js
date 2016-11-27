import {combineReducers} from "redux";
import jPlayerReducer from "./jPlayer/reducer";
import jPlaylistReducer from "./add-on/jPlaylist/reducer";

export default combineReducers({
    jPlayer: jPlayerReducer,
    jPlaylist: jPlaylistReducer
});