import {EventEmitter} from "events";
import dispatcher from "./dispatcher";
import constants from "./constants";

class Store extends EventEmitter {
    constructor() {
        super();
    }
    updateOthersOption = (identifier, optionValue, optionKey) => {
        debugger
        this[optionKey] = optionValue;
        this.identifier = identifier;
        this.emit("jPlayerChange");       
    }
    handleActions = (action) => {
        switch (action.type) {
            case constants.ActionType.UPDATE_OTHERS_OPTION: 
                this.updateOthersOption(action.identifier, action.optionValue, action.optionKey);
                break;
        }
    }
}
const store = new Store;

dispatcher.register(store.handleActions);

export default store;