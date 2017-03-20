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
  guiFadeOut: false,
  playHeadPercent: 0,
  error: {}
};

var defaultStatus = exports.defaultStatus = {
  mediaSettings: {
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
  currentPercentRelative: 0,
  currentPercentAbsolute: 0,
  currentTime: 0,
  duration: 0,
  bufferedTimeRanges: [],
  focused: false
};

var defaultOptions = exports.defaultOptions = {
  preload: 'metadata',
  minPlaybackRate: 0.5,
  maxPlaybackRate: 4,
  playbackRate: 1.0,
  defaultPlaybackRate: 1.0,
  bufferColour: '#ddd',
  volume: 0.8,
  barDrag: true,
  guiFadeHoldTime: 3000,
  media: {
    sources: {},
    title: '',
    artist: '',
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
exports.focus = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.setOption = undefined;

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

var Bar = function (_React$Component) {
  _inherits(Bar, _React$Component);

  function Bar() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref3, [this].concat(args))), _this), _this.onClick = function (e) {
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

  _createClass(Bar, [{
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

  return Bar;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps)(Bar);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _playbackRateBarValue = __webpack_require__(34);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_playbackRateBarValue2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _volumeBarValue = __webpack_require__(37);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    verticalVolume: jPlayers[id].verticalVolume,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_volumeBarValue2.default);

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
    timeFormats: jPlayers[id].timeFormats,
    children: children
  };
};

var mapDispatchToProps = {
  setOption: _actions.setOption,
  pause: _actions.pause
};

var MediaContainer = function (_React$Component) {
  _inherits(MediaContainer, _React$Component);

  _createClass(MediaContainer, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        onAbort: _react2.default.PropTypes.func,
        onCanPlay: _react2.default.PropTypes.func,
        onCanPlayThrough: _react2.default.PropTypes.func,
        onDurationChange: _react2.default.PropTypes.func,
        onEmptied: _react2.default.PropTypes.func,
        onEncrypted: _react2.default.PropTypes.func,
        onEnded: _react2.default.PropTypes.func,
        onError: _react2.default.PropTypes.func,
        onLoadedData: _react2.default.PropTypes.func,
        onLoadedMetadata: _react2.default.PropTypes.func,
        onLoadStart: _react2.default.PropTypes.func,
        onPause: _react2.default.PropTypes.func,
        onPlay: _react2.default.PropTypes.func,
        onPlaying: _react2.default.PropTypes.func,
        onProgress: _react2.default.PropTypes.func,
        onRateChange: _react2.default.PropTypes.func,
        onSeeked: _react2.default.PropTypes.func,
        onSeeking: _react2.default.PropTypes.func,
        onStalled: _react2.default.PropTypes.func,
        onSuspend: _react2.default.PropTypes.func,
        onTimeUpdate: _react2.default.PropTypes.func,
        onVolumeChange: _react2.default.PropTypes.func,
        onWaiting: _react2.default.PropTypes.func,
        showRemainingDuration: _react2.default.PropTypes.bool.isRequired,
        src: _react2.default.PropTypes.string.isRequired,
        playHeadPercent: _react2.default.PropTypes.number.isRequired,
        paused: _react2.default.PropTypes.bool.isRequired,
        setOption: _react2.default.PropTypes.func.isRequired,
        pause: _react2.default.PropTypes.func.isRequired,
        id: _react2.default.PropTypes.string.isRequired,
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
        loop: _react2.default.PropTypes.bool.isRequired,
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
        onAbort: Function.prototype,
        onCanPlay: Function.prototype,
        onCanPlayThrough: Function.prototype,
        onDurationChange: Function.prototype,
        onEmptied: Function.prototype,
        onEncrypted: Function.prototype,
        onEnded: Function.prototype,
        onError: Function.prototype,
        onLoadedData: Function.prototype,
        onLoadedMetadata: Function.prototype,
        onLoadStart: Function.prototype,
        onPause: Function.prototype,
        onPlay: Function.prototype,
        onPlaying: Function.prototype,
        onProgress: Function.prototype,
        onRateChange: Function.prototype,
        onSeeked: Function.prototype,
        onSeeking: Function.prototype,
        onStalled: Function.prototype,
        onSuspend: Function.prototype,
        onTimeUpdate: Function.prototype,
        onVolumeChange: Function.prototype,
        onWaiting: Function.prototype,
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

    _this.setDurationText = function () {
      var durationText = '';

      if (_this.props.showRemainingDuration) {
        var timeRemaining = _this.currentMedia.duration - _this.currentMedia.currentTime;

        durationText = (timeRemaining > 0 ? '-' : '') + (0, _index.convertTime)(timeRemaining, _this.props.timeFormats);
      } else {
        durationText = (0, _index.convertTime)(_this.currentMedia.duration, _this.props.timeFormats);
      }

      _this.props.setOption(_this.props.id, 'durationText', durationText);
    };

    _this.setCurrentTimeText = function () {
      var currentTimeText = (0, _index.convertTime)(_this.currentMedia.currentTime, _this.props.timeFormats);

      _this.props.setOption(_this.props.id, 'currentTimeText', currentTimeText);
    };

    _this.updateMediaStatus = function () {
      var seekPercent = 0;

      var currentPercentAbsolute = (0, _index.toPercentage)(_this.currentMedia.currentTime, _this.currentMedia.duration);

      if (_this.currentMedia.seekable.length > 0) {
        seekPercent = (0, _index.toPercentage)(_this.getSeekableEnd(), _this.currentMedia.duration);
      }

      _this.setDurationText();
      _this.setCurrentTimeText();

      _this.props.setOption(_this.props.id, 'seekPercent', seekPercent);
      _this.props.setOption(_this.props.id, 'currentPercentRelative', _this.getCurrentPercentRelative());
      _this.props.setOption(_this.props.id, 'currentPercentAbsolute', currentPercentAbsolute);
      _this.props.setOption(_this.props.id, 'currentTime', _this.currentMedia.currentTime);
      _this.props.setOption(_this.props.id, 'duration', _this.currentMedia.duration);
      _this.props.setOption(_this.props.id, 'playbackRate', _this.currentMedia.playbackRate);
    };

    _this.updateCurrentMedia = function (_ref3) {
      var defaultPlaybackRate = _ref3.defaultPlaybackRate,
          playbackRate = _ref3.playbackRate,
          preload = _ref3.preload,
          volume = _ref3.volume,
          muted = _ref3.muted,
          autoplay = _ref3.autoplay,
          loop = _ref3.loop;

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
      onAbort: _this.props.onAbort,
      onCanPlay: _this.props.onCanPlay,
      onCanPlayThrough: _this.props.onCanPlayThrough,
      onDurationChange: function onDurationChange() {
        _this.updateMediaStatus();
        _this.props.onDurationChange();
      },
      onEmptied: _this.props.onEmptied,
      onEncrypted: _this.props.onEncrypted,
      onEnded: function onEnded() {
        // Pause so that the play/pause button resets and the poster is shown again
        _this.props.pause(_this.props.id, 0);
        _this.updateMediaStatus();
        _this.props.onEnded();
      },
      onError: function onError() {
        _this.props.setOption(_this.props.id, 'error', (0, _index.urlNotSupportedError)(_this.props.src));
        _this.props.onError();
      },
      onLoadedData: _this.props.onLoadedData,
      onLoadedMetadata: _this.props.onLoadedMetadata,
      onLoadStart: _this.props.onLoadStart,
      onPause: _this.props.onPause,
      onPlay: function onPlay() {
        _this.props.setOption(_this.props.id, 'paused', false);
        _this.props.onPlay();
      },
      onPlaying: _this.props.onPlaying,
      onProgress: function onProgress() {
        var bufferedTimeRanges = [];

        for (var i = 0; i < _this.currentMedia.buffered.length; i += 1) {
          bufferedTimeRanges.push({
            start: _this.currentMedia.buffered.start(i),
            end: _this.currentMedia.buffered.end(i)
          });
        }
        _this.updateMediaStatus();
        _this.props.setOption(_this.props.id, 'bufferedTimeRanges', bufferedTimeRanges);
        _this.props.onProgress();
      },
      onRateChange: _this.props.onRateChange,
      onSeeked: function onSeeked() {
        _this.props.setOption(_this.props.id, 'seeking', false);
        _this.props.onSeeked();
      },
      onSeeking: function onSeeking() {
        _this.props.setOption(_this.props.id, 'seeking', true);
        _this.props.onSeeking();
      },
      onStalled: _this.props.onStalled,
      onSuspend: _this.props.onSuspend,
      onTimeUpdate: function onTimeUpdate() {
        _this.updateMediaStatus();
        _this.props.onTimeUpdate();
      },
      onVolumeChange: _this.props.onVolumeChange,
      onWaiting: _this.props.onWaiting
    };
    return _this;
  }

  _createClass(MediaContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.currentMedia.src = this.props.src;
      this.props.setOption(this.props.id, 'volumeSupported', (0, _index.canSetVolume)());

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
        this.props.setOption(this.props.id, 'newTime', null);
      }

      if (nextProps.playHeadPercent !== this.props.playHeadPercent) {
        // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
        // Hasn't fully loaded the song????
        if (this.currentMedia.seekable.length > 0) {
          this.currentMedia.currentTime = (0, _index.toRelativePercentage)(nextProps.playHeadPercent, this.getSeekableEnd());
          // Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
          this.props.setOption(this.props.id, 'currentPercentRelative', this.getCurrentPercentRelative());
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
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
        this.setDurationText();
      }
      if (prevProps.timeFormats !== this.props.timeFormats) {
        this.setCurrentTimeText();
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

var _index = __webpack_require__(2);

var _audio = __webpack_require__(33);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      events = _ref.events,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'events', 'children']);

  return {
    require: !jPlayers[id].mediaSettings.video,
    events: events,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_audio2.default);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _bar = __webpack_require__(4);

var _bar2 = _interopRequireDefault(_bar);

var _playbackRateBar = __webpack_require__(35);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

var _playbackRateBarValueContainer = __webpack_require__(5);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

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

      dispatch((0, _actions.setOption)(id, 'playbackRate', playbackRateValue));
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlaybackRate = _ref3.movePlaybackRate,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlaybackRate(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlaybackRate(bar, dispatch, e.touches[0]);
    },
    children: children,
    attributes: attributes
  };
};

