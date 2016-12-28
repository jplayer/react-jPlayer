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
    exports.fullScreen = exports.loop = exports.playbackRate = exports.duration = exports.mute = exports.volume = exports.playHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = undefined;

    var _generator2 = _interopRequireDefault(_generator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = {
        updateOption: (0, _generator2.default)(_constants.actionTypes.jPlayer.UPDATE_OPTION, "key", "value"),
        addUniqueToArray: (0, _generator2.default)(_constants.actionTypes.jPlayer.ARRAY_ADD_UNIQUE, "key", "value"),
        removeFromArrayByValue: (0, _generator2.default)(_constants.actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE, "key", "value")
    };
    var setMedia = exports.setMedia = (0, _generator2.default)(_constants.actionTypes.jPlayer.SET_MEDIA, "media");
    var clearMedia = exports.clearMedia = (0, _generator2.default)(_constants.actionTypes.jPlayer.CLEAR_MEDIA);
    var play = exports.play = (0, _generator2.default)(_constants.actionTypes.jPlayer.PLAY, "time");
    var pause = exports.pause = (0, _generator2.default)(_constants.actionTypes.jPlayer.PAUSE, "time");
    var playHead = exports.playHead = (0, _generator2.default)(_constants.actionTypes.jPlayer.PLAY_HEAD, "percent");
    var volume = exports.volume = (0, _generator2.default)(_constants.actionTypes.jPlayer.VOLUME, "volume");
    var mute = exports.mute = (0, _generator2.default)(_constants.actionTypes.jPlayer.MUTE, "mute");
    var duration = exports.duration = (0, _generator2.default)(_constants.actionTypes.jPlayer.DURATION, "remainingDuration");
    var playbackRate = exports.playbackRate = (0, _generator2.default)(_constants.actionTypes.jPlayer.PLAYBACK_RATE, "playbackRate");
    var loop = exports.loop = (0, _generator2.default)(_constants.actionTypes.jPlayer.LOOP, "loop");
    var fullScreen = exports.fullScreen = (0, _generator2.default)(_constants.actionTypes.jPlayer.FULL_SCREEN, "fullScreen", "element");
});