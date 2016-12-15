import {actionTypes} from "../util/constants";
import generator from "./generator";

export const updateOption = generator(actionTypes.jPlaylist.UPDATE_OPTION, "key", "value");
export const createControl = generator(actionTypes.jPlaylist.CREATE_CONTROL, "key", "onClick", "className", "html");