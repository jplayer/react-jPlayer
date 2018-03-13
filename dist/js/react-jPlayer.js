var ReactJPlayer =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = ReactJPlayerUtils;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionNames = exports.actionNames = {
  SET_MEDIA: 'JPLAYER_SET_MEDIA',
  CLEAR_MEDIA: 'JPLAYER_CLEAR_MEDIA',
  PLAY: 'JPLAYER_PLAY',
  PAUSE: 'JPLAYER_PAUSE',
  PLAY_HEAD: 'JPLAYER_PLAY_HEAD',
  VOLUME: 'JPLAYER_VOLUME',
  MUTE: 'JPLAYER_MUTE',
  FOCUS: 'JPLAYER_FOCUS',
  SET_OPTION: 'JPLAYER_SET_JPLAYER_OPTION'
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
  URL_NOT_SET: 'Pass the media through the defaultOptions or use the setMedia() ' + 'action that is passed into the component props.',
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

var keyIgnoredElementNames = exports.keyIgnoredElementNames = ['INPUT', 'TEXTAREA', 'SELECT'];

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

var defaultStatus = exports.defaultStatus = {
  newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
  guiFadeOut: false,
  playHeadPercent: 0,
  mediaSettings: {
    video: false,
    nonSupported: false,
    formats: []
  },
  paused: true,
  seeking: false,
  src: null,
  currentTimeText: '0:00',
  durationText: null,
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
  pauseOthersOnPlay: true,
  startGuiFadeOut: false,
  guiFadeHoldTime: 2000,
  media: {
    sources: {},
    tracks: [],
    title: null,
    artist: null,
    poster: null,
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = Recompose;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOption = exports.focus = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = undefined;

var _constants = __webpack_require__(2);

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
var setOption = exports.setOption = function setOption(id, key, value) {
  return {
    type: _constants.actionNames.SET_OPTION,
    id: id,
    key: key,
    value: value
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _bar = __webpack_require__(65);

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    barDrag: jPlayers[id].barDrag
  };
};

var handlers = function handlers() {
  var bar = void 0;
  var dragging = void 0;

  return {
    setBar: function setBar() {
      return function (ref) {
        bar = ref;
      };
    },
    onClick: function onClick(props) {
      return function (e) {
        return props.clickMoveBar(bar, e);
      };
    },
    onTouchStart: function onTouchStart() {
      return function () {
        dragging = true;
      };
    },
    onTouchMove: function onTouchMove(props) {
      return function (e) {
        if (props.barDrag && dragging) {
          props.touchMoveBar(bar, e);
        }
      };
    },
    onTouchEnd: function onTouchEnd() {
      return function () {
        dragging = false;
      };
    },
    onMouseMove: function onMouseMove(props) {
      return function (e) {
        if (props.barDrag && dragging) {
          props.clickMoveBar(bar, e);
        }
      };
    },
    onMouseDown: function onMouseDown() {
      return function () {
        dragging = true;
      };
    },
    onMouseUp: function onMouseUp() {
      return function () {
        dragging = false;
      };
    }
  };
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    document.addEventListener('mouseup', this.props.onMouseUp);
    document.addEventListener('mousemove', this.props.onMouseMove);
    document.addEventListener('touchmove', this.props.onTouchMove, { passive: false });
    document.addEventListener('touchend', this.props.onTouchEnd);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('mouseup', this.props.onMouseUp);
    document.removeEventListener('mousemove', this.props.onMouseMove);
    document.removeEventListener('touchmove', this.props.onTouchMove);
    document.removeEventListener('touchend', this.props.onTouchEnd);
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_bar2.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var options = function options(jPlayerOptions) {
  initialState[jPlayerOptions.id] = (0, _lodash2.default)({}, _constants.defaultStatus, _constants.defaultOptions, jPlayerOptions);
};

exports.default = options;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = _.merge;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ReactMotion;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gui = function Gui(_ref) {
  var opacity = _ref.opacity,
      children = _ref.children,
      onMouseMove = _ref.onMouseMove;
  return _react2.default.createElement(
    'div',
    {
      className: _constants.classes.GUI,
      onMouseMove: onMouseMove,
      style: { opacity: opacity }
    },
    children
  );
};

Gui.propTypes = {
  opacity: _propTypes2.default.number.isRequired,
  onMouseMove: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = Gui;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _mediaContainer = __webpack_require__(12);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/media-has-caption */

var Video = function Video(props) {
  return _react2.default.createElement(
    _mediaContainer2.default,
    {
      onAbort: props.onAbort,
      onCanPlay: props.onCanPlay,
      onCanPlayThrough: props.onCanPlayThrough,
      onDurationChange: props.onDurationChange,
      onEmptied: props.onEmptied,
      onEncrypted: props.onEncrypted,
      onEnded: props.onEnded,
      onError: props.onError,
      onLoadedData: props.onLoadedData,
      onLoadedMetadata: props.onLoadedMetadata,
      onLoadStart: props.onLoadStart,
      onPause: props.onPause,
      onPlay: props.onPlay,
      onPlaying: props.onPlaying,
      onProgress: props.onProgress,
      onRateChange: props.onRateChange,
      onSeeked: props.onSeeked,
      onSeeking: props.onSeeking,
      onStalled: props.onStalled,
      onSuspend: props.onSuspend,
      onTimeUpdate: props.onTimeUpdate,
      onVolumeChange: props.onVolumeChange,
      onWaiting: props.onWaiting
    },
    _react2.default.createElement('video', null)
  );
};

Video.defaultProps = {
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
  onWaiting: Function.prototype
};

Video.propTypes = {
  onAbort: _propTypes2.default.func,
  onCanPlay: _propTypes2.default.func,
  onCanPlayThrough: _propTypes2.default.func,
  onDurationChange: _propTypes2.default.func,
  onEmptied: _propTypes2.default.func,
  onEncrypted: _propTypes2.default.func,
  onEnded: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onLoadedData: _propTypes2.default.func,
  onLoadedMetadata: _propTypes2.default.func,
  onLoadStart: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  onPlaying: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onRateChange: _propTypes2.default.func,
  onSeeked: _propTypes2.default.func,
  onSeeking: _propTypes2.default.func,
  onStalled: _propTypes2.default.func,
  onSuspend: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func,
  onWaiting: _propTypes2.default.func
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.require;
}, (0, _recompose.renderComponent)(Video)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _media = __webpack_require__(41);

var _media2 = _interopRequireDefault(_media);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop,
    src: jPlayers[id].src,
    playHeadPercent: jPlayers[id].playHeadPercent,
    paused: jPlayers[id].paused,
    defaultPlaybackRate: jPlayers[id].defaultPlaybackRate,
    playbackRate: jPlayers[id].playbackRate,
    preload: jPlayers[id].preload,
    volume: jPlayers[id].volume,
    muted: jPlayers[id].muted,
    autoplay: jPlayers[id].autoplay,
    newTime: jPlayers[id].newTime,
    tracks: jPlayers[id].media.tracks
  };
};

var handlers = function handlers() {
  var currentMedia = void 0;

  var getSeekableEnd = function getSeekableEnd() {
    if (currentMedia.seekable.length > 0) {
      return currentMedia.seekable.end(currentMedia.seekable.length - 1);
    }

    return NaN;
  };
  var getCurrentPercentRelative = function getCurrentPercentRelative() {
    return (0, _reactJplayerUtils.toPercentage)(currentMedia.currentTime, getSeekableEnd());
  };
  var getSeekPercent = function getSeekPercent() {
    return (0, _reactJplayerUtils.toPercentage)(getSeekableEnd(), currentMedia.duration);
  };

  return {
    setCurrentMedia: function setCurrentMedia() {
      return function (ref) {
        currentMedia = ref;
      };
    },
    updateMediaStatus: function updateMediaStatus(props) {
      return function () {
        var currentPercentAbsolute = (0, _reactJplayerUtils.toPercentage)(currentMedia.currentTime, currentMedia.duration);

        // Is infinite when live streaming
        if (isFinite(currentMedia.duration)) {
          props.setOption(props.id, 'duration', currentMedia.duration);
        }

        props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
        props.setOption(props.id, 'seekPercent', getSeekPercent());
        props.setOption(props.id, 'currentPercentAbsolute', currentPercentAbsolute);
        props.setOption(props.id, 'currentTime', currentMedia.currentTime);
        props.setOption(props.id, 'playbackRate', currentMedia.playbackRate);
      };
    },
    updateMediaSrc: function updateMediaSrc(props) {
      return function () {
        if (props.src !== null) {
          currentMedia.src = props.src;
        }
      };
    },
    updateMediaTime: function updateMediaTime(props) {
      return function () {
        currentMedia.currentTime = props.newTime;
        props.setOption(props.id, 'newTime', null);
      };
    },
    updateMediaTimeAfterSeeking: function updateMediaTimeAfterSeeking(props) {
      return function () {
        var seekableEnd = getSeekableEnd();

        // TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
        // Hasn't fully loaded the song????
        if (isFinite(seekableEnd)) {
          currentMedia.currentTime = (0, _reactJplayerUtils.toRelativePercentage)(props.playHeadPercent, seekableEnd);

          /* Media events don't fire fast enough to give a smooth animation
            when dragging so we update it here as well, same problem as above? */
          props.setOption(props.id, 'currentPercentRelative', getCurrentPercentRelative());
        }
      };
    },
    updateMediaPlayState: function updateMediaPlayState(props) {
      return function () {
        if (props.paused) {
          currentMedia.pause();
        } else {
          currentMedia.play();
        }
      };
    },
    updateOtherMediaValues: function updateOtherMediaValues(props) {
      return function () {
        currentMedia.defaultPlaybackRate = props.defaultPlaybackRate;
        currentMedia.playbackRate = props.playbackRate;
        currentMedia.preload = props.preload;
        currentMedia.volume = props.volume;
        currentMedia.muted = props.muted;
        currentMedia.autoplay = props.autoplay;
        currentMedia.loop = props.loop;
      };
    }
  };
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    if (this.props.src !== null) {
      this.props.updateMediaSrc();
    }

    this.props.updateOtherMediaValues();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.props.updateMediaSrc();
    }

    if (this.props.newTime !== null) {
      this.props.updateMediaTime();
    }

    if (prevProps.playHeadPercent !== this.props.playHeadPercent) {
      this.props.updateMediaTimeAfterSeeking();
    }

    this.props.updateMediaPlayState();
    this.props.updateOtherMediaValues();
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_media2.default);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _mediaContainer = __webpack_require__(12);

var _mediaContainer2 = _interopRequireDefault(_mediaContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/media-has-caption */

var Audio = function Audio(props) {
  return _react2.default.createElement(
    _mediaContainer2.default,
    {
      onAbort: props.onAbort,
      onCanPlay: props.onCanPlay,
      onCanPlayThrough: props.onCanPlayThrough,
      onDurationChange: props.onDurationChange,
      onEmptied: props.onEmptied,
      onEncrypted: props.onEncrypted,
      onEnded: props.onEnded,
      onError: props.onError,
      onLoadedData: props.onLoadedData,
      onLoadedMetadata: props.onLoadedMetadata,
      onLoadStart: props.onLoadStart,
      onPause: props.onPause,
      onPlay: props.onPlay,
      onPlaying: props.onPlaying,
      onProgress: props.onProgress,
      onRateChange: props.onRateChange,
      onSeeked: props.onSeeked,
      onSeeking: props.onSeeking,
      onStalled: props.onStalled,
      onSuspend: props.onSuspend,
      onTimeUpdate: props.onTimeUpdate,
      onVolumeChange: props.onVolumeChange,
      onWaiting: props.onWaiting
    },
    _react2.default.createElement('audio', null)
  );
};

Audio.defaultProps = {
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
  onWaiting: Function.prototype
};

Audio.propTypes = {
  onAbort: _propTypes2.default.func,
  onCanPlay: _propTypes2.default.func,
  onCanPlayThrough: _propTypes2.default.func,
  onDurationChange: _propTypes2.default.func,
  onEmptied: _propTypes2.default.func,
  onEncrypted: _propTypes2.default.func,
  onEnded: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onLoadedData: _propTypes2.default.func,
  onLoadedMetadata: _propTypes2.default.func,
  onLoadStart: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  onPlaying: _propTypes2.default.func,
  onProgress: _propTypes2.default.func,
  onRateChange: _propTypes2.default.func,
  onSeeked: _propTypes2.default.func,
  onSeeking: _propTypes2.default.func,
  onStalled: _propTypes2.default.func,
  onSuspend: _propTypes2.default.func,
  onTimeUpdate: _propTypes2.default.func,
  onVolumeChange: _propTypes2.default.func,
  onWaiting: _propTypes2.default.func
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.require;
}, (0, _recompose.renderComponent)(Audio)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyControlContainer = __webpack_require__(50);

var _keyControlContainer2 = _interopRequireDefault(_keyControlContainer);

var _screenFullContainer = __webpack_require__(51);

var _screenFullContainer2 = _interopRequireDefault(_screenFullContainer);

var _errorLoggerContainer = __webpack_require__(53);

var _errorLoggerContainer2 = _interopRequireDefault(_errorLoggerContainer);

var _timeDisplayContainer = __webpack_require__(54);

var _timeDisplayContainer2 = _interopRequireDefault(_timeDisplayContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/forbid-prop-types */

var JPlayer = function JPlayer(props) {
  var className = props.className,
      keyBindings = props.keyBindings,
      children = props.children,
      onMouseMoveCapture = props.onMouseMoveCapture,
      id = props.id;


  return _react2.default.createElement(
    'div',
    {
      id: id,
      className: className,
      draggable: false,
      onMouseMoveCapture: onMouseMoveCapture
    },
    _react2.default.createElement(_keyControlContainer2.default, { keyBindings: keyBindings }),
    _react2.default.createElement(_timeDisplayContainer2.default, null),
    _react2.default.createElement(_screenFullContainer2.default, null),
    _react2.default.createElement(_errorLoggerContainer2.default, null),
    children
  );
};

JPlayer.defaultProps = {
  keyBindings: null
};

JPlayer.propTypes = {
  keyBindings: _propTypes2.default.object,
  onMouseMoveCapture: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = JPlayer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayBar = function PlayBar(props) {
  var width = props.smoothPlayBar ? props.smoothWidth + '%' : props.currentPercentRelative + '%';

  return _react2.default.createElement('div', {
    className: _constants.classes.PLAY_BAR,
    style: { width: width }
  });
};

PlayBar.propTypes = {
  smoothPlayBar: _propTypes2.default.bool.isRequired,
  smoothWidth: _propTypes2.default.number.isRequired,
  currentPercentRelative: _propTypes2.default.number.isRequired
};

exports.default = PlayBar;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas;
  return _react2.default.createElement('canvas', {
    ref: setCanvas,
    className: _constants.classes.BUFFER_BAR
  });
};

BufferBar.propTypes = {
  setCanvas: _propTypes2.default.func.isRequired
};

exports.default = BufferBar;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Poster = function Poster(_ref) {
  var src = _ref.src;
  return _react2.default.createElement('img', { className: _constants.classes.POSTER, alt: '', src: src });
};

Poster.defaultProps = {
  src: null
};

Poster.propTypes = {
  src: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.src;
}, (0, _recompose.renderComponent)(Poster)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.TITLE },
    title
  );
};

Title.propTypes = {
  title: _propTypes2.default.string.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.title;
}, (0, _recompose.renderComponent)(Title)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullScreen = function FullScreen(_ref) {
  var setFullScreen = _ref.setFullScreen,
      id = _ref.id,
      fullScreen = _ref.fullScreen,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    {
      className: _constants.classes.FULL_SCREEN,
      onClick: function onClick() {
        return setFullScreen(id, !fullScreen);
      }
    },
    children
  );
};

