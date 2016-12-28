(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "lodash.merge", "screenfull", "../util/constants", "../util/index", "../actions/jPlayerActions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("lodash.merge"), require("screenfull"), require("../util/constants"), require("../util/index"), require("../actions/jPlayerActions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.lodash, global.screenfull, global.constants, global.index, global.jPlayerActions);
        global.jPlayer = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _lodash, _screenfull, _constants, _index, _jPlayerActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.jPlayerDefaultOptions = exports.statusDefaultValues = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _lodash2 = _interopRequireDefault(_lodash);

    var _screenfull2 = _interopRequireDefault(_screenfull);

    var _jPlayerActions2 = _interopRequireDefault(_jPlayerActions);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _objectWithoutProperties(obj, keys) {
        var target = {};

        for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
        }

        return target;
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

    var mapStateToProps = function mapStateToProps(state) {
        return _extends({}, state.jPlayer);
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$Component) {
        _inherits(_class2, _React$Component);

        function _class2(props) {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

            _this.getChildContext = function () {
                return {
                    setCurrentMedia: function setCurrentMedia(ref) {
                        return _this.currentMedia = ref;
                    },
                    getCurrentMedia: function getCurrentMedia() {
                        return _this.currentMedia;
                    },
                    setMedia: _this.setMedia,
                    clearMedia: _this.clearMedia,
                    play: _this.play,
                    pause: _this.pause,
                    playHead: _this.playHead,
                    focus: _this.focus,
                    volume: _this.volume,
                    mute: _this.mute,
                    unmute: _this.unmute,
                    incrementLoop: _this.incrementLoop,
                    fullScreen: _this.fullScreen,
                    duration: _this.duration,
                    playbackRate: _this.playbackRate
                };
            };

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

                _this.props.dispatch(_jPlayerActions2.default.updateOption("mediaSettings", mediaSettings));
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
                if (nextProps.logErrors && nextProps.error !== _this.props.error) {
                    console.error(nextProps.error);
                }
            };

            _this._updatePlayerStyles = function (nextProps) {
                if (!nextProps.paused) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.PLAYING));
                    });
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.PLAYING));
                    });
                }
                if (nextProps.fullScreen) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.FULL_SCREEN));
                    });
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.FULL_SCREEN));
                    });
                }
                if (nextProps.noVolume) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.NO_VOLUME));
                    });;
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.NO_VOLUME));
                    });;
                }
                if (nextProps.muted) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.MUTED));
                    });;
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.MUTED));
                    });;
                }
                if (nextProps.seeking) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.SEEKING));
                    });;
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.SEEKING));
                    });;
                }
                if (nextProps.loop === _constants.loopOptions.LOOP) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.LOOPED));
                    });;
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.LOOPED));
                    });;
                }
                // if(nextProps.loop === loopOptions.LOOP) {
                //     this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.LOOPED)));;
                // } else if (nextProps.loop === loopOptions.LOOP_PLAYLIST) {
                //     this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.LOOPED)));;
                //     this.setState(state => updateObjectByKey(state, "playerClass", addUniqueToArray(state.playerClass, classNames.states.LOOPED_PLAYLIST)));;
                // } else {
                //     this.setState(state => updateObjectByKey(state, "playerClass", removeFromArrayByValue(state.playerClass, classNames.states.LOOPED_PLAYLIST)));;
                // }
                if (nextProps.shuffled) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, _constants.classNames.states.SHUFFLED));
                    });;
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.removeFromArrayByValue)(state.playerClass, _constants.classNames.states.SHUFFLED));
                    });;
                }
            };

            _this.state = _defineProperty({}, _constants.keys.PLAYER_CLASS, []);

            _this.timeFormats = (0, _lodash2.default)(_constants.timeFormats, _this.props.timeFormats);

            _this.noFullWindow = (0, _lodash2.default)(_extends({}, _constants.noFullWindows), _this.props.noFullWindow);

            _this.noVolume = (0, _lodash2.default)(_extends({}, _constants.noVolumes), _this.props.noVolume);
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updatePlayerStyles(nextProps);
                this._updateSize(nextProps);
                this._logErrors(nextProps);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this2 = this;

                this.setFormats();
                // Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
                // if(this.props.keyEnabled && !focusInstance) {
                // 	focusInstance = this;
                // }

                this.props.dispatch(_jPlayerActions2.default.updateOption("noVolume", (0, _index.uaBlocklist)(this.props.noVolume)));
                this.props.dispatch(_jPlayerActions2.default.updateOption("noFullWindow", (0, _index.uaBlocklist)(this.props.noFullWindow)));
                document.addEventListener(_screenfull2.default.raw.fullscreenchange, function () {
                    return _this2.props.dispatch(_jPlayerActions2.default.updateOption("fullScreen", _screenfull2.default.isFullscreen));
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (Object.keys(this.props.media).length) {
                    this.props.dispatch((0, _jPlayerActions.setMedia)(this.props.media));
                }

                if (this.props.mediaSettings.video) {
                    this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, "jp-video"));
                    });;
                    if (this.props.sizeCssClass !== undefined) {
                        this.setState(function (state) {
                            return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, "jp-video-270p"));
                        });;
                    }

                    if (this.props.sizeFullCssClass !== undefined) {
                        this.setState(function (state) {
                            return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, "jp-video-full"));
                        });;
                    }
                } else {
                    this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playerClass", (0, _index.addUniqueToArray)(state.playerClass, "jp-audio"));
                    });;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _getChildContext = _extends({}, this.getChildContext()),
                    childProps = _objectWithoutProperties(_getChildContext, []);

                return _react2.default.createElement(
                    "div",
                    { id: this.props.cssSelectorAncestor, className: this.state[_constants.keys.PLAYER_CLASS].join(" ") },
                    _react2.default.Children.map(this.props.children, function (child) {
                        return _react2.default.cloneElement(child, childProps);
                    })
                );
            }
        }], [{
            key: "propTypes",
            get: function get() {
                return {
                    stateClass: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)
                };
            }
        }, {
            key: "childContextTypes",
            get: function get() {
                return {
                    setCurrentMedia: _react2.default.PropTypes.func,
                    getCurrentMedia: _react2.default.PropTypes.func,
                    setMedia: _react2.default.PropTypes.func,
                    clearMedia: _react2.default.PropTypes.func,
                    play: _react2.default.PropTypes.func,
                    pause: _react2.default.PropTypes.func,
                    playHead: _react2.default.PropTypes.func,
                    focus: _react2.default.PropTypes.func,
                    volume: _react2.default.PropTypes.func,
                    mute: _react2.default.PropTypes.func,
                    unmute: _react2.default.PropTypes.func,
                    incrementLoop: _react2.default.PropTypes.func,
                    fullScreen: _react2.default.PropTypes.func,
                    duration: _react2.default.PropTypes.func,
                    playbackRate: _react2.default.PropTypes.func
                };
            }
        }]);

        return _class2;
    }(_react2.default.Component));
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
        ended: 0,
        src: ""
    };

    var jPlayerDefaultOptions = exports.jPlayerDefaultOptions = {
        jPlayerSelector: "jplayer_1",
        cssSelectorAncestor: "jp_container_1",
        preload: "metadata", // HTML5 Spec values: none, metadata, auto.	
        captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.	
        minPlaybackRate: 0.5,
        maxPlaybackRate: 4,
        supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
        loopOptions: ["loop-playlist"],
        playbackRate: 1.0,
        defaultPlaybackRate: 1.0,
        volume: 0.8, // The volume. Number 0 to 1
        media: {},
        mediaSettings: {
            video: false,
            formats: [], //Order defines priority.
            available: false,
            playableFormat: []
        }
    };
});