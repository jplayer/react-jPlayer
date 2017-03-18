var ReactJPlayer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_OPTION: 'SET_OPTION',
  SET_MEDIA: 'SET_MEDIA',
  CLEAR_MEDIA: 'CLEAR_MEDIA',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  PLAY_HEAD: 'PLAY_HEAD',
  VOLUME: 'VOLUME',
  MUTE: 'MUTE',
  DURATION: 'DURATION',
  PLAYBACK_RATE: 'PLAYBACK_RATE',
  LOOP: 'LOOP',
  FULL_SCREEN: 'FULL_SCREEN',
  FOCUS: 'FOCUS'
};

var errors = exports.errors = {
  FORMAT_NO_SUPPORT: 'It is not possible to play any media format ' + 'provided on this browser using your current defaultOptions.',
  URL_NO_SUPPORT: 'The media URL could not be loaded.',
  URL_NOT_SET: 'Attempted to issue media playback commands while no media url is set.',
  INVALID_GLOBAL_METHOD: 'You passed an invalid jPlayer method to the global array'
};

var hints = exports.hints = {
  FORMAT_NO_SUPPORT: 'The browser may not support these file types.',
  URL_NO_SUPPORT: 'Check the media URL is valid.',
  URL_NOT_SET: 'Pass the media through the defaultOptions or use the setMedia()' + 'action that is passed into the component props.',
  INVALID_GLOBAL_METHOD: 'Remove the invalid method from the "global" option'
};

var classes = exports.classes = {
  MEDIA: 'jp-media',
  JPLAYER: 'jp-jplayer',
  MUTE: 'jp-mute',
  DOWNLOAD: 'jp-download',
  VOLUME_BAR: 'jp-volume-bar',
  VOLUME_BAR_VALUE: 'jp-volume-bar-value',
  PLAYBACK_RATE_BAR: 'jp-playback-rate-bar',
  PLAYBACK_RATE_BAR_VALUE: 'jp-playback-rate-bar-value',
  BUFFER_BAR: 'jp-buffer-bar',
  PROGRESS: 'jp-progress',
  SEEK_BAR: 'jp-seek-bar',
  PLAY_BAR: 'jp-play-bar',
  SEEKING: 'jp-seeking-bg',
  GUI: 'jp-gui',
  NO_BROWSER_SUPPORT: 'jp-no-browser-support',
  PLAY: 'jp-play',
  PAUSE: 'jp-pause',
  STOP: 'jp-stop',
  REPEAT: 'jp-repeat',
  FULL_SCREEN: 'jp-full-screen',
  CURRENT_TIME: 'jp-current-time',
  DURATION: 'jp-duration',
  DETAILS: 'jp-details',
  TITLE: 'jp-title',
  SHUFFLE: 'jp-shuffle',
  PREVIOUS: 'jp-previous',
  NEXT: 'jp-next',
  POSTER: 'jp-poster',
  states: {
    AUDIO: 'jp-state-audio',
    VIDEO: 'jp-state-video',
    PLAYING: 'jp-state-playing',
    IDLE: 'jp-state-idle',
    SEEKING: 'jp-state-seeking',
    MUTED: 'jp-state-muted',
    VOLUME_LOW: 'jp-state-volume-low',
    VOLUME_HIGH: 'jp-state-volume-high',
    LOOPED: 'jp-state-looped',
    FULL_SCREEN: 'jp-state-full-screen',
    SHUFFLED: 'jp-state-shuffled',
    NO_BROWSER_SUPPORT: 'jp-state-no-browser-support',
    NO_VOLUME_SUPPORT: 'jp-state-no-volume-support'
  }
};

var formats = exports.formats = {
  mp3: {
    CODEC: 'audio/mpeg',
    MEDIA: 'audio'
  },
  m4a: { // AAC / MP4
    CODEC: 'audio/mp4; codecs="mp4a.40.2"',
    MEDIA: 'audio'
  },
  m3u8a: { // AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
    MEDIA: 'audio'
  },
  m3ua: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'audio'
  },
  oga: { // OGG
    CODEC: 'audio/ogg; codecs="vorbis, opus"',
    MEDIA: 'audio'
  },
  flac: { // FLAC
    CODEC: 'audio/x-flac',
    MEDIA: 'audio'
  },
  wav: { // PCM
    CODEC: 'audio/wav; codecs="1"',
    MEDIA: 'audio'
  },
  webma: { // WEBM
    CODEC: 'audio/webm; codecs="vorbis"',
    MEDIA: 'audio'
  },
  fla: { // FLV / F4A
    CODEC: 'audio/x-flv',
    MEDIA: 'audio'
  },
  rtmpa: { // RTMP AUDIO
    CODEC: 'audio/rtmp; codecs="rtmp"',
    MEDIA: 'audio'
  },
  m4v: { // H.264 / MP4
    CODEC: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video'
  },
  m3u8v: { // H.264 / AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video'
  },
  m3uv: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'video'
  },
  ogv: { // OGG
    CODEC: 'video/ogg; codecs="theora, vorbis"',
    MEDIA: 'video'
  },
  webmv: { // WEBM
    CODEC: 'video/webm; codecs="vorbis, vp8"',
    MEDIA: 'video'
  },
  flv: { // FLV / F4V
    CODEC: 'video/x-flv',
    MEDIA: 'video'
  },
  rtmpv: { // RTMP VIDEO
    CODEC: 'video/rtmp; codecs="rtmp"',
    MEDIA: 'video'
  }
};

var internalStatus = exports.internalStatus = {
  newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
  guiFadeOut: false
};

var defaultStatus = exports.defaultStatus = {
  mediaSettings: {
    require: false,
    video: false,
    foundSupported: false,
    formats: []
  },
  paused: true,
  seeking: false,
  src: '',
  currentTimeText: '0:00',
  durationText: '',
  seekPercent: 0,
  remainingDuration: 0,
  playHeadPercent: 0,
  currentPercentRelative: 0,
  currentPercentAbsolute: 0,
  currentTime: 0,
  duration: 0,
  remaining: 0,
  ended: 0,
  error: {},
  bufferedTimeRanges: [],
  focus: false
};

var defaultOptions = exports.defaultOptions = {
  preload: 'metadata', // HTML5 Spec values: none, metadata, auto.
  minPlaybackRate: 0.5,
  maxPlaybackRate: 4,
  supplied: ['mp3'], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
  playbackRate: 1.0,
  defaultPlaybackRate: 1.0,
  bufferColour: '#dddddd', // Canvas fillStyle property Colour, gradient or pattern (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  volume: 0.8, // The volume. Number 0 to 1
  barDrag: true,
  guiFadeHoldTime: 3000,
  media: {
    title: '',
    poster: '',
    free: false
  },
  keyBindings: {},
  showRemainingDuration: false,
  muted: false,
  loop: false,
  autoplay: false,
  smoothPlayBar: false,
  fullScreen: false,
  verticalPlaybackRate: false,
  verticalVolume: false,
  keyEnabled: true,
  timeFormats: {
    showHour: false,
    showMin: true,
    showSec: true,
    padHour: false,
    padMin: true,
    padSec: true,
    sepHour: ':',
    sepMin: ':',
    sepSec: ''
  }
};

var keyIgnoreElementNames = exports.keyIgnoreElementNames = ['A', 'INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getHeight = exports.getWidth = exports.getOffset = exports.urlNotSetError = exports.urlNotSupportedError = exports.InvalidGlobalMethodException = exports.noFormatSupportedError = exports.updateObject = exports.traverseParentsUntilClassName = exports.toRelativePercentage = exports.toPercentage = exports.connectWithId = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _recompose = __webpack_require__(56);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var connectWithId = exports.connectWithId = function connectWithId() {
  return (0, _recompose.compose)((0, _recompose.getContext)({ id: _react2.default.PropTypes.string }), _reactRedux.connect.apply(undefined, arguments));
};

var toPercentage = exports.toPercentage = function toPercentage(number, max) {
  return 100 * (number / max);
};
var toRelativePercentage = exports.toRelativePercentage = function toRelativePercentage(number, max) {
  return number * (max / 100);
};

var traverseParentsUntilClassName = exports.traverseParentsUntilClassName = function traverseParentsUntilClassName(currentElement, className) {
  var element = currentElement;

  while (element.parentNode) {
    element = element.parentNode;

    if (element.className !== undefined && element.className.includes(className)) {
      return element;
    }
  }
  return false;
};

var updateObject = exports.updateObject = function updateObject(existingObject, newValues) {
  return _extends({}, existingObject, newValues);
};

var noFormatSupportedError = exports.noFormatSupportedError = function noFormatSupportedError(context) {
  return {
    context: context,
    message: _constants.errors.FORMAT_NO_SUPPORT,
    hint: _constants.hints.FORMAT_NO_SUPPORT
  };
};

var InvalidGlobalMethodException = exports.InvalidGlobalMethodException = function InvalidGlobalMethodException(context) {
  _classCallCheck(this, InvalidGlobalMethodException);

  this.context = context;
  this.message = _constants.errors.INVALID_GLOBAL_METHOD;
  this.hint = _constants.hints.INVALID_GLOBAL_METHOD;
};

var urlNotSupportedError = exports.urlNotSupportedError = function urlNotSupportedError(context) {
  return {
    context: context,
    message: _constants.errors.URL_NO_SUPPORT,
    hint: _constants.hints.URL_NO_SUPPORT
  };
};

var urlNotSetError = exports.urlNotSetError = function urlNotSetError(context) {
  return {
    context: context,
    message: _constants.errors.URL_NOT_SET,
    hint: _constants.hints.URL_NOT_SET
  };
};

