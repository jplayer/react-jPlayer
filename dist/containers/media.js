(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "lodash.merge", "../util/index", "../util/constants", "../actions/jPlayerActions", "../reducers/index"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("lodash.merge"), require("../util/index"), require("../util/constants"), require("../actions/jPlayerActions"), require("../reducers/index"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.lodash, global.index, global.constants, global.jPlayerActions, global.index);
        global.media = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _lodash, _index, _constants, _jPlayerActions, _index2) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    var reducer = _interopRequireWildcard(_index2);

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

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
            var _this$state;

            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

            _this._updateMediaStatus = function (override) {
                var ct = 0,
                    cpa = 0,
                    sp = 0,
                    cpr = 0;

                var duration = _this.currentMedia.duration;

                ct = _this.currentMedia.currentTime;
                cpa = duration > 0 ? 100 * ct / duration : 0;
                if (_typeof(_this.currentMedia.seekable) === "object" && _this.currentMedia.seekable.length > 0) {
                    sp = duration > 0 ? 100 * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / duration : 100;
                    cpr = duration > 0 ? 100 * _this.currentMedia.currentTime / _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) : 0; // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
                } else {
                    sp = 100;
                    cpr = cpa;
                }

                if (override) {
                    ct = 0;
                    cpr = 0;
                    cpa = 0;
                }

                _this.props.dispatch((0, _jPlayerActions.updateOption)("seekPercent", sp));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("currentPercentRelative", cpr));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("currentPercentAbsolute", cpa));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("currentTime", ct));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("remaining", duration - ct));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("duration", _this.currentMedia.duration));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("videoWidth", _this.currentMedia.videoWidth));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("videoHeight", _this.currentMedia.videoHeight));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("playbackRate", _this.currentMedia.playbackRate));
                _this.props.dispatch((0, _jPlayerActions.updateOption)("ended", _this.currentMedia.ended));
            };

            _this._trigger = function (func, error) {
                // var jPlayerOptions = {
                // 	version: Object.assign({}, version),
                // 	element: this.currentMedia,
                // 	error: Object.assign({}, error)
                // }

                // if (func !== undefined) {
                // 	func.bind(this)(jPlayerOptions);
                // }
            };

            _this._updateCurrentMedia = function (nextProps) {
                if (nextProps.playbackRateEnabled) {
                    _this.currentMedia.defaultPlaybackRate = nextProps.defaultPlaybackRate;
                    _this.currentMedia.playbackRate = nextProps.playbackRate;
                }

                if (nextProps.src !== _this.currentMedia.src) {
                    _this.currentMedia.src = nextProps.src;
                }

                if (nextProps.newCurrentTime !== _this.props.newCurrentTime) {
                    _this.currentMedia.currentTime = nextProps.newCurrentTime;
                }

                if (nextProps.playHeadPercent !== _this.props.playHeadPercent) {
                    _this.currentMedia.currentTime = nextProps.playHeadPercent * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / 100;
                }

                nextProps.paused ? _this.currentMedia.pause() : _this.currentMedia.play();

                _this.currentMedia.preload = nextProps.preload;
                _this.currentMedia.volume = nextProps.volume;
                _this.currentMedia.muted = nextProps.muted;
                _this.currentMedia.autoplay = nextProps.autoplay;
                _this.currentMedia.loop = nextProps.loop === "loop" ? true : false;
            };

            _this.state = (_this$state = {}, _defineProperty(_this$state, _constants.keys.VOLUME_MAX_CLASS, [_constants.classNames.VOLUME_MAX]), _defineProperty(_this$state, _constants.keys.VOLUME_BAR_CLASS, [_constants.classNames.VOLUME_BAR]), _defineProperty(_this$state, _constants.keys.VOLUME_BAR_VALUE_CLASS, [_constants.classNames.VOLUME_BAR_VALUE]), _defineProperty(_this$state, _constants.keys.PLAYBACK_RATE_BAR_CLASS, [_constants.classNames.PLAYBACK_RATE_BAR]), _defineProperty(_this$state, _constants.keys.PLAYBACK_RATE_BAR_VALUE_CLASS, [_constants.classNames.PLAYBACK_RATE_BAR_VALUE]), _defineProperty(_this$state, _constants.keys.SEEK_BAR_CLASS, [_constants.classNames.SEEK_BAR]), _this$state);
            _this.events = {
                onProgress: function onProgress() {
                    _this._updateMediaStatus();
                    _this._trigger(_this.props.onProgress);
                },
                onTimeUpdate: function onTimeUpdate() {
                    _this._updateMediaStatus();
                    _this._trigger(_this.props.onTimeUpdate);
                },
                onDurationChange: function onDurationChange() {
                    _this._updateMediaStatus();
                    _this._trigger(_this.props.onDurationChange);
                },
                onPlay: function onPlay() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("paused", false));
                    _this._trigger(_this.props.onPlay);
                },
                onPlaying: function onPlaying() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("paused", false));
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("seeking", false));
                    _this._trigger(_this.props.onPlaying);
                },
                onPause: function onPause() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("paused", true));
                    _this._trigger(_this.props.onPause);
                },
                onWaiting: function onWaiting() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("seeking", true));
                    _this._trigger(_this.props.onWaiting);
                },
                onSeeking: function onSeeking() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("seeking", true));
                    _this._trigger(_this.props.onSeeking);
                },
                onSeeked: function onSeeked() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("seeking", false));
                    _this._trigger(_this.props.onSeeked);
                },
                onEnded: function onEnded() {
                    // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("paused", true));
                    // With override true. Otherwise Chrome leaves progress at full.
                    _this._updateMediaStatus(true);
                    _this._trigger(_this.props.onEnded);
                    if (_this.props.loop === "loop") {
                        _this._trigger(_this.props.onRepeat);
                    }
                },
                onError: function onError() {
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("paused", true));
                    _this.props.dispatch((0, _jPlayerActions.updateOption)("seeking", false));
                    if (_this.props.srcSet) {
                        // Deals with case of clearMedia() causing an error event.
                        _this.props.dispatch((0, _jPlayerActions.updateOption)("waitForLoad", true));
                        _this.props.dispatch((0, _jPlayerActions.updateOption)("waitForPlay", true));

                        if (_this.mediaSettings.video.available && !_this.props.nativeVideoControls) {
                            _this.setState(function (state) {
                                return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.VIDEO_CLASS, _constants.classNames.HIDDEN));
                            });
                        }

                        if (validString(_this.props.media.poster) && !_this.props.nativeVideoControls) {
                            _this.setState(function (state) {
                                return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.POSTER_CLASS, _constants.classNames.HIDDEN));
                            });
                        }
                        _this.setState(function (state) {
                            return reducer.removeFromArrayByValue(state, (0, _jPlayerActions.removeFromArrayByValue)(_constants.keys.VIDEO_PLAY_CLASS, _constants.classNames.HIDDEN));
                        });

                        _this._error({
                            type: errors.URL,
                            context: _this.props.src, // this.src shows absolute urls. Want context to show the url given.
                            message: errorMessages.URL,
                            hint: errorHints.URL
                        });
                    }
                    _this._trigger(_this.props.onError);
                },
                onSuspend: function onSuspend() {
                    return _this._trigger(_this.props.onSuspend);
                },
                onVolumeChange: function onVolumeChange() {
                    return _this._trigger(_this.props.onVolumeChange);
                },
                onRateChange: function onRateChange() {
                    return _this._trigger(_this.props.onRateChange);
                },
                onLoadedData: function onLoadedData() {
                    return _this._trigger(_this.props.onLoadedData);
                },
                onLoadStart: function onLoadStart() {
                    return _this._trigger(_this.props.onLoadStart);
                },
                onAbort: function onAbort() {
                    return _this._trigger(_this.props.onAbort);
                },
                onEmptied: function onEmptied() {
                    return _this._trigger(_this.props.onEmptied);
                },
                onStalled: function onStalled() {
                    return _this._trigger(_this.props.onStalled);
                },
                onLoadedMetadata: function onLoadedMetadata() {
                    return _this._trigger(_this.props.onLoadedMetadata);
                },
                onCanPlay: function onCanPlay() {
                    return _this._trigger(_this.props.onCanPlay);
                },
                onCanPlayThrough: function onCanPlayThrough() {
                    return _this._trigger(_this.props.onCanPlayThrough);
                }
            };
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                // if (prevProps.width !== nextProps.width || prevProps.height !== nextProps.height) {
                // 	this.setState({playerStyle: {width: nextProps.width, height: nextProps.height}});
                // }
                //Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
                this._updateCurrentMedia(nextProps);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                // Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
                // if(this.props.keyEnabled && !focusInstance) {
                // 	focusInstance = this;
                // }

                this.props.dispatch((0, _jPlayerActions.updateOption)("noVolume", (0, _index.uaBlocklist)(this.props.noVolume)));
                this.props.dispatch((0, _jPlayerActions.updateOption)("noFullWindow", (0, _index.uaBlocklist)(this.props.noFullWindow)));
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.dispatch((0, _jPlayerActions.updateOption)("playbackRateEnabled", (0, _index.testPlaybackRate)(this.currentMedia)));
                if (this.props.nativeVideoControls) {
                    this.setState(function (state) {
                        return reducer.removeFromArrayByValue(state, reducer.removeFromArrayByValue(_constants.keys.VIDEO_CLASS, _constants.classNames.HIDDEN));
                    });
                    this.setState({ videoStyle: {
                            //width: this.props.width, 
                            //height: this.props.height
                        } });
                } else {
                    this.setState(function (state) {
                        return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.VIDEO_CLASS, _constants.classNames.HIDDEN));
                    });
                }

                this.setState(function (state) {
                    return reducer.addUniqueToArray(state, (0, _jPlayerActions.addUniqueToArray)(_constants.keys.VIDEO_PLAY_CLASS, _constants.classNames.HIDDEN));
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    "div",
                    { className: "jp-jplayer", style: this.state.playerStyle },
                    _react2.default.Children.map(this.props.children, function (child) {
                        return _react2.default.cloneElement(child, _extends({}, _this2.events, {
                            title: _this2.props.title,
                            setCurrentMedia: function setCurrentMedia(ref) {
                                return _this2.currentMedia = ref;
                            }
                        }));
                    })
                );
            }
        }], [{
            key: "contextTypes",
            get: function get() {
                return {
                    setCurrentMedia: _react2.default.PropTypes.func,
                    getCurrentMedia: _react2.default.PropTypes.func
                };
            }
        }]);

        return _class2;
    }(_react2.default.Component));
});