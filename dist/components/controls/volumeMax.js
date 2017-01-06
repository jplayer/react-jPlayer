(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../../util/constants", "../../util/index", "../../actions/jPlayerActions", "../../jPlayerConnect"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../../util/constants"), require("../../util/index"), require("../../actions/jPlayerActions"), require("../../jPlayerConnect"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants, global.index, global.jPlayerActions, global.jPlayerConnect);
        global.volumeMax = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants, _index, _jPlayerActions, _jPlayerConnect) {
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
            muted: jPlayers[id].muted
        };
    };

    var VolumeMax = function VolumeMax(props) {
        var onClick = function onClick(props) {
            props.dispatch((0, _jPlayerActions.volume)(1));

            if (props.muted) {
                props.dispatch((0, _jPlayerActions.mute)(false, props.id));
            }
        };
        return _react2.default.createElement(
            "a",
            _extends({ className: _constants.classes.VOLUME_MAX, onClick: onClick }, props.attributes),
            props.children
        );
    };

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(VolumeMax, mapJPlayerProps));
});