FullScreen.propTypes = {
  children: _propTypes2.default.node.isRequired,
  setFullScreen: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = FullScreen;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mute = function Mute(_ref) {
  var setMute = _ref.setMute,
      id = _ref.id,
      muted = _ref.muted,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.MUTE, onClick: function onClick() {
        return setMute(id, !muted);
      } },
    children
  );
};

Mute.propTypes = {
  id: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  setMute: _propTypes2.default.func.isRequired,
  muted: _propTypes2.default.bool.isRequired
};

exports.default = Mute;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = function Play(_ref) {
  var play = _ref.play,
      id = _ref.id,
      paused = _ref.paused,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.PLAY, onClick: function onClick() {
        return play(id, paused);
      } },
    children
  );
};

Play.propTypes = {
  children: _propTypes2.default.node.isRequired,
  play: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  paused: _propTypes2.default.bool.isRequired
};

exports.default = Play;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Repeat = function Repeat(_ref) {
  var loop = _ref.loop,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { className: _constants.classes.REPEAT, onClick: loop },
    children
  );
};

Repeat.propTypes = {
  children: _propTypes2.default.node.isRequired,
  loop: _propTypes2.default.func.isRequired
};

exports.default = Repeat;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _barContainer = __webpack_require__(6);

var _barContainer2 = _interopRequireDefault(_barContainer);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SeekBar = function SeekBar(props) {
  return _react2.default.createElement(
    _barContainer2.default,
    {
      clickMoveBar: props.clickMoveBar,
      touchMoveBar: props.touchMoveBar
    },
    _react2.default.createElement(
      'div',
      {
        className: _constants.classes.SEEK_BAR,
        style: { width: props.seekPercent + '%' }
      },
      props.children
    )
  );
};