var PlaybackRateBarContainer = function PlaybackRateBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    {
      clickMoveBar: onClick,
      touchMoveBar: onTouchMove
    },
    _react2.default.createElement(
      _playbackRateBar2.default,
      attributes,
      children
    )
  );
};

PlaybackRateBarContainer.defaultProps = {
  children: _react2.default.createElement(_playbackRateBarValueContainer2.default, null)
};

PlaybackRateBarContainer.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node,
  onClick: _react2.default.PropTypes.func.isRequired,
  onTouchMove: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);

/***/ }),
/* 13 */
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

var _bar = __webpack_require__(4);

var _bar2 = _interopRequireDefault(_bar);

var _seekBar = __webpack_require__(36);

var _seekBar2 = _interopRequireDefault(_seekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    seekPercent: jPlayers[id].seekPercent,
    movePlayHead: function movePlayHead(bar, dispatch, e) {
      var offset = (0, _index.getOffset)(bar);
      var x = e.pageX - offset.left;
      var w = (0, _index.getWidth)(bar);
      var percentage = 100 * (x / w);

      dispatch((0, _actions.setPlayHead)(id, percentage));
    },
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var movePlayHead = _ref3.movePlayHead,
      seekPercent = _ref3.seekPercent,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return movePlayHead(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      movePlayHead(bar, dispatch, e.touches[0]);
    },
    seekPercent: seekPercent,
    children: children,
    attributes: attributes
  };
};

