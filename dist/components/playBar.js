(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "react-motion", "../util/constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("react-motion"), require("../util/constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.reactMotion, global.constants);
        global.playBar = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _reactMotion, _constants) {
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

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            smoothPlayBar: state.jPlayer.smoothPlayBar,
            currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
            currentPercentRelative: state.jPlayer.currentPercentRelative,
            currentTime: state.jPlayer.currentTime,
            duration: state.jPlayer.duration,
            playHeadPercent: state.jPlayer.playHeadPercent,
            attributes: ownProps
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$PureComponent) {
        _inherits(_class, _React$PureComponent);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    _reactMotion.Motion,
                    { style: { smoothWidth: (0, _reactMotion.spring)(this.props.currentPercentAbsolute, [250]) } },
                    function (values) {
                        return _react2.default.createElement("div", _extends({ className: _constants.classNames.PLAY_BAR, style: { width: _this2.props.smoothPlayBar ? values.smoothWidth + "%" : _this2.props.currentPercentRelative + "%" } }, _this2.props.attributes));
                    }
                );
            }
        }], [{
            key: "propTypes",
            get: function get() {
                return {
                    playBarStyle: _react2.default.PropTypes.object,
                    smoothPlayBar: _react2.default.PropTypes.bool,
                    currentPercentAbsolute: _react2.default.PropTypes.number
                };
            }
        }]);

        return _class;
    }(_react2.default.PureComponent));
});