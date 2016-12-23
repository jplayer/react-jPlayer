(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-motion"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-motion"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactMotion);
        global.playlist = mod.exports;
    }
})(this, function (exports, _react, _reactMotion) {
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

    var Playlist = function Playlist(props) {
        var animationHeight = props.shuffling ? props.minHeight : props.maxHeight;

        return _react2.default.createElement(
            _reactMotion.Motion,
            { style: { heightToInterpTo: (0, _reactMotion.spring)(animationHeight, props.config) }, onRest: props.onRest },
            function (values) {
                return _react2.default.createElement(
                    "ul",
                    { style: { transform: "scaleY(" + values.heightToInterpTo + ")", transformOrigin: "50% top" } },
                    props.children
                );
            }
        );
    };

    Playlist.defaultProps = {
        minHeight: 0,
        maxHeight: 1
    };

    Playlist.propTypes = {
        children: _react2.default.PropTypes.element.isRequired
    };

    exports.default = Playlist;
});