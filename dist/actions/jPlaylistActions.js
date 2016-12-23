(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../util/constants", "./generator"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../util/constants"), require("./generator"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants, global.generator);
        global.jPlaylistActions = mod.exports;
    }
})(this, function (exports, _constants, _generator) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.removeFromArrayByIndex = exports.removeFromArrayByValue = exports.addUniqueToArray = exports.updateOption = undefined;

    var _generator2 = _interopRequireDefault(_generator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var updateOption = exports.updateOption = function updateOption(key, value) {
        return Promise.resolve({
            type: _constants.actionTypes.jPlaylist.UPDATE_OPTION,
            key: key,
            value: value
        });
    };
    var addUniqueToArray = exports.addUniqueToArray = (0, _generator2.default)(_constants.actionTypes.jPlaylist.ARRAY_ADD_UNIQUE, "key", "value");
    var removeFromArrayByValue = exports.removeFromArrayByValue = (0, _generator2.default)(_constants.actionTypes.jPlaylist.ARRAY_REMOVE_BY_VALUE, "key", "value");
    var removeFromArrayByIndex = exports.removeFromArrayByIndex = (0, _generator2.default)(_constants.actionTypes.jPlaylist.ARRAY_REMOVE_BY_INDEX, "key", "value");
});