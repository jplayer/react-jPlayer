(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "./dispatcher", "./constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("./dispatcher"), require("./constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.dispatcher, global.constants);
        global.actionsf = mod.exports;
    }
})(this, function (exports, _dispatcher, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.updateOthersOption = undefined;

    var _dispatcher2 = _interopRequireDefault(_dispatcher);

    var _constants2 = _interopRequireDefault(_constants);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var updateOthersOption = exports.updateOthersOption = function updateOthersOption(identifier, optionValue, optionKey) {
        return _dispatcher2.default.dispatch({
            type: _constants2.default.ActionType.UPDATE_OTHERS_OPTION,
            identifier: identifier,
            optionValue: optionValue,
            optionKey: optionKey
        });
    };
});