var getOffset = exports.getOffset = function getOffset(el) {
  return {
    top: el.getBoundingClientRect().top + document.body.scrollTop,
    left: el.getBoundingClientRect().left + document.body.scrollLeft
  };
};

var getWidth = exports.getWidth = function getWidth(el) {
  return el.getBoundingClientRect().width;
};

var getHeight = exports.getHeight = function getHeight(el) {
  return el.getBoundingClientRect().height;
};

var limitValue = exports.limitValue = function limitValue(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }
  return value;
};

// Some IOS versions don't allow manually changing volume or mute
var canSetVolume = exports.canSetVolume = function canSetVolume() {
  var audio = new window.Audio();
  audio.volume = 0.5;

  return audio.volume === 0.5;
};

var convertTime = exports.convertTime = function convertTime(seconds, timeFormats) {
  if (isNaN(seconds)) {
    return '';
  }
  var myTime = new Date(seconds * 1000);

  var hour = myTime.getUTCHours();
  var min = timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60;
  var sec = timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60;
  var strHour = timeFormats.padHour && hour < 10 ? '0' + hour : hour;
  var strMin = timeFormats.padMin && min < 10 ? '0' + min : min;
  var strSec = timeFormats.padSec && sec < 10 ? '0' + sec : sec;

  var strTime = '';
  strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : '';
  strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : '';
  strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : '';

  return strTime;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focus = exports.setFullScreen = exports.setLoop = exports.setPlaybackRate = exports.setDuration = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.setOption = undefined;

var _constants = __webpack_require__(1);

var setOption = exports.setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};
var setMedia = exports.setMedia = function setMedia(id, media) {
  return {
    type: _constants.actionNames.SET_MEDIA,
    id: id,
    media: media
  };
};
var clearMedia = exports.clearMedia = function clearMedia(id) {
  return {
    type: _constants.actionNames.CLEAR_MEDIA,
    id: id
  };
};
var play = exports.play = function play(id, time) {
  return {
    type: _constants.actionNames.PLAY,
    id: id,
    time: time
  };
};
var pause = exports.pause = function pause(id, time) {
  return {
    type: _constants.actionNames.PAUSE,
    id: id,
    time: time
  };
};
var setPlayHead = exports.setPlayHead = function setPlayHead(id, percent) {
  return {
    type: _constants.actionNames.PLAY_HEAD,
    id: id,
    percent: percent
  };
};
var setVolume = exports.setVolume = function setVolume(id, volume) {
  return {
    type: _constants.actionNames.VOLUME,
    id: id,
    volume: volume
  };
};
var setMute = exports.setMute = function setMute(id, mute) {
  return {
    type: _constants.actionNames.MUTE,
    id: id,
    mute: mute
  };
};
var setDuration = exports.setDuration = function setDuration(id, remainingDuration) {
  return {
    type: _constants.actionNames.DURATION,
    id: id,
    remainingDuration: remainingDuration
  };
};
var setPlaybackRate = exports.setPlaybackRate = function setPlaybackRate(id, playbackRate) {
  return {
    type: _constants.actionNames.PLAYBACK_RATE,
    id: id,
    playbackRate: playbackRate
  };
};
var setLoop = exports.setLoop = function setLoop(id, loop) {
  return {
    type: _constants.actionNames.LOOP,
    id: id,
    loop: loop
  };
};
var setFullScreen = exports.setFullScreen = function setFullScreen(id, fullScreen) {
  return {
    type: _constants.actionNames.FULL_SCREEN,
    id: id,
    fullScreen: fullScreen
  };
};
var focus = exports.focus = function focus(id) {
  return {
    type: _constants.actionNames.FOCUS,
    id: id
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    barDrag: jPlayers[id].barDrag
  };
};

var BarEvents = function (_React$Component) {
  _inherits(BarEvents, _React$Component);

  function BarEvents() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, BarEvents);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = BarEvents.__proto__ || Object.getPrototypeOf(BarEvents)).call.apply(_ref3, [this].concat(args))), _this), _this.onClick = function (e) {
      return _this.props.clickMoveBar(_this.bar, e);
    }, _this.onTouchStart = function () {
      _this.dragging = true;
    }, _this.onTouchMove = function (e) {
      return _this.props.barDrag && _this.dragging ? _this.props.touchMoveBar(_this.bar, e) : null;
    }, _this.onTouchEnd = function () {
      _this.dragging = false;
    }, _this.onMouseMove = function (e) {
      return _this.props.barDrag && _this.dragging ? _this.props.clickMoveBar(_this.bar, e) : null;
    }, _this.onMouseDown = function () {
      _this.dragging = true;
    }, _this.onMouseUp = function () {
      _this.dragging = false;
    }, _this.setBar = function (ref) {
      return _this.bar = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BarEvents, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove, { passive: false });
      document.addEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        onClick: this.onClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        setBar: this.setBar
      });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        clickMoveBar: _react2.default.PropTypes.func.isRequired,
        touchMoveBar: _react2.default.PropTypes.func.isRequired,
        barDrag: _react2.default.PropTypes.bool.isRequired,
        children: _react2.default.PropTypes.node.isRequired
      };
    }
  }]);

  return BarEvents;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps)(BarEvents);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _playbackRateBarValue = __webpack_require__(45);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_playbackRateBarValue2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _volumeBarValue = __webpack_require__(52);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    verticalVolume: jPlayers[id].verticalVolume,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_volumeBarValue2.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    loop: jPlayers[id].loop,
    showRemainingDuration: jPlayers[id].showRemainingDuration,
    src: jPlayers[id].src,
    currentTime: jPlayers[id].currentTime,
    playHeadPercent: jPlayers[id].playHeadPercent,
    paused: jPlayers[id].paused,
    defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    preload: jPlayers[id].preload,
    volume: jPlayers[id].volume,
    muted: jPlayers[id].muted,
    autoplay: jPlayers[id].autoplay,
    newTime: jPlayers[id].newTime,
    require: jPlayers[id].mediaSettings.require,
    timeFormats: jPlayers[id].timeFormats,
    children: children
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref3) {
  var id = _ref3.id;
  return {
    setOption: function setOption(key, value) {
      return dispatch((0, _actions.setOption)(id, key, value));
    },
    pause: function pause(time) {
      return dispatch((0, _actions.pause)(id, time));
    }
  };
};

