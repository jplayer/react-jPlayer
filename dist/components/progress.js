(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../util/constants", "../util/index", "../util/convertTime", "../actions/jPlayerActions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../util/constants"), require("../util/index"), require("../util/convertTime"), require("../actions/jPlayerActions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants, global.index, global.convertTime, global.jPlayerActions);
        global.progress = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants, _index, _convertTime, _jPlayerActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _convertTime2 = _interopRequireDefault(_convertTime);

    var _jPlayerActions2 = _interopRequireDefault(_jPlayerActions);

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

    var mapStateToProps = function mapStateToProps(state) {
        return {
            seekPercent: state.jPlayer.seekPercent,
            seeking: state.jPlayer.seeking,
            duration: state.jPlayer.duration,
            remaining: state.jPlayer.remaining,
            media: state.jPlayer.media,
            currentTime: state.jPlayer.currentTime,
            currentPercentAbsolute: state.jPlayer.currentPercentAbsolute,
            currentPercentRelative: state.jPlayer.currentPercentRelative,
            smoothPlayBar: state.jPlayer.smoothPlayBar,
            playHeadPercent: state.jPlayer.playHeadPercent
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$PureComponent) {
        _inherits(_class2, _React$PureComponent);

        function _class2() {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));

            _this.onSeekBarClick = function (e) {
                var bar = e.currentTarget,
                    offset = (0, _index.getOffset)(bar),
                    x = e.pageX - offset.left,
                    w = (0, _index.getWidth)(bar),
                    percentage = 100 * x / w;

                _this.props.dispatch((0, _jPlayerActions.playHead)(percentage));
            };

            _this.onDurationClick = function (e) {
                if (_this.props.toggleDuration) {
                    if (_this.props.captureDuration) {
                        e.stopPropagation();
                    }
                    _this.props.dispatch((0, _jPlayerActions.duration)());
                }
            };

            _this.onProgressMouseDown = function () {
                return _this.dragging = true;
            };

            _this.onProgressMouseOut = function () {
                return _this.dragging = false;
            };

            _this.updateBarStyles = function (nextProps) {
                _this.setState({ seekBarStyle: { width: nextProps.seekPercent + "%" } });

                if (nextProps.seeking) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "seekBarClass", (0, _index.addUniqueToArray)(state.seekBarClass, _constants.classNames.states.SEEKING));
                    });
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "seekBarClass", (0, _index.removeFromArrayByValue)(state.seekBarClass, _constants.classNames.states.SEEKING));
                    });
                }
            };

            _this.updateDurationText = function (nextProps) {
                var durationText = '',
                    duration = nextProps.duration,
                    remaining = nextProps.remaining;

                if (nextProps.media.duration === 'string') {
                    durationText = nextProps.media.duration;
                } else {
                    if (nextProps.media.duration === 'number') {
                        duration = nextProps.media.duration;
                        remaining = duration - nextProps.currentTime;
                    }
                    if (nextProps.remainingDuration) {
                        durationText = (remaining > 0 ? '-' : '') + (0, _convertTime2.default)(remaining);
                    } else {
                        durationText = (0, _convertTime2.default)(duration);
                    }
                }
                _this.setState(_defineProperty({ durationText: durationText }, "durationText", durationText));
            };

            _this.updateCurrentTimeText = function (nextProps) {
                var currentTimeText = (0, _convertTime2.default)(nextProps.currentTime);
                _this.setState(_defineProperty({ currentTimeText: currentTimeText }, "currentTimeText", currentTimeText));
            };

            _this.state = {
                seekBarClass: [_constants.classNames.SEEK_BAR]
            };
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this.updateBarStyles(nextProps);
                this.updateDurationText(nextProps);
                this.updateCurrentTimeText(nextProps);
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    { className: "jp-progress" },
                    _react2.default.createElement(
                        "div",
                        { className: this.state.seekBarClass.join(" "), style: this.state.seekBarStyle, onMouseMove: this.onSeekBarClick },
                        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
                            smoothPlayBar: this.props.smoothPlayBar,
                            currentPercentAbsolute: this.props.currentPercentAbsolute,
                            currentPercentRelative: this.props.currentPercentRelative,
                            currentTime: this.props.currentTime,
                            duration: this.props.duration,
                            playHeadPercent: this.props.playHeadPercent
                        }),
                        _react2.default.createElement(
                            "div",
                            { className: _constants.classNames.CURRENT_TIME },
                            this.state.currentTimeText
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _constants.classNames.DURATION, onClick: this.onDurationClick },
                            this.state.durationText
                        )
                    )
                );
            }
        }], [{
            key: "defaultProps",
            get: function get() {
                return {
                    onSeekBarClick: _react2.default.PropTypes.func,
                    onDurationClick: _react2.default.PropTypes.func,
                    seekBarStyle: _react2.default.PropTypes.object,
                    currentTimeText: _react2.default.PropTypes.string,
                    durationText: _react2.default.PropTypes.string
                };
            }
            // onProgressMouseMove = (e) => {
            //     if (this.dragging) {
            //         var position = e.pageX - getOffset(e.currentTarget).left;
            //         var percentage = 100 * position / getWidth(e.currentTarget);

            //     // this.setState({width: `${percentage}%`});
            //         this.props.dispatch(playHead(percentage));
            //     }
            // }

        }]);

        return _class2;
    }(_react2.default.PureComponent));
});