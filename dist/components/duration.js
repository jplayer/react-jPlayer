(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../util/constants", "../actions/jPlayerActions", "../util/index", "../jPlayerConnect"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../util/constants"), require("../actions/jPlayerActions"), require("../util/index"), require("../jPlayerConnect"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants, global.jPlayerActions, global.index, global.jPlayerConnect);
        global.duration = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants, _jPlayerActions, _index, _jPlayerConnect) {
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
            toggleDuration: jPlayers[id].toggleDuration,
            captureDuration: jPlayers[id].captureDuration,
            durationText: jPlayers[id].durationText
        };
    };

    var Duration = function Duration(props) {
        var onDurationClick = function onDurationClick(e) {
            if (props.toggleDuration) {
                if (props.captureDuration) {
                    e.stopPropagation();
                }
                props.dispatch((0, _jPlayerActions.duration)(props.id));
            }
        };
        return _react2.default.createElement(
            "div",
            _extends({ className: _constants.classNames.DURATION, onClick: onDurationClick }, props.attributes),
            props.durationText
        );
    };

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(Duration, mapJPlayerProps));
});