SeekBar.propTypes = {
  seekPercent: _propTypes2.default.number.isRequired,
  clickMoveBar: _propTypes2.default.func.isRequired,
  touchMoveBar: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired
};

exports.default = SeekBar;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _barContainer = __webpack_require__(6);

var _barContainer2 = _interopRequireDefault(_barContainer);

var _playbackRateBarValueContainer = __webpack_require__(25);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBar = function PlaybackRateBar(props) {
  return _react2.default.createElement(
    _barContainer2.default,
    {
      clickMoveBar: props.clickMoveBar,
      touchMoveBar: props.touchMoveBar
    },
    _react2.default.createElement(
      'div',
      { className: _constants.classes.PLAYBACK_RATE_BAR },
      props.children
    )
  );
};

PlaybackRateBar.defaultProps = {
  children: _react2.default.createElement(_playbackRateBarValueContainer2.default, null)
};

PlaybackRateBar.propTypes = {
  clickMoveBar: _propTypes2.default.func.isRequired,
  touchMoveBar: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node
};

exports.default = PlaybackRateBar;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _playbackRateBarValue = __webpack_require__(26);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate,
    playbackRate: jPlayers[id].playbackRate
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_playbackRateBarValue2.default);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaybackRateBarValue = function PlaybackRateBarValue(props) {
  var ratio = (props.playbackRate - props.minPlaybackRate) / (props.maxPlaybackRate - props.minPlaybackRate);
  var playbackRateBarPercentage = ratio * 100 + '%';
  var style = {
    width: !props.verticalPlaybackRate ? playbackRateBarPercentage : null,
    height: props.verticalPlaybackRate ? playbackRateBarPercentage : null
  };

  return _react2.default.createElement('div', {
    className: _constants.classes.PLAYBACK_RATE_BAR_VALUE,
    style: style
  });
};

PlaybackRateBarValue.propTypes = {
  verticalPlaybackRate: _propTypes2.default.bool.isRequired,
  minPlaybackRate: _propTypes2.default.number.isRequired,
  maxPlaybackRate: _propTypes2.default.number.isRequired,
  playbackRate: _propTypes2.default.number.isRequired
};

exports.default = PlaybackRateBarValue;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _barContainer = __webpack_require__(6);

var _barContainer2 = _interopRequireDefault(_barContainer);

var _volumeBarValueContainer = __webpack_require__(28);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBar = function VolumeBar(props) {
  return _react2.default.createElement(
    _barContainer2.default,
    {
      clickMoveBar: props.clickMoveBar,
      touchMoveBar: props.touchMoveBar
    },
    _react2.default.createElement(
      'div',
      { className: _constants.classes.VOLUME_BAR },
      props.children
    )
  );
};

VolumeBar.defaultProps = {
  children: _react2.default.createElement(_volumeBarValueContainer2.default, null)
};

VolumeBar.propTypes = {
  clickMoveBar: _propTypes2.default.func.isRequired,
  touchMoveBar: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node
};

exports.default = VolumeBar;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _volumeBarValue = __webpack_require__(29);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalVolume: jPlayers[id].verticalVolume,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_volumeBarValue2.default);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeBarValue = function VolumeBarValue(_ref) {
  var muted = _ref.muted,
      volume = _ref.volume,
      verticalVolume = _ref.verticalVolume;

  var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';
  var style = {
    width: !verticalVolume ? volumeBarValuePercentage : null,
    height: verticalVolume ? volumeBarValuePercentage : null
  };

  return _react2.default.createElement('div', { className: _constants.classes.VOLUME_BAR_VALUE, style: style });
};

VolumeBarValue.propTypes = {
  muted: _propTypes2.default.bool.isRequired,
  volume: _propTypes2.default.number.isRequired,
  verticalVolume: _propTypes2.default.bool.isRequired
};

exports.default = VolumeBarValue;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    {
      className: _constants.classes.DOWNLOAD,
      href: url,
      download: true,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    children
  );
};

Download.defaultProps = {
  url: null
};

Download.propTypes = {
  children: _propTypes2.default.node.isRequired,
  url: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.free;
}, (0, _recompose.renderComponent)(Download)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Duration = function Duration(_ref) {
  var durationText = _ref.durationText;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.DURATION },
    durationText
  );
};

Duration.propTypes = {
  durationText: _propTypes2.default.string.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.durationText;
}, (0, _recompose.renderComponent)(Duration)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentTime = function CurrentTime(_ref) {
  var currentTimeText = _ref.currentTimeText;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.CURRENT_TIME },
    currentTimeText
  );
};

CurrentTime.propTypes = {
  currentTimeText: _propTypes2.default.string.isRequired
};

exports.default = CurrentTime;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserUnsupported = function BrowserUnsupported(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _constants.classes.NO_BROWSER_SUPPORT },
    children
  );
};

var defaultChildren = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h4',
    null,
    'Browser Unsupported'
  ),
  'Your browser does not support this media file. To play the media you will need to update your browser to a more recent version.'
);

BrowserUnsupported.defaultProps = {
  children: defaultChildren
};

BrowserUnsupported.propTypes = {
  children: _propTypes2.default.node
};

exports.default = (0, _recompose.compose)((0, _recompose.branch)(function (props) {
  return props.nonSupported;
}, (0, _recompose.renderComponent)(BrowserUnsupported)))((0, _recompose.renderNothing)(null));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserUnsupportedComponent = exports.CurrentTimeComponent = exports.DurationComponent = exports.DownloadComponent = exports.VolumeBarValueComponent = exports.VolumeBarComponent = exports.PlaybackRateBarValueComponent = exports.PlaybackRateBarComponent = exports.SeekBarComponent = exports.RepeatComponent = exports.PlayComponent = exports.MuteComponent = exports.FullScreenComponent = exports.TitleComponent = exports.PosterComponent = exports.BufferBarComponent = exports.PlayBarComponent = exports.JPlayerComponent = exports.AudioComponent = exports.VideoComponent = exports.GuiComponent = exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.Gui = exports.actions = exports.reducer = exports.constants = exports.initializeOptions = undefined;

var _initializeOptions = __webpack_require__(7);

var _initializeOptions2 = _interopRequireDefault(_initializeOptions);

var _reducer = __webpack_require__(35);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(5);

var actions = _interopRequireWildcard(_actions);

var _constants = __webpack_require__(2);

var constants = _interopRequireWildcard(_constants);

var _guiContainer = __webpack_require__(38);

var _guiContainer2 = _interopRequireDefault(_guiContainer);

var _videoContainer = __webpack_require__(40);

var _videoContainer2 = _interopRequireDefault(_videoContainer);

