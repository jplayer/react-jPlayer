(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "lodash.merge", "../util/constants", "../actions/jPlayerActions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("lodash.merge"), require("../util/constants"), require("../actions/jPlayerActions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.lodash, global.constants, global.jPlayerActions);
        global.controls = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _lodash, _constants, _jPlayerActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    var mapStateToProps = function mapStateToProps(state) {
        return _extends({}, state.jPlayer);
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$Component) {
        _inherits(_class2, _React$Component);

        function _class2(props) {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

            _this.onShuffleClick = function (event) {
                event.preventDefault();

                _this.context.shuffle(!_this.props.shuffled);
                _this.context.blur(event.target);
            };

            _this.onPreviousClick = function (event) {
                event.preventDefault();

                _this.context.previous();
                _this.context.blur(event.target);
            };

            _this.onNextClick = function (event) {
                event.preventDefault();

                _this.context.next();
                _this.context.blur(event.target);
            };

            _this.onVideoPlayClick = function () {
                return _this.props.dispatch(play());
            };

            _this.onKeyDown = function (event) {
                if (_constants.keyIgnoreElementNames.some(function (name) {
                    return name.toUpperCase() === event.target.nodeName.toUpperCase();
                })) {
                    return;
                }

                for (var key in _this.keyBindings) {
                    var keyBinding = _this.keyBindings[key];

                    if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
                        event.preventDefault();
                        keyBinding.fn();
                    }
                }
            };

            _this.keyBindings = (0, _lodash2.default)({
                play: {
                    key: 80, // p
                    fn: function fn() {
                        return _this.props.paused ? _this.props.dispatch(play()) : _this.props.dispatch((0, _jPlayerActions.pause)());
                    }
                },
                fullScreen: {
                    key: 70, // f
                    fn: function fn() {
                        if (_this.props.mediaSettings.available && _this.props.mediaSettings.video || _this.props.audioFullScreen) {
                            _this.fullScreen(!_this.props.fullScreen);
                        }
                    }
                },
                muted: {
                    key: 77, // m
                    fn: function fn() {
                        return _this.props.dispatch((0, _jPlayerActions.mute)(!_this.props.muted));
                    }
                },
                volumeUp: {
                    key: 190, // .
                    fn: function fn() {
                        return _this.props.dispatch((0, _jPlayerActions.volume)(_this.props.volume + 0.1));
                    }
                },
                volumeDown: {
                    key: 188, // ,
                    fn: function fn() {
                        return _this.props.dispatch((0, _jPlayerActions.volume)(_this.props.volume - 0.1));
                    }
                },
                loop: {
                    key: 76, // l
                    fn: function fn() {
                        return _this.props.loop === _constants.loopOptions.LOOP ? _this.props.dispatch((0, _jPlayerActions.loop)(_constants.loopOptions.OFF)) : _this.props.dispatch((0, _jPlayerActions.loop)(_constants.loopOptions.LOOP));
                    }
                }
            }, _this.props.keyBindings);
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                document.addEventListener("keydown", this.onKeyDown);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                document.removeEventListener("keydown", this.onKeyDown);
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    { className: "jp-controls" },
                    this.props.children
                );
            }
        }], [{
            key: "defaultProps",
            get: function get() {
                return {
                    playlistControls: {}
                };
            }
        }, {
            key: "propTypes",
            get: function get() {
                return {
                    onPlayClick: _react2.default.PropTypes.func,
                    onMuteClick: _react2.default.PropTypes.func,
                    onVolumeMaxClick: _react2.default.PropTypes.func,
                    onRepeatClick: _react2.default.PropTypes.func,
                    onFullScreenClick: _react2.default.PropTypes.func,
                    onShuffleClick: _react2.default.PropTypes.func,
                    onPreviousClick: _react2.default.PropTypes.func,
                    onNextClick: _react2.default.PropTypes.func,
                    onVolumeBarClick: _react2.default.PropTypes.func,
                    onPlaybackRateBarClick: _react2.default.PropTypes.func,
                    className: _react2.default.PropTypes.string,
                    onKeyDown: _react2.default.PropTypes.func,
                    controls: _react2.default.PropTypes.object,
                    playlistControls: _react2.default.PropTypes.object,
                    volumeBarClass: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
                    volumeBarValueClass: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
                    volumeBarValueStyle: _react2.default.PropTypes.object,
                    playbackRateBarClass: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
                    playbackRateBarValueClass: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
                    playbackRateBarValueStyle: _react2.default.PropTypes.object
                };
            }
        }, {
            key: "contextTypes",
            get: function get() {
                return {
                    getCurrentMedia: _react2.default.PropTypes.func,
                    play: _react2.default.PropTypes.func,
                    pause: _react2.default.PropTypes.func,
                    blur: _react2.default.PropTypes.func,
                    volume: _react2.default.PropTypes.func,
                    mute: _react2.default.PropTypes.func,
                    incrementLoop: _react2.default.PropTypes.func,
                    fullScreen: _react2.default.PropTypes.func,
                    playbackRate: _react2.default.PropTypes.func
                };
            }
        }]);

        return _class2;
    }(_react2.default.Component));
});