(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "redux", "lodash/get", "lodash/set", "../util/constants", "./jPlayerReducer", "./jPlaylistReducer"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("redux"), require("lodash/get"), require("lodash/set"), require("../util/constants"), require("./jPlayerReducer"), require("./jPlaylistReducer"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.redux, global.get, global.set, global.constants, global.jPlayerReducer, global.jPlaylistReducer);
        global.index = mod.exports;
    }
})(this, function (exports, _redux, _get, _set, _constants, _jPlayerReducer, _jPlaylistReducer) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.updateOption = exports.removeFromArrayByIndex = exports.removeFromArrayByValue = exports.addUniqueToArray = undefined;

    var _get2 = _interopRequireDefault(_get);

    var _set2 = _interopRequireDefault(_set);

    var _jPlayerReducer2 = _interopRequireDefault(_jPlayerReducer);

    var _jPlaylistReducer2 = _interopRequireDefault(_jPlaylistReducer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
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

    var addUniqueToArray = exports.addUniqueToArray = function addUniqueToArray(state, action) {
        var existingArray = (0, _get2.default)(state, action.key, []);
        var newState = _extends({}, state);
        var found = existingArray.some(function (v) {
            return v === action.value;
        });

        if (!found) {
            (0, _set2.default)(newState, action.key, [].concat(_toConsumableArray(existingArray), [action.value]));

            return newState;
        }
    };

    var removeFromArrayByValue = exports.removeFromArrayByValue = function removeFromArrayByValue(state, action) {
        var existingArray = (0, _get2.default)(state, action.key, []);
        var newState = _extends({}, state);
        var filteredArrayByValue = existingArray.filter(function (v) {
            return v !== action.value;
        });

        (0, _set2.default)(newState, action.key, filteredArrayByValue);

        return newState;
    };

    var removeFromArrayByIndex = exports.removeFromArrayByIndex = function removeFromArrayByIndex(state, action) {
        var existingArray = (0, _get2.default)(state, action.key, []);
        var newState = _extends({}, state);
        var filteredArrayByIndex = existingArray.filter(function (_, i) {
            return i !== action.value;
        });

        (0, _set2.default)(newState, action.key, filteredArrayByIndex);

        return newState;
    };

    var updateOption = exports.updateOption = function updateOption(existingObject, newValues) {
        return _extends({}, existingObject, newValues);
    };

    exports.default = (0, _redux.combineReducers)({
        jPlayer: _jPlayerReducer2.default,
        jPlaylist: _jPlaylistReducer2.default
    });
});