(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../util/constants", "../actions/jPlayerActions", "../reducers/index", "./control"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../util/constants"), require("../actions/jPlayerActions"), require("../reducers/index"), require("./control"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants, global.jPlayerActions, global.index, global.control);
        global.controls = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants, _jPlayerActions, _index, _control) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var reducer = _interopRequireWildcard(_index);

    var _control2 = _interopRequireDefault(_control);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

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

        function _class2() {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));

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

            _this.onMuteClick = function () {
                return _this.props.dispatch((0, _jPlayerActions.mute)(!_this.props.muted));
            };

            _this.onPlayClick = function () {
                return _this.props.paused ? _this.props.dispatch((0, _jPlayerActions.play)()) : _this.props.dispatch((0, _jPlayerActions.pause)());
            };

            _this.onPlaybackRateBarClick = function (e) {
                // Using e.currentTarget to enable multiple playbackRate bars
                var bar = e.currentTarget,
                    offset = getOffset(bar),
                    x = e.pageX - offset.left,
                    w = getWidth(bar),
                    y = getHeight(bar) - e.pageY + offset.top,
                    h = getHeight(bar),
                    ratio,
                    playbackRate;

                if (_this.props.verticalPlaybackRate) {
                    ratio = y / h;
                } else {
                    ratio = x / w;
                }

                playbackRate = ratio * (_this.props.maxPlaybackRate - _this.props.minPlaybackRate) + _this.props.minPlaybackRate;
                _this.props.dispatch(playbackRate(playbackRate));
            };

            _this.onVolumeBarClick = function (e) {
                // Using $(e.currentTarget) to enable multiple volume bars
                var bar = e.currentTarget,
                    offset = getOffset(bar),
                    x = e.pageX - offset.left,
                    w = getWidth(bar),
                    y = getHeight(bar) - e.pageY + offset.top,
                    h = getHeight(bar);

                _this.props.verticalVolume ? _this.props.dispatch((0, _jPlayerActions.volume)(y / h)) : _this.props.dispatch((0, _jPlayerActions.volume)(x / w));

                if (_this.props.muted) {
                    _this.props.dispatch((0, _jPlayerActions.mute)(false));
                }
            };

            _this.onVolumeMaxClick = function () {
                _this.props.dispatch((0, _jPlayerActions.volume)(1));

                if (_this.props.muted) {
                    _this.props.dispatch((0, _jPlayerActions.mute)(false));
                }
            };

            _this.onVideoPlayClick = function () {
                return _this.props.dispatch((0, _jPlayerActions.play)());
            };

            _this.onRepeatClick = function () {
                return _this.props.dispatch((0, _jPlayerActions.incrementLoop)());
            };

            _this.onFullScreenClick = function () {
                return _this.props.dispatch((0, _jPlayerActions.fullScreen)(!_this.props.fullScreen));
            };

            _this.onKeyDown = function (e) {
                for (var key in _this.keyBindings) {
                    var keyBinding = _this.keyBindings[key];

                    if (keyBinding.key === e.charCode) {
                        keyBinding.fn();
                    }
                }
            };

            _this._updatePlaybackRateStyles = function (nextProps) {
                var playbackRate = nextProps.playbackRate,
                    ratio = (playbackRate - nextProps.minPlaybackRate) / (nextProps.maxPlaybackRate - nextProps.minPlaybackRate);
                if (nextProps.playbackRateEnabled) {
                    _this.setState(function (state) {
                        return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.PLAYBACK_RATE_BAR_CLASS, _constants.classNames.HIDDEN));
                    });
                    _this.setState(function (state) {
                        return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.PLAYBACK_RATE_BAR_VALUE_CLASS, _constants.classNames.HIDDEN));
                    });

                    var playbackRateBarValue = ratio * 100 + "%";

                    _this.setState({ playbackRateBarValueStyle: {
                            width: !nextProps.verticalPlaybackRate ? playbackRateBarValue : null,
                            height: nextProps.verticalPlaybackRate ? playbackRateBarValue : null
                        } });
                } else {
                    _this.setState(function (state) {
                        return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.PLAYBACK_RATE_BAR_CLASS, _constants.classNames.HIDDEN));
                    });
                    _this.setState(function (state) {
                        return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.PLAYBACK_RATE_BAR_VALUE_CLASS, _constants.classNames.HIDDEN));
                    });
                }
            };

            _this._updateVolumeStyles = function (nextProps) {
                if (nextProps.noVolume) {
                    _this.setState(function (state) {
                        return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.VOLUME_BAR_CLASS, _constants.classNames.HIDDEN));
                    });
                    _this.setState(function (state) {
                        return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.VOLUME_BAR_VALUE_CLASS, _constants.classNames.HIDDEN));
                    });
                    _this.setState(function (state) {
                        return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.VOLUME_MAX_CLASS, _constants.classNames.HIDDEN));
                    });
                } else {
                    var volumeValue = nextProps.muted ? 0 : nextProps.volume * 100 + "%";

                    _this.setState({ volumeBarValueStyle: {
                            width: !nextProps.verticalVolume ? volumeValue : null,
                            height: nextProps.verticalVolume ? volumeValue : null
                        } });

                    _this.setState(function (state) {
                        return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.VOLUME_BAR_CLASS, _constants.classNames.HIDDEN));
                    });
                    _this.setState(function (state) {
                        return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.VOLUME_BAR_VALUE_CLASS, _constants.classNames.HIDDEN));
                    });
                    _this.setState(function (state) {
                        return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.VOLUME_MAX_CLASS, _constants.classNames.HIDDEN));
                    });
                }
            };

            _this.state = {
                playbackRateBarClass: [],
                playbackRateBarValueClass: [],
                volumeBarClass: [],
                volumeBarValueClass: []
            };
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updatePlaybackRateStyles(nextProps);
                this._updateVolumeStyles(nextProps);
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    "div",
                    { className: "jp-controls", onKeyDown: this.onKeyDown },
                    _react2.default.Children.map(this.props.children, function (child) {
                        return _react2.default.createElement(
                            _control2.default,
                            { onPlayClick: _this2.onPlayClick, onMuteClick: _this2.onMuteClick, onVolumeMaxClick: _this2.onVolumeMaxClick, onRepeatClick: _this2.onRepeatClick,
                                onFullScreenClick: _this2.onFullScreenClick, onShuffleClick: _this2.onShuffleClick, onPreviousClick: _this2.onPreviousClick, onNextClick: _this2.onNextClick },
                            child
                        );
                    }),
                    _react2.default.createElement(
                        "div",
                        { className: this.state.volumeBarClass.join(" "), onClick: this.onVolumeBarClick },
                        _react2.default.createElement("div", { className: this.state.volumeBarValueClass.join(" "), style: this.state.volumeBarValueStyle })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: this.state.playbackRateBarClass.join(" "), onClick: this.onPlaybackRateBarClick },
                        _react2.default.createElement("div", { className: this.state.playbackRateBarValueClass.join(" "), style: this.state.playbackRateBarValueStyle })
                    )
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
                    controls: _react2.default.PropTypes.object.isRequired,
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