var SeekBarContainer = function SeekBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      seekPercent = _ref5.seekPercent,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouchMove },
    _react2.default.createElement(
      _seekBar2.default,
      _extends({ seekPercent: seekPercent }, attributes),
      children
    )
  );
};

SeekBarContainer.defaultProps = {
  children: null
};

SeekBarContainer.propTypes = {
  children: _react2.default.PropTypes.node,
  attributes: _react2.default.PropTypes.object.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired,
  onTouchMove: _react2.default.PropTypes.func.isRequired,
  seekPercent: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(SeekBarContainer);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _bar = __webpack_require__(4);

var _bar2 = _interopRequireDefault(_bar);

var _volumeBar = __webpack_require__(38);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

var _volumeBarValueContainer = __webpack_require__(6);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

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
    children: children,
    attributes: attributes
  };
};

var mergeProps = function mergeProps(_ref3, _ref4) {
  var moveVolumeBar = _ref3.moveVolumeBar,
      children = _ref3.children,
      attributes = _ref3.attributes;
  var dispatch = _ref4.dispatch;
  return {
    onClick: function onClick(bar, e) {
      return moveVolumeBar(bar, dispatch, e);
    },
    onTouchMove: function onTouchMove(bar, e) {
      // Stop page scrolling
      e.preventDefault();

      moveVolumeBar(bar, dispatch, e.touches[0]);
    },
    children: children,
    attributes: attributes
  };
};

var VolumeBarContainer = function VolumeBarContainer(_ref5) {
  var onClick = _ref5.onClick,
      onTouchMove = _ref5.onTouchMove,
      children = _ref5.children,
      attributes = _ref5.attributes;
  return _react2.default.createElement(
    _bar2.default,
    { clickMoveBar: onClick, touchMoveBar: onTouchMove },
    _react2.default.createElement(
      _volumeBar2.default,
      attributes,
      children
    )
  );
};

VolumeBarContainer.defaultProps = {
  children: _react2.default.createElement(_volumeBarValueContainer2.default, null)
};

VolumeBarContainer.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node,
  onClick: _react2.default.PropTypes.func.isRequired,
  onTouchMove: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(VolumeBarContainer);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _browserUnsupported = __webpack_require__(39);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    foundSupported: jPlayers[id].mediaSettings.foundSupported,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_browserUnsupported2.default);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(2);

var _bufferBar = __webpack_require__(40);

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
      return _react2.default.createElement(_bufferBar2.default, { setCanvas: this.setCanvas, attributes: this.props.attributes });
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        attributes: _react2.default.PropTypes.object.isRequired,
        bufferedTimeRanges: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
          start: _react2.default.PropTypes.number.isRequired,
          end: _react2.default.PropTypes.number.isRequired
        })).isRequired,
        /* eslint-disable react/no-unused-prop-types */
        bufferColour: _react2.default.PropTypes.string.isRequired,
        duration: _react2.default.PropTypes.number.isRequired
      };
    }
  }]);

  return BufferBarContainer;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps)(BufferBarContainer);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _currentTime = __webpack_require__(41);

