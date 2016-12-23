(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-motion"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-motion"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactMotion);
        global.playBar = mod.exports;
    }
})(this, function (exports, _react, _reactMotion) {
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

    var _class = function (_React$PureComponent) {
        _inherits(_class, _React$PureComponent);

        function _class() {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

            _this._updatePlayBarStyles = function (nextProps) {
                var widthValue = nextProps.smoothPlayBar ? nextProps.currentPercentAbsolute : nextProps.currentPercentRelative;
                _this.setState({ playBarStyle: { width: widthValue + "%" } });
            };

            _this.state = {};
            return _this;
        }

        _createClass(_class, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this._updatePlayBarStyles(nextProps);
            }
        }, {
            key: "render",
            value: function render() {
                return this.props.smoothPlayBar ? _react2.default.createElement(
                    _reactMotion.Motion,
                    { style: { smoothWidth: (0, _reactMotion.spring)(this.props.currentPercentAbsolute, [250]) } },
                    function (values) {
                        return _react2.default.createElement("div", { className: "jp-play-bar", style: { width: values.smoothWidth + "%" } });
                    }
                ) : _react2.default.createElement("div", { className: "jp-play-bar", style: this.state.playBarStyle });
            }
        }], [{
            key: "defaultProps",
            get: function get() {
                return {
                    playBarStyle: _react2.default.PropTypes.object,
                    smoothPlayBar: _react2.default.PropTypes.bool,
                    currentPercentAbsolute: _react2.default.PropTypes.number
                };
            }
        }]);

        return _class;
    }(_react2.default.PureComponent);

    exports.default = _class;
});