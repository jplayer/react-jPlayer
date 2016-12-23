(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-redux", "../util/constants", "../reducers/index", "../actions/jPlayerActions"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-redux"), require("../util/constants"), require("../reducers/index"), require("../actions/jPlayerActions"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactRedux, global.constants, global.index, global.jPlayerActions);
        global.poster = mod.exports;
    }
})(this, function (exports, _react, _reactRedux, _constants, _index, _jPlayerActions) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

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
            mediaSettings: state.jPlayer.mediaSettings,
            media: state.jPlayer.media
        };
    };

    exports.default = (0, _reactRedux.connect)(mapStateToProps)(function (_React$Component) {
        _inherits(_class2, _React$Component);

        function _class2() {
            _classCallCheck(this, _class2);

            var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));

            _this.onLoad = function () {
                if (!_this.props.mediaSettings.video.available) {
                    _this.setState(function (state) {
                        return (0, _index.removeFromArrayByValue)(state, (0, _index.removeFromArrayByValue)(_constants.keys.POSTER_CLASS, _constants.classNames.HIDDEN));
                    });
                }
            };

            _this.state = _defineProperty({}, _constants.keys.POSTER_CLASS, []);
            return _this;
        }

        _createClass(_class2, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.setState(function (state) {
                    return (0, _index.addUniqueToArray)(state, jPlayerActions.addUniqueToArray(_constants.keys.POSTER_CLASS, _constants.classNames.HIDDEN));
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.media.length <= 0) {
                    this.setState(function (state) {
                        return (0, _index.addUniqueToArray)(state, jPlayerActions.addUniqueToArray(_constants.keys.POSTER_CLASS, _constants.classNames.HIDDEN));
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement("img", { className: this.state.posterClass, src: this.props.src, onLoad: this.onLoad, onClick: this.props.onClick });
            }
        }]);

        return _class2;
    }(_react2.default.Component));
});