var _audioContainer = __webpack_require__(46);

var _audioContainer2 = _interopRequireDefault(_audioContainer);

var _jPlayerContainer = __webpack_require__(47);

var _jPlayerContainer2 = _interopRequireDefault(_jPlayerContainer);

var _playBarContainer = __webpack_require__(55);

var _playBarContainer2 = _interopRequireDefault(_playBarContainer);

var _bufferBarContainer = __webpack_require__(57);

var _bufferBarContainer2 = _interopRequireDefault(_bufferBarContainer);

var _posterContainer = __webpack_require__(58);

var _posterContainer2 = _interopRequireDefault(_posterContainer);

var _titleContainer = __webpack_require__(59);

var _titleContainer2 = _interopRequireDefault(_titleContainer);

var _fullScreenContainer = __webpack_require__(60);

var _fullScreenContainer2 = _interopRequireDefault(_fullScreenContainer);

var _muteContainer = __webpack_require__(61);

var _muteContainer2 = _interopRequireDefault(_muteContainer);

var _playContainer = __webpack_require__(62);

var _playContainer2 = _interopRequireDefault(_playContainer);

var _repeatContainer = __webpack_require__(63);

var _repeatContainer2 = _interopRequireDefault(_repeatContainer);

var _seekBarContainer = __webpack_require__(64);

var _seekBarContainer2 = _interopRequireDefault(_seekBarContainer);

var _playbackRateBarContainer = __webpack_require__(66);

var _playbackRateBarContainer2 = _interopRequireDefault(_playbackRateBarContainer);

var _playbackRateBarValueContainer = __webpack_require__(25);

var _playbackRateBarValueContainer2 = _interopRequireDefault(_playbackRateBarValueContainer);

var _volumeBarContainer = __webpack_require__(67);

var _volumeBarContainer2 = _interopRequireDefault(_volumeBarContainer);

var _volumeBarValueContainer = __webpack_require__(28);

var _volumeBarValueContainer2 = _interopRequireDefault(_volumeBarValueContainer);

var _downloadContainer = __webpack_require__(68);

var _downloadContainer2 = _interopRequireDefault(_downloadContainer);

var _durationContainer = __webpack_require__(69);

var _durationContainer2 = _interopRequireDefault(_durationContainer);

var _currentTimeContainer = __webpack_require__(70);

var _currentTimeContainer2 = _interopRequireDefault(_currentTimeContainer);

var _browserUnsupportedContainer = __webpack_require__(71);

var _browserUnsupportedContainer2 = _interopRequireDefault(_browserUnsupportedContainer);

var _gui = __webpack_require__(10);

var _gui2 = _interopRequireDefault(_gui);

var _video = __webpack_require__(11);

var _video2 = _interopRequireDefault(_video);

var _audio = __webpack_require__(13);

var _audio2 = _interopRequireDefault(_audio);

var _jPlayer = __webpack_require__(14);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _playBar = __webpack_require__(15);

var _playBar2 = _interopRequireDefault(_playBar);

var _bufferBar = __webpack_require__(16);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

var _poster = __webpack_require__(17);

var _poster2 = _interopRequireDefault(_poster);

var _title = __webpack_require__(18);

var _title2 = _interopRequireDefault(_title);

var _fullScreen = __webpack_require__(19);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

var _mute = __webpack_require__(20);

var _mute2 = _interopRequireDefault(_mute);

var _play = __webpack_require__(21);

var _play2 = _interopRequireDefault(_play);

var _repeat = __webpack_require__(22);

var _repeat2 = _interopRequireDefault(_repeat);

var _seekBar = __webpack_require__(23);

var _seekBar2 = _interopRequireDefault(_seekBar);

var _playbackRateBar = __webpack_require__(24);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

var _playbackRateBarValue = __webpack_require__(26);

var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);

var _volumeBar = __webpack_require__(27);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

var _volumeBarValue = __webpack_require__(29);

var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);

var _download = __webpack_require__(30);

var _download2 = _interopRequireDefault(_download);

var _duration = __webpack_require__(31);

var _duration2 = _interopRequireDefault(_duration);

var _currentTime = __webpack_require__(32);

var _currentTime2 = _interopRequireDefault(_currentTime);

var _browserUnsupported = __webpack_require__(33);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Containers
/* eslint-disable max-len */

exports.default = _jPlayerContainer2.default;

// Components

exports.initializeOptions = _initializeOptions2.default;
exports.constants = constants;
exports.reducer = _reducer2.default;
exports.actions = actions;
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
exports.GuiComponent = _gui2.default;
exports.VideoComponent = _video2.default;
exports.AudioComponent = _audio2.default;
exports.JPlayerComponent = _jPlayer2.default;
exports.PlayBarComponent = _playBar2.default;
exports.BufferBarComponent = _bufferBar2.default;
exports.PosterComponent = _poster2.default;
exports.TitleComponent = _title2.default;
exports.FullScreenComponent = _fullScreen2.default;
exports.MuteComponent = _mute2.default;
exports.PlayComponent = _play2.default;
exports.RepeatComponent = _repeat2.default;
exports.SeekBarComponent = _seekBar2.default;
exports.PlaybackRateBarComponent = _playbackRateBar2.default;
exports.PlaybackRateBarValueComponent = _playbackRateBarValue2.default;
exports.VolumeBarComponent = _volumeBar2.default;
exports.VolumeBarValueComponent = _volumeBarValue2.default;
exports.DownloadComponent = _download2.default;
exports.DurationComponent = _duration2.default;
exports.CurrentTimeComponent = _currentTime2.default;
exports.BrowserUnsupportedComponent = _browserUnsupported2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactJplayerUtils = __webpack_require__(0);

var _initializeOptions = __webpack_require__(7);

var _constants = __webpack_require__(2);

var _urlNotSetError = __webpack_require__(36);

var _urlNotSetError2 = _interopRequireDefault(_urlNotSetError);

var _noFormatSupportedError = __webpack_require__(37);

