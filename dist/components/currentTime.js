(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../util/constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../util/constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants);
        global.currentTime = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants) {
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

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            currentTimeText: state.jPlayer.currentTimeText,
            attributes: ownProps
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_ref) {
        var currentTimeText = _ref.currentTimeText,
            attributes = _ref.attributes;
        return _react2.default.createElement(
            "div",
            _extends({ className: _constants.classNames.CURRENT_TIME }, attributes),
            currentTimeText
        );
    });
});