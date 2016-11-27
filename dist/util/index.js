(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "lodash.merge", "lodash/remove", "lodash/get", "lodash/set"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("lodash.merge"), require("lodash/remove"), require("lodash/get"), require("lodash/set"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.lodash, global.remove, global.get, global.set);
        global.index = mod.exports;
    }
})(this, function (exports, _lodash, _remove, _get, _set) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.className = exports.key = exports.assignStyle = exports.removeClass = exports.addClass = exports.modifyOptionsArray = exports.mergeOptions = exports.assignOptions = undefined;

    var _lodash2 = _interopRequireDefault(_lodash);

    var _remove2 = _interopRequireDefault(_remove);

    var _get2 = _interopRequireDefault(_get);

    var _set2 = _interopRequireDefault(_set);

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

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var assignOptions = exports.assignOptions = function assignOptions(newOption, callback) {
        this.props.updateOptions(function (prevOptions) {
            return Object.assign({}, prevOptions, newOption);
        }, callback);
    };
    var mergeOptions = exports.mergeOptions = function mergeOptions(newOption, callback) {
        this.props.updateOptions(function (prevOptions) {
            return (0, _lodash2.default)({}, prevOptions, newOption);
        }, callback);
    };
    var modifyOptionsArray = exports.modifyOptionsArray = function modifyOptionsArray(newOptions, arrayMethod, key, callback) {
        var handleNewOptions = function handleNewOptions() {
            var prevOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return arrayMethod.call(prevOptions, newOptions);
        };

        this.props.updateOptions(function (prevOptions) {
            return Object.assign({}, prevOptions, _defineProperty({}, key, handleNewOptions(prevOptions[key])));
        }, callback);
    };
    var addClass = exports.addClass = function addClass(classToAdd, key, callback) {
        //Use function overload of setState to make sure we have up to date values
        this.props.updateOptions(function (prevOptions) {
            var prevArray = (0, _get2.default)(prevOptions, key, []);
            var found = prevArray.some(function (v) {
                return v === classToAdd;
            });

            //Don't add duplicates or empty strings
            if (!found && classToAdd !== undefined) {
                (0, _set2.default)(prevOptions, key, [].concat(_toConsumableArray(prevArray), [classToAdd]));
            }
            return prevOptions;
        }, callback);
    };
    var removeClass = exports.removeClass = function removeClass(classToRemove, key, callback) {
        this.props.updateOptions(function (prevOptions) {
            var prevArray = (0, _get2.default)(prevOptions, key, []);

            if (classToRemove !== undefined) {
                (0, _remove2.default)(prevArray, function (v) {
                    return classToRemove === v;
                });
            }

            return prevOptions;
        }, callback);
    };
    var assignStyle = exports.assignStyle = function assignStyle(newOption, styleKey, callback) {
        this.setState(function (prevState) {
            return prevState[styleKey] = Object.assign({}, prevState[styleKey], newOption);
        }, callback);
    };
    var key = exports.key = {
        functions: "functions",
        overrideFunctions: "overrideFunctions",
        stateClass: "status.stateClass"
    };
    var className = exports.className = {
        hidden: "jp-hidden"
    };
});