var _currentTime2 = _interopRequireDefault(_currentTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    children: children || jPlayers[id].currentTimeText,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_currentTime2.default);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _download = __webpack_require__(42);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    free: jPlayers[id].media.free,
    url: jPlayers[id].src,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_download2.default);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _duration = __webpack_require__(43);

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    children: children || jPlayers[id].durationText,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_duration2.default);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _fullScreen = __webpack_require__(44);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    fullScreen: jPlayers[id].fullScreen,
    id: id,
    children: children,
    attributes: attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(id, fullScreen) {
      return dispatch((0, _actions.setOption)(id, 'fullScreen', !fullScreen));
    }
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps, mapDispatchToProps)(_fullScreen2.default);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _gui = __webpack_require__(45);

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
/* 22 */
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

var _jPlayer = __webpack_require__(46);

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
    id: id,
    children: children,
    attributes: _extends({}, attributes, {
      className: (0, _classnames2.default)(attributes.className, _constants.classes.JPLAYER, (_classNames = {}, _defineProperty(_classNames, _constants.classes.states.AUDIO, !jPlayers[id].mediaSettings.video), _defineProperty(_classNames, _constants.classes.states.VIDEO, jPlayers[id].mediaSettings.video), _defineProperty(_classNames, _constants.classes.states.PLAYING, !jPlayers[id].paused), _defineProperty(_classNames, _constants.classes.states.IDLE, jPlayers[id].currentTime === 0), _defineProperty(_classNames, _constants.classes.states.FULL_SCREEN, jPlayers[id].fullScreen), _defineProperty(_classNames, _constants.classes.states.MUTED, jPlayers[id].muted), _defineProperty(_classNames, _constants.classes.states.VOLUME_LOW, !jPlayers[id].muted && jPlayers[id].volume < 0.5), _defineProperty(_classNames, _constants.classes.states.VOLUME_HIGH, !jPlayers[id].muted && jPlayers[id].volume >= 0.5), _defineProperty(_classNames, _constants.classes.states.SEEKING, jPlayers[id].seeking), _defineProperty(_classNames, _constants.classes.states.LOOPED, jPlayers[id].loop), _defineProperty(_classNames, _constants.classes.states.NO_BROWSER_SUPPORT, !jPlayers[id].mediaSettings.foundSupported), _defineProperty(_classNames, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayers[id].volumeSupported), _classNames))
    })
  };
};

var mapDispatchToProps = function mapDispatchToProps() {
  return {
    setMedia: _actions.setMedia,
    setOption: _actions.setOption
  };
};

var JPlayerContainer = function (_React$Component) {
  _inherits(JPlayerContainer, _React$Component);

  function JPlayerContainer() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, JPlayerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = JPlayerContainer.__proto__ || Object.getPrototypeOf(JPlayerContainer)).call.apply(_ref3, [this].concat(args))), _this), _this.onMouseMove = function (e) {
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
    }, _this.setFullScreen = function (_ref4) {
      var fullScreen = _ref4.fullScreen;

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
        _this.props.setOption(_this.props.id, 'guiFadeOut', false);
        _this.props.setOption(_this.props.id, 'guiFadeHoldTimeout', setTimeout(_this.startGuiFadeOut, _this.props.guiFadeHoldTime));
      }
    }, _this.startGuiFadeOut = function () {
      if (_this.props.fullScreen && !_this.props.paused) {
        _this.props.setOption(_this.props.id, 'guiFadeOut', true);
      }
    }, _this.closeFullScreen = function () {
      if (!_screenfull2.default.isFullscreen) {
        _this.props.setOption(_this.props.id, 'fullScreen', false);
      }
    }, _this.logError = function (_ref5) {
      var error = _ref5.error;
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
      this.props.setMedia(this.props.id, this.props.media);
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
        id: _react2.default.PropTypes.string.isRequired,
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

exports.default = (0, _index.connectWithId)(mapStateToProps, mapDispatchToProps())(JPlayerContainer);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _mute = __webpack_require__(48);

var _mute2 = _interopRequireDefault(_mute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    muted: jPlayers[id].muted,
    id: id,
    children: children,
    attributes: attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(id, muted) {
      return dispatch((0, _actions.setMute)(id, !muted));
    }
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps, mapDispatchToProps)(_mute2.default);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _playBar = __webpack_require__(49);

var _playBar2 = _interopRequireDefault(_playBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    smoothPlayBar: jPlayers[id].smoothPlayBar,
    currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
    currentPercentRelative: jPlayers[id].currentPercentRelative,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_playBar2.default);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(3);

var _index = __webpack_require__(2);

var _play = __webpack_require__(50);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    paused: jPlayers[id].paused,
    id: id,
    children: children,
    attributes: attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(id, paused) {
      return paused ? dispatch((0, _actions.play)(id)) : dispatch((0, _actions.pause)(id));
    }
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps, mapDispatchToProps)(_play2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _poster = __webpack_require__(51);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      attributes = _objectWithoutProperties(_ref, ['id']);

  return {
    src: jPlayers[id].media.poster,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_poster2.default);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _repeat = __webpack_require__(52);

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    loop: jPlayers[id].loop,
    id: id,
    children: children,
    attributes: attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(id, loop) {
      return dispatch((0, _actions.setOption)(id, 'loop', !loop));
    }
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps, mapDispatchToProps)(_repeat2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _title = __webpack_require__(53);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'children']);

  return {
    title: jPlayers[id].media.title,
    artist: jPlayers[id].media.artist,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_title2.default);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _video = __webpack_require__(54);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      events = _ref.events,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['id', 'events', 'children']);

  return {
    require: jPlayers[id].mediaSettings.video,
    events: events,
    children: children,
    attributes: attributes
  };
};