var MediaContainer = function (_React$Component) {
  _inherits(MediaContainer, _React$Component);

  _createClass(MediaContainer, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        onProgress: _react2.default.PropTypes.func,
        onTimeUpdate: _react2.default.PropTypes.func,
        onDurationChange: _react2.default.PropTypes.func,
        onRateChange: _react2.default.PropTypes.func,
        onSeeking: _react2.default.PropTypes.func,
        onSeeked: _react2.default.PropTypes.func,
        onPlay: _react2.default.PropTypes.func,
        onRepeat: _react2.default.PropTypes.func,
        onEnded: _react2.default.PropTypes.func,
        onError: _react2.default.PropTypes.func,
        onPlaying: _react2.default.PropTypes.func,
        onPause: _react2.default.PropTypes.func,
        onWaiting: _react2.default.PropTypes.func,
        onSuspend: _react2.default.PropTypes.func,
        onVolumeChange: _react2.default.PropTypes.func,
        onLoadStart: _react2.default.PropTypes.func,
        onLoadedMetadata: _react2.default.PropTypes.func,
        onAbort: _react2.default.PropTypes.func,
        onEmptied: _react2.default.PropTypes.func,
        onStalled: _react2.default.PropTypes.func,
        onLoadedData: _react2.default.PropTypes.func,
        onCanPlay: _react2.default.PropTypes.func,
        onCanPlayThrough: _react2.default.PropTypes.func,
        loop: _react2.default.PropTypes.bool.isRequired,
        showRemainingDuration: _react2.default.PropTypes.bool.isRequired,
        src: _react2.default.PropTypes.string.isRequired,
        playHeadPercent: _react2.default.PropTypes.number.isRequired,
        paused: _react2.default.PropTypes.bool.isRequired,
        setOption: _react2.default.PropTypes.func.isRequired,
        pause: _react2.default.PropTypes.func.isRequired,
        timeFormats: _react2.default.PropTypes.shape({
          showHour: _react2.default.PropTypes.bool.isRequired,
          showMin: _react2.default.PropTypes.bool.isRequired,
          showSec: _react2.default.PropTypes.bool.isRequired,
          padHour: _react2.default.PropTypes.bool.isRequired,
          padMin: _react2.default.PropTypes.bool.isRequired,
          padSec: _react2.default.PropTypes.bool.isRequired,
          sepHour: _react2.default.PropTypes.string.isRequired,
          sepMin: _react2.default.PropTypes.string.isRequired,
          sepSec: _react2.default.PropTypes.string.isRequired
        }).isRequired,
        /* eslint-disable react/no-unused-prop-types */
        newTime: _react2.default.PropTypes.number,
        autoplay: _react2.default.PropTypes.bool.isRequired,
        defaultPlaybackRate: _react2.default.PropTypes.number.isRequired,
        muted: _react2.default.PropTypes.bool.isRequired,
        playbackRate: _react2.default.PropTypes.number.isRequired,
        preload: _react2.default.PropTypes.string.isRequired,
        volume: _react2.default.PropTypes.number.isRequired,
        /* eslint-enable react/no-unused-prop-types */
        children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]).isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        onProgress: Function.prototype,
        onTimeUpdate: Function.prototype,
        onDurationChange: Function.prototype,
        onRateChange: Function.prototype,
        onSeeking: Function.prototype,
        onSeeked: Function.prototype,
        onPlay: Function.prototype,
        onRepeat: Function.prototype,
        onEnded: Function.prototype,
        onError: Function.prototype,
        onPlaying: Function.prototype,
        onPause: Function.prototype,
        onWaiting: Function.prototype,
        onSuspend: Function.prototype,
        onVolumeChange: Function.prototype,
        onLoadStart: Function.prototype,
        onLoadedMetadata: Function.prototype,
        onAbort: Function.prototype,
        onEmptied: Function.prototype,
        onStalled: Function.prototype,
        onLoadedData: Function.prototype,
        onCanPlay: Function.prototype,
        onCanPlayThrough: Function.prototype,
        newTime: null
      };
    }
  }]);

  function MediaContainer(props) {
    _classCallCheck(this, MediaContainer);

    var _this = _possibleConstructorReturn(this, (MediaContainer.__proto__ || Object.getPrototypeOf(MediaContainer)).call(this, props));

    _this.getCurrentPercentRelative = function () {
      var currentPercentRelative = 0;

      if (_this.currentMedia.seekable.length > 0) {
        currentPercentRelative = (0, _index.toPercentage)(_this.currentMedia.currentTime, _this.getSeekableEnd());
      }
      return currentPercentRelative;
    };

    _this.setCurrentMedia = function (ref) {
      _this.currentMedia = ref;
    };

    _this.getSeekableEnd = function () {
      return _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1);
    };

    _this.updateMediaStatus = function () {
      var seekPercent = 0;
      var durationText = '';

      var remaining = _this.currentMedia.duration - _this.currentMedia.currentTime;
      var currentTimeText = (0, _index.convertTime)(_this.currentMedia.currentTime, _this.props.timeFormats);
      var currentPercentAbsolute = (0, _index.toPercentage)(_this.currentMedia.currentTime, _this.currentMedia.duration);

      if (_this.currentMedia.seekable.length > 0) {
        seekPercent = (0, _index.toPercentage)(_this.getSeekableEnd(), _this.currentMedia.duration);
      }

      if (_this.props.showRemainingDuration) {
        durationText = (remaining > 0 ? '-' : '') + (0, _index.convertTime)(remaining, _this.props.timeFormats);
      } else {
        durationText = (0, _index.convertTime)(_this.currentMedia.duration, _this.props.timeFormats);
      }

      _this.props.setOption('durationText', durationText);
      _this.props.setOption('currentTimeText', currentTimeText);
      _this.props.setOption('seekPercent', seekPercent);
      _this.props.setOption('currentPercentRelative', _this.getCurrentPercentRelative());
      _this.props.setOption('currentPercentAbsolute', currentPercentAbsolute);
      _this.props.setOption('currentTime', _this.currentMedia.currentTime);
      _this.props.setOption('remaining', remaining);
      _this.props.setOption('duration', _this.currentMedia.duration);
      _this.props.setOption('playbackRate', _this.currentMedia.playbackRate);
    };

    _this.updateCurrentMedia = function (_ref4) {
      var defaultPlaybackRate = _ref4.defaultPlaybackRate,
          playbackRate = _ref4.playbackRate,
          preload = _ref4.preload,
          volume = _ref4.volume,
          muted = _ref4.muted,
          autoplay = _ref4.autoplay,
          loop = _ref4.loop;

      _this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
      _this.currentMedia.playbackRate = playbackRate;
      _this.currentMedia.preload = preload;
      _this.currentMedia.volume = volume;
      _this.currentMedia.muted = muted;
      _this.currentMedia.autoplay = autoplay;
      _this.currentMedia.loop = loop;
    };

    _this.state = {};

    _this.events = {
      onProgress: function onProgress() {
        var bufferedTimeRanges = [];

        for (var i = 0; i < _this.currentMedia.buffered.length; i += 1) {
          bufferedTimeRanges.push({
            start: _this.currentMedia.buffered.start(i),
            end: _this.currentMedia.buffered.end(i)
          });
        }
        _this.updateMediaStatus();
        _this.props.setOption('bufferedTimeRanges', bufferedTimeRanges);
        _this.props.onProgress();
      },
      onTimeUpdate: function onTimeUpdate() {
        _this.updateMediaStatus();
        _this.props.onTimeUpdate();
      },
      onDurationChange: function onDurationChange() {
        _this.updateMediaStatus();
        _this.props.onDurationChange();
      },
      onSeeking: function onSeeking() {
        _this.props.setOption('seeking', true);
        _this.props.onSeeking();
      },
      onSeeked: function onSeeked() {
        _this.props.setOption('seeking', false);
        _this.props.onSeeked();
      },
      onPlay: function onPlay() {
        _this.props.setOption('paused', false);
        _this.props.onPlay();
      },
      onEnded: function onEnded() {
        // Pause so that the play/pause button resets and the poster is shown again
        _this.props.pause(0);
        _this.updateMediaStatus();

        if (_this.props.loop) {
          _this.props.onRepeat();
        }
        _this.props.onEnded();
      },
      onError: function onError() {
        _this.props.setOption('error', (0, _index.urlNotSupportedError)(_this.props.src));
        _this.props.onError();
      },
      onRateChange: _this.props.onRateChange,
      onPlaying: _this.props.onPlaying,
      onPause: _this.props.onPause,
      onWaiting: _this.props.onWaiting,
      onSuspend: _this.props.onSuspend,
      onVolumeChange: _this.props.onVolumeChange,
      onLoadStart: _this.props.onLoadStart,
      onLoadedMetadata: _this.props.onLoadedMetadata,
      onAbort: _this.props.onAbort,
      onEmptied: _this.props.onEmptied,
      onStalled: _this.props.onStalled,
      onLoadedData: _this.props.onLoadedData,
      onCanPlay: _this.props.onCanPlay,
      onCanPlayThrough: _this.props.onCanPlayThrough
    };
    return _this;
  }

  _createClass(MediaContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.currentMedia.src = this.props.src;
      this.props.setOption('volumeSupported', (0, _index.canSetVolume)());

      this.updateCurrentMedia(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateCurrentMedia(nextProps);

      if (nextProps.src !== this.props.src) {
        this.currentMedia.src = nextProps.src;
      }

      if (nextProps.newTime !== null) {
        this.currentMedia.currentTime = nextProps.newTime;
        this.props.setOption('newTime', null);
      }

      if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
        // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
        // Hasn't fully loaded the song????
        if (this.currentMedia.seekable.length > 0) {
          this.currentMedia.currentTime = (0, _index.toRelativePercentage)(nextProps.playHeadPercent, this.getSeekableEnd());
          // Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
          this.props.setOption('currentPercentRelative', this.getCurrentPercentRelative());
        }
      }

      if (nextProps.paused !== this.props.paused) {
        if (nextProps.paused) {
          this.currentMedia.pause();
        } else {
          this.currentMedia.play();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), _extends({}, this.events, {
        ref: this.setCurrentMedia
      }));
    }
  }]);

  return MediaContainer;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps, mapDispatchToProps)(MediaContainer);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = ReactMotion;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = _.merge;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _audio = __webpack_require__(33);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    require: !jPlayers[id].mediaSettings.video
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_audio2.default);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _browserUnsupported = __webpack_require__(34);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id,
      children = _ref2.children;
  return {
    foundSupported: jPlayers[id].mediaSettings.foundSupported,
    children: children
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_browserUnsupported2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _bufferBar = __webpack_require__(35);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
    duration: jPlayers[id].duration,
    bufferColour: jPlayers[id].bufferColour,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

var BufferBarContainer = function (_React$Component) {
  _inherits(BufferBarContainer, _React$Component);

  function BufferBarContainer() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, BufferBarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = BufferBarContainer.__proto__ || Object.getPrototypeOf(BufferBarContainer)).call.apply(_ref3, [this].concat(args))), _this), _this.setCanvas = function (ref) {
      _this.canvas = ref;
    }, _this.clearBuffer = function () {
      _this.canvas.getContext('2d').clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    }, _this.fillBufferPartially = function (_ref4) {
      var bufferedTimeRanges = _ref4.bufferedTimeRanges,
          bufferColour = _ref4.bufferColour,
          duration = _ref4.duration;

      var modifier = _this.canvas.width / duration;
      var context = _this.canvas.getContext('2d');

      bufferedTimeRanges.forEach(function (bufferedTimeRange) {
        var startX = bufferedTimeRange.start * modifier;
        var endX = bufferedTimeRange.end * modifier;
        var width = endX - startX;

        context.fillStyle = bufferColour;
        context.fillRect(startX, 0, width, _this.canvas.height);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BufferBarContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
        if (nextProps.bufferedTimeRanges.length === 0) {
          this.clearBuffer();
        }
        this.fillBufferPartially(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_bufferBar2.default, _extends({ setCanvas: this.setCanvas }, this.props.attributes));
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _react2.default.PropTypes.object,
        bufferedTimeRanges: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
          start: _react2.default.PropTypes.number.isRequired,
          end: _react2.default.PropTypes.number.isRequired
        })).isRequired,
        /* eslint-disable react/no-unused-prop-types */
        bufferColour: _react2.default.PropTypes.string.isRequired,
        duration: _react2.default.PropTypes.number.isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        attributes: null
      };
    }
  }]);

  return BufferBarContainer;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(BufferBarContainer);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _currentTime = __webpack_require__(36);

