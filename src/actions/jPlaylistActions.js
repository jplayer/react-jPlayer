import {actionTypes} from "../util/constants";
import generator from "./generator";

export const updateOption = generator(actionTypes.jPlaylist.UPDATE_OPTION, "key", "value");