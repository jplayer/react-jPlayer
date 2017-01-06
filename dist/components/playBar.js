(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "react-motion", "../util/constants", "../util/index", "../jPlayerConnect"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("react-motion"), require("../util/constants"), require("../util/index"), require("../jPlayerConnect"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.reactMotion, global.constants, global.index, global.jPlayerConnect);
        global.playBar = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _reactMotion, _constants, _index, _jPlayerConnect) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jPlayerConnect2 = _interopRequireDefault(_jPlayerConnect);

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

    var mapJPlayerProps = function mapJPlayerProps(jPlayers, id) {
        return {
            smoothPlayBar: jPlayers[id].smoothPlayBar,
            currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
            currentPercentRelative: jPlayers[id].currentPercentRelative,
            currentTime: jPlayers[id].currentTime,
            duration: jPlayers[id].duration,
            playHeadPercent: jPlayers[id].playHeadPercent
        };
    };

    var PlayBar = function PlayBar(props) {
        return _react2.default.createElement(
            _reactMotion.Motion,
            { style: { smoothWidth: (0, _reactMotion.spring)(props.currentPercentAbsolute, [250]) } },
            function (values) {
                return _react2.default.createElement("div", _extends({ className: _constants.classes.PLAY_BAR, style: { width: props.smoothPlayBar ? values.smoothWidth + "%" : props.currentPercentRelative + "%" } }, props.attributes));
            }
        );
    };

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(PlayBar, mapJPlayerProps));
});