exports.default = (0, _index.connectWithId)(mapStateToProps)(_video2.default);

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

var mapStateToProps = function mapStateToProps(_ref2, _ref) {
  var jPlayers = _ref2.jPlayers;

  var id = _ref.id,
      props = _objectWithoutProperties(_ref, ['id']);

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

    newJPlayers[jPlayerKey] = {
      options: options,
      status: status
    };
  });

  var jPlayer = newJPlayers[id],
      otherJPlayers = _objectWithoutProperties(newJPlayers, [id]);

  var returnedJPlayers = _extends({}, props, jPlayer, {
    id: id
  });

  if (Object.keys(otherJPlayers).some(function (otherJPlayer) {
    return otherJPlayer;
  })) {
    returnedJPlayers.jPlayers = otherJPlayers;
  }

  return returnedJPlayers;
};

var mapDispatchToProps = {
  setOption: _actions.setOption,
  setMedia: _actions.setMedia,
  clearMedia: _actions.clearMedia,
  play: _actions.play,
  pause: _actions.pause,
  setPlayHead: _actions.setPlayHead,
  setVolume: _actions.setVolume,
  setMute: _actions.setMute,
  focus: _actions.focus
};

var Connect = function Connect(jPlayer) {
  var ConnectedPlayer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(jPlayer);

  // IE9 doesn't support fn.name
  var playerName = jPlayer.name === undefined ? jPlayer.toString().match(/^function\s*([^\s(]+)/)[1] : jPlayer.name;

  return function (_React$Component) {
    _inherits(ConnectedJPlayer, _React$Component);

    function ConnectedJPlayer() {
      var _ref3;

      var _temp, _this, _ret;

      _classCallCheck(this, ConnectedJPlayer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = ConnectedJPlayer.__proto__ || Object.getPrototypeOf(ConnectedJPlayer)).call.apply(_ref3, [this].concat(args))), _this), _this.getChildContext = function () {
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

var clearMedia = function clearMedia(state) {
  return (0, _index.updateObject)(state, _extends({}, resetStatus(state), {
    media: _constants.defaultOptions.media
  }));
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
    volume: (0, _index.limitValue)(volume, 0, 1),
    muted: volume <= 0
  });
};

var setMute = function setMute(state, _ref6) {
  var mute = _ref6.mute;
  return (0, _index.updateObject)(state, {
    muted: mute
  });
};

var focus = function focus(state, _ref7) {
  var id = _ref7.id;

  var newState = _extends({}, state);
  var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {
    return newState[key].keyEnabled;
  }).shift();

  if (newState[id].keyEnabled) {
    Object.keys(state).forEach(function (key) {
      if (key === id) {
        newState[key] = (0, _index.updateObject)(newState[key], { focused: true });
      } else {
        newState[key] = (0, _index.updateObject)(newState[key], { focused: false });
      }
    });
  } else if (newState[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = (0, _index.updateObject)(newState[firstKeyEnabledPlayer], { focused: true });
    return (0, _index.updateObject)(newState, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }
  return newState;
};

var updatePlayer = function updatePlayer(jPlayer, action) {
  switch (action.type) {
    case _constants.actionNames.SET_OPTION:
      return (0, _index.updateObject)(jPlayer, _defineProperty({}, action.key, action.value));
    case _constants.actionNames.SET_MEDIA:
      return setMedia(jPlayer, action);
    case _constants.actionNames.CLEAR_MEDIA:
      return clearMedia(jPlayer);
    case _constants.actionNames.PLAY:
      return play(jPlayer, action);
    case _constants.actionNames.PAUSE:
      return pause(jPlayer, action);
    case _constants.actionNames.PLAY_HEAD:
      return setPlayHead(jPlayer, action);
    case _constants.actionNames.VOLUME:
      return setVolume(jPlayer, action);
    case _constants.actionNames.MUTE:
      return setMute(jPlayer, action);
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

var Audio = function Audio(_ref) {
  var require = _ref.require,
      events = _ref.events,
      attributes = _ref.attributes;
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
  attributes: _react2.default.PropTypes.object.isRequired,
  require: _react2.default.PropTypes.bool.isRequired,
  events: _react2.default.PropTypes.shape({
    onAbort: _react2.default.PropTypes.func,
    onCanPlay: _react2.default.PropTypes.func,
    onCanPlayThrough: _react2.default.PropTypes.func,
    onDurationChange: _react2.default.PropTypes.func,
    onEmptied: _react2.default.PropTypes.func,
    onEncrypted: _react2.default.PropTypes.func,
    onEnded: _react2.default.PropTypes.func,
    onError: _react2.default.PropTypes.func,
    onLoadedData: _react2.default.PropTypes.func,
    onLoadedMetadata: _react2.default.PropTypes.func,
    onLoadStart: _react2.default.PropTypes.func,
    onPause: _react2.default.PropTypes.func,
    onPlay: _react2.default.PropTypes.func,
    onPlaying: _react2.default.PropTypes.func,
    onProgress: _react2.default.PropTypes.func,
    onRateChange: _react2.default.PropTypes.func,
    onSeeked: _react2.default.PropTypes.func,
    onSeeking: _react2.default.PropTypes.func,
    onStalled: _react2.default.PropTypes.func,
    onSuspend: _react2.default.PropTypes.func,
    onTimeUpdate: _react2.default.PropTypes.func,
    onVolumeChange: _react2.default.PropTypes.func,
    onWaiting: _react2.default.PropTypes.func
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBarValue = function PlaybackRateBarValue(_ref) {
  var playbackRate = _ref.playbackRate,
      minPlaybackRate = _ref.minPlaybackRate,
      maxPlaybackRate = _ref.maxPlaybackRate,
      verticalPlaybackRate = _ref.verticalPlaybackRate,
      attributes = _ref.attributes;

  var style = function style() {
    var ratio = (playbackRate - minPlaybackRate) / (maxPlaybackRate - minPlaybackRate);
    var playbackRateBarPercentage = ratio * 100 + '%';

    return {
      width: !verticalPlaybackRate ? playbackRateBarPercentage : null,
      height: verticalPlaybackRate ? playbackRateBarPercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({
    className: _constants.classes.PLAYBACK_RATE_BAR_VALUE, style: style()
  }, attributes));
};

PlaybackRateBarValue.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  verticalPlaybackRate: _react2.default.PropTypes.bool.isRequired,
  minPlaybackRate: _react2.default.PropTypes.number.isRequired,
  maxPlaybackRate: _react2.default.PropTypes.number.isRequired,
  playbackRate: _react2.default.PropTypes.number.isRequired
};

exports.default = PlaybackRateBarValue;

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

var PlaybackRateBar = function PlaybackRateBar(_ref) {
  var onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      setBar = _ref.setBar,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ['onClick', 'onMouseDown', 'onTouchStart', 'setBar', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({
      ref: setBar, className: _constants.classes.PLAYBACK_RATE_BAR,
      onClick: onClick, onMouseDown: onMouseDown,
      onTouchStart: onTouchStart }, attributes),
    children
  );
};

PlaybackRateBar.defaultProps = {
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
  setBar: null
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

var SeekBar = function SeekBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      seekPercent = _ref.seekPercent,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart', 'seekPercent']);

  return _react2.default.createElement('div', _extends({
    ref: setBar, className: _constants.classes.SEEK_BAR,
    style: { width: seekPercent + '%' }, onClick: onClick,
    onTouchStart: onTouchStart, onMouseDown: onMouseDown
  }, attributes));
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
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]).isRequired
};

exports.default = SeekBar;

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

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume,
      attributes = _ref.attributes;

  var style = function style() {
    var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';

    return {
      width: !verticalVolume ? volumeBarValuePercentage : null,
      height: verticalVolume ? volumeBarValuePercentage : null
    };
  };
  return _react2.default.createElement('div', _extends({ className: _constants.classes.VOLUME_BAR_VALUE, style: style() }, attributes));
};

VolumeBarValue.defaultProps = {
  verticalVolume: _constants.defaultOptions.verticalVolume
};

VolumeBarValue.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  muted: _react2.default.PropTypes.bool.isRequired,
  volume: _react2.default.PropTypes.number.isRequired,
  verticalVolume: _react2.default.PropTypes.bool
};

exports.default = VolumeBarValue;

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

var VolumeBar = function VolumeBar(_ref) {
  var setBar = _ref.setBar,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onTouchStart = _ref.onTouchStart,
      attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart']);

  return _react2.default.createElement('div', _extends({
    ref: setBar, className: _constants.classes.VOLUME_BAR,
    onClick: onClick, onMouseDown: onMouseDown, onTouchStart: onTouchStart
  }, attributes));
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

var BrowserUnsupported = function BrowserUnsupported(_ref) {
  var foundSupported = _ref.foundSupported,
      children = _ref.children,
      attributes = _ref.attributes;
  return foundSupported ? null : _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.NO_BROWSER_SUPPORT }, attributes),
    children
  );
};

BrowserUnsupported.defaultProps = {
  children: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h4',
      null,
      'Browser Unsupported'
    ),
    'Your browser does not support this media file. To play the media you will need to update your browser to a more recent version.'
  )
};

