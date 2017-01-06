(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../actions/jPlayerActions", "../util/constants", "../util/index", "../jPlayerConnect"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../actions/jPlayerActions"), require("../util/constants"), require("../util/index"), require("../jPlayerConnect"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.jPlayerActions, global.constants, global.index, global.jPlayerConnect);
        global.media = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _jPlayerActions, _constants, _index, _jPlayerConnect) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jPlayerActions2 = _interopRequireDefault(_jPlayerActions);

    var _jPlayerConnect2 = _interopRequireDefault(_jPlayerConnect);

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

    var mapJPlayerProps = function mapJPlayerProps(jPlayers, id) {
        return _extends({}, jPlayers[id]);
    };

    var Media = function (_React$Component) {
        _inherits(Media, _React$Component);

        function Media(props) {
            _classCallCheck(this, Media);

            var _this = _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this, props));

            _this.updateMediaStatus = function () {
                var seekPercent = 0,
                    durationText = "";

                var remaining = _this.currentMedia.duration - _this.currentMedia.currentTime;

                if (_this.currentMedia.seekable.length > 0) {
                    seekPercent = 100 * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / _this.currentMedia.duration;
                }

                if (_this.props.remainingDuration) {
                    durationText = (remaining > 0 ? "-" : "") + (0, _index.convertTime)(remaining);
                } else {
                    durationText = (0, _index.convertTime)(_this.currentMedia.duration);
                }

                _this.props.dispatch(_jPlayerActions2.default.updateOption("durationText", durationText, _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("currentTimeText", (0, _index.convertTime)(_this.currentMedia.currentTime), _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("seekPercent", seekPercent, _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentRelative", _this.getCurrentPercentRelative(), _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentAbsolute", 100 * _this.currentMedia.currentTime / _this.currentMedia.duration, _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("currentTime", _this.currentMedia.currentTime, _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("remaining", remaining, _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("duration", _this.currentMedia.duration, _this.props.id));
                _this.props.dispatch(_jPlayerActions2.default.updateOption("playbackRate", _this.currentMedia.playbackRate, _this.props.id));
                // this.props.dispatch(updateOption("videoWidth", this.currentMedia.videoWidth, this.props.id));
                // this.props.dispatch(updateOption("videoHeight", this.currentMedia.videoHeight, this.props.id));
                // this.props.dispatch(updateOption("ended", this.currentMedia.ended, this.props.id));
            };

            _this.getCurrentPercentRelative = function () {
                var currentPercentRelative = 0;

                if (_this.currentMedia.seekable.length > 0) {
                    currentPercentRelative = 100 * _this.currentMedia.currentTime / _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
                }
                return currentPercentRelative;
            };

            _this._updateCurrentMedia = function (nextProps) {
                if (nextProps.src !== _this.props.src) {
                    _this.currentMedia.src = nextProps.src;
                }

                if (nextProps.newTime !== _this.props.newTime) {
                    _this.currentMedia.currentTime = nextProps.newTime;
                }

                if (nextProps.playHeadPercent !== _this.props.playHeadPercent) {
                    //TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
                    //Hasn't fully loaded the song????
                    if (_this.currentMedia.seekable.length > 0) {
                        _this.currentMedia.currentTime = nextProps.playHeadPercent * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / 100;
                        //Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
                        _this.props.dispatch(_jPlayerActions2.default.updateOption("currentPercentRelative", _this.getCurrentPercentRelative(), _this.props.id));
                    }
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
                    var bufferedTimeRanges = [];

                    for (var i = 0; i < _this.currentMedia.buffered.length; i++) {
                        bufferedTimeRanges.push({
                            start: _this.currentMedia.buffered.start(i),
                            end: _this.currentMedia.buffered.end(i)
                        });
                    }

                    _this.props.dispatch(_jPlayerActions2.default.updateOption("bufferedTimeRanges", bufferedTimeRanges, _this.props.id));
                    _this.updateMediaStatus();
                    _this.props.onProgress();
                },
                onTimeUpdate: function onTimeUpdate() {
                    _this.updateMediaStatus();
                    _this.props.onTimeUpdate();
                },
                onDurationChange: function onDurationChange() {
                    _this.updateMediaStatus();
                    _this.props.onDurationChange();
                },
                onRateChange: function onRateChange() {
                    var playbackRateFixed = _this.currentMedia.playbackRate.toFixed((0, _index.limitValue)(_this.props.playbackRateFixed, 0, 20));

                    _this.props.dispatch(_jPlayerActions2.default.updateOption("playbackRateFixed", playbackRateFixed, _this.props.id));
                    _this.props.onRateChange();
                },
                onSeeking: function onSeeking() {
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("seeking", true, _this.props.id));
                    _this.props.onSeeking();
                },
                onSeeked: function onSeeked() {
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("seeking", false, _this.props.id));
                    _this.props.onSeeked();
                },
                onPlay: function onPlay() {
                    //When the autoPlay option is true
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("paused", false, _this.props.id));
                    _this.props.onPlay();
                },
                onEnded: function onEnded() {
                    // Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
                    _this.props.dispatch((0, _jPlayerActions.pause)(_this.props.id));
                    _this.updateMediaStatus();

                    if (_this.props.loop === "loop") {
                        _this.props.onRepeat();
                    }
                    _this.props.onEnded();
                },
                onError: function onError() {
                    _this.props.dispatch(_jPlayerActions2.default.updateOption("error", (0, _index.urlNotSupportedError)(_this.props.media.src), _this.props.id));
                    _this.props.onError();
                },
                onPlaying: _this.props.onPlaying,
                onPause: _this.props.onPause,
                onWaiting: _this.props.onWaiting,
                onSuspend: _this.props.onSuspend,
                onVolumeChange: _this.props.onVolumeChange,
                onLoadStart: _this.props.onLoadStart,
                onLoadedMetadata: _this.props.onLoadedMetadata,
                onAbort: _this.props.onAbort,
                onEmptied: _this.props.onEmptied,
                onStalled: _this.props.onStalled,
                onLoadedData: _this.props.onLoadedData,
                onCanPlay: _this.props.onCanPlay,
                onCanPlayThrough: _this.props.onCanPlayThrough
            };
            return _this;
        }

        _createClass(Media, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updateCurrentMedia(nextProps);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.dispatch(_jPlayerActions2.default.updateOption("playbackRateEnabled", (0, _index.testPlaybackRate)(this.currentMedia), this.props.id));
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    "div",
                    _extends({ className: _constants.classes.MEDIA }, this.props.attributes),
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
                    onRateChange: function onRateChange() {
                        return null;
                    },
                    onSeeking: function onSeeking() {
                        return null;
                    },
                    onSeeked: function onSeeked() {
                        return null;
                    }
                };
            }
        }]);

        return Media;
    }(_react2.default.Component);

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(Media, mapJPlayerProps));
});