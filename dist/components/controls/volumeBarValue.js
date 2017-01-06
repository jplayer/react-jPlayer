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
        global.volumeBarValue = mod.exports;
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
            verticalVolume: jPlayers[id].verticalVolume,
            muted: jPlayers[id].muted,
            volume: jPlayers[id].volume
        };
    };

    var VolumeBarValue = function VolumeBarValue(props) {
        return _react2.default.createElement("div", _extends({ className: _constants.classes.VOLUME_BAR_VALUE, style: style(props) }, props.attributes));
    };

    var style = function style(props) {
        var volumeBarValuePercentage = (props.muted ? 0 : props.volume * 100) + "%";

        return {
            width: !props.verticalVolume ? volumeBarValuePercentage : null,
            height: props.verticalVolume ? volumeBarValuePercentage : null
        };
    };

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(VolumeBarValue, mapJPlayerProps));
});