var _noFormatSupportedError2 = _interopRequireDefault(_noFormatSupportedError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateFormats = function updateFormats(sources) {
  var formats = [];

  Object.keys(sources).forEach(function (supplied) {
    var canPlayType = void 0;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(_constants.formats[supplied].MEDIA).canPlayType(_constants.formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    formats.push({
      supplied: supplied,
      supported: canPlayType
    });
  });

  return formats;
};

var clearMedia = function clearMedia() {
  return _extends({}, _constants.defaultStatus, {
    media: _constants.defaultOptions.media
  });
};

var setMedia = function setMedia(_, _ref) {
  var media = _ref.media;

  var video = void 0;
  var src = void 0;
  var nonSupported = true;
  var error = void 0;

  var formats = updateFormats(media.sources);

  formats.forEach(function (format) {
    if (format.supported && nonSupported) {
      video = _constants.formats[format.supplied].MEDIA === 'video';
      src = media.sources[format.supplied];
      nonSupported = false;
    }
  });

  if (nonSupported) {
    error = (0, _noFormatSupportedError2.default)('media.sources: \'' + Object.keys(media.sources).join(', ') + '\'');
  }

  return _extends({}, clearMedia(), {
    mediaSettings: {
      formats: formats,
      video: video,
      nonSupported: nonSupported
    },
    media: media,
    video: video,
    src: src,
    paused: true,
    error: error
  });
};

var play = function play(jPlayer, _ref2) {
  var time = _ref2.time;

  if (jPlayer.src) {
    return {
      paused: false,
      newTime: !isNaN(time) ? time : null
    };
  }

  return {
    error: (0, _urlNotSetError2.default)(play.name)
  };
};

var pause = function pause(jPlayer, _ref3) {
  var time = _ref3.time;

  if (jPlayer.src) {
    return {
      paused: true,
      newTime: !isNaN(time) ? time : null
    };
  }

  return {
    error: (0, _urlNotSetError2.default)(pause.name)
  };
};

var setPlayHead = function setPlayHead(jPlayer, _ref4) {
  var percent = _ref4.percent;

  var limitedPercent = (0, _reactJplayerUtils.limitValue)(percent, 0, 100);

  if (jPlayer.src) {
    return {
      playHeadPercent: limitedPercent
    };
  }

  return {
    error: (0, _urlNotSetError2.default)(setPlayHead.name)
  };
};

var setVolume = function setVolume(_, _ref5) {
  var volume = _ref5.volume;
  return {
    volume: (0, _reactJplayerUtils.limitValue)(volume, 0, 1),
    muted: volume <= 0
  };
};

var setMute = function setMute(_, _ref6) {
  var mute = _ref6.mute;
  return {
    muted: mute
  };
};

var setOption = function setOption(jPlayer, _ref7) {
  var key = _ref7.key,
      value = _ref7.value;

  switch (key) {
    case 'media':
      {
        if (Object.keys(value).some(function (v) {
          return v;
        })) {
          return setMedia(jPlayer, { media: value });
        }
        return clearMedia();
      }
    case 'playHeadPercent':
      return setPlayHead(jPlayer, { percent: value });
    case 'volume':
      return setVolume(jPlayer, { volume: value });
    case 'muted':
      return setMute(jPlayer, { mute: value });
    default:
      return _defineProperty({}, key, value);
  }
};

var focus = function focus(state, id) {
  var newState = _extends({}, state);

  if (newState[id].keyEnabled) {
    Object.keys(newState).forEach(function (key) {
      if (key === id) {
        newState[key].focused = true;
      } else {
        newState[key].focused = false;
      }
    });
  }

  return newState;
};

var focusOnFirstKeyEnabledPlayer = function focusOnFirstKeyEnabledPlayer(state) {
  var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {
    return state[key].keyEnabled;
  }).shift();

  if (state[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = _extends({}, state[firstKeyEnabledPlayer], {
      focused: true
    });

    return _extends({}, state, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }

  return state;
};

var updateJPlayer = function updateJPlayer(state, action, fn) {
  var value = fn(state[action.id], action);
  var newState = state[action.id].keyEnabled ? focus(state, action.id) : focusOnFirstKeyEnabledPlayer(state);
  var jPlayer = newState[action.id];

  return _extends({}, newState, _defineProperty({}, action.id, _extends({}, jPlayer, value)));
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initializeOptions.initialState;
  var action = arguments[1];

  var updateValue = function updateValue(fn) {
    return updateJPlayer(state, action, fn);
  };

  switch (action.type) {
    case _constants.actionNames.SET_MEDIA:
      return updateValue(setMedia);
    case _constants.actionNames.CLEAR_MEDIA:
      return updateValue(clearMedia);
    case _constants.actionNames.PLAY:
      return updateValue(play);
    case _constants.actionNames.PAUSE:
      return updateValue(pause);
    case _constants.actionNames.PLAY_HEAD:
      return updateValue(setPlayHead);
    case _constants.actionNames.VOLUME:
      return updateValue(setVolume);
    case _constants.actionNames.MUTE:
      return updateValue(setMute);
    case _constants.actionNames.SET_OPTION:
      return updateValue(setOption);
    case _constants.actionNames.FOCUS:
      return focus(state, action.id);
    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NOT_SET,
    hint: _constants.hints.URL_NOT_SET
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.FORMAT_NO_SUPPORT,
    hint: _constants.hints.FORMAT_NO_SUPPORT
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactJplayerUtils = __webpack_require__(0);

var _actions = __webpack_require__(5);

var _animation = __webpack_require__(39);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutIds = [];

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    guiFadeOut: jPlayers[id].guiFadeOut,
    guiFadeHoldTime: jPlayers[id].guiFadeHoldTime
  };
};

var handlers = {
  onMouseMove: function onMouseMove(props) {
    return function () {
      if (props.fullScreen) {
        props.setOption(props.id, 'startGuiFadeOut', false);

        timeoutIds.forEach(function (timeoutId) {
          return clearTimeout(timeoutId);
        });
      }
    };
  },
  fadeOutHandler: function fadeOutHandler(props) {
    return function () {
      props.setOption(props.id, 'guiFadeOut', true);
    };
  }
};

var lifecycle = {
  startFade: function startFade() {
    if (this.props.fullScreen && !this.props.paused && this.props.startGuiFadeOut) {
      timeoutIds.push(setTimeout(this.props.fadeOutHandler, this.props.guiFadeHoldTime));
    } else if (!this.props.startGuiFadeOut) {
      this.props.setOption(this.props.id, 'guiFadeOut', false);
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.startGuiFadeOut !== this.props.startGuiFadeOut) {
      this.startFade();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_animation2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(9);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gui = __webpack_require__(10);

var _gui2 = _interopRequireDefault(_gui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animation = function Animation(_ref) {
  var fullScreen = _ref.fullScreen,
      guiFadeOut = _ref.guiFadeOut,
      onMouseMove = _ref.onMouseMove,
      children = _ref.children;
  return _react2.default.createElement(
    _reactMotion.Motion,
    {
      defaultStyle: { opacity: 1 },
      style: { opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1 }
    },
    function (values) {
      return _react2.default.createElement(
        _gui2.default,
        { opacity: values.opacity, onMouseMove: onMouseMove },
        children
      );
    }
  );
};

Animation.propTypes = {
  onMouseMove: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element]).isRequired,
  guiFadeOut: _propTypes2.default.bool.isRequired,
  fullScreen: _propTypes2.default.bool.isRequired
};

exports.default = Animation;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _video = __webpack_require__(11);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_video2.default);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _eventsContainer = __webpack_require__(42);

var _eventsContainer2 = _interopRequireDefault(_eventsContainer);

var _track = __webpack_require__(45);

var _track2 = _interopRequireDefault(_track);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Media = function Media(props) {
  return _react2.default.createElement(
    _eventsContainer2.default,
    {
      updateMediaStatus: props.updateMediaStatus,
      onAbort: props.onAbort,
      onCanPlay: props.onCanPlay,
      onCanPlayThrough: props.onCanPlayThrough,
      onDurationChange: props.onDurationChange,
      onEmptied: props.onEmptied,
      onEncrypted: props.onEncrypted,
      onEnded: props.onEnded,
      onError: props.onError,
      onLoadedData: props.onLoadedData,
      onLoadedMetadata: props.onLoadedMetadata,
      onLoadStart: props.onLoadStart,
      onPause: props.onPause,
      onPlay: props.onPlay,
      onPlaying: props.onPlaying,
      onProgress: props.onProgress,
      onRateChange: props.onRateChange,
      onSeeked: props.onSeeked,
      onSeeking: props.onSeeking,
      onStalled: props.onStalled,
      onSuspend: props.onSuspend,
      onTimeUpdate: props.onTimeUpdate,
      onVolumeChange: props.onVolumeChange,
      onWaiting: props.onWaiting
    },
    _react2.default.cloneElement(_react2.default.Children.only(props.children), {
      ref: props.setCurrentMedia,
      className: _constants.classes.MEDIA
    }, props.tracks.map(function (track) {
      return _react2.default.createElement(_track2.default, _extends({ key: track.src }, track));
    }))
  );
};

Media.defaultProps = {
  tracks: []
};

Media.propTypes = {
  children: _propTypes2.default.node.isRequired,
  setCurrentMedia: _propTypes2.default.func.isRequired,
  updateMediaStatus: _propTypes2.default.func.isRequired,
  tracks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    default: _propTypes2.default.bool,
    kind: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string,
    srclang: _propTypes2.default.string
  })),
  onAbort: _propTypes2.default.func.isRequired,
  onCanPlay: _propTypes2.default.func.isRequired,
  onCanPlayThrough: _propTypes2.default.func.isRequired,
  onDurationChange: _propTypes2.default.func.isRequired,
  onEmptied: _propTypes2.default.func.isRequired,
  onEncrypted: _propTypes2.default.func.isRequired,
  onEnded: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func.isRequired,
  onLoadedData: _propTypes2.default.func.isRequired,
  onLoadedMetadata: _propTypes2.default.func.isRequired,
  onLoadStart: _propTypes2.default.func.isRequired,
  onPause: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onPlaying: _propTypes2.default.func.isRequired,
  onProgress: _propTypes2.default.func.isRequired,
  onRateChange: _propTypes2.default.func.isRequired,
  onSeeked: _propTypes2.default.func.isRequired,
  onSeeking: _propTypes2.default.func.isRequired,
  onStalled: _propTypes2.default.func.isRequired,
  onSuspend: _propTypes2.default.func.isRequired,
  onTimeUpdate: _propTypes2.default.func.isRequired,
  onVolumeChange: _propTypes2.default.func.isRequired,
  onWaiting: _propTypes2.default.func.isRequired
};

exports.default = Media;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _reactJplayerUtils = __webpack_require__(0);

var _events = __webpack_require__(43);

var _events2 = _interopRequireDefault(_events);

var _urlNotSupportedError = __webpack_require__(44);

var _urlNotSupportedError2 = _interopRequireDefault(_urlNotSupportedError);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].src,
    pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
    otherJPlayerIds: Object.keys(jPlayers).filter(function (key) {
      return key !== id;
    })
  };
};