var _currentTime2 = _interopRequireDefault(_currentTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return _extends({
    children: children || jPlayers[id].currentTimeText
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_currentTime2.default);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _download = __webpack_require__(37);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    free: jPlayers[id].media.free,
    url: jPlayers[id].src
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_download2.default);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _duration = __webpack_require__(38);

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return _extends({
    children: children || jPlayers[id].durationText
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_duration2.default);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _fullScreen = __webpack_require__(39);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {
  var fullScreen = _ref4.fullScreen;
  var dispatch = _ref5.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onClick: function onClick() {
      return dispatch((0, _actions.setFullScreen)(id, !fullScreen));
    }
  }, attributes);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_fullScreen2.default);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _gui = __webpack_require__(40);

var _gui2 = _interopRequireDefault(_gui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    guiFadeOut: jPlayers[id].guiFadeOut,
    guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout
  };
};

var mergeProps = function mergeProps(stateProps, _ref4, _ref3) {
  var dispatch = _ref4.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onMouseMove: function onMouseMove() {
      if (stateProps.fullScreen && !stateProps.paused) {
        dispatch((0, _actions.setOption)(id, 'guiFadeOut', false));
        clearTimeout(stateProps.guiFadeHoldTimeout);
      }
    },
    fullScreen: stateProps.fullScreen,
    guiFadeOut: stateProps.guiFadeOut
  }, attributes);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_gui2.default);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _screenfull = __webpack_require__(58);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _classnames = __webpack_require__(55);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(2);

var _constants = __webpack_require__(1);

var _jPlayer = __webpack_require__(41);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var formatPropTypes = {};

Object.keys(_constants.formats).forEach(function (key) {
  formatPropTypes[key] = _react2.default.PropTypes.string;
});

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var _classNames;

  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    media: jPlayers[id].media,
    error: jPlayers[id].error,
    fullScreen: jPlayers[id].fullScreen,
    keyEnabled: jPlayers[id].keyEnabled,
    paused: jPlayers[id].paused,
    guiFadeHoldTimeout: jPlayers[id].guiFadeHoldTimeout,
    guiFadeHoldTime: jPlayers[id].guiFadeHoldTime,
    children: children,
    attributes: _extends({}, attributes, {
      className: (0, _classnames2.default)(attributes.className, _constants.classes.JPLAYER, (_classNames = {}, _defineProperty(_classNames, _constants.classes.states.AUDIO, !jPlayers[id].mediaSettings.video), _defineProperty(_classNames, _constants.classes.states.VIDEO, jPlayers[id].mediaSettings.video), _defineProperty(_classNames, _constants.classes.states.PLAYING, !jPlayers[id].paused), _defineProperty(_classNames, _constants.classes.states.IDLE, jPlayers[id].currentTime === 0), _defineProperty(_classNames, _constants.classes.states.FULL_SCREEN, jPlayers[id].fullScreen), _defineProperty(_classNames, _constants.classes.states.MUTED, jPlayers[id].muted), _defineProperty(_classNames, _constants.classes.states.VOLUME_LOW, !jPlayers[id].muted && jPlayers[id].volume < 0.5), _defineProperty(_classNames, _constants.classes.states.VOLUME_HIGH, !jPlayers[id].muted && jPlayers[id].volume >= 0.5), _defineProperty(_classNames, _constants.classes.states.SEEKING, jPlayers[id].seeking), _defineProperty(_classNames, _constants.classes.states.LOOPED, jPlayers[id].loop), _defineProperty(_classNames, _constants.classes.states.NO_BROWSER_SUPPORT, !jPlayers[id].mediaSettings.foundSupported), _defineProperty(_classNames, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayers[id].volumeSupported), _classNames))
    })
  };
};

var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {
  var dispatch = _ref3.dispatch;
  var id = _ref4.id;
  return _extends({
    setMedia: function setMedia(media) {
      return dispatch((0, _actions.setMedia)(id, media));
    },
    setOption: function setOption(key, value) {
      return dispatch((0, _actions.setOption)(id, key, value));
    }
  }, stateProps);
};

var JPlayerContainer = function (_React$Component) {
  _inherits(JPlayerContainer, _React$Component);

  function JPlayerContainer() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, JPlayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = JPlayerContainer.__proto__ || Object.getPrototypeOf(JPlayerContainer)).call.apply(_ref5, [this].concat(args))), _this), _this.onMouseMove = function (e) {
      if (_this.props.fullScreen) {
        if (_this.props.paused) {
          if ((0, _index.traverseParentsUntilClassName)(e.target, _constants.classes.GUI)) {
            return;
          }
        }
        _this.startGuiFadeOutTimer();
      }
    }, _this.setJPlayer = function (ref) {
      return _this.jPlayer = ref;
    }, _this.setFullScreen = function (_ref6) {
      var fullScreen = _ref6.fullScreen;

      if (fullScreen) {
        if (_screenfull2.default.enabled) {
          _screenfull2.default.request(_this.jPlayer);
        }
        // Legacy browsers don't implement full screen api
        // Safari 5.1 doesn't hide the other elements even with fullscreen api
        document.body.style.visibility = 'hidden';
      } else {
        if (_screenfull2.default.enabled) {
          _screenfull2.default.exit();
        }
        document.body.style.visibility = 'visible';
      }
    }, _this.startGuiFadeOutTimer = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        clearTimeout(_this.props.guiFadeHoldTimeout);
        _this.props.setOption('guiFadeOut', false);
        _this.props.setOption('guiFadeHoldTimeout', setTimeout(_this.startGuiFadeOut, _this.props.guiFadeHoldTime));
      }
    }, _this.startGuiFadeOut = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        _this.props.setOption('guiFadeOut', true);
      }
    }, _this.closeFullScreen = function () {
      if (!_screenfull2.default.isFullscreen) {
        _this.props.setOption('fullScreen', false);
      }
    }, _this.logError = function (_ref7) {
      var error = _ref7.error;
      return console.error(error);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(JPlayerContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_screenfull2.default.enabled) {
        document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.setMedia(this.props.media);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.error !== this.props.error) {
        this.logError(nextProps);
      }
      if (nextProps.fullScreen !== this.props.fullScreen) {
        this.setFullScreen(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.paused !== this.props.paused) {
        this.startGuiFadeOutTimer();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_screenfull2.default.enabled) {
        document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);
      }
    }
    // eslint-disable-next-line no-console

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _jPlayer2.default,
        _extends({
          setJPlayer: this.setJPlayer, keyEnabled: this.props.keyEnabled,
          onMouseMove: this.onMouseMove }, this.props.attributes),
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _react2.default.PropTypes.object,
        media: _react2.default.PropTypes.shape({
          title: _react2.default.PropTypes.string,
          artist: _react2.default.PropTypes.string,
          sources: _react2.default.PropTypes.shape(formatPropTypes).isRequired,
          poster: _react2.default.PropTypes.string,
          free: _react2.default.PropTypes.bool
        }).isRequired,
        setOption: _react2.default.PropTypes.func.isRequired,
        setMedia: _react2.default.PropTypes.func.isRequired,
        error: _react2.default.PropTypes.shape({
          context: _react2.default.PropTypes.string,
          message: _react2.default.PropTypes.string,
          hint: _react2.default.PropTypes.string
        }).isRequired,
        fullScreen: _react2.default.PropTypes.bool.isRequired,
        children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]).isRequired,
        keyEnabled: _react2.default.PropTypes.bool.isRequired,
        paused: _react2.default.PropTypes.bool.isRequired,
        guiFadeHoldTime: _react2.default.PropTypes.number.isRequired,
        guiFadeHoldTimeout: _react2.default.PropTypes.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        attributes: null,
        guiFadeHoldTimeout: null
      };
    }
  }]);

  return JPlayerContainer;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(JPlayerContainer);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _mute = __webpack_require__(42);

var _mute2 = _interopRequireDefault(_mute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    muted: jPlayers[id].muted
  };
};

var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {
  var muted = _ref4.muted;
  var dispatch = _ref5.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onClick: function onClick() {
      return dispatch((0, _actions.setMute)(id, !muted));
    }
  }, attributes);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_mute2.default);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _playBar = __webpack_require__(43);

var _playBar2 = _interopRequireDefault(_playBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    smoothPlayBar: jPlayers[id].smoothPlayBar,
    currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
    currentPercentRelative: jPlayers[id].currentPercentRelative
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_playBar2.default);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(3);

var _index = __webpack_require__(2);

var _play = __webpack_require__(44);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused
  };
};

var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {
  var paused = _ref4.paused;
  var dispatch = _ref5.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onClick: function onClick() {
      return paused ? dispatch((0, _actions.play)(id)) : dispatch((0, _actions.pause)(id));
    }
  }, attributes);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_play2.default);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _barEvents = __webpack_require__(4);

var _barEvents2 = _interopRequireDefault(_barEvents);

var _playbackRateBar = __webpack_require__(46);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

var _playbackRateBarValueContainer = __webpack_require__(5);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    movePlaybackRate: function movePlaybackRate(bar, dispatch, e) {
      var _jPlayers$id = jPlayers[id],
          verticalPlaybackRate = _jPlayers$id.verticalPlaybackRate,
          minPlaybackRate = _jPlayers$id.minPlaybackRate,
          maxPlaybackRate = _jPlayers$id.maxPlaybackRate;

      var offset = (0, _index.getOffset)(bar);
      var x = e.pageX - offset.left;
      var w = (0, _index.getWidth)(bar);
      var y = (0, _index.getHeight)(bar) - e.pageY + offset.top;
      var h = (0, _index.getHeight)(bar);
      var ratio = void 0;

      if (verticalPlaybackRate) {
        ratio = y / h;
      } else {
        ratio = x / w;
      }

      var playbackRateValue = ratio * (maxPlaybackRate - minPlaybackRate) + minPlaybackRate;

      dispatch((0, _actions.setPlaybackRate)(id, playbackRateValue));
    },
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlaybackRate = _ref3.movePlaybackRate,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlaybackRate(bar, dispatch, e);
    },
    onTouch: function onTouch(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlaybackRate(bar, dispatch, e.touches[0]);
    },
    attributes: attributes
  };
};

