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
        global.playlistItem = mod.exports;
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

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

        _createClass(_class, null, [{
            key: "defaultProps",
            get: function get() {
                return {
                    minHeight: 0,
                    maxHeight: 1
                };
            }
        }]);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this._onRemoveMediaClick = function (index, event) {
                event.preventDefault();

                _this.props.remove(index);
                _this.props.blur(event.target);
            };

            _this._onMediaLinkClick = function (index, event) {
                event.preventDefault();

                _this.props.current !== index ? _this.props.play(index) : _this.props.mergeOptions({ status: { paused: false } });
                _this.props.blur(event.target);
            };

            _this.state = {};
            _this.className = {
                currentMedia: "jp-playlist-current"
            };
            return _this;
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    "div",
                    null,
                    this.props.medias.map(function (media, index) {
                        var animationHeight = media.isRemoving ? _this2.props.minHeight : _this2.props.maxHeight;
                        var mediaListClass = _this2.props.current === index ? _this2.className.currentMedia : null;
                        var mediaLinkClass = _this2.props.current === index ? _this2.props.itemClass + " " + _this2.className.currentMedia : _this2.props.itemClass;
                        var onRest = media.isRemoving ? function () {
                            return _this2.props.onRest(index);
                        } : null;

                        return _react2.default.createElement(
                            _reactMotion.Motion,
                            { key: media.key, defaultStyle: { heightToInterpTo: _this2.props.minHeight }, style: { heightToInterpTo: (0, _reactMotion.spring)(animationHeight, _this2.props.config) }, onRest: onRest },
                            function (values) {
                                return _react2.default.createElement(
                                    "li",
                                    { className: mediaListClass, style: { transform: "scaleY(" + values.heightToInterpTo + ")", transformOrigin: "50% top" } },
                                    _this2.props.enableRemoveControls && _react2.default.createElement(
                                        "a",
                                        { href: "javascript:;", className: _this2.props.removeItemClass, onClick: _this2._onRemoveMediaClick.bind(_this2, index) },
                                        "\xD7"
                                    ),
                                    media.free && _react2.default.createElement(
                                        "span",
                                        { className: _this2.props.freeGroupClass },
                                        "(",
                                        media.freeMediaLinks,
                                        ")"
                                    ),
                                    _react2.default.createElement(
                                        "a",
                                        { href: "javascript:;", className: mediaLinkClass, onClick: _this2._onMediaLinkClick.bind(_this2, index), tabIndex: "0" },
                                        _react2.default.createElement("img", { src: media.poster }),
                                        media.title,
                                        media.artist && _react2.default.createElement(
                                            "span",
                                            { className: "jp-artist" },
                                            "by ",
                                            media.artist
                                        )
                                    )
                                );
                            }
                        );
                    })
                );
            }
        }]);

        return _class;
    }(_react2.default.Component);

    exports.default = _class;
});