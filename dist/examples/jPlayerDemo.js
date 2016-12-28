(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["react", "react-dom", "react-redux", "../util/constants", "../index", "../containers/jPlayer", "../components/media", "../components/gui", "../components/controls", "../components/progress", "../components/playBar", "../components/browserUnsupported", "../components/poster", "../components/audio", "../components/video", "../components/title", "../components/controls/fullScreen", "../components/controls/mute", "../components/controls/play", "../components/controls/repeat", "../components/controls/playbackRateBar", "../components/controls/playbackRateBarValue", "../components/controls/volumeBar", "../components/controls/volumeBarValue", "../less/default/jPlayer.less", "../less/jPlayerIconControls.less"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("react"), require("react-dom"), require("react-redux"), require("../util/constants"), require("../index"), require("../containers/jPlayer"), require("../components/media"), require("../components/gui"), require("../components/controls"), require("../components/progress"), require("../components/playBar"), require("../components/browserUnsupported"), require("../components/poster"), require("../components/audio"), require("../components/video"), require("../components/title"), require("../components/controls/fullScreen"), require("../components/controls/mute"), require("../components/controls/play"), require("../components/controls/repeat"), require("../components/controls/playbackRateBar"), require("../components/controls/playbackRateBarValue"), require("../components/controls/volumeBar"), require("../components/controls/volumeBarValue"), require("../less/default/jPlayer.less"), require("../less/jPlayerIconControls.less"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.reactDom, global.reactRedux, global.constants, global.index, global.jPlayer, global.media, global.gui, global.controls, global.progress, global.playBar, global.browserUnsupported, global.poster, global.audio, global.video, global.title, global.fullScreen, global.mute, global.play, global.repeat, global.playbackRateBar, global.playbackRateBarValue, global.volumeBar, global.volumeBarValue, global.jPlayer, global.jPlayerIconControls);
        global.jPlayerDemo = mod.exports;
    }
})(this, function (_react, _reactDom, _reactRedux, _constants, _index, _jPlayer, _media, _gui, _controls, _progress, _playBar, _browserUnsupported, _poster, _audio, _video, _title, _fullScreen, _mute, _play, _repeat, _playbackRateBar, _playbackRateBarValue, _volumeBar, _volumeBarValue) {
    "use strict";

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var constants = _interopRequireWildcard(_constants);

    var _index2 = _interopRequireDefault(_index);

    var _jPlayer2 = _interopRequireDefault(_jPlayer);

    var _media2 = _interopRequireDefault(_media);

    var _gui2 = _interopRequireDefault(_gui);

    var _controls2 = _interopRequireDefault(_controls);

    var _progress2 = _interopRequireDefault(_progress);

    var _playBar2 = _interopRequireDefault(_playBar);

    var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

    var _poster2 = _interopRequireDefault(_poster);

    var _audio2 = _interopRequireDefault(_audio);

    var _video2 = _interopRequireDefault(_video);

    var _title2 = _interopRequireDefault(_title);

    var _fullScreen2 = _interopRequireDefault(_fullScreen);

    var _mute2 = _interopRequireDefault(_mute);

    var _play2 = _interopRequireDefault(_play);

    var _repeat2 = _interopRequireDefault(_repeat);

    var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

    var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

    var _volumeBar2 = _interopRequireDefault(_volumeBar);

    var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

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

    var Player = function (_React$Component) {
        _inherits(Player, _React$Component);

        function Player(props) {
            _classCallCheck(this, Player);

            var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

            _this.onVolumeChange = function () {
                if (_this.props.jPlayer.muted) {
                    _this.setState({ muteClassName: "fa fa-volume-off" });
                } else if (_this.props.jPlayer.volume < 0.5) {
                    _this.setState({ muteClassName: "fa fa-volume-down" });
                } else {
                    _this.setState({ muteClassName: "fa fa-volume-up" });
                }
            };

            _this.state = {
                muteClassName: "fa fa-volume-up"
            };
            return _this;
        }

        _createClass(Player, [{
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    _jPlayer2.default,
                    null,
                    _react2.default.createElement(
                        _gui2.default,
                        null,
                        _react2.default.createElement(
                            _media2.default,
                            { onVolumeChange: this.onVolumeChange },
                            _react2.default.createElement(
                                _audio2.default,
                                null,
                                _react2.default.createElement("track", { src: "subtitles_en.vtt", kind: "subtitles", srcLang: "en", label: "English" })
                            ),
                            _react2.default.createElement(_video2.default, null)
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "jp-poster-container" },
                            _react2.default.createElement(_poster2.default, null),
                            _react2.default.createElement(
                                _title2.default,
                                null,
                                this.props.jPlayer.media.title
                            )
                        ),
                        _react2.default.createElement(
                            _controls2.default,
                            null,
                            _react2.default.createElement(
                                _play2.default,
                                null,
                                _react2.default.createElement("i", { className: "fa fa-play" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "jp-volume-controls" },
                                _react2.default.createElement(
                                    _mute2.default,
                                    null,
                                    _react2.default.createElement("i", { className: this.state.muteClassName })
                                ),
                                _react2.default.createElement(
                                    _volumeBar2.default,
                                    null,
                                    _react2.default.createElement(_volumeBarValue2.default, null)
                                )
                            ),
                            _react2.default.createElement(
                                _fullScreen2.default,
                                null,
                                _react2.default.createElement("i", { className: "fa fa-expand" })
                            ),
                            _react2.default.createElement(
                                _repeat2.default,
                                null,
                                _react2.default.createElement("i", { className: "fa fa-repeat" })
                            ),
                            _react2.default.createElement(
                                _playbackRateBar2.default,
                                null,
                                _react2.default.createElement(_playbackRateBarValue2.default, null)
                            ),
                            _react2.default.createElement(
                                _progress2.default,
                                null,
                                _react2.default.createElement(_playBar2.default, null)
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _browserUnsupported2.default,
                        null,
                        _react2.default.createElement(
                            "h2",
                            null,
                            "Browser Unsupported"
                        ),
                        "To play the media you will need to update your browser to a more recent version."
                    )
                );
            }
        }], [{
            key: "defaultProps",
            get: function get() {
                return {
                    jPlayer: {
                        media: {}
                    }
                };
            }
        }]);

        return Player;
    }(_react2.default.Component);

    var jPlayerOptions = {
        jPlayerSelector: "jplayer-footer-player",
        cssSelectorAncestor: "jp-container-footer-player",
        smoothPlayBar: false,
        muted: true,
        keyEnabled: true,
        globalVolume: false,
        autoplay: false,
        logErrors: true,
        media: {
            title: "Cro Magnon Man",
            artist: "The Stark Palace",
            mp3: "http://www.davidgagne.net/m/song.mp3",
            poster: "http://wallpapercave.com/wp/Mb4UPsY.png",
            free: true
        }
    };

    (0, _index2.default)(Player, jPlayerOptions);
});