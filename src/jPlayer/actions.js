export const updateOthersOption = (identifier, optionValue, optionKey) => ({
    type: constants.ActionType.UPDATE_OTHERS_OPTION,
    payload: {
        identifier,
        optionValue,
        optionKey
    } 
});