BrowserUnsupported.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node,
  foundSupported: _react2.default.PropTypes.bool.isRequired
};

exports.default = BrowserUnsupported;

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

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas,
      attributes = _ref.attributes;
  return _react2.default.createElement('canvas', _extends({
    ref: setCanvas, className: _constants.classes.BUFFER_BAR
  }, attributes));
};

BufferBar.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  setCanvas: _react2.default.PropTypes.func.isRequired
};

exports.default = BufferBar;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentTime = function CurrentTime(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.CURRENT_TIME }, attributes),
    children
  );
};

CurrentTime.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.string.isRequired
};

exports.default = CurrentTime;

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

var Download = function Download(_ref) {
  var free = _ref.free,
      url = _ref.url,
      children = _ref.children,
      attributes = _ref.attributes;
  return free ? _react2.default.createElement(
    'a',
    _extends({
      className: _constants.classes.DOWNLOAD, href: url,
      download: true, target: '_blank', rel: 'noopener noreferrer'
    }, attributes),
    children
  ) : null;
};

Download.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  url: _react2.default.PropTypes.string.isRequired,
  free: _react2.default.PropTypes.bool.isRequired
};

exports.default = Download;

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

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Duration = function Duration(_ref) {
  var children = _ref.children,
      attributes = _ref.attributes;
  return children !== '' ? _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.DURATION }, attributes),
    children
  ) : null;
};

