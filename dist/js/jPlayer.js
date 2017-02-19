/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(16), __webpack_require__(20), __webpack_require__(23), __webpack_require__(25), __webpack_require__(28), __webpack_require__(30), __webpack_require__(33), __webpack_require__(35), __webpack_require__(37), __webpack_require__(39), __webpack_require__(63), __webpack_require__(41), __webpack_require__(43), __webpack_require__(45), __webpack_require__(47), __webpack_require__(49), __webpack_require__(51), __webpack_require__(53), __webpack_require__(55), __webpack_require__(57), __webpack_require__(59), __webpack_require__(61)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./jPlayerProvider'), require('./jPlayer/gui/gui.container'), require('./jPlayer/video/video.container'), require('./jPlayer/audio/audio.container'), require('./jPlayer/jPlayer/jPlayer.container'), require('./jPlayer/keyControl/keyControl.container'), require('./jPlayer/seekBar/seekBar.container'), require('./jPlayer/playBar/playBar.container'), require('./jPlayer/bufferBar/bufferBar.container'), require('./jPlayer/poster/poster.container'), require('./jPlayer/title/title.container'), require('./jPlayer/fullScreen/fullScreen.container'), require('./jPlayer/mute/mute.container'), require('./jPlayer/play/play.container'), require('./jPlayer/repeat/repeat.container'), require('./jPlayer/playbackRateBar/playbackRateBar.container'), require('./jPlayer/playbackRateBarValue/playbackRateBarValue.container'), require('./jPlayer/volumeBar/volumeBar.container'), require('./jPlayer/volumeBarValue/volumeBarValue.container'), require('./jPlayer/download/download.container'), require('./jPlayer/duration/duration.container'), require('./jPlayer/currentTime/currentTime.container'), require('./jPlayer/browserUnsupported/browserUnsupported.container'));} else {var mod = { exports: {} };factory(mod.exports, global.jPlayerProvider, global.gui, global.video, global.audio, global.jPlayer, global.keyControl, global.seekBar, global.playBar, global.bufferBar, global.poster, global.title, global.fullScreen, global.mute, global.play, global.repeat, global.playbackRateBar, global.playbackRateBarValue, global.volumeBar, global.volumeBarValue, global.download, global.duration, global.currentTime, global.browserUnsupported);global.index = mod.exports;}})(this, function (exports, _jPlayerProvider, _gui, _video, _audio, _jPlayer, _keyControl, _seekBar, _playBar, _bufferBar, _poster, _title, _fullScreen, _mute, _play, _repeat, _playbackRateBar, _playbackRateBarValue, _volumeBar, _volumeBarValue, _download, _duration, _currentTime, _browserUnsupported) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.KeyControl = exports.Gui = exports.JPlayer = exports.JPlayerProvider = undefined;var _jPlayerProvider2 = _interopRequireDefault(_jPlayerProvider);var _gui2 = _interopRequireDefault(_gui);var _video2 = _interopRequireDefault(_video);var _audio2 = _interopRequireDefault(_audio);var _jPlayer2 = _interopRequireDefault(_jPlayer);var _keyControl2 = _interopRequireDefault(_keyControl);var _seekBar2 = _interopRequireDefault(_seekBar);var _playBar2 = _interopRequireDefault(_playBar);var _bufferBar2 = _interopRequireDefault(_bufferBar);var _poster2 = _interopRequireDefault(_poster);var _title2 = _interopRequireDefault(_title);var _fullScreen2 = _interopRequireDefault(_fullScreen);var _mute2 = _interopRequireDefault(_mute);var _play2 = _interopRequireDefault(_play);var _repeat2 = _interopRequireDefault(_repeat);var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);var _volumeBar2 = _interopRequireDefault(_volumeBar);var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);var _download2 = _interopRequireDefault(_download);var _duration2 = _interopRequireDefault(_duration);var _currentTime2 = _interopRequireDefault(_currentTime);var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.























	  JPlayerProvider = _jPlayerProvider2.default;exports.JPlayer = _jPlayer2.default;exports.Gui = _gui2.default;exports.KeyControl = _keyControl2.default;exports.SeekBar = _seekBar2.default;exports.PlayBar = _playBar2.default;exports.
	  BufferBar = _bufferBar2.default;exports.Poster = _poster2.default;exports.Video = _video2.default;exports.Audio = _audio2.default;exports.Title = _title2.default;exports.FullScreen = _fullScreen2.default;exports.
	  Mute = _mute2.default;exports.Play = _play2.default;exports.Repeat = _repeat2.default;exports.PlaybackRateBar = _playbackRateBar2.default;exports.PlaybackRateBarValue = _playbackRateBarValue2.default;exports.
	  VolumeBar = _volumeBar2.default;exports.VolumeBarValue = _volumeBarValue2.default;exports.Download = _download2.default;exports.Duration = _duration2.default;exports.CurrentTime = _currentTime2.default;exports.BrowserUnsupported = _browserUnsupported2.default;});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-redux'), require('redux'), require('lodash.merge'), require('./jPlayer/_reducer/reducer'), require('./util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactRedux, global.redux, global.lodash, global.reducer, global.constants);global.jPlayerProvider = mod.exports;}})(this, function (exports, _react, _reactRedux, _redux, _lodash, _reducer, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _lodash2 = _interopRequireDefault(_lodash);var _reducer2 = _interopRequireDefault(_reducer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}







	  var reducers = (0, _redux.combineReducers)({ jPlayers: _reducer2.default });var

	  jPlayerProvider = function (_React$Component) {_inherits(jPlayerProvider, _React$Component);_createClass(jPlayerProvider, null, [{ key: 'propTypes', get: function get()
	      {
	        return {
	          jPlayers: _react2.default.PropTypes.oneOfType([
	          _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.func),
	          _react2.default.PropTypes.func]).
	          isRequired,
	          children: _react2.default.PropTypes.element.isRequired };

	      } }]);
	    function jPlayerProvider(props) {_classCallCheck(this, jPlayerProvider);var _this = _possibleConstructorReturn(this, (jPlayerProvider.__proto__ || Object.getPrototypeOf(jPlayerProvider)).call(this,
	      props));

	      _this.initialState = {
	        jPlayers: {} };

	      var jPlayers = props.jPlayers;

	      if (!Array.isArray(jPlayers)) {
	        jPlayers = [jPlayers];
	      }

	      jPlayers.forEach(function (jPlayer) {
	        _this.initialState.jPlayers[jPlayer.uid] = _extends({},
	        (0, _lodash2.default)({}, _constants.statusDefaultValues, _constants.defaultOptions, jPlayer.options), {
	          id: jPlayer.uid });

	      });

	      _this.store = (0, _redux.createStore)(reducers, _this.initialState);return _this;
	    }_createClass(jPlayerProvider, [{ key: 'render', value: function render()
	      {
	        return (
	          _react2.default.createElement(_reactRedux.Provider, { store: this.store },
	            this.props.children));


	      } }]);return jPlayerProvider;}(_react2.default.Component);exports.default =


	  jPlayerProvider;});

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("lodash.merge");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13), __webpack_require__(14), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('lodash.includes'), require('../../util/constants'), require('../../util/index'));} else {var mod = { exports: {} };factory(mod.exports, global.lodash, global.constants, global.index);global.reducer = mod.exports;}})(this, function (exports, _lodash, _constants, _index) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _lodash2 = _interopRequireDefault(_lodash);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




	  var resetStatus = function resetStatus(state) {return (0, _index.updateObject)(state, _extends({}, _constants.statusDefaultValues));};

	  var clearMedia = function clearMedia(state) {return (0, _index.updateObject)(state, _extends({},
	    resetStatus(state), {
	      media: _constants.defaultOptions.media }));};


	  var updateFormats = function updateFormats(state, media) {
	    var newMediaSettings = _extends({}, state.mediaSettings);
	    var newFormats = [];

	    Object.keys(media.sources).forEach(function (supplied) {
	      var canPlayType = void 0;

	      try {
	        // Some legacy browsers don't have canPlayType property
	        canPlayType = document.createElement(_constants.formats[supplied].MEDIA).
	        canPlayType(_constants.formats[supplied].CODEC);
	      } catch (error) {
	        canPlayType = '';
	      }

	      newFormats.push({
	        supplied: supplied,
	        supported: canPlayType });

	    });

	    newMediaSettings.formats = newFormats;

	    return (0, _index.updateObject)(state, {
	      mediaSettings: newMediaSettings });

	  };

	  var setMedia = function setMedia(state, _ref) {var _ref$media = _ref.media,media = _ref$media === undefined ? { sources: [] } : _ref$media;
	    var newState = _extends({},
	    state,
	    resetStatus(state),
	    updateFormats(state, media));


	    newState.mediaSettings.formats.forEach(function (format) {
	      if (format.supported && !newState.mediaSettings.foundSupported) {
	        newState.mediaSettings.video = _constants.formats[format.supplied].MEDIA === 'video';
	        newState.src = media.sources[format.supplied];
	        newState.paused = true;
	        newState.mediaSettings.foundSupported = true;
	      }
	    });

	    if (!newState.mediaSettings.foundSupported) {
	      newState.error = (0, _index.noFormatSupportedError)('{ media.sources: \'' +
	      Object.keys(media.sources).join(', ') + '\' }');

	    }
	    newState.media = (0, _index.updateObject)(_constants.defaultOptions.media, media);

	    return newState;
	  };

	  var play = function play(state, _ref2) {var time = _ref2.time;
	    if (state.src) {
	      return (0, _index.updateObject)(state, {
	        paused: false,
	        newTime: !isNaN(time) ? time : state.newTime });

	    }
	    return (0, _index.updateObject)(state, {
	      error: (0, _index.urlNotSetError)(play.name) });

	  };

	  var pause = function pause(state, _ref3) {var time = _ref3.time;
	    if (state.src) {
	      return (0, _index.updateObject)(state, {
	        paused: true,
	        newTime: !isNaN(time) ? time : state.newTime });

	    }
	    return (0, _index.updateObject)(state, {
	      error: (0, _index.urlNotSetError)(pause.name) });

	  };

	  var setPlayHead = function setPlayHead(state, _ref4) {var percent = _ref4.percent;
	    var limitedPercent = (0, _index.limitValue)(percent, 0, 100);

	    if (state.src) {
	      return (0, _index.updateObject)(state, {
	        playHeadPercent: limitedPercent });

	    }
	    return (0, _index.updateObject)(state, {
	      error: (0, _index.urlNotSetError)(setPlayHead.name) });

	  };

	  var setVolume = function setVolume(state, _ref5) {var volume = _ref5.volume;return (0, _index.updateObject)(state, {
	      volume: (0, _index.limitValue)(volume, 0, 1) });};


	  var setMute = function setMute(state, _ref6) {var mute = _ref6.mute;return (0, _index.updateObject)(state, {
	      muted: mute });};


	  var setDuration = function setDuration(state, _ref7) {var remainingDuration = _ref7.remainingDuration;return (0, _index.updateObject)(state, {
	      remainingDuration: !remainingDuration });};


	  var setPlaybackRate = function setPlaybackRate(state, _ref8) {var playbackRate = _ref8.playbackRate;return (0, _index.updateObject)(state, {
	      playbackRate: (0, _index.limitValue)(playbackRate, state.minPlaybackRate, state.maxPlaybackRate) });};


	  var setLoop = function setLoop(state, _ref9) {var loop = _ref9.loop;return (0, _index.updateObject)(state, {
	      loop: loop });};


	  var setFullScreen = function setFullScreen(state, _ref10) {var fullScreen = _ref10.fullScreen;return (0, _index.updateObject)(state, {
	      fullScreen: fullScreen });};


	  var setFocus = function setFocus(state, _ref11) {var uid = _ref11.uid;
	    var newState = _extends({}, state);
	    var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {return newState[key].keyEnabled;}).shift();

	    if (newState[uid].keyEnabled) {
	      Object.keys(state).forEach(function (key) {
	        if (key === uid) {
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

	  var updatePlayer = function updatePlayer() {var jPlayer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var action = arguments[1];var actionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : action.type;
	    switch (actionType) {
	      case _constants.actionTypes.jPlayer.SET_OPTION:
	        return (0, _index.updateObject)(jPlayer, _defineProperty({}, action.key, action.value));
	      case _constants.actionTypes.jPlayer.CLEAR_MEDIA:
	        return clearMedia(jPlayer);
	      case _constants.actionTypes.jPlayer.SET_MEDIA:
	        return setMedia(jPlayer, action);
	      case _constants.actionTypes.jPlayer.PLAY:
	        return play(jPlayer, action);
	      case _constants.actionTypes.jPlayer.PAUSE:
	        return pause(jPlayer, action);
	      case _constants.actionTypes.jPlayer.PLAY_HEAD:
	        return setPlayHead(jPlayer, action);
	      case _constants.actionTypes.jPlayer.VOLUME:
	        return setVolume(setMute(jPlayer, { mute: action.volume <= 0 }), action);
	      case _constants.actionTypes.jPlayer.MUTE:
	        return setMute(jPlayer, action);
	      case _constants.actionTypes.jPlayer.DURATION:
	        return setDuration(jPlayer, action);
	      case _constants.actionTypes.jPlayer.PLAYBACK_RATE:
	        return setPlaybackRate(jPlayer, action);
	      case _constants.actionTypes.jPlayer.LOOP:
	        return setLoop(jPlayer, action);
	      case _constants.actionTypes.jPlayer.FULL_SCREEN:
	        return setFullScreen(jPlayer, action);
	      default:
	        return jPlayer;}

	  };

	  var setGlobalOptions = function setGlobalOptions(state, action) {
	    var newState = _extends({}, state);

	    Object.keys(newState).forEach(function (key) {var _newState$key$global =
	      newState[key].global,global = _newState$key$global === undefined ? [] : _newState$key$global;

	      if (key !== action.uid && (0, _lodash2.default)(global, action.type)) {
	        newState = (0, _index.updateObject)(newState, _defineProperty({},
	        key, updatePlayer(newState[key], action, action.type)));

	      }
	    });
	    return newState;
	  };

	  var isInitializing = function isInitializing(actionType) {return (
	      !Object.keys(_constants.actionTypes.jPlayer).every(function (currentActionType) {return currentActionType !== actionType;}));};


	  var jPlayerReducer = function jPlayerReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var action = arguments[1];
	    if (!isInitializing(action.type)) {
	      return state;
	    }
	    var newState = _extends({}, state);

	    switch (action.type) {
	      case _constants.actionTypes.jPlayer.FOCUS:
	        return (0, _index.updateObject)(newState, setFocus(newState, action));
	      default:
	        newState = setGlobalOptions(state, action);
	        newState = (0, _index.updateObject)(newState, _defineProperty({},
	        action.uid, updatePlayer(newState[action.uid], action)));


	        return jPlayerReducer(newState, {
	          type: _constants.actionTypes.jPlayer.FOCUS,
	          uid: action.uid });}


	  };exports.default =

	  jPlayerReducer;});

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("lodash.includes");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports);} else {var mod = { exports: {} };factory(mod.exports);global.constants = mod.exports;}})(this, function (exports) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var actionTypes = exports.actionTypes = {
	    jPlayer: {
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
	      FOCUS: 'FOCUS' },

	    jPlaylist: {
	      SET_OPTION: 'SET_OPTION',
	      ARRAY_ADD_UNIQUE: 'ARRAY_ADD_UNIQUE',
	      ARRAY_REMOVE_BY_VALUE: 'ARRAY_REMOVE_BY_VALUE',
	      ARRAY_REMOVE_BY_INDEX: 'ARRAY_REMOVE_BY_INDEX' } };




	  var keys = exports.keys = {
	    VOLUME_BAR_CLASS: 'volumeBarClass',
	    VOLUME_BAR_VALUE_CLASS: 'volumeBarValueClass',
	    PLAYBACK_RATE_BAR_CLASS: 'playbackRateBarClass',
	    PLAYBACK_RATE_BAR_VALUE_CLASS: 'playbackRateBarValueClass',
	    SEEK_BAR_CLASS: 'seekBarClass',
	    NO_BROWSER_SUPPORT: 'noBrowserSupportClass',
	    POSTER_CLASS: 'posterClass',
	    VIDEO_CLASS: 'videoClass',
	    VIDEO_PLAY_CLASS: 'videoPlayClass',
	    PLAY_CLASS: 'playClass',
	    PAUSE_CLASS: 'pauseClass',
	    REPEAT_CLASS: 'repeatClass',
	    FULL_SCREEN_CLASS: 'fullScreenClass',
	    PLAYER_CLASS: 'playerClass',
	    DETAILS_CLASS: 'detailsClass',
	    SHUFFLE_OFF_CLASS: 'shuffleOffClass',
	    PLAYLIST: 'playlist' };


	  var errors = exports.errors = {
	    FORMAT_NO_SUPPORT: 'It is not possible to play any media format ' +
	    'provided on this browser using your current options.',
	    URL_NO_SUPPORT: 'The media URL could not be loaded.',
	    URL_NOT_SET: 'Attempted to issue media playback commands while no media url is set.' };


	  var hints = exports.hints = {
	    FORMAT_NO_SUPPORT: 'The browser may not support these file types.',
	    URL_NO_SUPPORT: 'Check the media URL is valid.',
	    URL_NOT_SET: 'Pass the media through the options or use the setMedia()' +
	    'action that is passed into the component props.' };


	  var classes = exports.classes = {
	    AUDIO: 'jp-audio',
	    VIDEO: 'jp-video',
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
	      PLAYING: 'jp-state-playing',
	      IDLE: 'jp-state-idle',
	      SEEKING: 'jp-state-seeking',
	      MUTED: 'jp-state-muted',
	      VOLUME_LOW: 'jp-state-volume-low',
	      VOLUME_HIGH: 'jp-state-volume-high',
	      LOOPED: 'jp-state-looped',
	      LOOPED_PLAYLIST: 'jp-state-looped-playlist',
	      FULL_SCREEN: 'jp-state-full-screen',
	      NO_VOLUME: 'jp-state-no-volume',
	      SHUFFLED: 'jp-state-shuffled',
	      NO_BROWSER_SUPPORT: 'jp-state-no-browser-support',
	      NO_VOLUME_SUPPORT: 'jp-state-no-volume-support' } };



	  var loopOptions = exports.loopOptions = {
	    OFF: 'off',
	    LOOP: 'loop',
	    LOOP_PLAYLIST: 'loop-playlist' };


	  var noFullWindows = exports.noFullWindows = {
	    MSIE: /msie [0-6]\./,
	    IPAD: /ipad.*?os [0-4]\./,
	    IPHONE: /iphone/,
	    IPOD: /ipod/,
	    ANDROID_PAD: /android [0-3]\.(?!.*?mobile)/,
	    ANDROID_PHONE: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
	    BLACKBERRY: /blackberry/,
	    WINDOWS_CE: /windows ce/,
	    IEMOBILE: /iemobile/,
	    WEBOS: /webos/ };


	  var noVolumes = exports.noVolumes = {
	    IPAD: /ipad/,
	    IPHONE: /iphone/,
	    IPOD: /ipod/,
	    ANDROID_PAD: /android(?!.*?mobile)/,
	    ANDROID_PHONE: /android.*?mobile/,
	    BLACKBERRY: /blackberry/,
	    WINDOWS_CE: /windows ce/,
	    IEMOBILE: /iemobile/,
	    WEBOS: /webos/,
	    PLAYBOOK: /playbook/ };


	  var formats = exports.formats = {
	    mp3: {
	      CODEC: 'audio/mpeg',
	      MEDIA: 'audio' },

	    m4a: { // AAC / MP4
	      CODEC: 'audio/mp4; codecs="mp4a.40.2"',
	      MEDIA: 'audio' },

	    m3u8a: { // AAC / MP4 / Apple HLS
	      CODEC: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
	      MEDIA: 'audio' },

	    m3ua: { // M3U
	      CODEC: 'audio/mpegurl',
	      MEDIA: 'audio' },

	    oga: { // OGG
	      CODEC: 'audio/ogg; codecs="vorbis, opus"',
	      MEDIA: 'audio' },

	    flac: { // FLAC
	      CODEC: 'audio/x-flac',
	      MEDIA: 'audio' },

	    wav: { // PCM
	      CODEC: 'audio/wav; codecs="1"',
	      MEDIA: 'audio' },

	    webma: { // WEBM
	      CODEC: 'audio/webm; codecs="vorbis"',
	      MEDIA: 'audio' },

	    fla: { // FLV / F4A
	      CODEC: 'audio/x-flv',
	      MEDIA: 'audio' },

	    rtmpa: { // RTMP AUDIO
	      CODEC: 'audio/rtmp; codecs="rtmp"',
	      MEDIA: 'audio' },

	    m4v: { // H.264 / MP4
	      CODEC: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
	      MEDIA: 'video' },

	    m3u8v: { // H.264 / AAC / MP4 / Apple HLS
	      CODEC: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
	      MEDIA: 'video' },

	    m3uv: { // M3U
	      CODEC: 'audio/mpegurl',
	      MEDIA: 'video' },

	    ogv: { // OGG
	      CODEC: 'video/ogg; codecs="theora, vorbis"',
	      MEDIA: 'video' },

	    webmv: { // WEBM
	      CODEC: 'video/webm; codecs="vorbis, vp8"',
	      MEDIA: 'video' },

	    flv: { // FLV / F4V
	      CODEC: 'video/x-flv',
	      MEDIA: 'video' },

	    rtmpv: { // RTMP VIDEO
	      CODEC: 'video/rtmp; codecs="rtmp"',
	      MEDIA: 'video' } };



	  var statusDefaultValues = exports.statusDefaultValues = {
	    paused: true,
	    seeking: false,
	    src: '',
	    guiFadeOut: false,
	    currentTimeText: '0:00',
	    durationText: '',
	    seekPercent: 0,
	    remainingDuration: 0,
	    playHeadPercent: 0,
	    currentPercentRelative: 0,
	    currentPercentAbsolute: 0,
	    newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
	    currentTime: 0,
	    duration: 0,
	    remaining: 0,
	    ended: 0,
	    error: {},
	    bufferedTimeRanges: [] };


	  var defaultOptions = exports.defaultOptions = {
	    preload: 'metadata', // HTML5 Spec values: none, metadata, auto.
	    minPlaybackRate: 0.5,
	    maxPlaybackRate: 4,
	    supplied: ['mp3'], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
	    loopOptions: ['loop-playlist'],
	    playbackRate: 1.0,
	    defaultPlaybackRate: 1.0,
	    bufferColour: '#dddddd', // Canvas fillStyle property Colour, gradient or pattern (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
	    volume: 0.8, // The volume. Number 0 to 1
	    barDrag: true,
	    guiFadeHoldTime: 3000,
	    media: {
	      title: '',
	      poster: '',
	      free: false },

	    showRemainingDuration: false,
	    muted: false,
	    loop: loopOptions.OFF,
	    autoplay: false,
	    smoothPlayBar: false,
	    fullScreen: false,
	    verticalPlaybackRate: false,
	    verticalVolume: false,
	    keyEnabled: true,
	    mediaSettings: {
	      video: false,
	      formats: [] },

	    timeFormats: {
	      showHour: false,
	      showMin: true,
	      showSec: true,
	      padHour: false,
	      padMin: true,
	      padSec: true,
	      sepHour: ':',
	      sepMin: ':',
	      sepSec: '' } };



	  var keyIgnoreElementNames = exports.keyIgnoreElementNames = ['A', 'INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(9), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-redux'), require('./constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactRedux, global.constants);global.index = mod.exports;}})(this, function (exports, _react, _reactRedux, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getHeight = exports.getWidth = exports.getOffset = exports.urlNotSetError = exports.urlNotSupportedError = exports.noFormatSupportedError = exports.updateObject = exports.mapObject = exports.connectWithId = undefined;var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




	  var getContext = function getContext(contextTypes) {return function (Component) {
	      var GetContext = function GetContext(ownerProps, context) {return _react2.default.createElement(Component, _extends({}, ownerProps, context));};

	      GetContext.contextTypes = contextTypes;

	      return GetContext;
	    };};

	  var compose = function compose() {for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {funcs[_key] = arguments[_key];}return funcs.reduce(function (a, b) {return function () {return a(b.apply(undefined, arguments));};});};

	  var connectWithId = exports.connectWithId = function connectWithId() {return compose(
	    getContext({ uid: _react2.default.PropTypes.string }),
	    _reactRedux.connect.apply(undefined, arguments));};


	  var mapObject = exports.mapObject = function mapObject(obj, fn) {return (
	      Object.assign.apply(Object, _toConsumableArray(Object.keys(obj).map(function (k) {return _defineProperty({}, k, fn(obj[k]));}))));};

	  var updateObject = exports.updateObject = function updateObject(existingObject, newValues) {return _extends({},
	    existingObject,
	    newValues);};


	  var noFormatSupportedError = exports.noFormatSupportedError = function noFormatSupportedError(context) {return {
	      context: context,
	      message: _constants.errors.FORMAT_NO_SUPPORT,
	      hint: _constants.hints.FORMAT_NO_SUPPORT };};


	  var urlNotSupportedError = exports.urlNotSupportedError = function urlNotSupportedError(context) {return {
	      context: context,
	      message: _constants.errors.URL_NO_SUPPORT,
	      hint: _constants.hints.URL_NO_SUPPORT };};


	  var urlNotSetError = exports.urlNotSetError = function urlNotSetError(context) {return {
	      context: context,
	      message: _constants.errors.URL_NOT_SET,
	      hint: _constants.hints.URL_NOT_SET };};


	  var getOffset = exports.getOffset = function getOffset(el) {return (
	      {
	        top: el.getBoundingClientRect().top + document.body.scrollTop,
	        left: el.getBoundingClientRect().left + document.body.scrollLeft });};



	  var getWidth = exports.getWidth = function getWidth(el) {return el.getBoundingClientRect().width;};

	  var getHeight = exports.getHeight = function getHeight(el) {return el.getBoundingClientRect().height;};

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
	    var audio = new Audio();
	    audio.volume = 0.5;

	    return audio.volume === 0.5;
	  };

	  var convertTime = exports.convertTime = function convertTime(seconds) {
	    if (isNaN(seconds)) {
	      return '';
	    }
	    var myTime = new Date(seconds * 1000);var
	    timeFormats = _constants.defaultOptions.timeFormats;

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
	  };});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(17), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('./gui'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.gui);global.guiContainer = mod.exports;}})(this, function (exports, _index, _actions, _gui) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _gui2 = _interopRequireDefault(_gui);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      fullScreen: jPlayers[uid].fullScreen,
	      paused: jPlayers[uid].paused,
	      guiFadeOut: jPlayers[uid].guiFadeOut,
	      guiFadeHoldTimeout: jPlayers[uid].guiFadeHoldTimeout };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var fullScreen = _ref4.fullScreen,paused = _ref4.paused,guiFadeOut = _ref4.guiFadeOut,guiFadeHoldTimeout = _ref4.guiFadeHoldTimeout;var dispatch = _ref5.dispatch;var
	    uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onMouseMove: function onMouseMove() {
	        if (fullScreen && !paused) {
	          dispatch((0, _actions.setOption)('guiFadeOut', false, uid));
	          clearTimeout(guiFadeHoldTimeout);
	        }
	      },
	      fullScreen: fullScreen,
	      guiFadeOut: guiFadeOut },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_gui2.default);});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.constants);global.actions = mod.exports;}})(this, function (exports, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.setFocus = exports.setFullScreen = exports.setLoop = exports.setPlaybackRate = exports.setDuration = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.setOption = undefined;

	  var setOption = exports.setOption = function setOption(key, value, uid) {return {
	      type: _constants.actionTypes.jPlayer.SET_OPTION,
	      key: key,
	      value: value,
	      uid: uid };};

	  var setMedia = exports.setMedia = function setMedia(media, uid) {return {
	      type: _constants.actionTypes.jPlayer.SET_MEDIA,
	      uid: uid,
	      media: media };};

	  var clearMedia = exports.clearMedia = function clearMedia(uid) {return {
	      type: _constants.actionTypes.jPlayer.CLEAR_MEDIA,
	      uid: uid };};

	  var play = exports.play = function play(uid, time) {return {
	      type: _constants.actionTypes.jPlayer.PLAY,
	      time: time,
	      uid: uid };};

	  var pause = exports.pause = function pause(uid, time) {return {
	      type: _constants.actionTypes.jPlayer.PAUSE,
	      uid: uid,
	      time: time };};

	  var setPlayHead = exports.setPlayHead = function setPlayHead(percent, uid) {return {
	      type: _constants.actionTypes.jPlayer.PLAY_HEAD,
	      percent: percent,
	      uid: uid };};

	  var setVolume = exports.setVolume = function setVolume(volume, uid) {return {
	      type: _constants.actionTypes.jPlayer.VOLUME,
	      uid: uid,
	      volume: volume };};

	  var setMute = exports.setMute = function setMute(mute, uid) {return {
	      type: _constants.actionTypes.jPlayer.MUTE,
	      mute: mute,
	      uid: uid };};

	  var setDuration = exports.setDuration = function setDuration(uid, remainingDuration) {return {
	      type: _constants.actionTypes.jPlayer.DURATION,
	      remainingDuration: remainingDuration,
	      uid: uid };};

	  var setPlaybackRate = exports.setPlaybackRate = function setPlaybackRate(playbackRate, uid) {return {
	      type: _constants.actionTypes.jPlayer.PLAYBACK_RATE,
	      playbackRate: playbackRate,
	      uid: uid };};

	  var setLoop = exports.setLoop = function setLoop(loop, uid) {return {
	      type: _constants.actionTypes.jPlayer.LOOP,
	      loop: loop,
	      uid: uid };};

	  var setFullScreen = exports.setFullScreen = function setFullScreen(fullScreen, uid) {return {
	      type: _constants.actionTypes.jPlayer.FULL_SCREEN,
	      fullScreen: fullScreen,
	      uid: uid };};

	  var setFocus = exports.setFocus = function setFocus(uid) {return {
	      type: _constants.actionTypes.jPlayer.FOCUS,
	      uid: uid };};});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(19), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-motion'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactMotion, global.constants);global.gui = mod.exports;}})(this, function (exports, _react, _reactMotion, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




	  var Gui = function Gui(_ref) {var fullScreen = _ref.fullScreen,guiFadeOut = _ref.guiFadeOut,attributes = _objectWithoutProperties(_ref, ['fullScreen', 'guiFadeOut']);return (
	      _react2.default.createElement(_reactMotion.Motion, {
	          defaultStyle: { opacity: 1 },
	          style: { opacity: fullScreen ? (0, _reactMotion.spring)(guiFadeOut ? 0 : 1, [250]) : 1 } },

	        function (values) {return (
	            _react2.default.createElement('div', _extends({},
	            attributes, { className: _constants.classes.GUI,
	              style: {
	                opacity: values.opacity,
	                display: values.opacity === 0 ? 'none' : '' } })));}));};







	  Gui.propTypes = {
	    children: _react2.default.PropTypes.oneOfType([
	    _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
	    _react2.default.PropTypes.element]).
	    isRequired,
	    guiFadeOut: _react2.default.PropTypes.bool.isRequired,
	    fullScreen: _react2.default.PropTypes.bool.isRequired };exports.default =


	  Gui;});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("react-motion");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./video'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.video);global.videoContainer = mod.exports;}})(this, function (exports, _index, _video) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _video2 = _interopRequireDefault(_video);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      require: jPlayers[uid].mediaSettings.video },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_video2.default);});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(22), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../media/media.container'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.media, global.constants);global.video = mod.exports;}})(this, function (exports, _react, _media, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _media2 = _interopRequireDefault(_media);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




	  var Video = function Video(_ref) {var require = _ref.require,events = _ref.events,attributes = _objectWithoutProperties(_ref, ['require', 'events']);return (
	      require ?
	      _react2.default.createElement(_media2.default, events,
	        _react2.default.createElement('video',
	        attributes)) :


	      null);};


	  Video.defaultProps = {
	    events: null,
	    require: _constants.defaultOptions.mediaSettings.video };


	  Video.propTypes = {
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
	      onCanPlayThrough: _react2.default.PropTypes.func }) };exports.default =



	  Video;});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(15), __webpack_require__(14), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../../util/constants'), require('../_actions/actions'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.constants, global.actions);global.mediaContainer = mod.exports;}})(this, function (exports, _react, _index, _constants, _actions) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,children = _ref.children,props = _objectWithoutProperties(_ref, ['uid', 'children']);return _extends({
	      loop: jPlayers[uid].loop,
	      showRemainingDuration: jPlayers[uid].showRemainingDuration,
	      src: jPlayers[uid].src,
	      currentTime: jPlayers[uid].currentTime,
	      playHeadPercent: jPlayers[uid].playHeadPercent,
	      paused: jPlayers[uid].paused,
	      defaultPlaybackRate: jPlayers[uid].defaultPlaybackRate,
	      playbackRate: jPlayers[uid].playbackRate,
	      preload: jPlayers[uid].preload,
	      volume: jPlayers[uid].volume,
	      muted: jPlayers[uid].muted,
	      autoplay: jPlayers[uid].autoplay,
	      newTime: jPlayers[uid].newTime,
	      require: jPlayers[uid].mediaSettings.require,
	      children: children },
	    props);};


	  var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {var dispatch = _ref3.dispatch;var uid = _ref4.uid;return _extends({
	      setOption: function setOption(key, value) {return dispatch((0, _actions.setOption)(key, value, uid));},
	      pause: function pause(time) {return dispatch((0, _actions.pause)(uid, time));} },
	    stateProps);};var


	  MediaContainer = function (_React$Component) {_inherits(MediaContainer, _React$Component);_createClass(MediaContainer, null, [{ key: 'propTypes', get: function get()
	      {
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
	          loop: _react2.default.PropTypes.string,
	          showRemainingDuration: _react2.default.PropTypes.bool.isRequired,
	          src: _react2.default.PropTypes.string.isRequired,
	          playHeadPercent: _react2.default.PropTypes.number.isRequired,
	          paused: _react2.default.PropTypes.bool.isRequired,
	          setOption: _react2.default.PropTypes.func.isRequired,
	          pause: _react2.default.PropTypes.func.isRequired,
	          /* eslint-disable react/no-unused-prop-types */
	          autoplay: _react2.default.PropTypes.bool,
	          defaultPlaybackRate: _react2.default.PropTypes.number,
	          muted: _react2.default.PropTypes.bool,
	          playbackRate: _react2.default.PropTypes.number,
	          preload: _react2.default.PropTypes.string,
	          volume: _react2.default.PropTypes.number,
	          /* eslint-enable react/no-unused-prop-types */
	          children: _react2.default.PropTypes.oneOfType([
	          _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
	          _react2.default.PropTypes.element]).
	          isRequired };

	      } }, { key: 'defaultProps', get: function get()
	      {
	        return {
	          onProgress: null,
	          onTimeUpdate: null,
	          onDurationChange: null,
	          onRateChange: null,
	          onSeeking: null,
	          onSeeked: null,
	          onPlay: null,
	          onRepeat: null,
	          onEnded: null,
	          onError: null,
	          onPlaying: null,
	          onPause: null,
	          onWaiting: null,
	          onSuspend: null,
	          onVolumeChange: null,
	          onLoadStart: null,
	          onLoadedMetadata: null,
	          onAbort: null,
	          onEmptied: null,
	          onStalled: null,
	          onLoadedData: null,
	          onCanPlay: null,
	          onCanPlayThrough: null,
	          loop: _constants.loopOptions.OFF,
	          autoplay: _constants.defaultOptions.autoplay,
	          defaultPlaybackRate: _constants.defaultOptions.defaultPlaybackRate,
	          muted: _constants.defaultOptions.muted,
	          playbackRate: _constants.defaultOptions.playbackRate,
	          preload: _constants.defaultOptions.preload,
	          volume: _constants.defaultOptions.volume };

	      } }]);
	    function MediaContainer(props) {_classCallCheck(this, MediaContainer);var _this = _possibleConstructorReturn(this, (MediaContainer.__proto__ || Object.getPrototypeOf(MediaContainer)).call(this,
	      props));_this.








































































































	      getCurrentPercentRelative = function () {
	        var currentPercentRelative = 0;

	        if (_this.currentMedia.seekable.length > 0) {
	          currentPercentRelative = 100 * (_this.currentMedia.currentTime /
	          _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1));
	        }
	        return currentPercentRelative;
	      };_this.
	      setCurrentMedia = function (ref) {return _this.currentMedia = ref;};_this.
	      updateMediaStatus = function () {
	        var seekPercent = 0;
	        var durationText = '';

	        var remaining = _this.currentMedia.duration - _this.currentMedia.currentTime;
	        var currentTimeText = (0, _index.convertTime)(_this.currentMedia.currentTime);
	        var currentPercentAbsolute = 100 * (_this.currentMedia.currentTime /
	        _this.currentMedia.duration);

	        if (_this.currentMedia.seekable.length > 0) {
	          seekPercent = 100 * (_this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) /
	          _this.currentMedia.duration);
	        }

	        if (_this.props.showRemainingDuration) {
	          durationText = (remaining > 0 ? '-' : '') + (0, _index.convertTime)(remaining);
	        } else {
	          durationText = (0, _index.convertTime)(_this.currentMedia.duration);
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
	      };_this.
	      updateCurrentMedia = function (_ref5)
	      {var defaultPlaybackRate = _ref5.defaultPlaybackRate,playbackRate = _ref5.playbackRate,preload = _ref5.preload,volume = _ref5.volume,muted = _ref5.muted,autoplay = _ref5.autoplay,loop = _ref5.loop;
	        _this.currentMedia.defaultPlaybackRate = defaultPlaybackRate;
	        _this.currentMedia.playbackRate = playbackRate;
	        _this.currentMedia.preload = preload;
	        _this.currentMedia.volume = volume;
	        _this.currentMedia.muted = muted;
	        _this.currentMedia.autoplay = autoplay;
	        _this.currentMedia.loop = loop === 'loop';
	      };_this.state = {};_this.events = { onProgress: function onProgress() {var bufferedTimeRanges = [];for (var i = 0; i < _this.currentMedia.buffered.length; i += 1) {bufferedTimeRanges.push({ start: _this.currentMedia.buffered.start(i), end: _this.currentMedia.buffered.end(i) });}_this.updateMediaStatus();_this.props.setOption('bufferedTimeRanges', bufferedTimeRanges);_this.props.onProgress();}, onTimeUpdate: function onTimeUpdate() {_this.updateMediaStatus();_this.props.onTimeUpdate();}, onDurationChange: function onDurationChange() {_this.updateMediaStatus();_this.props.onDurationChange();}, onSeeking: function onSeeking() {_this.props.setOption('seeking', true);_this.props.onSeeking();}, onSeeked: function onSeeked() {_this.props.setOption('seeking', false);_this.props.onSeeked();}, onPlay: function onPlay() {_this.props.setOption('paused', false);_this.props.onPlay();}, onEnded: function onEnded() {// Pause so that the play/pause button resets and the poster is shown again
	          _this.props.pause(0);_this.updateMediaStatus();if (_this.props.loop === 'loop') {_this.props.onRepeat();}_this.props.onEnded();}, onError: function onError() {_this.props.setOption('error', (0, _index.urlNotSupportedError)(_this.props.src));_this.props.onError();}, onRateChange: _this.props.onRateChange, onPlaying: _this.props.onPlaying, onPause: _this.props.onPause, onWaiting: _this.props.onWaiting, onSuspend: _this.props.onSuspend, onVolumeChange: _this.props.onVolumeChange, onLoadStart: _this.props.onLoadStart, onLoadedMetadata: _this.props.onLoadedMetadata, onAbort: _this.props.onAbort, onEmptied: _this.props.onEmptied, onStalled: _this.props.onStalled, onLoadedData: _this.props.onLoadedData, onCanPlay: _this.props.onCanPlay, onCanPlayThrough: _this.props.onCanPlayThrough };return _this;}_createClass(MediaContainer, [{ key: 'componentDidMount', value: function componentDidMount() {this.currentMedia.src = this.props.src;this.props.setOption('volumeSupported', (0, _index.canSetVolume)());this.updateCurrentMedia(this.props);} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {this.updateCurrentMedia(nextProps);if (nextProps.src !== this.props.src) {this.currentMedia.src = nextProps.src;}if (nextProps.newTime !== null) {this.currentMedia.currentTime = nextProps.newTime;this.props.setOption('newTime', null);}if (nextProps.playHeadPercent !== this.props.playHeadPercent) {// TODO: Investigate why some .mp3 urls don't fire media events enough (http://www.davidgagne.net/m/song.mp3).
	          // Hasn't fully loaded the song????
	          if (this.currentMedia.seekable.length > 0) {this.currentMedia.currentTime = nextProps.playHeadPercent * (this.currentMedia.seekable.end(this.currentMedia.seekable.length - 1) / 100); // Media events don't fire fast enough to give a smooth animation when dragging so we update it here as well, same problem as above?
	            this.props.setOption('currentPercentRelative', this.getCurrentPercentRelative());}}if (nextProps.paused !== this.props.paused) {if (nextProps.paused) {this.currentMedia.pause();} else {this.currentMedia.play();}}} }, { key: 'render', value: function render() {return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), _extends({},
	        this.events, {
	          ref: this.setCurrentMedia }));



	      } }]);return MediaContainer;}(_react2.default.Component);exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(MediaContainer);});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./audio'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.audio);global.audioContainer = mod.exports;}})(this, function (exports, _index, _audio) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _audio2 = _interopRequireDefault(_audio);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      require: !jPlayers[uid].mediaSettings.video },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_audio2.default);});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(22), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../media/media.container'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.media, global.constants);global.audio = mod.exports;}})(this, function (exports, _react, _media, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _media2 = _interopRequireDefault(_media);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




	  var Audio = function Audio(_ref) {var require = _ref.require,events = _ref.events,attributes = _objectWithoutProperties(_ref, ['require', 'events']);return (
	      require ?
	      _react2.default.createElement(_media2.default, events,
	        _react2.default.createElement('audio', attributes)) :

	      null);};


	  Audio.defaultProps = {
	    events: null,
	    require: !_constants.defaultOptions.mediaSettings.video };


	  Audio.propTypes = {
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
	      onCanPlayThrough: _react2.default.PropTypes.func }) };exports.default =



	  Audio;});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(11), __webpack_require__(26), __webpack_require__(29), __webpack_require__(15), __webpack_require__(14), __webpack_require__(27), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('lodash.merge'), require('screenfull'), require('classnames'), require('../../util/index'), require('../../util/constants'), require('./jPlayer'), require('../_actions/actions'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.lodash, global.screenfull, global.classnames, global.index, global.constants, global.jPlayer, global.actions);global.jPlayerContainer = mod.exports;}})(this, function (exports, _react, _lodash, _screenfull, _classnames, _index, _constants, _jPlayer, _actions) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _lodash2 = _interopRequireDefault(_lodash);var _screenfull2 = _interopRequireDefault(_screenfull);var _classnames2 = _interopRequireDefault(_classnames);var _jPlayer2 = _interopRequireDefault(_jPlayer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}










	  var formatPropTypes = {};

	  Object.keys(_constants.formats).forEach(function (key) {
	    formatPropTypes[key] = _react2.default.PropTypes.string;
	  });

	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var _classNames;var jPlayers = _ref2.jPlayers;var uid = _ref.uid,children = _ref.children,attributes = _objectWithoutProperties(_ref, ['uid', 'children']);return {
	      timeFormats: jPlayers[uid].timeFormats,
	      media: jPlayers[uid].media,
	      error: jPlayers[uid].error,
	      fullScreen: jPlayers[uid].fullScreen,
	      keyEnabled: jPlayers[uid].keyEnabled,
	      paused: jPlayers[uid].paused,
	      guiFadeHoldTimeout: jPlayers[uid].guiFadeHoldTimeout,
	      guiFadeHoldTime: jPlayers[uid].guiFadeHoldTime,
	      children: children,
	      attributes: _extends({},
	      attributes, {
	        className: (0, _classnames2.default)(attributes.className, _constants.classes.JPLAYER, (_classNames = {}, _defineProperty(_classNames,
	        _constants.classes.AUDIO, !jPlayers[uid].mediaSettings.video), _defineProperty(_classNames,
	        _constants.classes.VIDEO, jPlayers[uid].mediaSettings.video), _defineProperty(_classNames,
	        _constants.classes.states.PLAYING, !jPlayers[uid].paused), _defineProperty(_classNames,
	        _constants.classes.states.IDLE, jPlayers[uid].currentTime === 0), _defineProperty(_classNames,
	        _constants.classes.states.FULL_SCREEN, jPlayers[uid].fullScreen), _defineProperty(_classNames,
	        _constants.classes.states.MUTED, jPlayers[uid].muted), _defineProperty(_classNames,
	        _constants.classes.states.VOLUME_LOW, !jPlayers[uid].muted && jPlayers[uid].volume < 0.5), _defineProperty(_classNames,
	        _constants.classes.states.VOLUME_HIGH, !jPlayers[uid].muted && jPlayers[uid].volume >= 0.5), _defineProperty(_classNames,
	        _constants.classes.states.SEEKING, jPlayers[uid].seeking), _defineProperty(_classNames,
	        _constants.classes.states.LOOPED, jPlayers[uid].loop === _constants.loopOptions.LOOP), _defineProperty(_classNames,
	        _constants.classes.states.NO_BROWSER_SUPPORT, !jPlayers[uid].mediaSettings.foundSupported), _defineProperty(_classNames,
	        _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayers[uid].volumeSupported), _classNames)) }) };};






	  var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {var dispatch = _ref3.dispatch;var uid = _ref4.uid;return _extends({
	      setMedia: function setMedia(media) {return dispatch((0, _actions.setMedia)(media, uid));},
	      setOption: function setOption(key, value) {return dispatch((0, _actions.setOption)(key, value, uid));} },
	    stateProps);};var


	  JPlayerContainer = function (_React$Component) {_inherits(JPlayerContainer, _React$Component);_createClass(JPlayerContainer, null, [{ key: 'propTypes', get: function get()
	      {
	        return {
	          attributes: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.node),
	          timeFormats: _react2.default.PropTypes.object,
	          media: _react2.default.PropTypes.shape({
	            title: _react2.default.PropTypes.string,
	            artist: _react2.default.PropTypes.string,
	            sources: _react2.default.PropTypes.shape(formatPropTypes).isRequired,
	            poster: _react2.default.PropTypes.string,
	            free: _react2.default.PropTypes.bool }).
	          isRequired,
	          setOption: _react2.default.PropTypes.func.isRequired,
	          setMedia: _react2.default.PropTypes.func.isRequired,
	          error: _react2.default.PropTypes.shape({
	            context: _react2.default.PropTypes.string,
	            message: _react2.default.PropTypes.string,
	            hint: _react2.default.PropTypes.string }),

	          fullScreen: _react2.default.PropTypes.bool.isRequired,
	          children: _react2.default.PropTypes.oneOfType([
	          _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
	          _react2.default.PropTypes.element]).
	          isRequired,
	          keyEnabled: _react2.default.PropTypes.bool,
	          paused: _react2.default.PropTypes.bool,
	          guiFadeHoldTime: _react2.default.PropTypes.number,
	          guiFadeHoldTimeout: _react2.default.PropTypes.number };

	      } }, { key: 'defaultProps', get: function get()
	      {
	        return {
	          attributes: {},
	          timeFormats: _constants.defaultOptions.timeFormats,
	          error: _constants.statusDefaultValues.error,
	          media: _constants.defaultOptions.media,
	          supplied: _constants.defaultOptions.supplied,
	          keyEnabled: _constants.defaultOptions.keyEnabled,
	          paused: _constants.statusDefaultValues.paused,
	          guiFadeHoldTime: _constants.defaultOptions.guiFadeHoldTime,
	          guiFadeHoldTimeout: null };

	      } }]);
	    function JPlayerContainer(props) {_classCallCheck(this, JPlayerContainer);var _this = _possibleConstructorReturn(this, (JPlayerContainer.__proto__ || Object.getPrototypeOf(JPlayerContainer)).call(this,
	      props));_this.


























	      onMouseMove = function (e) {
	        if (_this.props.fullScreen) {
	          var element = e.target;

	          if (_this.props.paused) {
	            while (element.parentNode) {
	              element = element.parentNode;

	              if (element.className !== undefined &&
	              element.className.includes(_constants.classes.GUI)) {
	                return;
	              }
	            }
	          }
	          _this.startGuiFadeOut();
	        }
	      };_this.
	      setJPlayer = function (ref) {return _this.jPlayer = ref;};_this.
	      setFullScreen = function (_ref5) {var fullScreen = _ref5.fullScreen;
	        if (fullScreen !== _this.props.fullScreen) {
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
	        }
	      };_this.
	      startGuiFadeOut = function () {
	        if (_this.props.fullScreen && !_this.props.paused) {
	          clearTimeout(_this.props.guiFadeHoldTimeout);
	          _this.props.setOption('guiFadeOut', false);
	          _this.props.setOption('guiFadeHoldTimeout', setTimeout(function () {
	            if (_this.props.fullScreen && !_this.props.paused) {
	              _this.props.setOption('guiFadeOut', true);
	            }
	          }, _this.props.guiFadeHoldTime));
	        }
	      };_this.
	      closeFullScreen = function () {
	        if (!_screenfull2.default.isFullscreen) {
	          _this.props.setOption('fullScreen', false);
	        }
	      };_this.
	      logErrors = function (_ref6) {var error = _ref6.error;
	        if (error !== _this.props.error) {
	          // eslint-disable-next-line no-console
	          console.error(error);
	        }
	      };_this.state = {};_this.timeFormats = (0, _lodash2.default)(_constants.defaultOptions.timeFormats, _this.props.timeFormats);return _this;}_createClass(JPlayerContainer, [{ key: 'componentWillMount', value: function componentWillMount() {if (_screenfull2.default.enabled) {document.addEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);}} }, { key: 'componentDidMount', value: function componentDidMount() {this.props.setMedia(this.props.media);} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {this.logErrors(nextProps);this.setFullScreen(nextProps);if (nextProps.paused !== this.props.paused) {this.startGuiFadeOut();}} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {if (_screenfull2.default.enabled) {document.removeEventListener(_screenfull2.default.raw.fullscreenchange, this.closeFullScreen);}} }, { key: 'render', value: function render()
	      {
	        return (
	          _react2.default.createElement(_jPlayer2.default, _extends({
	              setJPlayer: this.setJPlayer, keyEnabled: this.props.keyEnabled,
	              onMouseMove: this.onMouseMove }, this.props.attributes),

	            this.props.children));


	      } }]);return JPlayerContainer;}(_react2.default.Component);exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(JPlayerContainer);});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("screenfull");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'), require('../keyControl/keyControl.container'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants, global.keyControl);global.jPlayer = mod.exports;}})(this, function (exports, _react, _constants, _keyControl) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _keyControl2 = _interopRequireDefault(_keyControl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





	  /* Stops the user being able to drag the jPlayer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 and see a ghost image */
	  var preventDragging = function preventDragging(e) {return e.preventDefault();};

	  var JPlayer = function JPlayer(_ref) {var keyEnabled = _ref.keyEnabled,setJPlayer = _ref.setJPlayer,children = _ref.children,attributes = _objectWithoutProperties(_ref, ['keyEnabled', 'setJPlayer', 'children']);return (
	      _react2.default.createElement('div', _extends({}, attributes, { ref: setJPlayer, onMouseDown: preventDragging }),
	        children,
	        keyEnabled && _react2.default.createElement(_keyControl2.default, null)));};



	  JPlayer.propTypes = {
	    setJPlayer: _react2.default.PropTypes.func,
	    children: _react2.default.PropTypes.oneOfType([
	    _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
	    _react2.default.PropTypes.element]).
	    isRequired,
	    keyEnabled: _react2.default.PropTypes.bool };


	  JPlayer.defaultProps = {
	    keyEnabled: _constants.defaultOptions.keyEnabled,
	    setJPlayer: null };exports.default =


	  JPlayer;});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(11), __webpack_require__(14), __webpack_require__(17), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('lodash.merge'), require('../../util/constants'), require('../_actions/actions'), require('../../util/index'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.lodash, global.constants, global.actions, global.index);global.keyControlContainer = mod.exports;}})(this, function (exports, _react, _lodash, _constants, _actions, _index) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _lodash2 = _interopRequireDefault(_lodash);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}






	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      paused: jPlayers[uid].paused,
	      mediaSettings: jPlayers[uid].mediaSettings,
	      audioFullScreen: jPlayers[uid].audioFullScreen,
	      fullScreen: jPlayers[uid].fullScreen,
	      muted: jPlayers[uid].muted,
	      volume: jPlayers[uid].volume,
	      loop: jPlayers[uid].loop,
	      keyBindings: jPlayers[uid].keyBindings,
	      focus: jPlayers[uid].focus };};


	  var mergeProps = function mergeProps(stateProps, _ref3, _ref4) {var dispatch = _ref3.dispatch;var uid = _ref4.uid;return {
	      focus: stateProps.focus,
	      keyBindings: (0, _lodash2.default)({}, {
	        play: {
	          key: 80, // p
	          fn: function fn() {return stateProps.paused ? dispatch((0, _actions.play)(uid)) :
	            dispatch((0, _actions.pause)(uid));} },

	        fullScreen: {
	          key: 70, // f
	          fn: function fn() {
	            if (stateProps.mediaSettings.available && stateProps.mediaSettings.video ||
	            stateProps.audioFullScreen) {
	              dispatch((0, _actions.setFullScreen)(!stateProps.fullScreen, uid));
	            }
	          } },

	        mute: {
	          key: 77, // m
	          fn: function fn() {return dispatch((0, _actions.setMute)(!stateProps.muted, uid));} },

	        volumeUp: {
	          key: 190, // .
	          fn: function fn() {
	            dispatch((0, _actions.setVolume)(stateProps.volume + 0.1, uid));
	          } },

	        volumeDown: {
	          key: 188, // ,
	          fn: function fn() {return dispatch((0, _actions.setVolume)(stateProps.volume - 0.1, uid));} },

	        loop: {
	          key: 76, // l
	          fn: function fn() {return stateProps.loop === _constants.loopOptions.LOOP ?
	            dispatch((0, _actions.setLoop)(_constants.loopOptions.OFF, uid)) :
	            dispatch((0, _actions.setLoop)(_constants.loopOptions.LOOP, uid));} } },

	      stateProps.keyBindings) };};var


	  KeyControl = function (_React$Component) {_inherits(KeyControl, _React$Component);function KeyControl() {var _ref5;var _temp, _this, _ret;_classCallCheck(this, KeyControl);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = KeyControl.__proto__ || Object.getPrototypeOf(KeyControl)).call.apply(_ref5, [this].concat(args))), _this), _this.

















	      onKeyDown = function (event) {
	        if (_constants.keyIgnoreElementNames.some(function (name) {return name.toUpperCase() ===
	          event.target.nodeName.toUpperCase();}) || !_this.props.focus) {
	          return;
	        }
	        Object.keys(_this.props.keyBindings).forEach(function (key) {
	          var keyBinding = _this.props.keyBindings[key];

	          if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
	            event.preventDefault();
	            keyBinding.fn();
	          }
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(KeyControl, [{ key: 'componentWillMount', value: function componentWillMount() {document.addEventListener('keydown', this.onKeyDown);} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener('keydown', this.onKeyDown);} }, { key: 'render', value: function render()
	      {
	        return null;
	      } }], [{ key: 'propTypes', get: function get() {return { focus: _react2.default.PropTypes.bool, keyBindings: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.object).isRequired };} }, { key: 'defaultProps', get: function get() {return { focus: false };} }]);return KeyControl;}(_react2.default.Component);exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(KeyControl);});

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(15), __webpack_require__(17), __webpack_require__(31), __webpack_require__(32)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../_actions/actions'), require('../barEvents'), require('./seekBar'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.actions, global.barEvents, global.seekBar);global.seekBarContainer = mod.exports;}})(this, function (exports, _react, _index, _actions, _barEvents, _seekBar) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _barEvents2 = _interopRequireDefault(_barEvents);var _seekBar2 = _interopRequireDefault(_seekBar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;var
	    seekPercent = jPlayers[uid].seekPercent;

	    return {
	      seekPercent: seekPercent,
	      movePlayHead: function movePlayHead(bar, dispatch, e) {
	        var offset = (0, _index.getOffset)(bar);
	        var x = e.pageX - offset.left;
	        var w = (0, _index.getWidth)(bar);
	        var percentage = 100 * (x / w);

	        dispatch((0, _actions.setPlayHead)(percentage, uid));
	      } };

	  };

	  // eslint-disable-next-line no-unused-vars
	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var seekPercent = _ref4.seekPercent,movePlayHead = _ref4.movePlayHead;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      touchMovePlayHead: function touchMovePlayHead(bar, e) {
	        // Stop page scrolling
	        e.preventDefault();

	        movePlayHead(bar, dispatch, e.touches[0]);
	      },
	      clickMovePlayHead: function clickMovePlayHead(bar, e) {return movePlayHead(bar, dispatch, e);},
	      seekPercent: seekPercent },
	    attributes);};


	  var SeekBarContainer = function SeekBarContainer(_ref6) {var clickMovePlayHead = _ref6.clickMovePlayHead,touchMovePlayHead = _ref6.touchMovePlayHead,seekPercent = _ref6.seekPercent,attributes = _objectWithoutProperties(_ref6, ['clickMovePlayHead', 'touchMovePlayHead', 'seekPercent']);return (
	      _react2.default.createElement(_barEvents2.default, { clickMoveBar: clickMovePlayHead, touchMoveBar: touchMovePlayHead },
	        _react2.default.createElement(_seekBar2.default, _extends({ seekPercent: seekPercent }, attributes))));};



	  SeekBarContainer.propTypes = {
	    clickMovePlayHead: _react2.default.PropTypes.func.isRequired,
	    touchMovePlayHead: _react2.default.PropTypes.func.isRequired,
	    seekPercent: _react2.default.PropTypes.number.isRequired };exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(SeekBarContainer);});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../util/index'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index);global.barEvents = mod.exports;}})(this, function (exports, _react, _index) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid,children = _ref2.children;return {
	      barDrag: jPlayers[uid].barDrag,
	      children: children };};var


	  BarEvents = function (_React$Component) {_inherits(BarEvents, _React$Component);function BarEvents() {var _ref3;var _temp, _this, _ret;_classCallCheck(this, BarEvents);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = BarEvents.__proto__ || Object.getPrototypeOf(BarEvents)).call.apply(_ref3, [this].concat(args))), _this), _this.














	      onClick = function (e) {return _this.props.clickMoveBar(_this.bar, e);}, _this.
	      onTouchStart = function () {return _this.dragging = true;}, _this.
	      onTouchMove = function (e) {return (
	          _this.props.barDrag && _this.dragging ? _this.props.touchMoveBar(_this.bar, e) : null);}, _this.
	      onTouchEnd = function () {return _this.dragging = false;}, _this.
	      onMouseMove = function (e) {return (
	          _this.props.barDrag && _this.dragging ? _this.props.clickMoveBar(_this.bar, e) : null);}, _this.
	      onMouseDown = function () {return _this.dragging = true;}, _this.
	      onMouseUp = function () {return _this.dragging = false;}, _this.
	      setBar = function (ref) {return _this.bar = ref;}, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(BarEvents, [{ key: 'componentWillMount', value: function componentWillMount() {document.addEventListener('mouseup', this.onMouseUp);document.addEventListener('mousemove', this.onMouseMove);document.addEventListener('touchmove', this.onTouchMove, { passive: false });document.addEventListener('touchend', this.onTouchEnd);} }, { key: 'componentWillUnMount', value: function componentWillUnMount()
	      {
	        document.removeEventListener('mouseup', this.onMouseUp);
	        document.removeEventListener('mousemove', this.onMouseMove);
	        document.removeEventListener('touchmove', this.onTouchMove);
	        document.removeEventListener('touchend', this.onTouchEnd);
	      } }, { key: 'render', value: function render()
	      {
	        return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	          onClick: this.onClick,
	          onMouseDown: this.onMouseDown,
	          onTouchStart: this.onTouchStart,
	          setBar: this.setBar });

	      } }], [{ key: 'propTypes', get: function get() {return { clickMoveBar: _react2.default.PropTypes.func.isRequired, touchMoveBar: _react2.default.PropTypes.func.isRequired, barDrag: _react2.default.PropTypes.bool.isRequired, children: _react2.default.PropTypes.node.isRequired };} }]);return BarEvents;}(_react2.default.Component);exports.default =


	  (0, _index.connectWithId)(mapStateToProps)(BarEvents);});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.seekBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var SeekBar = function SeekBar(_ref) {var setBar = _ref.setBar,onClick = _ref.onClick,onMouseDown = _ref.onMouseDown,onTouchStart = _ref.onTouchStart,
	    seekPercent = _ref.seekPercent,children = _ref.children,attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart', 'seekPercent', 'children']);return (
	      _react2.default.createElement('div', _extends({},
	        attributes, { ref: setBar, className: _constants.classes.SEEK_BAR,
	          style: { width: seekPercent + '%' }, onClick: onClick,
	          onTouchStart: onTouchStart, onMouseDown: onMouseDown }),

	        children));};



	  SeekBar.defaultProps = {
	    setBar: null,
	    onClick: null,
	    onMouseDown: null,
	    onTouchStart: null };


	  SeekBar.propTypes = {
	    seekPercent: _react2.default.PropTypes.number.isRequired,
	    setBar: _react2.default.PropTypes.func,
	    onClick: _react2.default.PropTypes.func,
	    onMouseDown: _react2.default.PropTypes.func,
	    onTouchStart: _react2.default.PropTypes.func,
	    children: _react2.default.PropTypes.node.isRequired };exports.default =


	  SeekBar;});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./playBar'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.playBar);global.playBarContainer = mod.exports;}})(this, function (exports, _index, _playBar) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _playBar2 = _interopRequireDefault(_playBar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      smoothPlayBar: jPlayers[uid].smoothPlayBar,
	      currentPercentAbsolute: jPlayers[uid].currentPercentAbsolute,
	      currentPercentRelative: jPlayers[uid].currentPercentRelative },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_playBar2.default);});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(19), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-motion'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactMotion, global.constants);global.playBar = mod.exports;}})(this, function (exports, _react, _reactMotion, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




	  var PlayBar = function PlayBar(_ref) {var currentPercentAbsolute = _ref.currentPercentAbsolute,currentPercentRelative = _ref.currentPercentRelative,
	    smoothPlayBar = _ref.smoothPlayBar,attributes = _objectWithoutProperties(_ref, ['currentPercentAbsolute', 'currentPercentRelative', 'smoothPlayBar']);return (
	      _react2.default.createElement(_reactMotion.Motion, { style: { smoothWidth: (0, _reactMotion.spring)(currentPercentAbsolute, [250]) } },
	        function (values) {return (
	            _react2.default.createElement('div', _extends({},
	            attributes, { className: _constants.classes.PLAY_BAR,
	              style: { width: smoothPlayBar ? values.smoothWidth + '%' :
	                currentPercentRelative + '%' } })));}));};






	  PlayBar.defaultProps = {
	    smoothPlayBar: _constants.defaultOptions.smoothPlayBar,
	    currentPercentAbsolute: _constants.statusDefaultValues.currentPercentAbsolute };


	  PlayBar.propTypes = {
	    currentPercentRelative: _react2.default.PropTypes.number.isRequired,
	    currentPercentAbsolute: _react2.default.PropTypes.number,
	    smoothPlayBar: _react2.default.PropTypes.bool };exports.default =


	  PlayBar;});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(15), __webpack_require__(14), __webpack_require__(36)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../../util/constants'), require('./bufferBar'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.constants, global.bufferBar);global.bufferBarContainer = mod.exports;}})(this, function (exports, _react, _index, _constants, _bufferBar) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _bufferBar2 = _interopRequireDefault(_bufferBar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return {
	      bufferedTimeRanges: jPlayers[uid].bufferedTimeRanges,
	      duration: jPlayers[uid].duration,
	      bufferColour: jPlayers[uid].bufferColour,
	      attributes: attributes };};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};var

	  BufferBarContainer = function (_React$Component) {_inherits(BufferBarContainer, _React$Component);function BufferBarContainer() {var _ref3;var _temp, _this, _ret;_classCallCheck(this, BufferBarContainer);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = BufferBarContainer.__proto__ || Object.getPrototypeOf(BufferBarContainer)).call.apply(_ref3, [this].concat(args))), _this), _this.



























	      setCanvas = function (ref) {return _this.canvas = ref;}, _this.
	      clearBuffer = function () {return (
	          _this.canvas.getContext('2d').clearRect(0, 0, _this.canvas.width, _this.canvas.height));}, _this.

	      fillBufferPartially = function (_ref4) {var bufferedTimeRanges = _ref4.bufferedTimeRanges,bufferColour = _ref4.bufferColour,duration = _ref4.duration;
	        var modifier = _this.canvas.width / duration;
	        var context = _this.canvas.getContext('2d');

	        bufferedTimeRanges.forEach(function (bufferedTimeRange) {
	          var startX = bufferedTimeRange.start * modifier;
	          var endX = bufferedTimeRange.end * modifier;
	          var width = endX - startX;

	          context.fillStyle = bufferColour;
	          context.fillRect(startX, 0, width, _this.canvas.height);
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(BufferBarContainer, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {if (nextProps.bufferedTimeRanges !== this.props.bufferedTimeRanges) {if (nextProps.bufferedTimeRanges.length === 0) {this.clearBuffer();}this.fillBufferPartially(nextProps);}} }, { key: 'render', value: function render()
	      {
	        return _react2.default.createElement(_bufferBar2.default, _extends({ setCanvas: this.setCanvas }, this.props.attributes));
	      } }], [{ key: 'propTypes', get: function get() {return { attributes: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.node), bufferedTimeRanges: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({ start: _react2.default.PropTypes.number.isRequired, end: _react2.default.PropTypes.number.isRequired })).isRequired, /* eslint-disable react/no-unused-prop-types */bufferColour: _react2.default.PropTypes.string, duration: _react2.default.PropTypes.number.isRequired };} }, { key: 'defaultProps', get: function get() {return { attributes: {}, bufferColour: _constants.defaultOptions.bufferColour };} }]);return BufferBarContainer;}(_react2.default.Component);exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(BufferBarContainer);});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.bufferBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var BufferBar = function BufferBar(_ref) {var setCanvas = _ref.setCanvas,attributes = _objectWithoutProperties(_ref, ['setCanvas']);return (
	      _react2.default.createElement('canvas', _extends({},
	      attributes, { ref: setCanvas,
	        className: _constants.classes.BUFFER_BAR })));};



	  BufferBar.propTypes = {
	    setCanvas: _react2.default.PropTypes.func.isRequired };exports.default =


	  BufferBar;});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./poster'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.poster);global.posterContainer = mod.exports;}})(this, function (exports, _index, _poster) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _poster2 = _interopRequireDefault(_poster);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,alt = _ref.alt,attributes = _objectWithoutProperties(_ref, ['uid', 'alt']);return _extends({
	      src: jPlayers[uid].media.poster,
	      alt: alt },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_poster2.default);});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.poster = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Poster = function Poster(_ref) {var src = _ref.src,alt = _ref.alt,attributes = _objectWithoutProperties(_ref, ['src', 'alt']);return (
	      _react2.default.createElement('img', _extends({}, attributes, { className: _constants.classes.POSTER, alt: alt, src: src })));};

	  Poster.defaultProps = {
	    alt: null };


	  Poster.propTypes = {
	    src: _react2.default.PropTypes.string.isRequired,
	    alt: _react2.default.PropTypes.string };exports.default =


	  Poster;});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./title'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.title);global.titleContainer = mod.exports;}})(this, function (exports, _index, _title) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _title2 = _interopRequireDefault(_title);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends(_extends({
	      children: jPlayers[uid].media.title }, attributes));};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_title2.default);});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.title = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Title = function Title(_ref) {var attributes = _objectWithoutProperties(_ref, []);return (
	      _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.TITLE })));};


	  Title.propTypes = {
	    children: _react2.default.PropTypes.oneOfType([
	    _react2.default.PropTypes.string,
	    _react2.default.PropTypes.number]).
	    isRequired };exports.default =


	  Title;});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(17), __webpack_require__(42)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('./mute'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.mute);global.muteContainer = mod.exports;}})(this, function (exports, _index, _actions, _mute) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _mute2 = _interopRequireDefault(_mute);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      muted: jPlayers[uid].muted };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var muted = _ref4.muted;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {return dispatch((0, _actions.setMute)(!muted, uid));} },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_mute2.default);});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.mute = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Mute = function Mute(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.MUTE, onClick: onClick })));};

	  Mute.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =



	  Mute;});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(17), __webpack_require__(15), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../_actions/actions'), require('../../util/index'), require('./play'));} else {var mod = { exports: {} };factory(mod.exports, global.actions, global.index, global.play);global.playContainer = mod.exports;}})(this, function (exports, _actions, _index, _play) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _play2 = _interopRequireDefault(_play);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      paused: jPlayers[uid].paused };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var paused = _ref4.paused;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {return paused ? dispatch((0, _actions.play)(uid)) : dispatch((0, _actions.pause)(uid));} },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_play2.default);});

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.play = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Play = function Play(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.PLAY, onClick: onClick })));};

	  Play.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =


	  Play;});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(17), __webpack_require__(14), __webpack_require__(46)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('../../util/constants'), require('./repeat'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.constants, global.repeat);global.repeatContainer = mod.exports;}})(this, function (exports, _index, _actions, _constants, _repeat) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _repeat2 = _interopRequireDefault(_repeat);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      loop: jPlayers[uid].loop };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var loop = _ref4.loop;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {
	        var loopOption = loop === _constants.loopOptions.LOOP ? _constants.loopOptions.OFF : _constants.loopOptions.LOOP;
	        dispatch((0, _actions.setLoop)(loopOption, uid));
	      } },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_repeat2.default);});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.repeat = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Repeat = function Repeat(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.REPEAT, onClick: onClick })));};

	  Repeat.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =


	  Repeat;});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(15), __webpack_require__(17), __webpack_require__(31), __webpack_require__(48), __webpack_require__(49)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../_actions/actions'), require('../barEvents'), require('./playbackRateBar'), require('../playbackRateBarValue/playbackRateBarValue.container'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.actions, global.barEvents, global.playbackRateBar, global.playbackRateBarValue);global.playbackRateBarContainer = mod.exports;}})(this, function (exports, _react, _index, _actions, _barEvents, _playbackRateBar, _playbackRateBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _barEvents2 = _interopRequireDefault(_barEvents);var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}






	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;var _jPlayers$uid =

	    jPlayers[uid],verticalPlaybackRate = _jPlayers$uid.verticalPlaybackRate,minPlaybackRate = _jPlayers$uid.minPlaybackRate,maxPlaybackRate = _jPlayers$uid.maxPlaybackRate;

	    return {
	      verticalPlaybackRate: verticalPlaybackRate,
	      minPlaybackRate: minPlaybackRate,
	      maxPlaybackRate: maxPlaybackRate,
	      movePlaybackRate: function movePlaybackRate(bar, dispatch, e) {
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

	        var playbackRateValue = ratio * (maxPlaybackRate - minPlaybackRate) +
	        minPlaybackRate;

	        dispatch((0, _actions.setPlaybackRate)(playbackRateValue, uid));
	      } };

	  };

	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var verticalPlaybackRate = _ref4.verticalPlaybackRate,minPlaybackRate = _ref4.minPlaybackRate,maxPlaybackRate = _ref4.maxPlaybackRate,movePlaybackRate = _ref4.movePlaybackRate;var

	    dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      touchMovePlaybackRate: function touchMovePlaybackRate(bar, e) {
	        // Stop page scrolling
	        e.preventDefault();

	        movePlaybackRate(bar, dispatch, e.touches[0]);
	      },
	      clickMovePlaybackRate: function clickMovePlaybackRate(bar, e) {return movePlaybackRate(bar, dispatch, e);} },
	    attributes);};


	  var PlaybackRateBarContainer =
	  function PlaybackRateBarContainer(_ref6) {var clickMovePlaybackRate = _ref6.clickMovePlaybackRate,touchMovePlaybackRate = _ref6.touchMovePlaybackRate,attributes = _objectWithoutProperties(_ref6, ['clickMovePlaybackRate', 'touchMovePlaybackRate']);return (
	      _react2.default.createElement(_barEvents2.default, { clickMoveBar: clickMovePlaybackRate, touchMoveBar: touchMovePlaybackRate },
	        _react2.default.createElement(_playbackRateBar2.default, attributes)));};



	  PlaybackRateBarContainer.defaultProps = {
	    children: _react2.default.createElement(_playbackRateBarValue2.default, null) };


	  PlaybackRateBarContainer.propTypes = {
	    clickMovePlaybackRate: _react2.default.PropTypes.func.isRequired,
	    touchMovePlaybackRate: _react2.default.PropTypes.func.isRequired };exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(PlaybackRateBarContainer);});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.playbackRateBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var PlaybackRateBar = function PlaybackRateBar(_ref) {var onClick = _ref.onClick,onMouseDown = _ref.onMouseDown,onTouchStart = _ref.onTouchStart,
	    setBar = _ref.setBar,children = _ref.children,attributes = _objectWithoutProperties(_ref, ['onClick', 'onMouseDown', 'onTouchStart', 'setBar', 'children']);return (
	      _react2.default.createElement('div', _extends({},
	        attributes, { ref: setBar,
	          className: _constants.classes.PLAYBACK_RATE_BAR, onClick: onClick,
	          onMouseDown: onMouseDown, onTouchStart: onTouchStart }),

	        children));};



	  PlaybackRateBar.defaultProps = {
	    onClick: null,
	    setBar: null,
	    onMouseDown: null,
	    onTouchStart: null };


	  PlaybackRateBar.propTypes = {
	    onClick: _react2.default.PropTypes.func,
	    onMouseDown: _react2.default.PropTypes.func,
	    onTouchStart: _react2.default.PropTypes.func,
	    setBar: _react2.default.PropTypes.func,
	    children: _react2.default.PropTypes.node.isRequired };exports.default =


	  PlaybackRateBar;});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(50)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./playbackRateBarValue'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.playbackRateBarValue);global.playbackRateBarValueContainer = mod.exports;}})(this, function (exports, _index, _playbackRateBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      verticalPlaybackRate: jPlayers[uid].verticalPlaybackRate,
	      minPlaybackRate: jPlayers[uid].minPlaybackRate,
	      maxPlaybackRate: jPlayers[uid].maxPlaybackRate,
	      playbackRate: jPlayers[uid].playbackRate },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_playbackRateBarValue2.default);});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.playbackRateBarValue = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var PlaybackRateBarValue = function PlaybackRateBarValue(_ref)
	  {var playbackRate = _ref.playbackRate,minPlaybackRate = _ref.minPlaybackRate,maxPlaybackRate = _ref.maxPlaybackRate,verticalPlaybackRate = _ref.verticalPlaybackRate,attributes = _objectWithoutProperties(_ref, ['playbackRate', 'minPlaybackRate', 'maxPlaybackRate', 'verticalPlaybackRate']);
	    var style = function style() {
	      var ratio = (playbackRate - minPlaybackRate) / (
	      maxPlaybackRate - minPlaybackRate);
	      var playbackRateBarPercentage = ratio * 100 + '%';

	      return {
	        width: !verticalPlaybackRate ? playbackRateBarPercentage : null,
	        height: verticalPlaybackRate ? playbackRateBarPercentage : null };

	    };
	    return (
	      _react2.default.createElement('div', _extends({},
	      attributes, { className: _constants.classes.PLAYBACK_RATE_BAR_VALUE, style: style() })));


	  };

	  PlaybackRateBarValue.defaultProps = {
	    verticalPlaybackRate: _constants.defaultOptions.verticalPlaybackRate,
	    minPlaybackRate: _constants.defaultOptions.minPlaybackRate,
	    maxPlaybackRate: _constants.defaultOptions.maxPlaybackRate };


	  PlaybackRateBarValue.propTypes = {
	    verticalPlaybackRate: _react2.default.PropTypes.bool,
	    minPlaybackRate: _react2.default.PropTypes.number,
	    maxPlaybackRate: _react2.default.PropTypes.number,
	    playbackRate: _react2.default.PropTypes.number.isRequired };exports.default =


	  PlaybackRateBarValue;});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(15), __webpack_require__(17), __webpack_require__(31), __webpack_require__(52), __webpack_require__(53)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../_actions/actions'), require('../barEvents'), require('./volumeBar'), require('../volumeBarValue/volumeBarValue.container'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.actions, global.barEvents, global.volumeBar, global.volumeBarValue);global.volumeBarContainer = mod.exports;}})(this, function (exports, _react, _index, _actions, _barEvents, _volumeBar, _volumeBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _barEvents2 = _interopRequireDefault(_barEvents);var _volumeBar2 = _interopRequireDefault(_volumeBar);var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}






	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);var
	    verticalVolume = jPlayers[uid].verticalVolume;

	    return _extends({
	      verticalVolume: verticalVolume,
	      moveVolumeBar: function moveVolumeBar(bar, dispatch, e) {
	        var offset = (0, _index.getOffset)(bar);
	        var x = e.pageX - offset.left;
	        var w = (0, _index.getWidth)(bar);
	        var y = (0, _index.getHeight)(bar) - e.pageY + offset.top;
	        var h = (0, _index.getHeight)(bar);

	        if (verticalVolume) {
	          dispatch((0, _actions.setVolume)(y / h, uid));
	        } else {
	          dispatch((0, _actions.setVolume)(x / w, uid));
	        }
	      } },
	    attributes);

	  };

	  var mergeProps = function mergeProps(_ref3, _ref4) {var dispatch = _ref4.dispatch;var verticalVolume = _ref3.verticalVolume,moveVolumeBar = _ref3.moveVolumeBar,attributes = _objectWithoutProperties(_ref3, ['verticalVolume', 'moveVolumeBar']);return _extends({
	      touchMoveVolumeBar: function touchMoveVolumeBar(bar, e) {
	        // Stop page scrolling
	        e.preventDefault();

	        moveVolumeBar(bar, dispatch, e.touches[0]);
	      },
	      clickMoveVolumeBar: function clickMoveVolumeBar(bar, e) {return moveVolumeBar(bar, dispatch, e);} },
	    attributes);};


	  var VolumeBarContainer = function VolumeBarContainer(_ref5) {var clickMoveVolumeBar = _ref5.clickMoveVolumeBar,touchMoveVolumeBar = _ref5.touchMoveVolumeBar,attributes = _objectWithoutProperties(_ref5, ['clickMoveVolumeBar', 'touchMoveVolumeBar']);return (
	      _react2.default.createElement(_barEvents2.default, { clickMoveBar: clickMoveVolumeBar, touchMoveBar: touchMoveVolumeBar },
	        _react2.default.createElement(_volumeBar2.default, attributes)));};



	  VolumeBarContainer.defaultProps = {
	    children: _react2.default.createElement(_volumeBarValue2.default, null) };


	  VolumeBarContainer.propTypes = {
	    clickMoveVolumeBar: _react2.default.PropTypes.func.isRequired,
	    touchMoveVolumeBar: _react2.default.PropTypes.func.isRequired };exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(VolumeBarContainer);});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.volumeBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var VolumeBar = function VolumeBar(_ref) {var setBar = _ref.setBar,onClick = _ref.onClick,onMouseDown = _ref.onMouseDown,
	    onTouchStart = _ref.onTouchStart,children = _ref.children,attributes = _objectWithoutProperties(_ref, ['setBar', 'onClick', 'onMouseDown', 'onTouchStart', 'children']);return (
	      _react2.default.createElement('div', _extends({},
	        attributes, { ref: setBar, className: _constants.classes.VOLUME_BAR,
	          onClick: onClick, onMouseDown: onMouseDown, onTouchStart: onTouchStart }),

	        children));};



	  VolumeBar.defaultProps = {
	    onClick: null,
	    setBar: null,
	    onMouseDown: null,
	    onTouchStart: null };


	  VolumeBar.propTypes = {
	    onClick: _react2.default.PropTypes.func,
	    onMouseDown: _react2.default.PropTypes.func,
	    onTouchStart: _react2.default.PropTypes.func,
	    setBar: _react2.default.PropTypes.func,
	    children: _react2.default.PropTypes.node.isRequired };exports.default =


	  VolumeBar;});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(54)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./volumeBarValue'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.volumeBarValue);global.volumeBarValueContainer = mod.exports;}})(this, function (exports, _index, _volumeBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      verticalVolume: jPlayers[uid].verticalVolume,
	      muted: jPlayers[uid].muted,
	      volume: jPlayers[uid].volume },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_volumeBarValue2.default);});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.volumeBarValue = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var VolumeBarValue = function VolumeBarValue(_ref) {var muted = _ref.muted,volume = _ref.volume,verticalVolume = _ref.verticalVolume,attributes = _objectWithoutProperties(_ref, ['muted', 'volume', 'verticalVolume']);
	    var style = function style() {
	      var volumeBarValuePercentage = (muted ? 0 : volume * 100) + '%';

	      return {
	        width: !verticalVolume ? volumeBarValuePercentage : null,
	        height: verticalVolume ? volumeBarValuePercentage : null };

	    };
	    return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.VOLUME_BAR_VALUE, style: style() }));
	  };

	  VolumeBarValue.defaultProps = {
	    verticalVolume: _constants.defaultOptions.verticalVolume };


	  VolumeBarValue.propTypes = {
	    muted: _react2.default.PropTypes.bool.isRequired,
	    volume: _react2.default.PropTypes.number.isRequired,
	    verticalVolume: _react2.default.PropTypes.bool };exports.default =


	  VolumeBarValue;});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(56)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./download'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.download);global.downloadContainer = mod.exports;}})(this, function (exports, _index, _download) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _download2 = _interopRequireDefault(_download);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      free: jPlayers[uid].media.free,
	      url: jPlayers[uid].src },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_download2.default);});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.download = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Download = function Download(_ref) {var free = _ref.free,url = _ref.url,children = _ref.children,attributes = _objectWithoutProperties(_ref, ['free', 'url', 'children']);return (
	      free ?
	      _react2.default.createElement('a', _extends({},
	        attributes, { className: _constants.classes.DOWNLOAD, href: url,
	          download: true, target: '_blank', rel: 'noopener noreferrer' }),

	        children) :

	      null);};


	  Download.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    url: _react2.default.PropTypes.string.isRequired,
	    free: _react2.default.PropTypes.bool.isRequired };exports.default =


	  Download;});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(58)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./duration'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.duration);global.durationContainer = mod.exports;}})(this, function (exports, _index, _duration) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _duration2 = _interopRequireDefault(_duration);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends(_extends({
	      children: jPlayers[uid].durationText }, attributes));};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_duration2.default);});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.duration = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Duration = function Duration(_ref) {var children = _ref.children,attributes = _objectWithoutProperties(_ref, ['children']);return (
	      children !== '' ?
	      _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.DURATION }),
	        children) :

	      null);};


	  Duration.propTypes = {
	    children: _react2.default.PropTypes.string.isRequired };exports.default =


	  Duration;});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(60)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./currentTime'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.currentTime);global.currentTimeContainer = mod.exports;}})(this, function (exports, _index, _currentTime) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _currentTime2 = _interopRequireDefault(_currentTime);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends(_extends({
	      children: jPlayers[uid].currentTimeText }, attributes));};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_currentTime2.default);});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.currentTime = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var CurrentTime = function CurrentTime(_ref) {var attributes = _objectWithoutProperties(_ref, []);return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.CURRENT_TIME }));};

	  CurrentTime.propTypes = {
	    children: _react2.default.PropTypes.oneOfType([
	    _react2.default.PropTypes.string,
	    _react2.default.PropTypes.number]).
	    isRequired };exports.default =


	  CurrentTime;});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(62)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./browserUnsupported'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.browserUnsupported);global.browserUnsupportedContainer = mod.exports;}})(this, function (exports, _index, _browserUnsupported) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      foundSupported: jPlayers[uid].mediaSettings.foundSupported };};exports.default =


	  (0, _index.connectWithId)(mapStateToProps)(_browserUnsupported2.default);});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.browserUnsupported = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



	  var BrowserUnsupported = function BrowserUnsupported(_ref) {var foundSupported = _ref.foundSupported,children = _ref.children;return (
	      !foundSupported ? children : null);};


	  BrowserUnsupported.defaultProps = {
	    children:
	    _react2.default.createElement('div', { className: _constants.classes.NO_BROWSER_SUPPORT },
	      _react2.default.createElement('h4', null, 'Browser Unsupported'),
	      _react2.default.createElement('div', null, 'Your browser is not supported. To play any media you will need to update your browser to a more recent version.')) };







	  BrowserUnsupported.propTypes = {
	    children: _react2.default.PropTypes.node };exports.default =


	  BrowserUnsupported;});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(15), __webpack_require__(17), __webpack_require__(64)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('./fullScreen'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.fullScreen);global.fullScreenContainer = mod.exports;}})(this, function (exports, _index, _actions, _fullScreen) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _fullScreen2 = _interopRequireDefault(_fullScreen);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      fullScreen: jPlayers[uid].fullScreen };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var fullScreen = _ref4.fullScreen;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {return dispatch((0, _actions.setFullScreen)(!fullScreen, uid));} },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_fullScreen2.default);});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.fullScreen = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var FullScreen = function FullScreen(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.FULL_SCREEN, onClick: onClick })));};

	  FullScreen.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =


	  FullScreen;});

/***/ }
/******/ ]);