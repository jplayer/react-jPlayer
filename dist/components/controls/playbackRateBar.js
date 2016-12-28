(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../../util/index", "../../util/constants", "../../actions/jPlayerActions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../../util/index"), require("../../util/constants"), require("../../actions/jPlayerActions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.index, global.constants, global.jPlayerActions);
        global.playbackRateBar = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _index, _constants, _jPlayerActions) {
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

    var mapStateToProps = function mapStateToProps(state) {
        return {
            verticalPlaybackRate: state.jPlayer.verticalPlaybackRate,
            minPlaybackRate: state.jPlayer.minPlaybackRate,
            maxPlaybackRate: state.jPlayer.maxPlaybackRate,
            playbackRate: state.jPlayer.playbackRate,
            playbackRateEnabled: state.jPlayer.playbackRateEnabled
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$Component) {
        _inherits(_class2, _React$Component);

        function _class2(props) {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));

            _this.onPlaybackRateBarClick = function (e) {
                // Using e.currentTarget to enable multiple playbackRate bars
                var bar = e.currentTarget,
                    offset = (0, _index.getOffset)(bar),
                    x = e.pageX - offset.left,
                    w = (0, _index.getWidth)(bar),
                    y = (0, _index.getHeight)(bar) - e.pageY + offset.top,
                    h = (0, _index.getHeight)(bar),
                    ratio,
                    playbackRateValue;

                if (_this.props.verticalPlaybackRate) {
                    ratio = y / h;
                } else {
                    ratio = x / w;
                }

                playbackRateValue = ratio * (_this.props.maxPlaybackRate - _this.props.minPlaybackRate) + _this.props.minPlaybackRate;
                _this.props.dispatch((0, _jPlayerActions.playbackRate)(playbackRateValue));
            };

            _this._updatePlaybackRateBarStyles = function (nextProps) {
                if (nextProps.playbackRateEnabled) {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playbackRateBarClass", (0, _index.removeFromArrayByValue)(state.playbackRateBarClass, _constants.classNames.HIDDEN));
                    });
                } else {
                    _this.setState(function (state) {
                        return (0, _index.updateObjectByKey)(state, "playbackRateBarClass", (0, _index.addUniqueToArray)(state.playbackRateBarClass, _constants.classNames.HIDDEN));
                    });
                }
            };

            _this.state = {
                playbackRateBarClass: [_constants.classNames.PLAYBACK_RATE_BAR]
            };
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updatePlaybackRateBarStyles(nextProps);
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "div",
                    { className: this.state.playbackRateBarClass.join(" "), onClick: this.onPlaybackRateBarClick },
                    this.props.children
                );
            }
        }]);

        return _class2;
    }(_react2.default.Component));
});