var PlaybackRateBarContainer = function PlaybackRateBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouch = _ref5.onTouch,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _barEvents2.default,
    {
      clickMoveBar: onClick,
      touchMoveBar: onTouch
    },
    _react2.default.createElement(
      _playbackRateBar2.default,
      attributes,
      children
    )
  );
};

PlaybackRateBarContainer.defaultProps = {
  attributes: null,
  children: _react2.default.createElement(_playbackRateBarValueContainer2.default, null)
};

PlaybackRateBarContainer.propTypes = {
  attributes: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node,
  onClick: _react2.default.PropTypes.func.isRequired,
  onTouch: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _poster = __webpack_require__(47);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    src: jPlayers[id].media.poster
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_poster2.default);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _repeat = __webpack_require__(48);

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop
  };
};

var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {
  var loop = _ref4.loop;
  var dispatch = _ref5.dispatch;

  var id = _ref3.id,
      attributes = _objectWithoutProperties(_ref3, ['id']);

  return _extends({
    onClick: function onClick() {
      return dispatch((0, _actions.setLoop)(id, !loop));
    }
  }, attributes);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_repeat2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _barEvents = __webpack_require__(4);

var _barEvents2 = _interopRequireDefault(_barEvents);

var _seekBar = __webpack_require__(49);

var _seekBar2 = _interopRequireDefault(_seekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    seekPercent: jPlayers[id].seekPercent,
    movePlayHead: function movePlayHead(bar, dispatch, e) {
      var offset = (0, _index.getOffset)(bar);
      var x = e.pageX - offset.left;
      var w = (0, _index.getWidth)(bar);
      var percentage = 100 * (x / w);

      dispatch((0, _actions.setPlayHead)(id, percentage));
    },
    attributes: attributes
  };
};

// eslint-disable-next-line no-unused-vars
var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlayHead = _ref3.movePlayHead,
      seekPercent = _ref3.seekPercent,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlayHead(bar, dispatch, e);
    },
    onTouch: function onTouch(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlayHead(bar, dispatch, e.touches[0]);
    },
    seekPercent: seekPercent,
    attributes: attributes
  };
};

var SeekBarContainer = function SeekBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouch = _ref5.onTouch,
      seekPercent = _ref5.seekPercent,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _barEvents2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouch },
    _react2.default.createElement(_seekBar2.default, _extends({ seekPercent: seekPercent }, attributes))
  );
};

SeekBarContainer.defaultProps = {
  attributes: null
};

SeekBarContainer.propTypes = {
  attributes: _react2.default.PropTypes.object,
  onClick: _react2.default.PropTypes.func.isRequired,
  onTouch: _react2.default.PropTypes.func.isRequired,
  seekPercent: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(SeekBarContainer);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _title = __webpack_require__(50);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var children = _ref.children,
      id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['children', 'id']);

  return _extends({
    title: jPlayers[id].media.title,
    artist: jPlayers[id].media.artist,
    children: children
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_title2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _video = __webpack_require__(51);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return _extends({
    require: jPlayers[id].mediaSettings.video
  }, attributes);
};

var mergeProps = function mergeProps(stateProps) {
  return _extends({}, stateProps);
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_video2.default);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _barEvents = __webpack_require__(4);

var _barEvents2 = _interopRequireDefault(_barEvents);

var _volumeBar = __webpack_require__(53);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

var _volumeBarValueContainer = __webpack_require__(6);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    moveVolumeBar: function moveVolumeBar(bar, dispatch, e) {
      var verticalVolume = jPlayers[id].verticalVolume;

      var offset = (0, _index.getOffset)(bar);
      var x = e.pageX - offset.left;
      var w = (0, _index.getWidth)(bar);
      var y = (0, _index.getHeight)(bar) - e.pageY + offset.top;
      var h = (0, _index.getHeight)(bar);

      if (verticalVolume) {
        dispatch((0, _actions.setVolume)(id, y / h));
      } else {
        dispatch((0, _actions.setVolume)(id, x / w));
      }
    },
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var moveVolumeBar = _ref3.moveVolumeBar,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return moveVolumeBar(bar, dispatch, e);
    },
    onTouch: function onTouch(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      moveVolumeBar(bar, dispatch, e.touches[0]);
    },
    attributes: attributes
  };
};

var VolumeBarContainer = function VolumeBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouch = _ref5.onTouch,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _barEvents2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouch },
    _react2.default.createElement(
      _volumeBar2.default,
      attributes,
      children
    )
  );
};

VolumeBarContainer.defaultProps = {
  attributes: null,
  children: _react2.default.createElement(_volumeBarValueContainer2.default, null)
};

VolumeBarContainer.propTypes = {
  attributes: _react2.default.PropTypes.object,
  children: _react2.default.PropTypes.node,
  onClick: _react2.default.PropTypes.func.isRequired,
  onTouch: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(VolumeBarContainer);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _constants = __webpack_require__(1);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref) {
  var jPlayers = _ref.jPlayers;
  return _extends({}, jPlayers);
};

var getActions = function getActions(dispatch, id) {
  return {
    setOption: function setOption(key, value) {
      return dispatch((0, _actions.setOption)(id, key, value));
    },
    setMedia: function setMedia(media) {
      return dispatch((0, _actions.setMedia)(id, media));
    },
    clearMedia: function clearMedia() {
      return dispatch((0, _actions.clearMedia)(id));
    },
    play: function play(time) {
      return dispatch((0, _actions.play)(id, time));
    },
    pause: function pause(time) {
      return dispatch((0, _actions.pause)(id, time));
    },
    setPlayHead: function setPlayHead(percent) {
      return dispatch((0, _actions.setPlayHead)(id, percent));
    },
    setVolume: function setVolume(volume) {
      return dispatch((0, _actions.setVolume)(id, volume));
    },
    setMute: function setMute(mute) {
      return dispatch((0, _actions.setMute)(id, mute));
    },
    setDuration: function setDuration(remainingDuration) {
      return dispatch((0, _actions.setDuration)(id, remainingDuration));
    },
    setPlaybackRate: function setPlaybackRate(playbackRate) {
      return dispatch((0, _actions.setPlaybackRate)(id, playbackRate));
    },
    setLoop: function setLoop(loop) {
      return dispatch((0, _actions.setLoop)(id, loop));
    },
    setFullScreen: function setFullScreen(fullScreen) {
      return dispatch((0, _actions.setFullScreen)(id, fullScreen));
    },
    focus: function focus() {
      return dispatch((0, _actions.focus)(id));
    }
  };
};

var mergeProps = function mergeProps(jPlayers, _ref3, _ref2) {
  var dispatch = _ref3.dispatch;

  var id = _ref2.id,
      props = _objectWithoutProperties(_ref2, ['id']);

  var newJPlayers = {};

  Object.keys(jPlayers).forEach(function (jPlayerKey) {
    var jPlayer = jPlayers[jPlayerKey];
    var options = {};
    var status = {};

    Object.keys(_constants.defaultOptions).forEach(function (key) {
      if (jPlayer[key] !== undefined) {
        options[key] = jPlayer[key];
      }
    });

    Object.keys(_constants.defaultStatus).forEach(function (key) {
      if (jPlayer[key] !== undefined) {
        status[key] = jPlayer[key];
      }
    });

    newJPlayers[jPlayerKey] = _extends({}, getActions(dispatch, jPlayerKey), {
      options: options,
      status: status
    });
  });

  var jPlayer = newJPlayers[id],
      otherPlayers = _objectWithoutProperties(newJPlayers, [id]);

  var returnedJPlayers = _extends({}, props, jPlayer);

  if (Object.keys(otherPlayers).length) {
    returnedJPlayers.jPlayers = otherPlayers;
  }

  return returnedJPlayers;
};

var Connect = function Connect(jPlayer) {
  var ConnectedPlayer = (0, _reactRedux.connect)(mapStateToProps, null, mergeProps)(jPlayer);

  // IE9 doesn't support fn.name
  var playerName = jPlayer.name === undefined ? jPlayer.toString().match(/^function\s*([^\s(]+)/)[1] : jPlayer.name;

  return function (_React$Component) {
    _inherits(ConnectedJPlayer, _React$Component);

    function ConnectedJPlayer() {
      var _ref4;

      var _temp, _this, _ret;

      _classCallCheck(this, ConnectedJPlayer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref4 = ConnectedJPlayer.__proto__ || Object.getPrototypeOf(ConnectedJPlayer)).call.apply(_ref4, [this].concat(args))), _this), _this.getChildContext = function () {
        return {
          id: playerName
        };
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ConnectedJPlayer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ConnectedPlayer, _extends({ id: playerName }, this.props));
      }
    }], [{
      key: 'id',
      get: function get() {
        return playerName;
      }
    }, {
      key: 'jPlayer',
      get: function get() {
        return jPlayer;
      }
    }, {
      key: 'childContextTypes',
      get: function get() {
        return {
          id: _react2.default.PropTypes.string
        };
      }
    }]);

    return ConnectedJPlayer;
  }(_react2.default.Component);
};

exports.default = Connect;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(10);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getInitialStates = function getInitialStates(connectedJPlayers) {
  var jPlayerStates = {};
  var newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [connectedJPlayers];
  }

  newConnectedJPlayers.forEach(function (connectedJPlayer) {
    jPlayerStates[connectedJPlayer.id] = (0, _lodash2.default)({}, _extends({}, _constants.internalStatus, _constants.defaultStatus, _constants.defaultOptions), connectedJPlayer.jPlayer.options);
  });

  return {
    jPlayers: jPlayerStates
  };
};

