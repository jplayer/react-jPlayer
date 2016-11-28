(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-dom", "react-redux", "./store"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-dom"), require("react-redux"), require("./store"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.reactRedux, global.store);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _reactRedux, _store) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _store2 = _interopRequireDefault(_store);

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

    exports.default = function (WrappedPlayer, options) {
        debugger;
        var JPlayerWrapper = function (_React$Component) {
            _inherits(JPlayerWrapper, _React$Component);

            function JPlayerWrapper(props) {
                _classCallCheck(this, JPlayerWrapper);

                var _this = _possibleConstructorReturn(this, (JPlayerWrapper.__proto__ || Object.getPrototypeOf(JPlayerWrapper)).call(this, props));

                _this.updateOptions = function (update, callback) {
                    return _this.setState(function (prevState) {
                        return prevState.jPlayerOptions = update(prevState.jPlayerOptions);
                    }, callback);
                };

                _this.state = {
                    jPlayerOptions: options
                };
                return _this;
            }

            _createClass(JPlayerWrapper, [{
                key: "render",
                value: function render() {
                    return _react2.default.createElement(WrappedPlayer, _extends({}, this.state.jPlayerOptions, { updateOptions: this.updateOptions }));
                }
            }]);

            return JPlayerWrapper;
        }(_react2.default.Component);

        JPlayerWrapper = (0, _reactRedux.connect)()(JPlayerWrapper);

        _reactDom2.default.render(_react2.default.createElement(
            _reactRedux.Provider,
            { store: _store2.default },
            _react2.default.createElement(JPlayerWrapper, null)
        ), document.getElementById("jPlayer"));
    };
});