(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "lodash.merge", "screenfull", "classnames", "../util/constants", "../util/index", "../actions/jPlayerActions", "../jPlayerConnect", "../components/keyControl"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("lodash.merge"), require("screenfull"), require("classnames"), require("../util/constants"), require("../util/index"), require("../actions/jPlayerActions"), require("../jPlayerConnect"), require("../components/keyControl"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.lodash, global.screenfull, global.classnames, global.constants, global.index, global.jPlayerActions, global.jPlayerConnect, global.keyControl);
        global.jPlayer = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _lodash, _screenfull, _classnames, _constants, _index, _jPlayerActions, _jPlayerConnect, _keyControl) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.jPlayerDefaultOptions = exports.statusDefaultValues = exports.defaultValues = exports.mapStateToProps = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    var _screenfull2 = _interopRequireDefault(_screenfull);

    var _classnames2 = _interopRequireDefault(_classnames);

    var _jPlayerActions2 = _interopRequireDefault(_jPlayerActions);

    var _jPlayerConnect2 = _interopRequireDefault(_jPlayerConnect);

    var _keyControl2 = _interopRequireDefault(_keyControl);

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

    var mapStateToProps = exports.mapStateToProps = function mapStateToProps(_ref, ownProps) {
        var jPlayers = _ref.jPlayers;
        return _extends({}, jPlayers[ownProps.id], {
            attributes: ownProps
        });
    };

    var JPlayer = function (_React$Component) {
        _inherits(JPlayer, _React$Component);

        function JPlayer(props) {
            _classCallCheck(this, JPlayer);

            var _this = _possibleConstructorReturn(this, (JPlayer.__proto__ || Object.getPrototypeOf(JPlayer)).call(this, props));

            _this.setFormats = function () {
                var mediaSettings = (0, _lodash2.default)({}, _this.props.mediaSettings);

                // Create the formats array, with prority based on the order of the supplied formats string
                _this.props.supplied.forEach(function (supplied) {
                    var suppliedTrimmed = supplied.trim();

                    mediaSettings.video = _constants.formats[suppliedTrimmed].MEDIA === "video" ? true : false;

                    if (_constants.formats[suppliedTrimmed]) {
                        // Check format is valid.
                        var duplicateFound = mediaSettings.formats.some(function (format) {
                            return format === suppliedTrimmed;
                        });

                        if (!duplicateFound) {
                            mediaSettings.formats.push(suppliedTrimmed);
                        }
                    }
                });

                var mediaElement = document.createElement(mediaSettings.video ? "video" : "audio");

                mediaSettings.formats.forEach(function (format) {
                    mediaSettings.available = mediaElement.canPlayType && (0, _index.testCanPlayType)(mediaElement); // Test is for IE9 on Win Server 2008.
                    mediaSettings.playableFormat = _defineProperty({}, format, mediaSettings.available && mediaElement.canPlayType(_constants.formats[format].CODEC));
                });

                _this.props.dispatch(_jPlayerActions2.default.updateOption("mediaSettings", mediaSettings, _this.props.id));
            };

            _this._updateSize = function (nextProps) {
                // Video html resized if necessary at this time, or if native video controls being used.
                if (nextProps.mediaSettings.available && nextProps.mediaSettings.video && (!nextProps.waitForPlay || nextProps.nativeVideoControls)) {
                    _this.setState({ videoStyle: {
                            //width: !this.props.width,
                            //height: this.props.height
                        } });
                }
            };

            _this._logErrors = function (nextProps) {
                if (nextProps.error !== _this.props.error) {
                    console.error(nextProps.error);
                }
            };

            _this.playerClasses = function () {
                var _setClassNames;

                return (0, _classnames2.default)(_constants.classes.JPLAYER, _this.props.attributes.className, (_setClassNames = {
                    "jp-video": _this.props.mediaSettings.video,
                    "jp-video-270p": _this.props.sizeCssClass !== undefined,
                    "jp-video-full": _this.props.sizeFullCssClass !== undefined,
                    "jp-audio": !_this.props.mediaSettings.video
                }, _defineProperty(_setClassNames, _constants.classes.states.PLAYING, !_this.props.paused), _defineProperty(_setClassNames, _constants.classes.states.FULL_SCREEN, _this.props.fullScreen), _defineProperty(_setClassNames, _constants.classes.states.MUTED, _this.props.muted), _defineProperty(_setClassNames, _constants.classes.states.VOLUME_LOW, !_this.props.muted && _this.props.volume < 0.5), _defineProperty(_setClassNames, _constants.classes.states.VOLUME_HIGH, !_this.props.muted && _this.props.volume >= 0.5), _defineProperty(_setClassNames, _constants.classes.states.SEEKING, _this.props.seeking), _defineProperty(_setClassNames, _constants.classes.states.LOOPED, _this.props.loop === _constants.loopOptions.LOOP), _defineProperty(_setClassNames, _constants.classes.states.SHUFFLED, _this.props.shuffled), _setClassNames));
            };

            _this.toggleFullScreen = function () {
                return _this.props.dispatch(_jPlayerActions2.default.updateOption("fullScreen", _screenfull2.default.isFullscreen, _this.props.id));
            };

            _this.state = {};

            _this.timeFormats = (0, _lodash2.default)(_constants.timeFormats, _this.props.timeFormats);
            return _this;
        }

        _createClass(JPlayer, [{
            key: "getChildContext",
            value: function getChildContext() {
                return {
                    id: this.props.id
                };
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updateSize(nextProps);
                this._logErrors(nextProps);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.setFormats();
                // Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
                // if(this.props.keyEnabled && !focusInstance) {
                // 	focusInstance = this;
                // }

                document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.toggleFullScreen);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.dispatch((0, _jPlayerActions.setMedia)(this.props.media, this.props.id));
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.toggleFullScreen);
            }
        }, {
            key: "render",
            value: function render() {
                var playerClasses = this.playerClasses();

                return _react2.default.createElement(
                    "div",
                    _extends({}, this.props.attributes, { className: playerClasses }),
                    this.props.children,
                    this.props.keyEnabled && _react2.default.createElement(_keyControl2.default, null)
                );
            }
        }], [{
            key: "propTypes",
            get: function get() {
                return {
                    stateClass: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
                    id: _react2.default.PropTypes.string.isRequired
                };
            }
        }, {
            key: "childContextTypes",
            get: function get() {
                return {
                    id: _react2.default.PropTypes.string
                };
            }
        }]);

        return JPlayer;
    }(_react2.default.Component);

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(JPlayer);
    var defaultValues = exports.defaultValues = {
        mediaSettings: {
            video: false,
            formats: [], // Order defines priority.
            available: false,
            playableFormat: []
        }
    };

    var statusDefaultValues = exports.statusDefaultValues = {
        paused: true,
        format: {},
        formatType: "",
        waitForPlay: true, // Same as waitForLoad except in case where preloading.
        waitForLoad: true,
        srcSet: false,
        video: false, // True if playing a video
        seekPercent: 0,
        currentPercentRelative: 0,
        currentPercentAbsolute: 0,
        newTime: 0,
        currentTime: 0,
        duration: 0,
        remaining: 0,
        videoWidth: 0, // Intrinsic width of the video in pixels.
        videoHeight: 0, // Intrinsic height of the video in pixels.
        readyState: 0,
        networkState: 0,
        ended: 0
    };

    var jPlayerDefaultOptions = exports.jPlayerDefaultOptions = {
        preload: "metadata", // HTML5 Spec values: none, metadata, auto.
        globalPause: true,
        captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.	
        minPlaybackRate: 0.5,
        maxPlaybackRate: 4,
        supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
        loopOptions: ["loop-playlist"],
        playbackRate: 1.0,
        defaultPlaybackRate: 1.0,
        bufferColour: "#dddddd", // Canvas fillStyle property Colour, gradient or pattern (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
        volume: 0.8, // The volume. Number 0 to 1
        barDrag: true,
        playbackRateText: 1, //The number of digits to appear after the decimal point
        media: {},
        global: []
    };
});