exports.default = getInitialStates;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = __webpack_require__(57);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(1);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var resetStatus = function resetStatus(state) {
  return (0, _index.updateObject)(state, _extends({}, _constants.defaultStatus));
};

var clearMedia = function clearMedia(state) {
  return (0, _index.updateObject)(state, _extends({}, resetStatus(state), {
    media: _constants.defaultOptions.media
  }));
};

var updateFormats = function updateFormats(state, media) {
  var newMediaSettings = _extends({}, state.mediaSettings);
  var newFormats = [];

  Object.keys(media.sources).forEach(function (supplied) {
    var canPlayType = void 0;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(_constants.formats[supplied].MEDIA).canPlayType(_constants.formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    newFormats.push({
      supplied: supplied,
      supported: canPlayType
    });
  });

  newMediaSettings.formats = newFormats;

  return (0, _index.updateObject)(state, {
    mediaSettings: newMediaSettings
  });
};

var setMedia = function setMedia(state, _ref) {
  var _ref$media = _ref.media,
      media = _ref$media === undefined ? { sources: [] } : _ref$media;

  var newState = _extends({}, state, resetStatus(state), updateFormats(state, media));

  newState.mediaSettings.formats.forEach(function (format) {
    if (format.supported && !newState.mediaSettings.foundSupported) {
      newState.mediaSettings.video = _constants.formats[format.supplied].MEDIA === 'video';
      newState.src = media.sources[format.supplied];
      newState.paused = true;
      newState.mediaSettings.foundSupported = true;
    }
  });

  if (!newState.mediaSettings.foundSupported) {
    newState.error = (0, _index.noFormatSupportedError)('{ media.sources: \'' + Object.keys(media.sources).join(', ') + '\' }');
  }
  newState.media = (0, _index.updateObject)(_constants.defaultOptions.media, media);

  return newState;
};

var play = function play(state, _ref2) {
  var time = _ref2.time;

  if (state.src) {
    return (0, _index.updateObject)(state, {
      paused: false,
      newTime: !isNaN(time) ? time : state.newTime
    });
  }
  return (0, _index.updateObject)(state, {
    error: (0, _index.urlNotSetError)(play.name)
  });
};

var pause = function pause(state, _ref3) {
  var time = _ref3.time;

  if (state.src) {
    return (0, _index.updateObject)(state, {
      paused: true,
      newTime: !isNaN(time) ? time : state.newTime
    });
  }
  return (0, _index.updateObject)(state, {
    error: (0, _index.urlNotSetError)(pause.name)
  });
};

var setPlayHead = function setPlayHead(state, _ref4) {
  var percent = _ref4.percent;

  var limitedPercent = (0, _index.limitValue)(percent, 0, 100);

  if (state.src) {
    return (0, _index.updateObject)(state, {
      playHeadPercent: limitedPercent
    });
  }
  return (0, _index.updateObject)(state, {
    error: (0, _index.urlNotSetError)(setPlayHead.name)
  });
};

var setVolume = function setVolume(state, _ref5) {
  var volume = _ref5.volume;
  return (0, _index.updateObject)(state, {
    volume: (0, _index.limitValue)(volume, 0, 1)
  });
};

var setMute = function setMute(state, _ref6) {
  var mute = _ref6.mute;
  return (0, _index.updateObject)(state, {
    muted: mute
  });
};

var setDuration = function setDuration(state, _ref7) {
  var remainingDuration = _ref7.remainingDuration;
  return (0, _index.updateObject)(state, {
    remainingDuration: !remainingDuration
  });
};

var setPlaybackRate = function setPlaybackRate(state, _ref8) {
  var playbackRate = _ref8.playbackRate;
  return (0, _index.updateObject)(state, {
    playbackRate: (0, _index.limitValue)(playbackRate, state.minPlaybackRate, state.maxPlaybackRate)
  });
};

var setLoop = function setLoop(state, _ref9) {
  var loop = _ref9.loop;
  return (0, _index.updateObject)(state, {
    loop: loop
  });
};

var setFullScreen = function setFullScreen(state, _ref10) {
  var fullScreen = _ref10.fullScreen;
  return (0, _index.updateObject)(state, {
    fullScreen: fullScreen
  });
};

var focus = function focus(state, _ref11) {
  var id = _ref11.id;

  var newState = _extends({}, state);
  var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {
    return newState[key].keyEnabled;
  }).shift();

  if (newState[id].keyEnabled) {
    Object.keys(state).forEach(function (key) {
      if (key === id) {
        newState[key] = (0, _index.updateObject)(newState[key], { focus: true });
      } else {
        newState[key] = (0, _index.updateObject)(newState[key], { focus: false });
      }
    });
  } else if (newState[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = (0, _index.updateObject)(newState[firstKeyEnabledPlayer], { focus: true });
    return (0, _index.updateObject)(newState, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }
  return newState;
};

var updatePlayer = function updatePlayer(jPlayer, action) {
  switch (action.type) {
    case _constants.actionNames.SET_OPTION:
      return (0, _index.updateObject)(jPlayer, _defineProperty({}, action.key, action.value));
    case _constants.actionNames.CLEAR_MEDIA:
      return clearMedia(jPlayer);
    case _constants.actionNames.SET_MEDIA:
      return setMedia(jPlayer, action);
    case _constants.actionNames.PLAY:
      return play(jPlayer, action);
    case _constants.actionNames.PAUSE:
      return pause(jPlayer, action);
    case _constants.actionNames.PLAY_HEAD:
      return setPlayHead(jPlayer, action);
    case _constants.actionNames.VOLUME:
      return setVolume(setMute(jPlayer, { mute: action.volume <= 0 }), action);
    case _constants.actionNames.MUTE:
      return setMute(jPlayer, action);
    case _constants.actionNames.DURATION:
      return setDuration(jPlayer, action);
    case _constants.actionNames.PLAYBACK_RATE:
      return setPlaybackRate(jPlayer, action);
    case _constants.actionNames.LOOP:
      return setLoop(jPlayer, action);
    case _constants.actionNames.FULL_SCREEN:
      return setFullScreen(jPlayer, action);
    default:
      return null;
  }
};

var actionTypeValid = function actionTypeValid(actionType) {
  return Object.keys(_constants.actionNames).some(function (currentActionType) {
    return currentActionType === actionType;
  });
};

var setGlobalOptions = function setGlobalOptions(state, action) {
  var newState = _extends({}, state);

  Object.keys(newState).forEach(function (key) {
    var _newState$key$global = newState[key].global,
        global = _newState$key$global === undefined ? [] : _newState$key$global;


    global.forEach(function (actionType) {
      if (!actionTypeValid(actionType)) {
        throw new _index.InvalidGlobalMethodException(actionType);
      }
    });

    if (key !== action.id && (0, _lodash2.default)(global, action.type)) {
      newState = (0, _index.updateObject)(newState, _defineProperty({}, key, updatePlayer(newState[key], action, action.type)));
    }
  });
  return newState;
};

var jPlayerReducer = function jPlayerReducer(state, action) {
  var newState = _extends({}, state);
  var jPlayer = updatePlayer(newState[action.id], action);

  if (jPlayer !== null) {
    newState = setGlobalOptions(newState, action);
    newState = (0, _index.updateObject)(newState, _defineProperty({}, action.id, jPlayer));

    return jPlayerReducer(newState, {
      type: _constants.actionNames.FOCUS,
      id: action.id
    });
  }

  if (action.type === _constants.actionNames.FOCUS) {
    return (0, _index.updateObject)(newState, focus(newState, action));
  }
  return newState;
};

exports.default = jPlayerReducer;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mediaContainer = __webpack_require__(7);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Audio = function Audio(_ref) {
  var require = _ref.require,
      events = _ref.events,
      attributes = _objectWithoutProperties(_ref, ['require', 'events']);

  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement('audio', attributes)
  ) : null;
};

Audio.defaultProps = {
  events: null
};

Audio.propTypes = {
  require: _react2.default.PropTypes.bool.isRequired,
  events: _react2.default.PropTypes.shape({
    onProgress: _react2.default.PropTypes.func,
    onTimeUpdate: _react2.default.PropTypes.func,
    onDurationChange: _react2.default.PropTypes.func,
    onRateChange: _react2.default.PropTypes.func,
    onSeeking: _react2.default.PropTypes.func,
    onSeeked: _react2.default.PropTypes.func,
    onPlay: _react2.default.PropTypes.func,
    onRepeat: _react2.default.PropTypes.func,
    onEnded: _react2.default.PropTypes.func,
    onError: _react2.default.PropTypes.func,
    onPlaying: _react2.default.PropTypes.func,
    onPause: _react2.default.PropTypes.func,
    onWaiting: _react2.default.PropTypes.func,
    onSuspend: _react2.default.PropTypes.func,
    onVolumeChange: _react2.default.PropTypes.func,
    onLoadStart: _react2.default.PropTypes.func,
    onLoadedMetadata: _react2.default.PropTypes.func,
    onAbort: _react2.default.PropTypes.func,
    onEmptied: _react2.default.PropTypes.func,
    onStalled: _react2.default.PropTypes.func,
    onLoadedData: _react2.default.PropTypes.func,
    onCanPlay: _react2.default.PropTypes.func,
    onCanPlayThrough: _react2.default.PropTypes.func
  })
};

exports.default = Audio;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserUnsupported = function BrowserUnsupported(_ref) {
  var foundSupported = _ref.foundSupported,
      children = _ref.children;
  return foundSupported ? null : children;
};

BrowserUnsupported.defaultProps = {
  children: _react2.default.createElement(
    'div',
    { className: _constants.classes.NO_BROWSER_SUPPORT },
    _react2.default.createElement(
      'h4',
      null,
      'Browser Unsupported'
    ),
    _react2.default.createElement(
      'div',
      null,
      'Your browser does not support this media file. To play the media you will need to update your browser to a more recent version.'
    )
  )
};

BrowserUnsupported.propTypes = {
  children: _react2.default.PropTypes.node,
  foundSupported: _react2.default.PropTypes.bool.isRequired
};

exports.default = BrowserUnsupported;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas,
      attributes = _objectWithoutProperties(_ref, ['setCanvas']);

  return _react2.default.createElement('canvas', _extends({}, attributes, { ref: setCanvas,
    className: _constants.classes.BUFFER_BAR
  }));
};

