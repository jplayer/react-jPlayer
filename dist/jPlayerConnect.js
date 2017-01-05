(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.jPlayerConnect = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

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

    exports.default = function (WrappedComponent, propsCallback) {
        var jPlayerList = function jPlayerList(_ref, _ref2) {
            var jPlayers = _ref.jPlayers,
                attributes = _ref.attributes,
                dispatch = _ref.dispatch,
                children = _ref.children;
            var id = _ref2.id;
            return _react2.default.createElement(
                WrappedComponent,
                _extends({}, propsCallback(jPlayers, id), { attributes: attributes, id: id, dispatch: dispatch }),
                children
            );
        };

        jPlayerList.contextTypes = {
            id: _react2.default.PropTypes.string
        };

        return jPlayerList;
    };
});