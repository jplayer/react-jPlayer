(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["react", "react-dom", "react-redux", "../index", "../containers/jPlayer", "../components/media", "../components/gui", "../components/keyControl", "../components/progress", "../components/seekBar", "../components/playBar", "../components/buffer", "../components/browserUnsupported", "../components/poster", "../components/audio", "../components/video", "../components/title", "../components/controls/fullScreen", "../components/controls/mute", "../components/controls/play", "../components/controls/repeat", "../components/controls/playbackRateBar", "../components/controls/playbackRateBarValue", "../components/controls/volumeBar", "../components/controls/volumeBarValue", "../components/duration", "../components/currentTime", "../less/default/jPlayer.less", "../less/jPlayerIconControls.less"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("react"), require("react-dom"), require("react-redux"), require("../index"), require("../containers/jPlayer"), require("../components/media"), require("../components/gui"), require("../components/keyControl"), require("../components/progress"), require("../components/seekBar"), require("../components/playBar"), require("../components/buffer"), require("../components/browserUnsupported"), require("../components/poster"), require("../components/audio"), require("../components/video"), require("../components/title"), require("../components/controls/fullScreen"), require("../components/controls/mute"), require("../components/controls/play"), require("../components/controls/repeat"), require("../components/controls/playbackRateBar"), require("../components/controls/playbackRateBarValue"), require("../components/controls/volumeBar"), require("../components/controls/volumeBarValue"), require("../components/duration"), require("../components/currentTime"), require("../less/default/jPlayer.less"), require("../less/jPlayerIconControls.less"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.react, global.reactDom, global.reactRedux, global.index, global.jPlayer, global.media, global.gui, global.keyControl, global.progress, global.seekBar, global.playBar, global.buffer, global.browserUnsupported, global.poster, global.audio, global.video, global.title, global.fullScreen, global.mute, global.play, global.repeat, global.playbackRateBar, global.playbackRateBarValue, global.volumeBar, global.volumeBarValue, global.duration, global.currentTime, global.jPlayer, global.jPlayerIconControls);
        global.jPlayerDemo = mod.exports;
    }
})(this, function (_react, _reactDom, _reactRedux, _index, _jPlayer, _media, _gui, _keyControl, _progress, _seekBar, _playBar, _buffer, _browserUnsupported, _poster, _audio, _video, _title, _fullScreen, _mute, _play, _repeat, _playbackRateBar, _playbackRateBarValue, _volumeBar, _volumeBarValue, _duration, _currentTime) {
    "use strict";

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _index2 = _interopRequireDefault(_index);

    var _jPlayer2 = _interopRequireDefault(_jPlayer);

    var _media2 = _interopRequireDefault(_media);

    var _gui2 = _interopRequireDefault(_gui);

    var _keyControl2 = _interopRequireDefault(_keyControl);

    var _progress2 = _interopRequireDefault(_progress);

    var _seekBar2 = _interopRequireDefault(_seekBar);

    var _playBar2 = _interopRequireDefault(_playBar);

    var _buffer2 = _interopRequireDefault(_buffer);

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

    var _duration2 = _interopRequireDefault(_duration);

    var _currentTime2 = _interopRequireDefault(_currentTime);

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
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "jp-poster-container" },
                            _react2.default.createElement(_poster2.default, null),
                            _react2.default.createElement(_title2.default, null)
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "jp-controls" },
                            _react2.default.createElement(_keyControl2.default, null),
                            _react2.default.createElement(
                                _play2.default,
                                null,
                                _react2.default.createElement("i", { className: "fa fa-play" })
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
                                _progress2.default,
                                null,
                                _react2.default.createElement(
                                    _seekBar2.default,
                                    null,
                                    _react2.default.createElement(_playBar2.default, null),
                                    _react2.default.createElement(_buffer2.default, null),
                                    _react2.default.createElement(_currentTime2.default, null),
                                    _react2.default.createElement(_duration2.default, null)
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_browserUnsupported2.default, null)
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
        globalVolume: false,
        autoplay: false,
        logErrors: true,
        media: {
            title: "Cro Magnon Man",
            artist: "The Stark Palace",
            mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
            poster: "http://wallpapercave.com/wp/Mb4UPsY.png",
            free: true
        }
    };

    (0, _index2.default)(Player, jPlayerOptions);

    // onShuffleClick = (event) => {
    //     event.preventDefault();

    //     this.context.shuffle(!this.props.shuffled);
    //     this.context.blur(event.target);
    // }
    // onPreviousClick = (event) => {
    //     event.preventDefault();

    //     this.context.previous();
    //     this.context.blur(event.target);
    // }
    // onNextClick = (event) => {
    //     event.preventDefault();

    //     this.context.next();
    //     this.context.blur(event.target);
    // }
    // onVideoPlayClick = () => this.props.dispatch(play())
    // shuffle: (<a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
    // previous: (<a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
    // next: (<a className={classNames.NEXT} onClick={props.onNextClick}>{props.children}</a>)
});