var contextTypes = {
  internalEvents: _propTypes2.default.shape({
    onAbort: _propTypes2.default.func,
    onCanPlay: _propTypes2.default.func,
    onCanPlayThrough: _propTypes2.default.func,
    onDurationChange: _propTypes2.default.func,
    onEmptied: _propTypes2.default.func,
    onEncrypted: _propTypes2.default.func,
    onEnded: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onLoadedData: _propTypes2.default.func,
    onLoadedMetadata: _propTypes2.default.func,
    onLoadStart: _propTypes2.default.func,
    onPause: _propTypes2.default.func,
    onPlay: _propTypes2.default.func,
    onPlaying: _propTypes2.default.func,
    onProgress: _propTypes2.default.func,
    onRateChange: _propTypes2.default.func,
    onSeeked: _propTypes2.default.func,
    onSeeking: _propTypes2.default.func,
    onStalled: _propTypes2.default.func,
    onSuspend: _propTypes2.default.func,
    onTimeUpdate: _propTypes2.default.func,
    onVolumeChange: _propTypes2.default.func,
    onWaiting: _propTypes2.default.func
  })
};

var defaultProps = {
  internalEvents: {}
};

var mapEvents = function mapEvents(ownerProps) {
  var events = {};

  Object.keys(ownerProps.internalEvents).forEach(function (key) {
    events[key] = function (e) {
      ownerProps.internalEvents[key](e);
      ownerProps[key](e);
    };
  });

  return _extends({}, ownerProps, events);
};

var firstHandlers = {
  pauseOthers: function pauseOthers(props) {
    return function () {
      props.otherJPlayerIds.forEach(function (id) {
        return props.pause(id);
      });
    };
  }
};

var secondHandlers = {
  onDurationChange: function onDurationChange(props) {
    return function (e) {
      props.updateMediaStatus();
      props.onDurationChange(e);
    };
  },
  onEnded: function onEnded(props) {
    return function (e) {
      props.pause(props.id, 0);
      props.updateMediaStatus();
      props.onEnded(e);
    };
  },
  onError: function onError(props) {
    return function (e) {
      props.setOption(props.id, 'error', (0, _urlNotSupportedError2.default)(props.src));
      props.onError(e);
    };
  },
  onPlay: function onPlay(props) {
    return function (e) {
      if (props.pauseOthersOnPlay) {
        props.pauseOthers();
      }
      props.play(props.id);
      props.onPlay(e);
    };
  },
  onProgress: function onProgress(props) {
    return function (e) {
      var bufferedTimeRanges = [];

      for (var i = 0; i < e.currentTarget.buffered.length; i += 1) {
        bufferedTimeRanges.push({
          start: e.currentTarget.buffered.start(i),
          end: e.currentTarget.buffered.end(i)
        });
      }
      props.updateMediaStatus();
      props.setOption(props.id, 'bufferedTimeRanges', bufferedTimeRanges);
      props.onProgress(e);
    };
  },
  onSeeked: function onSeeked(props) {
    return function (e) {
      props.setOption(props.id, 'seeking', false);
      props.onSeeked(e);
    };
  },
  onSeeking: function onSeeking(props) {
    return function (e) {
      props.setOption(props.id, 'seeking', true);
      props.onSeeking(e);
    };
  },
  onTimeUpdate: function onTimeUpdate(props) {
    return function (e) {
      props.updateMediaStatus();
      props.onTimeUpdate(e);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption,
  pause: _actions.pause,
  play: _actions.play
}), (0, _recompose.getContext)(contextTypes), (0, _recompose.defaultProps)(defaultProps), (0, _recompose.mapProps)(mapEvents), (0, _recompose.withHandlers)(firstHandlers), (0, _recompose.withHandlers)(secondHandlers))(_events2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Events = function Events(props) {
  return _react2.default.cloneElement(_react2.default.Children.only(props.children), {
    onAbort: props.onAbort,
    onCanPlay: props.onCanPlay,
    onCanPlayThrough: props.onCanPlayThrough,
    onDurationChange: props.onDurationChange,
    onEmptied: props.onEmptied,
    onEncrypted: props.onEncrypted,
    onEnded: props.onEnded,
    onError: props.onError,
    onLoadedData: props.onLoadedData,
    onLoadedMetadata: props.onLoadedMetadata,
    onLoadStart: props.onLoadStart,
    onPause: props.onPause,
    onPlay: props.onPlay,
    onPlaying: props.onPlaying,
    onProgress: props.onProgress,
    onRateChange: props.onRateChange,
    onSeeked: props.onSeeked,
    onSeeking: props.onSeeking,
    onStalled: props.onStalled,
    onSuspend: props.onSuspend,
    onTimeUpdate: props.onTimeUpdate,
    onVolumeChange: props.onVolumeChange,
    onWaiting: props.onWaiting
  });
};

Events.propTypes = {
  children: _propTypes2.default.element.isRequired,
  onAbort: _propTypes2.default.func.isRequired,
  onCanPlay: _propTypes2.default.func.isRequired,
  onCanPlayThrough: _propTypes2.default.func.isRequired,
  onDurationChange: _propTypes2.default.func.isRequired,
  onEmptied: _propTypes2.default.func.isRequired,
  onEncrypted: _propTypes2.default.func.isRequired,
  onEnded: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func.isRequired,
  onLoadedData: _propTypes2.default.func.isRequired,
  onLoadedMetadata: _propTypes2.default.func.isRequired,
  onLoadStart: _propTypes2.default.func.isRequired,
  onPause: _propTypes2.default.func.isRequired,
  onPlay: _propTypes2.default.func.isRequired,
  onPlaying: _propTypes2.default.func.isRequired,
  onProgress: _propTypes2.default.func.isRequired,
  onRateChange: _propTypes2.default.func.isRequired,
  onSeeked: _propTypes2.default.func.isRequired,
  onSeeking: _propTypes2.default.func.isRequired,
  onStalled: _propTypes2.default.func.isRequired,
  onSuspend: _propTypes2.default.func.isRequired,
  onTimeUpdate: _propTypes2.default.func.isRequired,
  onVolumeChange: _propTypes2.default.func.isRequired,
  onWaiting: _propTypes2.default.func.isRequired
};

exports.default = Events;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(2);

exports.default = function (context) {
  return {
    context: context,
    message: _constants.errors.URL_NO_SUPPORT,
    hint: _constants.hints.URL_NO_SUPPORT
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Track = function Track(props) {
  return _react2.default.createElement('track', {
    'default': props.default,
    kind: props.kind,
    src: props.src,
    label: props.label,
    srcLang: props.srclang
  });
};

Track.defaultProps = {
  default: null,
  kind: null,
  label: null,
  srclang: null
};

Track.propTypes = {
  default: _propTypes2.default.bool,
  kind: _propTypes2.default.string,
  src: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string,
  srclang: _propTypes2.default.string
};

exports.default = Track;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _audio = __webpack_require__(13);

var _audio2 = _interopRequireDefault(_audio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: !jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_audio2.default);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(4);

var _reactJplayerUtils = __webpack_require__(0);

var _states = __webpack_require__(48);

var _states2 = _interopRequireDefault(_states);

var _jPlayer = __webpack_require__(14);

var _jPlayer2 = _interopRequireDefault(_jPlayer);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var jPlayers = _ref.jPlayers;
  var id = ownProps.id,
      keyBindings = ownProps.keyBindings,
      children = ownProps.children,
      className = ownProps.className;


  return {
    media: jPlayers[id].media,
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    keyBindings: keyBindings,
    id: id,
    children: children,
    className: (0, _states2.default)(jPlayers[id], ownProps.states, className)
  };
};

var handlers = {
  onMouseMoveCapture: function onMouseMoveCapture(props) {
    return function () {
      if (props.fullScreen) {
        if (props.paused || props.startGuiFadeOut) {
          props.setOption(props.id, 'startGuiFadeOut', false);
        } else {
          props.setOption(props.id, 'startGuiFadeOut', true);
        }
      }
    };
  }
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    if (Object.keys(this.props.media.sources).length > 0) {
      this.props.setMedia(this.props.id, this.props.media);
    }

    this.props.setOption(this.props.id, 'volumeSupported', (0, _reactJplayerUtils.canSetVolume)());
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withContext)({ id: _propTypes2.default.string }, function (_ref2) {
  var id = _ref2.id;
  return { id: id };
}), (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setMedia: _actions.setMedia,
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_jPlayer2.default);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(49);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (jPlayer, additionalStates) {
  for (var _len = arguments.length, additionalClasses = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    additionalClasses[_key - 2] = arguments[_key];
  }

  var _extends2;

  return _classnames2.default.apply(undefined, [_constants.classes.JPLAYER].concat(additionalClasses, [_extends((_extends2 = {}, _defineProperty(_extends2, _constants.classes.states.AUDIO, !jPlayer.mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.VIDEO, jPlayer.mediaSettings.video), _defineProperty(_extends2, _constants.classes.states.PLAYING, !jPlayer.paused), _defineProperty(_extends2, _constants.classes.states.IDLE, jPlayer.currentTime === 0), _defineProperty(_extends2, _constants.classes.states.FULL_SCREEN, jPlayer.fullScreen), _defineProperty(_extends2, _constants.classes.states.MUTED, jPlayer.muted), _defineProperty(_extends2, _constants.classes.states.VOLUME_LOW, !jPlayer.muted && jPlayer.volume < 0.5), _defineProperty(_extends2, _constants.classes.states.VOLUME_HIGH, !jPlayer.muted && jPlayer.volume >= 0.5), _defineProperty(_extends2, _constants.classes.states.SEEKING, jPlayer.seeking), _defineProperty(_extends2, _constants.classes.states.LOOPED, jPlayer.loop), _defineProperty(_extends2, _constants.classes.states.NO_BROWSER_SUPPORT, jPlayer.mediaSettings.nonSupported), _defineProperty(_extends2, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayer.volumeSupported), _extends2), additionalStates)]));
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = classNames;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _lodash = __webpack_require__(8);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(5);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused,
    fullScreen: jPlayers[id].fullScreen,
    muted: jPlayers[id].muted,
    volume: jPlayers[id].volume,
    keyEnabled: jPlayers[id].keyEnabled,
    focused: jPlayers[id].focused,
    id: id
  };
};

var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {
  var dispatch = _ref3.dispatch;
  var keyBindings = _ref4.keyBindings,
      id = _ref4.id;
  return {
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
    }, keyBindings),
    focused: stateProps.focused,
    keyEnabled: stateProps.keyEnabled
  };
};

