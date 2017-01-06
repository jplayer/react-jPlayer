(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "../util/index"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("../util/index"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.index);
        global.nativeVideoControls = mod.exports;
    }
})(this, function (exports, _react, _index) {
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

    var _class = function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this.fullscreenAddEventListeners = function () {
                var fs = _index.nativeFeatures.fullscreen;

                if (fs.api.fullscreenEnabled) {
                    if (fs.event.fullscreenchange) {
                        // Create the event handler function and store it for removal.
                        if (typeof _this.internal.fullscreenchangeHandler !== 'function') {
                            _this.internal.fullscreenchangeHandler = function () {
                                _this.fullscreenchange();
                            };
                        }
                        document.addEventListener(fs.event.fullscreenchange, _this.internal.fullscreenchangeHandler, false);
                    }
                    // No point creating handler for fullscreenerror.
                    // Either logic avoids fullscreen occurring (w3c/moz), or their is no event on the browser (webkit).
                }
            };

            _this.fullscreenchange = function () {
                // If nothing is fullscreen, then we cannot be in fullscreen mode.
                if (_this.props.fullScreen && !_index.nativeFeatures.fullscreen.api.fullscreenElement()) {
                    _this.props.updateOption("fullScreen", false);
                }
            };

            _this.restrictNativeVideoControls = function () {
                // Fallback to noFullWindow when nativeVideoControls is true and audio media is being used. Affects when both media types are used.
                if (_this.props.require.audio) {
                    if (_this.props.nativeVideoControls) {
                        _this.props.updateOption("nativeVideoControls", false);
                        _this.props.updateOption("noFullWindow", true);
                    }
                }
            };

            _this.updateNativeVideoControls = function () {
                if (_this.html.video.available && _this.html.used) {
                    // Turn the HTML Video controls on/off
                    _this.setState({ videoControls: _this.props.nativeVideoControls });
                    // For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
                    if (_this.props.nativeVideoControls && _this.props.require.video) {
                        _this.props.addClass(keys.POSTER_CLASS, _this.props[keys.POSTER_CLASS], classes.HIDDEN);
                        _this.assignStyle({ width: _this.props.width, height: _this.props.height }, "videoStyle");
                    } else if (_this.props.waitForPlay && _this.props.video) {
                        _this.props.removeClass(keys.POSTER_CLASS, classes.HIDDEN);
                        _this.props.removeClass(keys.VIDEO_CLASS, classes.HIDDEN);
                    }
                }
            };

            _this.removeEventListeners = function () {
                //Remove the fullscreen event listeners
                var fs = util.nativeFeatures.fullscreen;

                if (_this.internal.fullscreenchangeHandler) {
                    document.removeEventListener(fs.event.fullscreenchange, _this.internal.fullscreenchangeHandler, false);
                }
            };

            // Create event handlers if native fullscreen is supported
            if (_index.nativeFeatures.fullscreen.api.fullscreenEnabled) {
                _this.fullscreenAddEventListeners();
            }

            // The native controls are only for video and are disabled when audio is also used.
            _this.restrictNativeVideoControls();
            // Initialize the interface components with the options.
            _this.updateNativeVideoControls();
            return _this;
        }

        _createClass(_class, [{
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.removeEventListeners();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.props.nativeVideoControls !== nextProps.nativeVideoControls) {
                    //this.props.nativeVideoControls = util._uaBlocklist(this.props.nativeVideoControls);
                    this.restrictNativeVideoControls();
                }

                if (this.props.noFullWindow !== nextProps.noFullWindow) {
                    //this.props.nativeVideoControls = util._uaBlocklist(this.props.nativeVideoControls);
                    this.restrictNativeVideoControls();
                }
            }
        }], [{
            key: "propTypes",
            get: function get() {
                return {
                    nativeVideoControls: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)
                };
            }
        }, {
            key: "defaultProps",
            get: function get() {
                return {
                    // Works well on standard browsers.
                    // Phone and tablet browsers can have problems with the controls disappearing.
                    nativeVideoControls: (0, _index.uaBlocklist)(this.props.nativeVideoControls)
                };
            }
        }]);

        return _class;
    }(_react2.default.Component);

    exports.default = _class;
    ;
});