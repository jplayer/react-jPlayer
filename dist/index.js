(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react", "react-dom", "react-redux", "redux", "lodash.merge", "./reducers/jPlayerReducer", "./actions/jPlayerActions", "./containers/jPlayer", "./components/media", "./components/gui", "./components/keyControl", "./components/progress", "./components/seekBar", "./components/playBar", "./components/buffer", "./components/browserUnsupported", "./components/poster", "./components/audio", "./components/video", "./components/title", "./components/controls/fullScreen", "./components/controls/mute", "./components/controls/play", "./components/controls/repeat", "./components/controls/playbackRateBar", "./components/controls/playbackRateBarValue", "./components/controls/volumeBar", "./components/controls/volumeBarValue", "./components/duration", "./components/currentTime", "./less/jPlayer.less"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"), require("react-dom"), require("react-redux"), require("redux"), require("lodash.merge"), require("./reducers/jPlayerReducer"), require("./actions/jPlayerActions"), require("./containers/jPlayer"), require("./components/media"), require("./components/gui"), require("./components/keyControl"), require("./components/progress"), require("./components/seekBar"), require("./components/playBar"), require("./components/buffer"), require("./components/browserUnsupported"), require("./components/poster"), require("./components/audio"), require("./components/video"), require("./components/title"), require("./components/controls/fullScreen"), require("./components/controls/mute"), require("./components/controls/play"), require("./components/controls/repeat"), require("./components/controls/playbackRateBar"), require("./components/controls/playbackRateBarValue"), require("./components/controls/volumeBar"), require("./components/controls/volumeBarValue"), require("./components/duration"), require("./components/currentTime"), require("./less/jPlayer.less"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactDom, global.reactRedux, global.redux, global.lodash, global.jPlayerReducer, global.jPlayerActions, global.jPlayer, global.media, global.gui, global.keyControl, global.progress, global.seekBar, global.playBar, global.buffer, global.browserUnsupported, global.poster, global.audio, global.video, global.title, global.fullScreen, global.mute, global.play, global.repeat, global.playbackRateBar, global.playbackRateBarValue, global.volumeBar, global.volumeBarValue, global.duration, global.currentTime, global.jPlayer);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactDom, _reactRedux, _redux, _lodash, _jPlayerReducer, _jPlayerActions, _jPlayer, _media, _gui, _keyControl, _progress, _seekBar, _playBar, _buffer, _browserUnsupported, _poster, _audio, _video, _title, _fullScreen, _mute, _play, _repeat, _playbackRateBar, _playbackRateBarValue, _volumeBar, _volumeBarValue, _duration, _currentTime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CurrentTime = exports.Duration = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Video = exports.Audio = exports.Poster = exports.BrowserUnsupported = exports.Buffer = exports.PlayBar = exports.SeekBar = exports.Progress = exports.KeyControl = exports.Gui = exports.Media = exports.JPlayer = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _reactDom2 = _interopRequireDefault(_reactDom);

    var _lodash2 = _interopRequireDefault(_lodash);

    var _jPlayerReducer2 = _interopRequireDefault(_jPlayerReducer);

    var jPlayerActions = _interopRequireWildcard(_jPlayerActions);

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

    var mapStateToProps = function mapStateToProps(_ref, _ref2) {
        var jPlayers = _ref.jPlayers;
        var id = _ref2.id;

        var otherPlayers = {};

        Object.keys(jPlayers).forEach(function (key) {
            return key !== id ? otherPlayers[key] = jPlayers[key] : null;
        });

        if (Object.keys(otherPlayers).length) {
            return _extends({}, jPlayers[id], {
                jPlayers: otherPlayers
            });
        }

        return _extends({}, jPlayers[id]);
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return { functions: (0, _redux.bindActionCreators)(jPlayerActions, dispatch) };
    };

    exports.default = function () {
        for (var _len = arguments.length, wrappedPlayers = Array(_len), _key = 0; _key < _len; _key++) {
            wrappedPlayers[_key] = arguments[_key];
        }

        var initialState = { jPlayers: {} };
        var ConnectedPlayers = [];

        wrappedPlayers.forEach(function (wrappedPlayer) {
            var ConnectedPlayer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(wrappedPlayer);

            initialState.jPlayers[wrappedPlayer.options.id] = _extends({}, (0, _lodash2.default)({}, _jPlayer.defaultValues, _jPlayer.statusDefaultValues, _jPlayer.jPlayerDefaultOptions, wrappedPlayer.options));
            ConnectedPlayers.push(_react2.default.createElement(ConnectedPlayer, { key: wrappedPlayer.options.id, id: wrappedPlayer.options.id }));
        });

        var store = (0, _redux.createStore)((0, _redux.combineReducers)({ jPlayers: _jPlayerReducer2.default }), initialState);

        _reactDom2.default.render(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                "div",
                null,
                ConnectedPlayers
            )
        ), document.getElementById("app"));
    };

    exports.JPlayer = _jPlayer2.default;
    exports.Media = _media2.default;
    exports.Gui = _gui2.default;
    exports.KeyControl = _keyControl2.default;
    exports.Progress = _progress2.default;
    exports.SeekBar = _seekBar2.default;
    exports.PlayBar = _playBar2.default;
    exports.Buffer = _buffer2.default;
    exports.BrowserUnsupported = _browserUnsupported2.default;
    exports.Poster = _poster2.default;
    exports.Audio = _audio2.default;
    exports.Video = _video2.default;
    exports.Title = _title2.default;
    exports.FullScreen = _fullScreen2.default;
    exports.Mute = _mute2.default;
    exports.Play = _play2.default;
    exports.Repeat = _repeat2.default;
    exports.PlaybackRateBar = _playbackRateBar2.default;
    exports.PlaybackRateBarValue = _playbackRateBarValue2.default;
    exports.VolumeBar = _volumeBar2.default;
    exports.VolumeBarValue = _volumeBarValue2.default;
    exports.Duration = _duration2.default;
    exports.CurrentTime = _currentTime2.default;
});