var handlers = {
  onKeyDown: function onKeyDown(props) {
    return function (event) {
      if (_constants.keyIgnoredElementNames.some(function (name) {
        return name.toUpperCase() === event.target.nodeName.toUpperCase();
      }) || !props.focused || !props.keyEnabled) {
        return;
      }

      Object.keys(props.keyBindings).forEach(function (key) {
        var keyBinding = props.keyBindings[key];

        if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
          event.preventDefault();
          keyBinding.fn();
        }
      });
    };
  }
};

var lifecycle = {
  componentDidMount: function componentDidMount() {
    document.addEventListener('keydown', this.props.onKeyDown);
  },
  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onKeyDown);
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, null, mergeProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))((0, _recompose.renderNothing)(null));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _screenfull = __webpack_require__(52);

var _screenfull2 = _interopRequireDefault(_screenfull);

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _actions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var handlers = {
  closeFullScreenListener: function closeFullScreenListener(props) {
    return function () {
      if (!_screenfull2.default.isFullscreen && props.fullScreen) {
        props.setOption(props.id, 'fullScreen', false);
      }
    };
  }
};

var lifecycleFunctions = {
  requestFullScreen: function requestFullScreen() {
    if (this.props.fullScreen) {
      if (_screenfull2.default.enabled) {
        _screenfull2.default.request(this.props.jPlayer);
      }
      // Legacy browsers don't implement full screen api
      // Safari 5.1 doesn't hide the other elements even with fullscreen api
      document.body.style.visibility = 'hidden';
    }
  },
  exitFullScreen: function exitFullScreen() {
    if (!this.props.fullScreen) {
      if (_screenfull2.default.enabled) {
        _screenfull2.default.exit();
      }
      document.body.style.visibility = 'visible';
    }
  },
  componentDidMount: function componentDidMount() {
    if (_screenfull2.default.enabled) {
      document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.props.closeFullScreenListener);
    }
    this.requestFullScreen();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    this.requestFullScreen();
    if (prevProps.fullScreen !== this.props.fullScreen) {
      this.exitFullScreen();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (_screenfull2.default.enabled) {
      document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.props.closeFullScreenListener);
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycleFunctions))((0, _recompose.renderNothing)(null));

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = screenfull;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

/* eslint-disable no-console */
var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    error: jPlayers[id].error
  };
};

var lifecycleFunctions = {
  logError: function logError() {
    console.error(this.props.error);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.logError();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.lifecycle)(lifecycleFunctions))((0, _recompose.renderNothing)(null));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _actions = __webpack_require__(5);

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    timeFormats: jPlayers[id].timeFormats,
    currentTime: jPlayers[id].currentTime,
    duration: jPlayers[id].duration,
    showRemainingDuration: jPlayers[id].showRemainingDuration
  };
};

var handlers = {
  setDurationText: function setDurationText(props) {
    return function () {
      var durationText = '';

      if (props.showRemainingDuration) {
        var timeRemaining = props.duration - props.currentTime;

        durationText = (timeRemaining > 0 ? '-' : '') + (0, _reactJplayerUtils.convertTime)(timeRemaining, props.timeFormats);
      } else {
        durationText = (0, _reactJplayerUtils.convertTime)(props.duration, props.timeFormats);
      }

      props.setOption(props.id, 'durationText', durationText);
    };
  },
  setCurrentTimeText: function setCurrentTimeText(props) {
    return function () {
      var currentTimeText = (0, _reactJplayerUtils.convertTime)(props.currentTime, props.timeFormats);

      props.setOption(props.id, 'currentTimeText', currentTimeText);
    };
  }
};

var lifecycle = {
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.timeFormats !== this.props.timeFormats || prevProps.currentTime !== this.props.currentTime) {
      this.props.setCurrentTimeText();
    }

    if (prevProps.timeFormats !== this.props.timeFormats || prevProps.currentTime !== this.props.currentTime || prevProps.duration !== this.props.duration || prevProps.showRemainingDuration !== this.props.showRemainingDuration) {
      this.props.setDurationText();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))((0, _recompose.renderNothing)(null));

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _animation = __webpack_require__(56);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    smoothPlayBar: jPlayers[id].smoothPlayBar,
    currentPercentAbsolute: jPlayers[id].currentPercentAbsolute,
    currentPercentRelative: jPlayers[id].currentPercentRelative
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_animation2.default);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(9);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _playBar = __webpack_require__(15);