BufferBar.propTypes = {
  setCanvas: _react2.default.PropTypes.func.isRequired
};

exports.default = BufferBar;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CurrentTime = function CurrentTime(_ref) {
  var attributes = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.CURRENT_TIME }));
};

CurrentTime.propTypes = {
  children: _react2.default.PropTypes.string.isRequired
};

exports.default = CurrentTime;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Download = function Download(_ref) {
  var free = _ref.free,
      url = _ref.url,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['free', 'url', 'children']);

  return free ? _react2.default.createElement(
    'a',
    _extends({}, attributes, { className: _constants.classes.DOWNLOAD, href: url,
      download: true, target: '_blank', rel: 'noopener noreferrer'
    }),
    children
  ) : null;
};

Download.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  url: _react2.default.PropTypes.string.isRequired,
  free: _react2.default.PropTypes.bool.isRequired
};

exports.default = Download;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Duration = function Duration(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['children']);

  return children !== '' ? _react2.default.createElement(
    'div',
    _extends({}, attributes, { className: _constants.classes.DURATION }),
    children
  ) : null;
};

Duration.propTypes = {
  children: _react2.default.PropTypes.string.isRequired
};

exports.default = Duration;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FullScreen = function FullScreen(_ref) {
  var onClick = _ref.onClick,
      attributes = _objectWithoutProperties(_ref, ['onClick']);

  return _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.FULL_SCREEN, onClick: onClick }));
};

FullScreen.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = FullScreen;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(8);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var motion = function motion(values, onMouseMove, attributes) {
  return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.GUI,
    onMouseMove: onMouseMove,
    style: {
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : ''
    }
  }));
};

var Gui = function Gui(_ref) {
  var fullScreen = _ref.fullScreen,
      guiFadeOut = _ref.guiFadeOut,
      onMouseMove = _ref.onMouseMove,
      attributes = _objectWithoutProperties(_ref, ['fullScreen', 'guiFadeOut', 'onMouseMove']);

  return _react2.default.createElement(
    _reactMotion.Motion,
    {
      defaultStyle: { opacity: 1 },
      style: { opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1 }
    },
    function (values) {
      return motion(values, onMouseMove, attributes);
    }
  );
};

Gui.propTypes = {
  onMouseMove: _react2.default.PropTypes.func.isRequired,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]).isRequired,
  guiFadeOut: _react2.default.PropTypes.bool.isRequired,
  fullScreen: _react2.default.PropTypes.bool.isRequired
};

exports.default = Gui;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _keyControlContainer = __webpack_require__(54);

var _keyControlContainer2 = _interopRequireDefault(_keyControlContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var JPlayer = function JPlayer(_ref) {
  var keyEnabled = _ref.keyEnabled,
      setJPlayer = _ref.setJPlayer,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['keyEnabled', 'setJPlayer', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, attributes, { ref: setJPlayer, draggable: false }),
    children,
    keyEnabled && _react2.default.createElement(_keyControlContainer2.default, null)
  );
};

JPlayer.propTypes = {
  setJPlayer: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]).isRequired,
  keyEnabled: _react2.default.PropTypes.bool
};

JPlayer.defaultProps = {
  keyEnabled: _constants.defaultOptions.keyEnabled,
  setJPlayer: null
};

exports.default = JPlayer;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Mute = function Mute(_ref) {
  var onClick = _ref.onClick,
      attributes = _objectWithoutProperties(_ref, ['onClick']);

  return _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.MUTE, onClick: onClick }));
};

Mute.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = Mute;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(8);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlayBar = function PlayBar(_ref) {
  var currentPercentAbsolute = _ref.currentPercentAbsolute,
      currentPercentRelative = _ref.currentPercentRelative,
      smoothPlayBar = _ref.smoothPlayBar,
      attributes = _objectWithoutProperties(_ref, ['currentPercentAbsolute', 'currentPercentRelative', 'smoothPlayBar']);

  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: { smoothWidth: (0, _reactMotion.spring)(currentPercentAbsolute, [250]) } },
    function (values) {
      return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.PLAY_BAR,
        style: { width: smoothPlayBar ? values.smoothWidth + '%' : currentPercentRelative + '%' }
      }));
    }
  );
};

PlayBar.defaultProps = {
  children: null
};

PlayBar.propTypes = {
  children: _react2.default.PropTypes.node,
  currentPercentRelative: _react2.default.PropTypes.number.isRequired,
  currentPercentAbsolute: _react2.default.PropTypes.number.isRequired,
  smoothPlayBar: _react2.default.PropTypes.bool.isRequired
};

exports.default = PlayBar;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Play = function Play(_ref) {
  var onClick = _ref.onClick,
      attributes = _objectWithoutProperties(_ref, ['onClick']);

  return _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.PLAY, onClick: onClick }));
};

Play.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = Play;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlaybackRateBarValue = function PlaybackRateBarValue(_ref) {
  var playbackRate = _ref.playbackRate,
      minPlaybackRate = _ref.minPlaybackRate,
      maxPlaybackRate = _ref.maxPlaybackRate,
      verticalPlaybackRate = _ref.verticalPlaybackRate,
      attributes = _objectWithoutProperties(_ref, ['playbackRate', 'minPlaybackRate', 'maxPlaybackRate', 'verticalPlaybackRate']);

  var style = function style() {
    var ratio = (playbackRate - minPlaybackRate) / (maxPlaybackRate - minPlaybackRate);
    var playbackRateBarPercentage = ratio * 100 + '%';

    return {
      width: !verticalPlaybackRate ? playbackRateBarPercentage : null,
      height: verticalPlaybackRate ? playbackRateBarPercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.PLAYBACK_RATE_BAR_VALUE, style: style()
  }));
};

PlaybackRateBarValue.propTypes = {
  verticalPlaybackRate: _react2.default.PropTypes.bool.isRequired,
  minPlaybackRate: _react2.default.PropTypes.number.isRequired,
  maxPlaybackRate: _react2.default.PropTypes.number.isRequired,
  playbackRate: _react2.default.PropTypes.number.isRequired
};

exports.default = PlaybackRateBarValue;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PlaybackRateBar = function PlaybackRateBar(_ref) {
  var onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      setBar = _ref.setBar,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['onClick', 'onMouseDown', 'onTouchStart', 'setBar', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({}, attributes, { ref: setBar,
      className: _constants.classes.PLAYBACK_RATE_BAR, onClick: onClick,
      onMouseDown: onMouseDown, onTouchStart: onTouchStart
    }),
    children
  );
};

PlaybackRateBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null
};

PlaybackRateBar.propTypes = {
  onClick: _react2.default.PropTypes.func,
  onMouseDown: _react2.default.PropTypes.func,
  onTouchStart: _react2.default.PropTypes.func,
  setBar: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = PlaybackRateBar;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      attributes = _objectWithoutProperties(_ref, ['src', 'alt']);

  return _react2.default.createElement('img', _extends({}, attributes, { className: _constants.classes.POSTER, alt: alt, src: src }));
};

Poster.defaultProps = {
  alt: null
};

Poster.propTypes = {
  src: _react2.default.PropTypes.string.isRequired,
  alt: _react2.default.PropTypes.string
};

exports.default = Poster;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Repeat = function Repeat(_ref) {
  var onClick = _ref.onClick,
      attributes = _objectWithoutProperties(_ref, ['onClick']);

  return _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.REPEAT, onClick: onClick }));
};

Repeat.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = Repeat;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SeekBar = function SeekBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      seekPercent = _ref.seekPercent,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart', 'seekPercent']);

  return _react2.default.createElement('div', _extends({}, attributes, { ref: setBar, className: _constants.classes.SEEK_BAR,
    style: { width: seekPercent + '%' }, onClick: onClick,
    onTouchStart: onTouchStart, onMouseDown: onMouseDown
  }));
};

SeekBar.defaultProps = {
  setBar: null,
  onClick: null,
  onMouseDown: null,
  onTouchStart: null
};

SeekBar.propTypes = {
  seekPercent: _react2.default.PropTypes.number.isRequired,
  setBar: _react2.default.PropTypes.func,
  onClick: _react2.default.PropTypes.func,
  onMouseDown: _react2.default.PropTypes.func,
  onTouchStart: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = SeekBar;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Title = function Title(_ref) {
  var children = _ref.children,
      artist = _ref.artist,
      title = _ref.title,
      attributes = _objectWithoutProperties(_ref, ['children', 'artist', 'title']);

  return _react2.default.createElement(
    'div',
    _extends({}, attributes, { className: _constants.classes.TITLE }),
    children === null ? artist + ' - ' + title : children
  );
};

Title.defaultProps = {
  children: null,
  artist: null,
  title: null
};

Title.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  artist: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};

