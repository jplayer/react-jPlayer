import dispatcher from "./dispatcher";
import constants from "./constants";

export const updateOthersOption = (identifier, optionValue, optionKey) => dispatcher.dispatch({
    type: constants.ActionType.UPDATE_OTHERS_OPTION,
    identifier,
    optionValue,
    optionKey
});