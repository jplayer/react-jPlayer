(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "../util/constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("../util/constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.constants);
        global.control = mod.exports;
    }
})(this, function (exports, _react, _constants) {
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

    var Control = function Control(props) {
        var key = _react2.default.Children.only(props.children).key;
        var wrappedControl = wrappedControls(props)[key];

        return wrappedControl || props.children;
    };

    var wrappedControls = function wrappedControls(props) {
        return {
            play: _react2.default.createElement(
                "a",
                { className: _constants.classNames.PLAY, onClick: props.onPlayClick },
                props.children
            ),
            mute: _react2.default.createElement(
                "a",
                { className: _constants.classNames.MUTE, onClick: props.onMuteClick },
                props.children
            ),
            volumeMax: _react2.default.createElement(
                "a",
                { className: _constants.classNames.VOLUME_MAX, onClick: props.onVolumeMaxClick },
                props.children
            ),
            repeat: _react2.default.createElement(
                "a",
                { className: _constants.classNames.REPEAT, onClick: props.onRepeatClick },
                props.children
            ),
            fullScreen: _react2.default.createElement(
                "a",
                { className: _constants.classNames.FULL_SCREEN, onClick: props.onFullScreenClick },
                props.children
            ),
            shuffle: _react2.default.createElement(
                "a",
                { className: _constants.classNames.SHUFFLE, onClick: props.onShuffleClick },
                props.children
            ),
            previous: _react2.default.createElement(
                "a",
                { className: _constants.classNames.PREVIOUS, onClick: props.onPreviousClick },
                props.children
            ),
            next: _react2.default.createElement(
                "a",
                { className: _constants.classNames.NEXT, onClick: props.onNextClick },
                props.children
            )
        };
    };

    exports.default = Control;
});