exports.default = Title;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mediaContainer = __webpack_require__(7);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Video = function Video(_ref) {
  var require = _ref.require,
      events = _ref.events,
      attributes = _objectWithoutProperties(_ref, ['require', 'events']);

  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement('video', attributes)
  ) : null;
};

Video.defaultProps = {
  events: null,
  children: null,
  require: _constants.defaultStatus.mediaSettings.video
};

Video.propTypes = {
  children: _react2.default.PropTypes.node,
  require: _react2.default.PropTypes.bool,
  events: _react2.default.PropTypes.shape({
    onProgress: _react2.default.PropTypes.func,
    onTimeUpdate: _react2.default.PropTypes.func,
    onDurationChange: _react2.default.PropTypes.func,
    onRateChange: _react2.default.PropTypes.func,
    onSeeking: _react2.default.PropTypes.func,
    onSeeked: _react2.default.PropTypes.func,
    onPlay: _react2.default.PropTypes.func,
    onRepeat: _react2.default.PropTypes.func,
    onEnded: _react2.default.PropTypes.func,
    onError: _react2.default.PropTypes.func,
    onPlaying: _react2.default.PropTypes.func,
    onPause: _react2.default.PropTypes.func,
    onWaiting: _react2.default.PropTypes.func,
    onSuspend: _react2.default.PropTypes.func,
    onVolumeChange: _react2.default.PropTypes.func,
    onLoadStart: _react2.default.PropTypes.func,
    onLoadedMetadata: _react2.default.PropTypes.func,
    onAbort: _react2.default.PropTypes.func,
    onEmptied: _react2.default.PropTypes.func,
    onStalled: _react2.default.PropTypes.func,
    onLoadedData: _react2.default.PropTypes.func,
    onCanPlay: _react2.default.PropTypes.func,
    onCanPlayThrough: _react2.default.PropTypes.func
  })
};

exports.default = Video;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume,
      attributes = _objectWithoutProperties(_ref, ['muted', 'volume', 'verticalVolume']);

  var style = function style() {
    var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';

    return {
      width: !verticalVolume ? volumeBarValuePercentage : null,
      height: verticalVolume ? volumeBarValuePercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.VOLUME_BAR_VALUE, style: style() }));
};

VolumeBarValue.defaultProps = {
  verticalVolume: _constants.defaultOptions.verticalVolume
};

VolumeBarValue.propTypes = {
  muted: _react2.default.PropTypes.bool.isRequired,
  volume: _react2.default.PropTypes.number.isRequired,
  verticalVolume: _react2.default.PropTypes.bool
};

exports.default = VolumeBarValue;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var VolumeBar = function VolumeBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart']);

  return _react2.default.createElement('div', _extends({}, attributes, { ref: setBar, className: _constants.classes.VOLUME_BAR,
    onClick: onClick, onMouseDown: onMouseDown, onTouchStart: onTouchStart
  }));
};

VolumeBar.defaultProps = {
  onClick: null,
  setBar: null,
  onMouseDown: null,
  onTouchStart: null
};

VolumeBar.propTypes = {
  onClick: _react2.default.PropTypes.func,
  onMouseDown: _react2.default.PropTypes.func,
  onTouchStart: _react2.default.PropTypes.func,
  setBar: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = VolumeBar;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(10);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(1);

var _actions = __webpack_require__(3);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused,
    fullScreen: jPlayers[id].fullScreen,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    loop: jPlayers[id].loop,
    keyBindings: jPlayers[id].keyBindings,
    focus: jPlayers[id].focus
  };
};

var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {
  var dispatch = _ref3.dispatch;
  var id = _ref4.id;
  return {
    focus: stateProps.focus,
    keyBindings: (0, _lodash2.default)({}, {
      play: {
        key: 80, // p
        fn: function fn() {
          return stateProps.paused ? dispatch((0, _actions.play)(id)) : dispatch((0, _actions.pause)(id));
        }
      },
      fullScreen: {
        key: 70, // f
        fn: function fn() {
          return dispatch((0, _actions.setFullScreen)(id, !stateProps.fullScreen));
        }
      },
      mute: {
        key: 77, // m
        fn: function fn() {
          return dispatch((0, _actions.setMute)(id, !stateProps.muted));
        }
      },
      volumeUp: {
        key: 190, // .
        fn: function fn() {
          dispatch((0, _actions.setVolume)(id, stateProps.volume + 0.1));
        }
      },
      volumeDown: {
        key: 188, // ,
        fn: function fn() {
          return dispatch((0, _actions.setVolume)(id, stateProps.volume - 0.1));
        }
      },
      loop: {
        key: 76, // l
        fn: function fn() {
          return dispatch((0, _actions.setLoop)(id, !stateProps.loop));
        }
      }
    }, stateProps.keyBindings),
    id: id
  };
};

var KeyControlContainer = function (_React$Component) {
  _inherits(KeyControlContainer, _React$Component);

  function KeyControlContainer() {
    var _ref5;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyControlContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = KeyControlContainer.__proto__ || Object.getPrototypeOf(KeyControlContainer)).call.apply(_ref5, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      if (_constants.keyIgnoreElementNames.some(function (name) {
        return name.toUpperCase() === event.target.nodeName.toUpperCase();
      }) || !_this.props.focus) {
        return;
      }
      Object.keys(_this.props.keyBindings).forEach(function (key) {
        var keyBinding = _this.props.keyBindings[key];

        if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
          event.preventDefault();
          keyBinding.fn();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyControlContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        focus: _react2.default.PropTypes.bool.isRequired,
        keyBindings: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.object).isRequired
      };
    }
  }]);

  return KeyControlContainer;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(KeyControlContainer);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = Recompose;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = _.includes;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = screenfull;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.Gui = exports.JPlayer = exports.connect = exports.actions = exports.reducer = exports.getInitialStates = exports.classes = undefined;

var _getInitialStates = __webpack_require__(31);

var _getInitialStates2 = _interopRequireDefault(_getInitialStates);

var _reducer = __webpack_require__(32);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(3);

var actions = _interopRequireWildcard(_actions);

var _connect = __webpack_require__(30);

var _connect2 = _interopRequireDefault(_connect);

var _guiContainer = __webpack_require__(18);

var _guiContainer2 = _interopRequireDefault(_guiContainer);

var _videoContainer = __webpack_require__(28);

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _audioContainer = __webpack_require__(11);

var _audioContainer2 = _interopRequireDefault(_audioContainer);

var _jPlayerContainer = __webpack_require__(19);

var _jPlayerContainer2 = _interopRequireDefault(_jPlayerContainer);

var _seekBarContainer = __webpack_require__(26);

var _seekBarContainer2 = _interopRequireDefault(_seekBarContainer);

var _playBarContainer = __webpack_require__(21);

var _playBarContainer2 = _interopRequireDefault(_playBarContainer);

var _bufferBarContainer = __webpack_require__(13);

var _bufferBarContainer2 = _interopRequireDefault(_bufferBarContainer);

var _posterContainer = __webpack_require__(24);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(27);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _fullScreenContainer = __webpack_require__(17);

var _fullScreenContainer2 = _interopRequireDefault(_fullScreenContainer);

var _muteContainer = __webpack_require__(20);

var _muteContainer2 = _interopRequireDefault(_muteContainer);

var _playContainer = __webpack_require__(22);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _repeatContainer = __webpack_require__(25);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _playbackRateBarContainer = __webpack_require__(23);

var _playbackRateBarContainer2 = _interopRequireDefault(_playbackRateBarContainer);

var _playbackRateBarValueContainer = __webpack_require__(5);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _volumeBarContainer = __webpack_require__(29);

var _volumeBarContainer2 = _interopRequireDefault(_volumeBarContainer);

var _volumeBarValueContainer = __webpack_require__(6);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _downloadContainer = __webpack_require__(15);

var _downloadContainer2 = _interopRequireDefault(_downloadContainer);

var _durationContainer = __webpack_require__(16);

var _durationContainer2 = _interopRequireDefault(_durationContainer);

var _currentTimeContainer = __webpack_require__(14);

var _currentTimeContainer2 = _interopRequireDefault(_currentTimeContainer);

var _browserUnsupportedContainer = __webpack_require__(12);

var _browserUnsupportedContainer2 = _interopRequireDefault(_browserUnsupportedContainer);

var _constants = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */

var jPlayerReducer = {
  jPlayers: _reducer2.default
};

exports.classes = _constants.classes;
exports.getInitialStates = _getInitialStates2.default;
exports.reducer = jPlayerReducer;
exports.actions = actions;
exports.connect = _connect2.default;
exports.JPlayer = _jPlayerContainer2.default;
exports.Gui = _guiContainer2.default;
exports.SeekBar = _seekBarContainer2.default;
exports.PlayBar = _playBarContainer2.default;
exports.BufferBar = _bufferBarContainer2.default;
exports.Poster = _posterContainer2.default;
exports.Video = _videoContainer2.default;
exports.Audio = _audioContainer2.default;
exports.Title = _titleContainer2.default;
exports.FullScreen = _fullScreenContainer2.default;
exports.Mute = _muteContainer2.default;
exports.Play = _playContainer2.default;
exports.Repeat = _repeatContainer2.default;
exports.PlaybackRateBar = _playbackRateBarContainer2.default;
exports.PlaybackRateBarValue = _playbackRateBarValueContainer2.default;
exports.VolumeBar = _volumeBarContainer2.default;
exports.VolumeBarValue = _volumeBarValueContainer2.default;
exports.Download = _downloadContainer2.default;
exports.Duration = _durationContainer2.default;
exports.CurrentTime = _currentTimeContainer2.default;
exports.BrowserUnsupported = _browserUnsupportedContainer2.default;

/***/ })
/******/ ]);