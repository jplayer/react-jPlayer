(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../util/constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../util/constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants);
        global.reducer = mod.exports;
    }
})(this, function (exports, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _constants2 = _interopRequireDefault(_constants);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    exports.default = function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        var newState = _extends({}, state);

        switch (action.type) {
            case _constants2.default.ActionType.UPDATE_OTHERS_OPTION:
                newState[action.payload.optionKey] = action.payload.optionValue;
                break;
            default:
                return newState;
        }
    };
});