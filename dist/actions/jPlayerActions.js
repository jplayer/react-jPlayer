(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../util/constants", "./generator"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../util/constants"), require("./generator"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants, global.generator);
        global.jPlayerActions = mod.exports;
    }
})(this, function (exports, _constants, _generator) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.focus = exports.fullScreen = exports.loop = exports.playbackRate = exports.duration = exports.mute = exports.volume = exports.playHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = undefined;

    var _generator2 = _interopRequireDefault(_generator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        updateOption: function updateOption(key, value, id) {
            return {
                type: _constants.actionTypes.jPlayer.UPDATE_OPTION,
                key: key,
                value: value,
                id: id
            };
        }
    };
    var setMedia = exports.setMedia = function setMedia(media, id) {
        return {
            type: _constants.actionTypes.jPlayer.SET_MEDIA,
            id: id,
            media: media
        };
    };
    var clearMedia = exports.clearMedia = function clearMedia(id) {
        return {
            type: _constants.actionTypes.jPlayer.CLEAR_MEDIA,
            id: id
        };
    };
    var play = exports.play = function play(id, time) {
        return {
            type: _constants.actionTypes.jPlayer.PLAY,
            time: time,
            id: id
        };
    };
    var pause = exports.pause = function pause(id, time) {
        return {
            type: _constants.actionTypes.jPlayer.PAUSE,
            id: id,
            time: time
        };
    };
    var playHead = exports.playHead = function playHead(percent, id) {
        return {
            type: _constants.actionTypes.jPlayer.PLAY_HEAD,
            percent: percent,
            id: id
        };
    };
    var volume = exports.volume = function volume(_volume, id) {
        return {
            type: _constants.actionTypes.jPlayer.VOLUME,
            id: id,
            volume: _volume
        };
    };
    var mute = exports.mute = function mute(_mute, id) {
        return {
            type: _constants.actionTypes.jPlayer.MUTE,
            mute: _mute,
            id: id
        };
    };
    var duration = exports.duration = function duration(id, remainingDuration) {
        return {
            type: _constants.actionTypes.jPlayer.DURATION,
            remainingDuration: remainingDuration,
            id: id
        };
    };
    var playbackRate = exports.playbackRate = function playbackRate(_playbackRate, id) {
        return {
            type: _constants.actionTypes.jPlayer.PLAYBACK_RATE,
            playbackRate: _playbackRate,
            id: id
        };
    };
    var loop = exports.loop = function loop(_loop, id) {
        return {
            type: _constants.actionTypes.jPlayer.LOOP,
            loop: _loop,
            id: id
        };
    };
    var fullScreen = exports.fullScreen = function fullScreen(_fullScreen, id, element) {
        return {
            type: _constants.actionTypes.jPlayer.FULL_SCREEN,
            fullScreen: _fullScreen,
            element: element,
            id: id
        };
    };
    var focus = exports.focus = function focus(id) {
        return {
            type: _constants.actionTypes.jPlayer.FOCUS,
            id: id
        };
    };
});