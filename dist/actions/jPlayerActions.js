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
  exports.fullScreen = exports.incrementLoop = exports.playbackRate = exports.duration = exports.mute = exports.volume = exports.playHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.removeFromArrayByValue = exports.addUniqueToArray = exports.updateOption = undefined;

  var _generator2 = _interopRequireDefault(_generator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // export const updateOption = (key, value) => Promise.resolve({
  //     type: actionTypes.jPlayer.UPDATE_OPTION,
  //     key: key,
  //     value: value
  // });
  var updateOption = exports.updateOption = (0, _generator2.default)(_constants.actionTypes.jPlayer.UPDATE_OPTION, "key", "value");
  var addUniqueToArray = exports.addUniqueToArray = (0, _generator2.default)(_constants.actionTypes.jPlayer.ARRAY_ADD_UNIQUE, "key", "value");
  var removeFromArrayByValue = exports.removeFromArrayByValue = (0, _generator2.default)(_constants.actionTypes.jPlayer.ARRAY_REMOVE_BY_VALUE, "key", "value");
  var setMedia = exports.setMedia = (0, _generator2.default)(_constants.actionTypes.jPlayer.SET_MEDIA, "media");
  var clearMedia = exports.clearMedia = (0, _generator2.default)(_constants.actionTypes.jPlayer.CLEAR_MEDIA);
  var play = exports.play = (0, _generator2.default)(_constants.actionTypes.jPlayer.PLAY, "time");
  var pause = exports.pause = (0, _generator2.default)(_constants.actionTypes.jPlayer.PAUSE, "time");
  var playHead = exports.playHead = (0, _generator2.default)(_constants.actionTypes.jPlayer.PLAY_HEAD, "percent");
  var volume = exports.volume = (0, _generator2.default)(_constants.actionTypes.jPlayer.VOLUME, "volume");
  var mute = exports.mute = (0, _generator2.default)(_constants.actionTypes.jPlayer.MUTE, "mute");
  var duration = exports.duration = (0, _generator2.default)(_constants.actionTypes.jPlayer.DURATION, "remainingDuration");
  var playbackRate = exports.playbackRate = (0, _generator2.default)(_constants.actionTypes.jPlayer.PLAYBACK_RATE, "playbackRate");
  var incrementLoop = exports.incrementLoop = (0, _generator2.default)(_constants.actionTypes.jPlayer.INCEMENT_LOOP);
  var fullScreen = exports.fullScreen = (0, _generator2.default)(_constants.actionTypes.jPlayer.FULL_SCREEN, "fullScreen");
});