var _playBar2 = _interopRequireDefault(_playBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animation = function Animation(props) {
  return _react2.default.createElement(
    _reactMotion.Motion,
    { style: { smoothWidth: (0, _reactMotion.spring)(props.currentPercentAbsolute, [250]) } },
    function (values) {
      return _react2.default.createElement(_playBar2.default, {
        smoothWidth: values.smoothWidth,
        smoothPlayBar: props.smoothPlayBar,
        currentPercentRelative: props.currentPercentRelative
      });
    }
  );
};

Animation.propTypes = {
  currentPercentRelative: _propTypes2.default.number.isRequired,
  currentPercentAbsolute: _propTypes2.default.number.isRequired,
  smoothPlayBar: _propTypes2.default.bool.isRequired
};

exports.default = Animation;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactJplayerUtils = __webpack_require__(0);

var _bufferBar = __webpack_require__(16);

var _bufferBar2 = _interopRequireDefault(_bufferBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    bufferedTimeRanges: jPlayers[id].bufferedTimeRanges,
    duration: jPlayers[id].duration,
    bufferColour: jPlayers[id].bufferColour
  };
};

var handlers = function handlers() {
  var canvas = void 0;

  return {
    setCanvas: function setCanvas() {
      return function (ref) {
        canvas = ref;
      };
    },
    clearBuffer: function clearBuffer() {
      return function () {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      };
    },
    fillBufferPartially: function fillBufferPartially(props) {
      return function () {
        var modifier = canvas.width / props.duration;
        var context = canvas.getContext('2d');

        props.bufferedTimeRanges.forEach(function (bufferedTimeRange) {
          var startX = bufferedTimeRange.start * modifier;
          var endX = bufferedTimeRange.end * modifier;
          var width = endX - startX;

          context.fillStyle = props.bufferColour;
          context.fillRect(startX, 0, width, canvas.height);
        });
      };
    }
  };
};

var lifecycle = {
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {
      if (this.props.bufferedTimeRanges.length === 0) {
        this.props.clearBuffer();
      }
      this.props.fillBufferPartially();
    }
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_bufferBar2.default);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _poster = __webpack_require__(17);

var _poster2 = _interopRequireDefault(_poster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].media.poster
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_poster2.default);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _title = __webpack_require__(18);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    title: (0, _reactJplayerUtils.formatArtistAndTitle)(jPlayers[id].media.artist, jPlayers[id].media.title)
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_title2.default);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _actions = __webpack_require__(5);

var _fullScreen = __webpack_require__(19);

var _fullScreen2 = _interopRequireDefault(_fullScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var mapDispatchToProps = {
  setFullScreen: function setFullScreen(id, fullScreen) {
    return (0, _actions.setOption)(id, 'fullScreen', fullScreen);
  }
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_fullScreen2.default);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _actions = __webpack_require__(5);

var _mute = __webpack_require__(20);

var _mute2 = _interopRequireDefault(_mute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    muted: jPlayers[id].muted
  };
};

var mapDispatchToProps = {
  setMute: _actions.setMute
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_mute2.default);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _actions = __webpack_require__(5);

var _play2 = __webpack_require__(21);

var _play3 = _interopRequireDefault(_play2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    play: function play(id, paused) {
      if (paused) {
        dispatch((0, _actions.play)(id));
      } else {
        dispatch((0, _actions.pause)(id));
      }
    }
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_play3.default);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _actions = __webpack_require__(5);

var _repeat = __webpack_require__(22);

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop
  };
};

var handlers = {
  loop: function loop(props) {
    return function () {
      return props.setOption(props.id, 'loop', !props.loop);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers))(_repeat2.default);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(4);

var _reactJplayerUtils = __webpack_require__(0);

var _actions = __webpack_require__(5);

var _seekBar = __webpack_require__(23);

var _seekBar2 = _interopRequireDefault(_seekBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    seekPercent: jPlayers[id].seekPercent
  };
};

var handlers = {
  movePlayHead: function movePlayHead(props) {
    return function (bar, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var x = e.clientX - offset.left;
      var w = bar.getBoundingClientRect().width;
      var percentage = 100 * (x / w);

      props.setPlayHead(props.id, percentage);
    };
  }
};

var secondHandlers = {
  clickMoveBar: function clickMoveBar(props) {
    return function (bar, e) {
      return props.movePlayHead(bar, e);
    };
  },
  touchMoveBar: function touchMoveBar(props) {
    return function (bar, e) {
      // Stop page scrolling
      e.preventDefault();

      props.movePlayHead(bar, e.touches[0]);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setPlayHead: _actions.setPlayHead
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers))(_seekBar2.default);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bar = function Bar(props) {
  return _react2.default.cloneElement(_react2.default.Children.only(props.children), {
    onClick: props.onClick,
    onMouseDown: props.onMouseDown,
    onTouchStart: props.onTouchStart,
    ref: props.setBar
  });
};

Bar.propTypes = {
  children: _propTypes2.default.element.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onMouseDown: _propTypes2.default.func.isRequired,
  onTouchStart: _propTypes2.default.func.isRequired,
  setBar: _propTypes2.default.func.isRequired
};

exports.default = Bar;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _actions = __webpack_require__(5);

var _playbackRateBar = __webpack_require__(24);

var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalPlaybackRate: jPlayers[id].verticalPlaybackRate,
    minPlaybackRate: jPlayers[id].minPlaybackRate,
    maxPlaybackRate: jPlayers[id].maxPlaybackRate
  };
};

var handlers = {
  movePlaybackRate: function movePlaybackRate(props) {
    return function (bar, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var x = e.clientX - offset.left;
      var y = h - e.clientY + offset.top;
      var ratio = void 0;

      if (props.verticalPlaybackRate) {
        ratio = y / h;
      } else {
        ratio = x / w;
      }

      var playbackRate = ratio * (props.maxPlaybackRate - props.minPlaybackRate) + props.minPlaybackRate;

      props.setOption(props.id, 'playbackRate', playbackRate);
    };
  }
};

var secondHandlers = {
  clickMoveBar: function clickMoveBar(props) {
    return function (bar, e) {
      return props.movePlaybackRate(bar, e);
    };
  },
  touchMoveBar: function touchMoveBar(props) {
    return function (bar, e) {
      // Stop page scrolling
      e.preventDefault();

      props.movePlaybackRate(bar, e.touches[0]);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers))(_playbackRateBar2.default);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _recompose = __webpack_require__(4);

var _actions = __webpack_require__(5);

var _volumeBar = __webpack_require__(27);

var _volumeBar2 = _interopRequireDefault(_volumeBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    verticalVolume: jPlayers[id].verticalVolume
  };
};

var handlers = {
  moveVolumeBar: function moveVolumeBar(props) {
    return function (bar, e) {
      var offset = (0, _reactJplayerUtils.getElementOffset)(bar);
      var w = bar.getBoundingClientRect().width;
      var h = bar.getBoundingClientRect().height;
      var y = h - e.clientY + offset.top;
      var x = e.clientX - offset.left;

      if (props.verticalVolume) {
        props.setVolume(props.id, y / h);
      } else {
        props.setVolume(props.id, x / w);
      }
    };
  }
};

var secondHandlers = {
  clickMoveBar: function clickMoveBar(props) {
    return function (bar, e) {
      return props.moveVolumeBar(bar, e);
    };
  },
  touchMoveBar: function touchMoveBar(props) {
    return function (bar, e) {
      // Stop page scrolling
      e.preventDefault();

      props.moveVolumeBar(bar, e.touches[0]);
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setVolume: _actions.setVolume
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.withHandlers)(secondHandlers))(_volumeBar2.default);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _download = __webpack_require__(30);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    free: jPlayers[id].media.free,
    url: jPlayers[id].src
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_download2.default);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _duration = __webpack_require__(31);

var _duration2 = _interopRequireDefault(_duration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    durationText: jPlayers[id].durationText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_duration2.default);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _currentTime = __webpack_require__(32);

var _currentTime2 = _interopRequireDefault(_currentTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    currentTimeText: jPlayers[id].currentTimeText
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_currentTime2.default);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = __webpack_require__(0);

var _browserUnsupported = __webpack_require__(33);

var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    nonSupported: jPlayers[id].mediaSettings.nonSupported
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_browserUnsupported2.default);

/***/ })
/******/ ]);