Duration.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.string.isRequired
};

exports.default = Duration;

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

var FullScreen = function FullScreen(_ref) {
  var _onClick = _ref.onClick,
      id = _ref.id,
      fullScreen = _ref.fullScreen,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'button',
    _extends({
      className: _constants.classes.FULL_SCREEN,
      onClick: function onClick() {
        return _onClick(id, fullScreen);
      }
    }, attributes),
    children
  );
};

FullScreen.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  fullScreen: _react2.default.PropTypes.bool.isRequired
};

exports.default = FullScreen;

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

var _reactMotion = __webpack_require__(8);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var motion = function motion(values, onMouseMove, attributes) {
  return _react2.default.createElement('div', _extends({
    className: _constants.classes.GUI, onMouseMove: onMouseMove,
    style: {
      opacity: values.opacity,
      display: values.opacity === 0 ? 'none' : ''
    }
  }, attributes));
};

// TODO: onMouseEnter instead of mouseMove?
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _keyControlContainer = __webpack_require__(47);

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
    _extends({ ref: setJPlayer, draggable: false }, attributes),
    children,
    keyEnabled && _react2.default.createElement(_keyControlContainer2.default, null)
  );
};

JPlayer.defaultProps = {
  setJPlayer: null
};

JPlayer.propTypes = {
  setJPlayer: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element), _react2.default.PropTypes.element]).isRequired,
  keyEnabled: _react2.default.PropTypes.bool.isRequired
};

exports.default = JPlayer;

/***/ }),
/* 47 */
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

var _index = __webpack_require__(2);

var _actions = __webpack_require__(3);

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
    focused: jPlayers[id].focused
  };
};

var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {
  var dispatch = _ref3.dispatch;
  var id = _ref4.id;
  return {
    focused: stateProps.focused,
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
          return dispatch((0, _actions.setOption)(id, 'fullScreen', !stateProps.fullScreen));
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
          return dispatch((0, _actions.setOption)(id, 'loop', !stateProps.loop));
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
      }) || !_this.props.focused) {
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
        focused: _react2.default.PropTypes.bool.isRequired,
        keyBindings: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.object).isRequired
      };
    }
  }]);

  return KeyControlContainer;
}(_react2.default.Component);

exports.default = (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(KeyControlContainer);

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

var Mute = function Mute(_ref) {
  var _onClick = _ref.onClick,
      id = _ref.id,
      muted = _ref.muted,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.MUTE, onClick: function onClick() {
        return _onClick(id, muted);
      } }, attributes),
    children
  );
};

Mute.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired,
  muted: _react2.default.PropTypes.bool.isRequired
};

exports.default = Mute;

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

var _reactMotion = __webpack_require__(8);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayBar = function PlayBar(_ref) {
  var currentPercentAbsolute = _ref.currentPercentAbsolute,
      currentPercentRelative = _ref.currentPercentRelative,
      smoothPlayBar = _ref.smoothPlayBar,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: { smoothWidth: (0, _reactMotion.spring)(currentPercentAbsolute, [250]) } },
    function (values) {
      return _react2.default.createElement('div', _extends({
        className: _constants.classes.PLAY_BAR,
        style: { width: smoothPlayBar ? values.smoothWidth + '%' : currentPercentRelative + '%' }
      }, attributes));
    }
  );
};

PlayBar.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  currentPercentRelative: _react2.default.PropTypes.number.isRequired,
  currentPercentAbsolute: _react2.default.PropTypes.number.isRequired,
  smoothPlayBar: _react2.default.PropTypes.bool.isRequired
};

exports.default = PlayBar;

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

var Play = function Play(_ref) {
  var _onClick = _ref.onClick,
      id = _ref.id,
      paused = _ref.paused,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.PLAY, onClick: function onClick() {
        return _onClick(id, paused);
      } }, attributes),
    children
  );
};

Play.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  paused: _react2.default.PropTypes.bool.isRequired
};

exports.default = Play;

/***/ }),
/* 51 */
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

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      attributes = _ref.attributes;
  return _react2.default.createElement('img', _extends({ className: _constants.classes.POSTER, alt: alt, src: src }, attributes));
};

Poster.defaultProps = {
  alt: null
};

