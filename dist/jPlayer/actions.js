(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.actions = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var updateOthersOption = exports.updateOthersOption = function updateOthersOption(identifier, optionValue, optionKey) {
        return {
            type: constants.ActionType.UPDATE_OTHERS_OPTION,
            payload: {
                identifier: identifier,
                optionValue: optionValue,
                optionKey: optionKey
            }
        };
    };
});