(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../util/constants", "./index"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../util/constants"), require("./index"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants, global.index);
        global.jPlaylistReducer = mod.exports;
    }
})(this, function (exports, _constants, _index) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        switch (action.type) {
            case _constants.actionTypes.jPlaylist.ARRAY_ADD_UNIQUE:
                return (0, _index.addUniqueToArray)(state, action);
            case _constants.actionTypes.jPlaylist.ARRAY_REMOVE_BY_VALUE:
                return (0, _index.removeFromArrayByValue)(state, action);
            case _constants.actionTypes.jPlaylist.ARRAY_REMOVE_BY_INDEX:
                return (0, _index.removeFromArrayByIndex)(state, action);
            case _constants.actionTypes.jPlaylist.UPDATE_OPTION:
                return (0, _index.updateOption)(state, action);
            default:
                return state;
        }
    };
});