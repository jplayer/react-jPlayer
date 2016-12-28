(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../actions/jPlayerActions", "../util/index", "../util/constants"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../actions/jPlayerActions"), require("../util/index"), require("../util/constants"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.jPlayerActions, global.index, global.constants);
        global.media = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _jPlayerActions, _index, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jPlayerActions2 = _interopRequireDefault(_jPlayerActions);

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

            _this.updatePlayHeadPercent = function (playHeadPercent) {
                var currentPercentRelative = 0;
                var currentTime = 0;

                if (_this.currentMedia.seekable.length > 0) {
                    currentTime = playHeadPercent * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / 100;
                    currentPercentRelative = 100 * currentTime / _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
                }

                _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentRelative", currentPercentRelative));
                // this.props.dispatch(actions.updateOption("currentPercentAbsolute", 100 * this.currentMedia.currentTime / this.currentMedia.duration));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("currentTime", currentTime));
                // this.props.dispatch(actions.updateOption("remaining", this.currentMedia.duration - this.currentMedia.currentTime));
                // this.props.dispatch(actions.updateOption("seekPercent", seekPercent));
            };

            _this._updateCurrentMedia = function (nextProps) {
                if (nextProps.src !== _this.currentMedia.src) {
                    _this.currentMedia.src = nextProps.src;
                }

                if (nextProps.newTime !== _this.props.newTime) {
                    _this.currentMedia.currentTime = nextProps.newTime;
                }

                if (nextProps.playHeadPercent !== _this.props.playHeadPercent) {
                    _this.updatePlayHeadPercent(nextProps.playHeadPercent);
                }

                if (nextProps.paused !== _this.props.paused) {
                    nextProps.paused ? _this.currentMedia.pause() : _this.currentMedia.play();
                }

                _this.currentMedia.defaultPlaybackRate = nextProps.defaultPlaybackRate;
                _this.currentMedia.playbackRate = nextProps.playbackRate;
                _this.currentMedia.preload = nextProps.preload;
                _this.currentMedia.volume = nextProps.volume;
                _this.currentMedia.muted = nextProps.muted;
                _this.currentMedia.autoplay = nextProps.autoplay;
                _this.currentMedia.loop = nextProps.loop === "loop" ? true : false;
            };

            _this.state = {};

            _this.events = {
                onProgress: function onProgress() {
                    _this.props.onProgress();
                },
                onTimeUpdate: function onTimeUpdate() {
                    var currentPercentRelative = 0;
                    var seekPercent = 0;

                    if (_this.currentMedia.seekable.length > 0) {
                        currentPercentRelative = 100 * _this.currentMedia.currentTime / _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
                        seekPercent = 100 * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / _this.currentMedia.duration;
                    }

                    _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentRelative", currentPercentRelative));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentAbsolute", 100 * _this.currentMedia.currentTime / _this.currentMedia.duration));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("currentTime", _this.currentMedia.currentTime));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("remaining", _this.currentMedia.duration - _this.currentMedia.currentTime));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("seekPercent", seekPercent));
                    _this.props.onTimeUpdate();
                },
                onDurationChange: function onDurationChange() {
                    _this.props.onDurationChange();
                },
                onPlay: function onPlay() {
                    //When the autoPlay option is true
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("paused", false));
                    _this.props.onPlay();
                },
                onEnded: function onEnded() {
                    // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
                    _this.props.dispatch((0, _jPlayerActions.pause)());
                    _this._updateMediaStatus();

                    if (_this.props.loop === "loop") {
                        _this.props.onRepeat();
                    }
                    _this.props.onEnded();
                },
                onError: function onError() {
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("error", (0, _index.urlNotSupportedError)(_this.props.originalSrc)));
                    _this.props.onError();
                },
                onPlaying: _this.props.onPlaying,
                onPause: _this.props.onPause,
                onWaiting: _this.props.onWaiting,
                onSeeking: _this.props.onSeeking,
                onSeeked: _this.props.onSeeked,
                onSuspend: _this.props.onSuspend,
                onVolumeChange: _this.props.onVolumeChange,
                onRateChange: _this.props.onRateChange,
                onLoadStart: _this.props.onLoadStart,
                onLoadedMetadata: function onLoadedMetadata() {
                    var currentPercentRelative = 0;
                    var seekPercent = 0;

                    if (_this.currentMedia.seekable.length > 0) {
                        currentPercentRelative = 100 * _this.currentMedia.currentTime / _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
                        seekPercent = 100 * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / _this.currentMedia.duration;
                    }

                    _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentRelative", currentPercentRelative));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentAbsolute", 100 * _this.currentMedia.currentTime / _this.currentMedia.duration));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("currentTime", _this.currentMedia.currentTime));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("remaining", _this.currentMedia.duration - _this.currentMedia.currentTime));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("seekPercent", seekPercent));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("duration", _this.currentMedia.duration));
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("playbackRate", _this.currentMedia.playbackRate));
                    _this.props.onLoadedMetadata();
                },
                onAbort: _this.props.onAbort,
                onEmptied: _this.props.onEmptied,
                onStalled: _this.props.onStalled,
                onLoadedData: _this.props.onLoadedData,
                onCanPlay: _this.props.onCanPlay,
                onCanPlayThrough: _this.props.onCanPlayThrough
            };
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updateCurrentMedia(nextProps);
                // if (prevProps.width !== nextProps.width || prevProps.height !== nextProps.height) {
                // 	this.setState({playerStyle: {width: nextProps.width, height: nextProps.height}});
                // }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.dispatch(_jPlayerActions2.default.updateOption("playbackRateEnabled", (0, _index.testPlaybackRate)(this.currentMedia)));
                if (this.props.nativeVideoControls) {
                    this.setState(function (state) {
                        return _jPlayerActions2.default.removeFromArrayByValue(state.videoClass, _constants.classNames.HIDDEN);
                    });
                    this.setState({ videoStyle: {
                            //width: this.props.width, 
                            //height: this.props.height
                        } });
                } else {
                    this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "videoClass", (0, _index.addUniqueToArray)(state.videoClass, _constants.classNames.HIDDEN));
                    });
                }
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
                            setCurrentMedia: function setCurrentMedia(ref) {
                                return _this2.currentMedia = ref;
                            }
                        }));
                    })
                );
            }
        }], [{
            key: "defaultProps",
            get: function get() {
                return {
                    onProgress: function onProgress() {
                        return null;
                    },
                    onTimeUpdate: function onTimeUpdate() {
                        return null;
                    },
                    onDurationChange: function onDurationChange() {
                        return null;
                    },
                    onPlay: function onPlay() {
                        return null;
                    },
                    onEnded: function onEnded() {
                        return null;
                    },
                    onError: function onError() {
                        return null;
                    },
                    onLoadedMetadata: function onLoadedMetadata() {
                        return null;
                    }
                };
            }
            // _updateMediaStatus = () => {
            // 	let ct = 0, cpa = 0, sp = 0, cpr = 0;


            // 	if((typeof this.currentMedia.seekable === "object") && (this.currentMedia.seekable.length > 0)) {
            // 		sp = (duration > 0) ? 100 * this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / duration : 100;
            // 		 // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
            // 	} else {
            // 		sp = 100;
            // 		cpr = cpa;
            // 	}


            //     // this.props.dispatch(actions.updateOption("videoWidth", this.currentMedia.videoWidth));
            //     // this.props.dispatch(actions.updateOption("videoHeight", this.currentMedia.videoHeight));
            //     // this.props.dispatch(actions.updateOption("ended", this.currentMedia.ended));
            // }

        }]);

        return _class2;
    }(_react2.default.Component));
});