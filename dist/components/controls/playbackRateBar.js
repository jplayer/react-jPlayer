(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../../util/index", "../../util/constants", "../../actions/jPlayerActions", "../../jPlayerConnect"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../../util/index"), require("../../util/constants"), require("../../actions/jPlayerActions"), require("../../jPlayerConnect"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.index, global.constants, global.jPlayerActions, global.jPlayerConnect);
        global.playbackRateBar = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _index, _constants, _jPlayerActions, _jPlayerConnect) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _jPlayerConnect2 = _interopRequireDefault(_jPlayerConnect);

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

    var mapJPlayerProps = function mapJPlayerProps(jPlayers, id) {
        return {
            verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
            minPlaybackRate: jPlayers[id].minPlaybackRate,
            maxPlaybackRate: jPlayers[id].maxPlaybackRate,
            playbackRate: jPlayers[id].playbackRate,
            playbackRateEnabled: jPlayers[id].playbackRateEnabled,
            barDrag: jPlayers[id].barDrag
        };
    };

    var PlaybackRateBar = function (_React$Component) {
        _inherits(PlaybackRateBar, _React$Component);

        function PlaybackRateBar() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, PlaybackRateBar);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PlaybackRateBar.__proto__ || Object.getPrototypeOf(PlaybackRateBar)).call.apply(_ref, [this].concat(args))), _this), _this.onPlaybackRateBarClick = function (e) {
                return _this.movePlaybackRate(e);
            }, _this.onPlaybackRateMouseMove = function (e) {
                return _this.props.barDrag && _this.dragging ? _this.movePlaybackRate(e) : null;
            }, _this.onPlaybackRateMouseDown = function () {
                return _this.dragging = true;
            }, _this.onPlaybackRateMouseUp = function () {
                return _this.dragging = false;
            }, _this.movePlaybackRate = function (e) {
                var offset = (0, _index.getOffset)(_this.playbackRateBar),
                    x = e.pageX - offset.left,
                    w = (0, _index.getWidth)(_this.playbackRateBar),
                    y = (0, _index.getHeight)(_this.playbackRateBar) - e.pageY + offset.top,
                    h = (0, _index.getHeight)(_this.playbackRateBar),
                    ratio,
                    playbackRateValue;

                if (_this.props.verticalPlaybackRate) {
                    ratio = y / h;
                } else {
                    ratio = x / w;
                }

                playbackRateValue = ratio * (_this.props.maxPlaybackRate - _this.props.minPlaybackRate) + _this.props.minPlaybackRate;
                _this.props.dispatch((0, _jPlayerActions.playbackRate)(playbackRateValue, _this.props.id));
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(PlaybackRateBar, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                document.addEventListener("mouseup", this.onPlaybackRateMouseUp);
                document.addEventListener("mousemove", this.onPlaybackRateMouseMove);
            }
        }, {
            key: "componentWillUnMount",
            value: function componentWillUnMount() {
                document.removeEventListener("mouseup", this.onPlaybackRateMouseUp);
                document.removeEventListener("mousemove", this.onPlaybackRateMouseMove);
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    "div",
                    _extends({ ref: function ref(_ref2) {
                            return _this2.playbackRateBar = _ref2;
                        }, className: _constants.classes.PLAYBACK_RATE_BAR, onClick: this.onPlaybackRateBarClick, onMouseDown: this.onPlaybackRateMouseDown
                    }, this.props.attributes),
                    this.props.children
                );
            }
        }]);

        return PlaybackRateBar;
    }(_react2.default.Component);

    exports.default = (0, _reactRedux.connect)(_index.mapStateToProps)((0, _jPlayerConnect2.default)(PlaybackRateBar, mapJPlayerProps));
});