Poster.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  src: _react2.default.PropTypes.string.isRequired,
  alt: _react2.default.PropTypes.string
};

exports.default = Poster;

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

var Repeat = function Repeat(_ref) {
  var _onClick = _ref.onClick,
      id = _ref.id,
      loop = _ref.loop,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'button',
    _extends({ className: _constants.classes.REPEAT, onClick: function onClick() {
        return _onClick(id, loop);
      } }, attributes),
    children
  );
};

Repeat.propTypes = {
  loop: _react2.default.PropTypes.bool.isRequired,
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  onClick: _react2.default.PropTypes.func.isRequired
};

exports.default = Repeat;

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

var Title = function Title(_ref) {
  var artist = _ref.artist,
      title = _ref.title,
      children = _ref.children,
      attributes = _ref.attributes;
  return _react2.default.createElement(
    'div',
    _extends({ className: _constants.classes.TITLE }, attributes),
    children === null ? artist + ' - ' + title : children
  );
};

Title.defaultProps = {
  children: null
};

Title.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  artist: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired,
  title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired
};

exports.default = Title;

/***/ }),
/* 54 */
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

var Video = function Video(_ref) {
  var require = _ref.require,
      events = _ref.events,
      children = _ref.children,
      attributes = _ref.attributes;
  return require ? _react2.default.createElement(
    _mediaContainer2.default,
    events,
    _react2.default.createElement(
      'video',
      attributes,
      children
    )
  ) : null;
};

Video.defaultProps = {
  events: null,
  children: null
};

Video.propTypes = {
  attributes: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.node,
  require: _react2.default.PropTypes.bool.isRequired,
  events: _react2.default.PropTypes.shape({
    onAbort: _react2.default.PropTypes.func,
    onCanPlay: _react2.default.PropTypes.func,
    onCanPlayThrough: _react2.default.PropTypes.func,
    onDurationChange: _react2.default.PropTypes.func,
    onEmptied: _react2.default.PropTypes.func,
    onEncrypted: _react2.default.PropTypes.func,
    onEnded: _react2.default.PropTypes.func,
    onError: _react2.default.PropTypes.func,
    onLoadedData: _react2.default.PropTypes.func,
    onLoadedMetadata: _react2.default.PropTypes.func,
    onLoadStart: _react2.default.PropTypes.func,
    onPause: _react2.default.PropTypes.func,
    onPlay: _react2.default.PropTypes.func,
    onPlaying: _react2.default.PropTypes.func,
    onProgress: _react2.default.PropTypes.func,
    onRateChange: _react2.default.PropTypes.func,
    onSeeked: _react2.default.PropTypes.func,
    onSeeking: _react2.default.PropTypes.func,
    onStalled: _react2.default.PropTypes.func,
    onSuspend: _react2.default.PropTypes.func,
    onTimeUpdate: _react2.default.PropTypes.func,
    onVolumeChange: _react2.default.PropTypes.func,
    onWaiting: _react2.default.PropTypes.func
  })
};

exports.default = Video;

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

var _guiContainer = __webpack_require__(21);

var _guiContainer2 = _interopRequireDefault(_guiContainer);

var _videoContainer = __webpack_require__(29);

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _audioContainer = __webpack_require__(11);

var _audioContainer2 = _interopRequireDefault(_audioContainer);

var _jPlayerContainer = __webpack_require__(22);

var _jPlayerContainer2 = _interopRequireDefault(_jPlayerContainer);

var _playBarContainer = __webpack_require__(24);

var _playBarContainer2 = _interopRequireDefault(_playBarContainer);

var _bufferBarContainer = __webpack_require__(16);

var _bufferBarContainer2 = _interopRequireDefault(_bufferBarContainer);

var _posterContainer = __webpack_require__(26);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(28);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _fullScreenContainer = __webpack_require__(20);

var _fullScreenContainer2 = _interopRequireDefault(_fullScreenContainer);

var _muteContainer = __webpack_require__(23);

var _muteContainer2 = _interopRequireDefault(_muteContainer);

var _playContainer = __webpack_require__(25);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _repeatContainer = __webpack_require__(27);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _seekBarContainer = __webpack_require__(13);

var _seekBarContainer2 = _interopRequireDefault(_seekBarContainer);

var _playbackRateBarContainer = __webpack_require__(12);

var _playbackRateBarContainer2 = _interopRequireDefault(_playbackRateBarContainer);

var _playbackRateBarValueContainer = __webpack_require__(5);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _volumeBarContainer = __webpack_require__(14);

var _volumeBarContainer2 = _interopRequireDefault(_volumeBarContainer);

var _volumeBarValueContainer = __webpack_require__(6);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _downloadContainer = __webpack_require__(18);

var _downloadContainer2 = _interopRequireDefault(_downloadContainer);

var _durationContainer = __webpack_require__(19);

var _durationContainer2 = _interopRequireDefault(_durationContainer);

var _currentTimeContainer = __webpack_require__(17);

var _currentTimeContainer2 = _interopRequireDefault(_currentTimeContainer);

var _browserUnsupportedContainer = __webpack_require__(15);

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