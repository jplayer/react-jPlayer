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
        global.playbackRateBarValue = mod.exports;
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
            verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
            minPlaybackRate: jPlayers[id].minPlaybackRate,
            maxPlaybackRate: jPlayers[id].maxPlaybackRate,
            playbackRate: jPlayers[id].playbackRate,
            playbackRateEnabled: jPlayers[id].playbackRateEnabled
        };
    };

    var PlaybackRateBarValue = function PlaybackRateBarValue(props) {
        return _react2.default.createElement("div", _extends({ className: _constants.classes.PLAYBACK_RATE_BAR_VALUE, style: style(props) }, props.attributes));
    };

    var style = function style(props) {
        var ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
        var playbackRateBarValue = ratio * 100 + "%";

        return {
            width: !props.verticalPlaybackRate ? playbackRateBarValue : null,
            height: props.verticalPlaybackRate ? playbackRateBarValue : null
        };
    };

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(PlaybackRateBarValue, mapJPlayerProps));
});