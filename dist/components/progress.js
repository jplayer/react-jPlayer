(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../util/constants", "../util/index", "../util/convertTime", "../reducers/index", "../actions/jPlayerActions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../util/constants"), require("../util/index"), require("../util/convertTime"), require("../reducers/index"), require("../actions/jPlayerActions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants, global.index, global.convertTime, global.index, global.jPlayerActions);
        global.progress = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants, _index, _convertTime, _index2, _jPlayerActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _convertTime2 = _interopRequireDefault(_convertTime);

    var jPlayerActions = _interopRequireWildcard(_jPlayerActions);

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
            currentPercentRelative: state.jPlayer.currentPercentRelative
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$PureComponent) {
        _inherits(_class2, _React$PureComponent);

        function _class2() {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));

            _this.onSeekBarClick = function (e) {
                // Using $(e.currentTarget) to enable multiple seek bars
                var bar = e.currentTarget,
                    offset = (0, _index.getOffset)(bar),
                    x = e.pageX - offset.left,
                    w = (0, _index.getWidth)(bar),
                    p = 100 * x / w;

                _this.context.playHead(p);
            };

            _this.onDurationClick = function (e) {
                if (_this.props.toggleDuration) {
                    if (_this.props.captureDuration) {
                        e.stopPropagation();
                    }
                    _this.context.duration();
                }
            };

            _this._updateBarStyles = function (nextProps) {
                _this.setState({ seekBarStyle: { width: nextProps.seekPercent + "%" } });
                if (nextProps.seeking) {
                    _this.setState(function (state) {
                        return (0, _index2.addUniqueToArray)(state, jPlayerActions.addUniqueToArray(_constants.keys.SEEK_BAR_CLASS, _constants.classNames.seeking));
                    });
                } else {
                    _this.setState(function (state) {
                        return (0, _index2.removeFromArrayByValue)(state, jPlayerActions.removeFromArrayByValue(_constants.keys.SEEK_BAR_CLASS, _constants.classNames.seeking));
                    });
                }
            };

            _this._updateDurationText = function (nextProps) {
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

            _this._updateCurrentTimeText = function (nextProps) {
                var currentTimeText = (0, _convertTime2.default)(nextProps.currentTime);
                _this.setState(_defineProperty({ currentTimeText: currentTimeText }, "currentTimeText", currentTimeText));
            };

            _this.state = {
                seekBarClass: []
            };
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updateBarStyles(nextProps);
                this._updateDurationText(nextProps);
                this._updateCurrentTimeText(nextProps);
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    { className: "jp-progress" },
                    _react2.default.createElement(
                        "div",
                        { className: this.state.seekBarClass.join(" "), style: this.state.seekBarStyle, onClick: this.onSeekBarClick },
                        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
                            smoothPlayBar: this.props.smoothPlayBar,
                            currentPercentAbsolute: this.props.currentPercentAbsolute,
                            currentPercentRelative: this.props.currentPercentRelative
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
        }]);

        return _class2;
    }(_react2.default.PureComponent));
});