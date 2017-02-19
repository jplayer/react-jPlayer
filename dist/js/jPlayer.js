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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(82), __webpack_require__(99), __webpack_require__(102), __webpack_require__(104), __webpack_require__(107), __webpack_require__(109), __webpack_require__(112), __webpack_require__(114), __webpack_require__(116), __webpack_require__(118), __webpack_require__(142), __webpack_require__(120), __webpack_require__(122), __webpack_require__(124), __webpack_require__(126), __webpack_require__(128), __webpack_require__(130), __webpack_require__(132), __webpack_require__(134), __webpack_require__(136), __webpack_require__(138), __webpack_require__(140)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('./jPlayerProvider'), require('./jPlayer/gui/gui.container'), require('./jPlayer/video/video.container'), require('./jPlayer/audio/audio.container'), require('./jPlayer/jPlayer/jPlayer.container'), require('./jPlayer/keyControl/keyControl.container'), require('./jPlayer/seekBar/seekBar.container'), require('./jPlayer/playBar/playBar.container'), require('./jPlayer/bufferBar/bufferBar.container'), require('./jPlayer/poster/poster.container'), require('./jPlayer/title/title.container'), require('./jPlayer/fullScreen/fullScreen.container'), require('./jPlayer/mute/mute.container'), require('./jPlayer/play/play.container'), require('./jPlayer/repeat/repeat.container'), require('./jPlayer/playbackRateBar/playbackRateBar.container'), require('./jPlayer/playbackRateBarValue/playbackRateBarValue.container'), require('./jPlayer/volumeBar/volumeBar.container'), require('./jPlayer/volumeBarValue/volumeBarValue.container'), require('./jPlayer/download/download.container'), require('./jPlayer/duration/duration.container'), require('./jPlayer/currentTime/currentTime.container'), require('./jPlayer/browserUnsupported/browserUnsupported.container'));} else {var mod = { exports: {} };factory(mod.exports, global.jPlayerProvider, global.gui, global.video, global.audio, global.jPlayer, global.keyControl, global.seekBar, global.playBar, global.bufferBar, global.poster, global.title, global.fullScreen, global.mute, global.play, global.repeat, global.playbackRateBar, global.playbackRateBarValue, global.volumeBar, global.volumeBarValue, global.download, global.duration, global.currentTime, global.browserUnsupported);global.index = mod.exports;}})(this, function (exports, _jPlayerProvider, _gui, _video, _audio, _jPlayer, _keyControl, _seekBar, _playBar, _bufferBar, _poster, _title, _fullScreen, _mute, _play, _repeat, _playbackRateBar, _playbackRateBarValue, _volumeBar, _volumeBarValue, _download, _duration, _currentTime, _browserUnsupported) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.BrowserUnsupported = exports.CurrentTime = exports.Duration = exports.Download = exports.VolumeBarValue = exports.VolumeBar = exports.PlaybackRateBarValue = exports.PlaybackRateBar = exports.Repeat = exports.Play = exports.Mute = exports.FullScreen = exports.Title = exports.Audio = exports.Video = exports.Poster = exports.BufferBar = exports.PlayBar = exports.SeekBar = exports.KeyControl = exports.Gui = exports.JPlayer = exports.JPlayerProvider = undefined;var _jPlayerProvider2 = _interopRequireDefault(_jPlayerProvider);var _gui2 = _interopRequireDefault(_gui);var _video2 = _interopRequireDefault(_video);var _audio2 = _interopRequireDefault(_audio);var _jPlayer2 = _interopRequireDefault(_jPlayer);var _keyControl2 = _interopRequireDefault(_keyControl);var _seekBar2 = _interopRequireDefault(_seekBar);var _playBar2 = _interopRequireDefault(_playBar);var _bufferBar2 = _interopRequireDefault(_bufferBar);var _poster2 = _interopRequireDefault(_poster);var _title2 = _interopRequireDefault(_title);var _fullScreen2 = _interopRequireDefault(_fullScreen);var _mute2 = _interopRequireDefault(_mute);var _play2 = _interopRequireDefault(_play);var _repeat2 = _interopRequireDefault(_repeat);var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);var _volumeBar2 = _interopRequireDefault(_volumeBar);var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);var _download2 = _interopRequireDefault(_download);var _duration2 = _interopRequireDefault(_duration);var _currentTime2 = _interopRequireDefault(_currentTime);var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.























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

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(39), __webpack_require__(50), __webpack_require__(77), __webpack_require__(78), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-redux'), require('redux'), require('lodash.merge'), require('./jPlayer/_reducer/reducer'), require('./util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactRedux, global.redux, global.lodash, global.reducer, global.constants);global.jPlayerProvider = mod.exports;}})(this, function (exports, _react, _reactRedux, _redux, _lodash, _reducer, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _lodash2 = _interopRequireDefault(_lodash);var _reducer2 = _interopRequireDefault(_reducer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}







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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(9);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(11);

	var ReactChildren = __webpack_require__(12);
	var ReactComponent = __webpack_require__(25);
	var ReactPureComponent = __webpack_require__(28);
	var ReactClass = __webpack_require__(29);
	var ReactDOMFactories = __webpack_require__(31);
	var ReactElement = __webpack_require__(16);
	var ReactPropTypes = __webpack_require__(36);
	var ReactVersion = __webpack_require__(37);

	var onlyChild = __webpack_require__(38);
	var warning = __webpack_require__(18);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(32);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(13);
	var ReactElement = __webpack_require__(16);

	var emptyFunction = __webpack_require__(19);
	var traverseAllChildren = __webpack_require__(22);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(14);

	var invariant = __webpack_require__(15);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(11);

	var ReactCurrentOwner = __webpack_require__(17);

	var warning = __webpack_require__(18);
	var canDefineProperty = __webpack_require__(20);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(21);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(19);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(14);

	var ReactCurrentOwner = __webpack_require__(17);
	var REACT_ELEMENT_TYPE = __webpack_require__(21);

	var getIteratorFn = __webpack_require__(23);
	var invariant = __webpack_require__(15);
	var KeyEscapeUtils = __webpack_require__(24);
	var warning = __webpack_require__(18);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(14);

	var ReactNoopUpdateQueue = __webpack_require__(26);

	var canDefineProperty = __webpack_require__(20);
	var emptyObject = __webpack_require__(27);
	var invariant = __webpack_require__(15);
	var warning = __webpack_require__(18);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(18);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(11);

	var ReactComponent = __webpack_require__(25);
	var ReactNoopUpdateQueue = __webpack_require__(26);

	var emptyObject = __webpack_require__(27);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(14),
	    _assign = __webpack_require__(11);

	var ReactComponent = __webpack_require__(25);
	var ReactElement = __webpack_require__(16);
	var ReactPropTypeLocationNames = __webpack_require__(30);
	var ReactNoopUpdateQueue = __webpack_require__(26);

	var emptyObject = __webpack_require__(27);
	var invariant = __webpack_require__(15);
	var warning = __webpack_require__(18);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(16);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(32);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(17);
	var ReactComponentTreeHook = __webpack_require__(33);
	var ReactElement = __webpack_require__(16);

	var checkReactTypeSpec = __webpack_require__(34);

	var canDefineProperty = __webpack_require__(20);
	var getIteratorFn = __webpack_require__(23);
	var warning = __webpack_require__(18);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
	        }
	        info += getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	      }
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(14);

	var ReactCurrentOwner = __webpack_require__(17);

	var invariant = __webpack_require__(15);
	var warning = __webpack_require__(18);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(14);

	var ReactPropTypeLocationNames = __webpack_require__(30);
	var ReactPropTypesSecret = __webpack_require__(35);

	var invariant = __webpack_require__(15);
	var warning = __webpack_require__(18);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(33);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(33);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(16);
	var ReactPropTypeLocationNames = __webpack_require__(30);
	var ReactPropTypesSecret = __webpack_require__(35);

	var emptyFunction = __webpack_require__(19);
	var getIteratorFn = __webpack_require__(23);
	var warning = __webpack_require__(18);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.4.2';

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(14);

	var ReactElement = __webpack_require__(16);

	var invariant = __webpack_require__(15);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.Provider = undefined;

	var _Provider = __webpack_require__(40);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connectAdvanced = __webpack_require__(44);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _connect = __webpack_require__(47);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Provider = _Provider2.default;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _react = __webpack_require__(8);

	var _Subscription = __webpack_require__(41);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _storeShape = __webpack_require__(42);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(43);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store, storeSubscription: null };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports.default = Provider;


	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2.default.isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2.default.isRequired,
	  storeSubscription: _react.PropTypes.instanceOf(_Subscription2.default)
	};
	Provider.displayName = 'Provider';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub) {
	    _classCallCheck(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      // this.onStateChange is set by connectAdvanced.initSubscription()
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	exports.default = Subscription;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(8);

	exports.default = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = connectAdvanced;

	var _hoistNonReactStatics = __webpack_require__(45);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(46);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(8);

	var _Subscription = __webpack_require__(41);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _storeShape = __webpack_require__(42);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _storeShape2.default, _contextTypes[subscriptionKey] = _react.PropTypes.instanceOf(_Subscription2.default), _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _react.PropTypes.instanceOf(_Subscription2.default), _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + WrappedComponent));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = _this.props[storeKey] || _this.context[storeKey];
	        _this.parentSub = props[subscriptionKey] || context[subscriptionKey];

	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or ' + ('props of "' + displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        // make sure `getState` is properly bound in order to avoid breaking
	        // custom store implementations that rely on the store's context
	        _this.getState = _this.store.getState.bind(_this.store);

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        return _ref2 = {}, _ref2[subscriptionKey] = this.subscription || this.parentSub, _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        // these are just to guard against extra memory leakage if a parent element doesn't
	        // dereference this instance properly, such as an async callback that never finishes
	        this.subscription = null;
	        this.store = null;
	        this.parentSub = null;
	        this.selector.run = function () {};
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var dispatch = this.store.dispatch;
	        var getState = this.getState;

	        var sourceSelector = selectorFactory(dispatch, selectorFactoryOptions);

	        // wrap the selector in an object that tracks its results between runs
	        var selector = this.selector = {
	          shouldComponentUpdate: true,
	          props: sourceSelector(getState(), this.props),
	          run: function runComponentSelector(props) {
	            try {
	              var nextProps = sourceSelector(getState(), props);
	              if (selector.error || nextProps !== selector.props) {
	                selector.shouldComponentUpdate = true;
	                selector.props = nextProps;
	                selector.error = null;
	              }
	            } catch (error) {
	              selector.shouldComponentUpdate = true;
	              selector.error = error;
	            }
	          }
	        };
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        var _this2 = this;

	        if (shouldHandleStateChanges) {
	          (function () {
	            var subscription = _this2.subscription = new _Subscription2.default(_this2.store, _this2.parentSub);
	            var dummyState = {};

	            subscription.onStateChange = function onStateChange() {
	              this.selector.run(this.props);

	              if (!this.selector.shouldComponentUpdate) {
	                subscription.notifyNestedSubs();
	              } else {
	                this.componentDidUpdate = function componentDidUpdate() {
	                  this.componentDidUpdate = undefined;
	                  subscription.notifyNestedSubs();
	                };

	                this.setState(dummyState);
	              }
	            }.bind(_this2);
	          })();
	        }
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }

	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createConnect = createConnect;

	var _connectAdvanced = __webpack_require__(44);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _shallowEqual = __webpack_require__(48);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _mapDispatchToProps = __webpack_require__(49);

	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

	var _mapStateToProps = __webpack_require__(73);

	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

	var _mergeProps = __webpack_require__(74);

	var _mergeProps2 = _interopRequireDefault(_mergeProps);

	var _selectorFactory = __webpack_require__(75);

	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	exports.default = createConnect();

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;

	function shallowEqual(a, b) {
	  if (a === b) return true;

	  var countA = 0;
	  var countB = 0;

	  for (var key in a) {
	    if (hasOwn.call(a, key) && a[key] !== b[key]) return false;
	    countA++;
	  }

	  for (var _key in b) {
	    if (hasOwn.call(b, _key)) countB++;
	  }

	  return countA === countB;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

	var _redux = __webpack_require__(50);

	var _wrapMapToProps = __webpack_require__(71);

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(51);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(66);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(68);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(69);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(70);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(67);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(52);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(62);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(53),
	    getPrototype = __webpack_require__(59),
	    isObjectLike = __webpack_require__(61);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(54),
	    getRawTag = __webpack_require__(57),
	    objectToString = __webpack_require__(58);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(55);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(56);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(54);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(60);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(63);


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(65);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(64)(module)))

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(51);

	var _isPlainObject = __webpack_require__(52);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(67);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(70);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

	var _verifyPlainObject = __webpack_require__(72);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifyPlainObject;

	var _isPlainObject = __webpack_require__(52);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(43);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

	var _wrapMapToProps = __webpack_require__(71);

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}

	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

	var _verifyPlainObject = __webpack_require__(72);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;

	var _verifySubselectors = __webpack_require__(76);

	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  if (process.env.NODE_ENV !== 'production') {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifySubselectors;

	var _warning = __webpack_require__(43);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = merge;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(64)(module)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(79), __webpack_require__(80), __webpack_require__(81)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('lodash.includes'), require('../../util/constants'), require('../../util/index'));} else {var mod = { exports: {} };factory(mod.exports, global.lodash, global.constants, global.index);global.reducer = mod.exports;}})(this, function (exports, _lodash, _constants, _index) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _lodash2 = _interopRequireDefault(_lodash);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




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
/* 79 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}

	module.exports = includes;


/***/ },
/* 80 */
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(39), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-redux'), require('./constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactRedux, global.constants);global.index = mod.exports;}})(this, function (exports, _react, _reactRedux, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.convertTime = exports.canSetVolume = exports.limitValue = exports.getHeight = exports.getWidth = exports.getOffset = exports.urlNotSetError = exports.urlNotSupportedError = exports.noFormatSupportedError = exports.updateObject = exports.mapObject = exports.connectWithId = undefined;var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};




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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(83), __webpack_require__(84)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('./gui'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.gui);global.guiContainer = mod.exports;}})(this, function (exports, _index, _actions, _gui) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _gui2 = _interopRequireDefault(_gui);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.constants);global.actions = mod.exports;}})(this, function (exports, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.setFocus = exports.setFullScreen = exports.setLoop = exports.setPlaybackRate = exports.setDuration = exports.setMute = exports.setVolume = exports.setPlayHead = exports.pause = exports.play = exports.clearMedia = exports.setMedia = exports.setOption = undefined;

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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(85), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-motion'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactMotion, global.constants);global.gui = mod.exports;}})(this, function (exports, _react, _reactMotion, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _Motion = __webpack_require__(86);

	exports.Motion = _interopRequire(_Motion);

	var _StaggeredMotion = __webpack_require__(93);

	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

	var _TransitionMotion = __webpack_require__(94);

	exports.TransitionMotion = _interopRequire(_TransitionMotion);

	var _spring = __webpack_require__(96);

	exports.spring = _interopRequire(_spring);

	var _presets = __webpack_require__(97);

	exports.presets = _interopRequire(_presets);

	// deprecated, dummy warning function

	var _reorderKeys = __webpack_require__(98);

	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(87);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(88);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(89);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(90);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(91);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(92);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	var Motion = _react2['default'].createClass({
	  displayName: 'Motion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
	    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    onRest: _react.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;

	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },

	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;

	    for (var key in destStyle) {
	      if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	        continue;
	      }

	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }

	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }

	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }

	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      _this.wasAnimating = true;

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};

	      for (var key in propsStyle) {
	        if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	          continue;
	        }

	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }

	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];

	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });

	      _this.unreadPropStyle = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }

	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports) {

	

	// currently used to initiate the velocity style object to 0
	'use strict';

	exports.__esModule = true;
	exports['default'] = mapToZero;

	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

	'use strict';

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports) {

	

	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";

	exports.__esModule = true;
	exports["default"] = stepper;

	var reusedTuple = [0, 0];

	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2

	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);

	  // Damping, in kg / s
	  var Fdamper = -b * v;

	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;

	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;

	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }

	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}

	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(90)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 92 */
/***/ function(module, exports) {

	

	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;

	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }

	    if (currentVelocity[key] !== 0) {
	      return false;
	    }

	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(87);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(88);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(89);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(90);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(91);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(92);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}

	var StaggeredMotion = _react2['default'].createClass({
	  displayName: 'StaggeredMotion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
	    styles: _react.PropTypes.func.isRequired,
	    children: _react.PropTypes.func.isRequired
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;

	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },

	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;

	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }

	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];

	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in destStyle) {
	          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	            continue;
	          }

	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(87);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(88);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(89);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _mergeDiff = __webpack_require__(95);

	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

	var _performanceNow = __webpack_require__(90);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(91);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(92);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}

	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }

	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }

	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	// core key merging logic

	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key

	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });

	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;

	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }

	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}

	var TransitionMotion = _react2['default'].createClass({
	  displayName: 'TransitionMotion',

	  propTypes: {
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
	    })),
	    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
	    }))]).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    willEnter: _react.PropTypes.func,
	    willLeave: _react.PropTypes.func,
	    didLeave: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;

	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });

	    var _mergeAndSync = mergeAndSync(
	    // Because this is an old-style React.createClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);

	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really

	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },

	  unmounting: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];

	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }

	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    if (this.unmounting) {
	      return;
	    }
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];

	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in newMergedPropsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	            continue;
	          }

	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }

	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = TransitionMotion;
	module.exports = exports['default'];

	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function

	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ },
/* 95 */
/***/ function(module, exports) {

	

	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?

	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous

	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a

	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';

	exports.__esModule = true;
	exports['default'] = mergeDiff;

	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster

	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }

	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }

	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];

	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev

	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }

	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}

	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = spring;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _presets = __webpack_require__(97);

	var _presets2 = _interopRequireDefault(_presets);

	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});

	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}

	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = reorderKeys;

	var hasWarned = false;

	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(100)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./video'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.video);global.videoContainer = mod.exports;}})(this, function (exports, _index, _video) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _video2 = _interopRequireDefault(_video);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      require: jPlayers[uid].mediaSettings.video },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_video2.default);});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(101), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../media/media.container'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.media, global.constants);global.video = mod.exports;}})(this, function (exports, _react, _media, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _media2 = _interopRequireDefault(_media);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(81), __webpack_require__(80), __webpack_require__(83)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../../util/constants'), require('../_actions/actions'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.constants, global.actions);global.mediaContainer = mod.exports;}})(this, function (exports, _react, _index, _constants, _actions) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(103)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./audio'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.audio);global.audioContainer = mod.exports;}})(this, function (exports, _index, _audio) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _audio2 = _interopRequireDefault(_audio);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      require: !jPlayers[uid].mediaSettings.video },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_audio2.default);});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(101), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../media/media.container'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.media, global.constants);global.audio = mod.exports;}})(this, function (exports, _react, _media, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _media2 = _interopRequireDefault(_media);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(77), __webpack_require__(105), __webpack_require__(108), __webpack_require__(81), __webpack_require__(80), __webpack_require__(106), __webpack_require__(83)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('lodash.merge'), require('screenfull'), require('classnames'), require('../../util/index'), require('../../util/constants'), require('./jPlayer'), require('../_actions/actions'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.lodash, global.screenfull, global.classnames, global.index, global.constants, global.jPlayer, global.actions);global.jPlayerContainer = mod.exports;}})(this, function (exports, _react, _lodash, _screenfull, _classnames, _index, _constants, _jPlayer, _actions) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _lodash2 = _interopRequireDefault(_lodash);var _screenfull2 = _interopRequireDefault(_screenfull);var _classnames2 = _interopRequireDefault(_classnames);var _jPlayer2 = _interopRequireDefault(_jPlayer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}










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
/* 105 */
/***/ function(module, exports) {

	/*!
	* screenfull
	* v3.0.0 - 2015-11-24
	* (c) Sindre Sorhus; MIT License
	*/
	(function () {
		'use strict';

		var isCommonjs = typeof module !== 'undefined' && module.exports;
		var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

		var fn = (function () {
			var val;
			var valLength;

			var fnMap = [
				[
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenElement',
					'fullscreenEnabled',
					'fullscreenchange',
					'fullscreenerror'
				],
				// new WebKit
				[
					'webkitRequestFullscreen',
					'webkitExitFullscreen',
					'webkitFullscreenElement',
					'webkitFullscreenEnabled',
					'webkitfullscreenchange',
					'webkitfullscreenerror'

				],
				// old WebKit (Safari 5.1)
				[
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitCurrentFullScreenElement',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					'webkitfullscreenerror'

				],
				[
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozFullScreenElement',
					'mozFullScreenEnabled',
					'mozfullscreenchange',
					'mozfullscreenerror'
				],
				[
					'msRequestFullscreen',
					'msExitFullscreen',
					'msFullscreenElement',
					'msFullscreenEnabled',
					'MSFullscreenChange',
					'MSFullscreenError'
				]
			];

			var i = 0;
			var l = fnMap.length;
			var ret = {};

			for (; i < l; i++) {
				val = fnMap[i];
				if (val && val[1] in document) {
					for (i = 0, valLength = val.length; i < valLength; i++) {
						ret[fnMap[0][i]] = val[i];
					}
					return ret;
				}
			}

			return false;
		})();

		var screenfull = {
			request: function (elem) {
				var request = fn.requestFullscreen;

				elem = elem || document.documentElement;

				// Work around Safari 5.1 bug: reports support for
				// keyboard in fullscreen even though it doesn't.
				// Browser sniffing, since the alternative with
				// setTimeout is even worse.
				if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
					elem[request]();
				} else {
					elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
				}
			},
			exit: function () {
				document[fn.exitFullscreen]();
			},
			toggle: function (elem) {
				if (this.isFullscreen) {
					this.exit();
				} else {
					this.request(elem);
				}
			},
			raw: fn
		};

		if (!fn) {
			if (isCommonjs) {
				module.exports = false;
			} else {
				window.screenfull = false;
			}

			return;
		}

		Object.defineProperties(screenfull, {
			isFullscreen: {
				get: function () {
					return Boolean(document[fn.fullscreenElement]);
				}
			},
			element: {
				enumerable: true,
				get: function () {
					return document[fn.fullscreenElement];
				}
			},
			enabled: {
				enumerable: true,
				get: function () {
					// Coerce to boolean in case of old WebKit
					return Boolean(document[fn.fullscreenEnabled]);
				}
			}
		});

		if (isCommonjs) {
			module.exports = screenfull;
		} else {
			window.screenfull = screenfull;
		}
	})();


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80), __webpack_require__(107)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'), require('../keyControl/keyControl.container'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants, global.keyControl);global.jPlayer = mod.exports;}})(this, function (exports, _react, _constants, _keyControl) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _keyControl2 = _interopRequireDefault(_keyControl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(77), __webpack_require__(80), __webpack_require__(83), __webpack_require__(81)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('lodash.merge'), require('../../util/constants'), require('../_actions/actions'), require('../../util/index'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.lodash, global.constants, global.actions, global.index);global.keyControlContainer = mod.exports;}})(this, function (exports, _react, _lodash, _constants, _actions, _index) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _lodash2 = _interopRequireDefault(_lodash);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}






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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

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
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(81), __webpack_require__(83), __webpack_require__(110), __webpack_require__(111)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../_actions/actions'), require('../barEvents'), require('./seekBar'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.actions, global.barEvents, global.seekBar);global.seekBarContainer = mod.exports;}})(this, function (exports, _react, _index, _actions, _barEvents, _seekBar) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _barEvents2 = _interopRequireDefault(_barEvents);var _seekBar2 = _interopRequireDefault(_seekBar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(81)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../util/index'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index);global.barEvents = mod.exports;}})(this, function (exports, _react, _index) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}



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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.seekBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(113)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./playBar'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.playBar);global.playBarContainer = mod.exports;}})(this, function (exports, _index, _playBar) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _playBar2 = _interopRequireDefault(_playBar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      smoothPlayBar: jPlayers[uid].smoothPlayBar,
	      currentPercentAbsolute: jPlayers[uid].currentPercentAbsolute,
	      currentPercentRelative: jPlayers[uid].currentPercentRelative },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_playBar2.default);});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(85), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('react-motion'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.reactMotion, global.constants);global.playBar = mod.exports;}})(this, function (exports, _react, _reactMotion, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(81), __webpack_require__(80), __webpack_require__(115)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../../util/constants'), require('./bufferBar'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.constants, global.bufferBar);global.bufferBarContainer = mod.exports;}})(this, function (exports, _react, _index, _constants, _bufferBar) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _bufferBar2 = _interopRequireDefault(_bufferBar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}





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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.bufferBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var BufferBar = function BufferBar(_ref) {var setCanvas = _ref.setCanvas,attributes = _objectWithoutProperties(_ref, ['setCanvas']);return (
	      _react2.default.createElement('canvas', _extends({},
	      attributes, { ref: setCanvas,
	        className: _constants.classes.BUFFER_BAR })));};



	  BufferBar.propTypes = {
	    setCanvas: _react2.default.PropTypes.func.isRequired };exports.default =


	  BufferBar;});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(117)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./poster'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.poster);global.posterContainer = mod.exports;}})(this, function (exports, _index, _poster) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _poster2 = _interopRequireDefault(_poster);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,alt = _ref.alt,attributes = _objectWithoutProperties(_ref, ['uid', 'alt']);return _extends({
	      src: jPlayers[uid].media.poster,
	      alt: alt },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_poster2.default);});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.poster = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Poster = function Poster(_ref) {var src = _ref.src,alt = _ref.alt,attributes = _objectWithoutProperties(_ref, ['src', 'alt']);return (
	      _react2.default.createElement('img', _extends({}, attributes, { className: _constants.classes.POSTER, alt: alt, src: src })));};

	  Poster.defaultProps = {
	    alt: null };


	  Poster.propTypes = {
	    src: _react2.default.PropTypes.string.isRequired,
	    alt: _react2.default.PropTypes.string };exports.default =


	  Poster;});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(119)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./title'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.title);global.titleContainer = mod.exports;}})(this, function (exports, _index, _title) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _title2 = _interopRequireDefault(_title);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends(_extends({
	      children: jPlayers[uid].media.title }, attributes));};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_title2.default);});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.title = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Title = function Title(_ref) {var attributes = _objectWithoutProperties(_ref, []);return (
	      _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.TITLE })));};


	  Title.propTypes = {
	    children: _react2.default.PropTypes.oneOfType([
	    _react2.default.PropTypes.string,
	    _react2.default.PropTypes.number]).
	    isRequired };exports.default =


	  Title;});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(83), __webpack_require__(121)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('./mute'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.mute);global.muteContainer = mod.exports;}})(this, function (exports, _index, _actions, _mute) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _mute2 = _interopRequireDefault(_mute);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      muted: jPlayers[uid].muted };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var muted = _ref4.muted;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {return dispatch((0, _actions.setMute)(!muted, uid));} },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_mute2.default);});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.mute = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Mute = function Mute(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.MUTE, onClick: onClick })));};

	  Mute.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =



	  Mute;});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(83), __webpack_require__(81), __webpack_require__(123)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../_actions/actions'), require('../../util/index'), require('./play'));} else {var mod = { exports: {} };factory(mod.exports, global.actions, global.index, global.play);global.playContainer = mod.exports;}})(this, function (exports, _actions, _index, _play) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _play2 = _interopRequireDefault(_play);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      paused: jPlayers[uid].paused };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var paused = _ref4.paused;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {return paused ? dispatch((0, _actions.play)(uid)) : dispatch((0, _actions.pause)(uid));} },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_play2.default);});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.play = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Play = function Play(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.PLAY, onClick: onClick })));};

	  Play.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =


	  Play;});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(83), __webpack_require__(80), __webpack_require__(125)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('../../util/constants'), require('./repeat'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.constants, global.repeat);global.repeatContainer = mod.exports;}})(this, function (exports, _index, _actions, _constants, _repeat) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _repeat2 = _interopRequireDefault(_repeat);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}




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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.repeat = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Repeat = function Repeat(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.REPEAT, onClick: onClick })));};

	  Repeat.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =


	  Repeat;});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(81), __webpack_require__(83), __webpack_require__(110), __webpack_require__(127), __webpack_require__(128)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../_actions/actions'), require('../barEvents'), require('./playbackRateBar'), require('../playbackRateBarValue/playbackRateBarValue.container'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.actions, global.barEvents, global.playbackRateBar, global.playbackRateBarValue);global.playbackRateBarContainer = mod.exports;}})(this, function (exports, _react, _index, _actions, _barEvents, _playbackRateBar, _playbackRateBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _barEvents2 = _interopRequireDefault(_barEvents);var _playbackRateBar2 = _interopRequireDefault(_playbackRateBar);var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}






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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.playbackRateBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(129)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./playbackRateBarValue'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.playbackRateBarValue);global.playbackRateBarValueContainer = mod.exports;}})(this, function (exports, _index, _playbackRateBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _playbackRateBarValue2 = _interopRequireDefault(_playbackRateBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      verticalPlaybackRate: jPlayers[uid].verticalPlaybackRate,
	      minPlaybackRate: jPlayers[uid].minPlaybackRate,
	      maxPlaybackRate: jPlayers[uid].maxPlaybackRate,
	      playbackRate: jPlayers[uid].playbackRate },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_playbackRateBarValue2.default);});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.playbackRateBarValue = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(81), __webpack_require__(83), __webpack_require__(110), __webpack_require__(131), __webpack_require__(132)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/index'), require('../_actions/actions'), require('../barEvents'), require('./volumeBar'), require('../volumeBarValue/volumeBarValue.container'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.index, global.actions, global.barEvents, global.volumeBar, global.volumeBarValue);global.volumeBarContainer = mod.exports;}})(this, function (exports, _react, _index, _actions, _barEvents, _volumeBar, _volumeBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);var _barEvents2 = _interopRequireDefault(_barEvents);var _volumeBar2 = _interopRequireDefault(_volumeBar);var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}






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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.volumeBar = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(133)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./volumeBarValue'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.volumeBarValue);global.volumeBarValueContainer = mod.exports;}})(this, function (exports, _index, _volumeBarValue) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _volumeBarValue2 = _interopRequireDefault(_volumeBarValue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      verticalVolume: jPlayers[uid].verticalVolume,
	      muted: jPlayers[uid].muted,
	      volume: jPlayers[uid].volume },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_volumeBarValue2.default);});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.volumeBarValue = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(135)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./download'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.download);global.downloadContainer = mod.exports;}})(this, function (exports, _index, _download) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _download2 = _interopRequireDefault(_download);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends({
	      free: jPlayers[uid].media.free,
	      url: jPlayers[uid].src },
	    attributes);};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_download2.default);});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.download = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(137)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./duration'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.duration);global.durationContainer = mod.exports;}})(this, function (exports, _index, _duration) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _duration2 = _interopRequireDefault(_duration);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends(_extends({
	      children: jPlayers[uid].durationText }, attributes));};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_duration2.default);});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.duration = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var Duration = function Duration(_ref) {var children = _ref.children,attributes = _objectWithoutProperties(_ref, ['children']);return (
	      children !== '' ?
	      _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.DURATION }),
	        children) :

	      null);};


	  Duration.propTypes = {
	    children: _react2.default.PropTypes.string.isRequired };exports.default =


	  Duration;});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(139)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./currentTime'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.currentTime);global.currentTimeContainer = mod.exports;}})(this, function (exports, _index, _currentTime) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _currentTime2 = _interopRequireDefault(_currentTime);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}


	  var mapStateToProps = function mapStateToProps(_ref2, _ref) {var jPlayers = _ref2.jPlayers;var uid = _ref.uid,attributes = _objectWithoutProperties(_ref, ['uid']);return _extends(_extends({
	      children: jPlayers[uid].currentTimeText }, attributes));};


	  var mergeProps = function mergeProps(stateProps) {return _extends({}, stateProps);};exports.default =

	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_currentTime2.default);});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.currentTime = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var CurrentTime = function CurrentTime(_ref) {var attributes = _objectWithoutProperties(_ref, []);return _react2.default.createElement('div', _extends({}, attributes, { className: _constants.classes.CURRENT_TIME }));};

	  CurrentTime.propTypes = {
	    children: _react2.default.PropTypes.oneOfType([
	    _react2.default.PropTypes.string,
	    _react2.default.PropTypes.number]).
	    isRequired };exports.default =


	  CurrentTime;});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(141)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('./browserUnsupported'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.browserUnsupported);global.browserUnsupportedContainer = mod.exports;}})(this, function (exports, _index, _browserUnsupported) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _browserUnsupported2 = _interopRequireDefault(_browserUnsupported);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      foundSupported: jPlayers[uid].mediaSettings.foundSupported };};exports.default =


	  (0, _index.connectWithId)(mapStateToProps)(_browserUnsupported2.default);});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.browserUnsupported = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}



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
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(81), __webpack_require__(83), __webpack_require__(143)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('../../util/index'), require('../_actions/actions'), require('./fullScreen'));} else {var mod = { exports: {} };factory(mod.exports, global.index, global.actions, global.fullScreen);global.fullScreenContainer = mod.exports;}})(this, function (exports, _index, _actions, _fullScreen) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _fullScreen2 = _interopRequireDefault(_fullScreen);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var mapStateToProps = function mapStateToProps(_ref, _ref2) {var jPlayers = _ref.jPlayers;var uid = _ref2.uid;return {
	      fullScreen: jPlayers[uid].fullScreen };};


	  var mergeProps = function mergeProps(_ref4, _ref5, _ref3) {var fullScreen = _ref4.fullScreen;var dispatch = _ref5.dispatch;var uid = _ref3.uid,attributes = _objectWithoutProperties(_ref3, ['uid']);return _extends({
	      onClick: function onClick() {return dispatch((0, _actions.setFullScreen)(!fullScreen, uid));} },
	    attributes);};exports.default =


	  (0, _index.connectWithId)(mapStateToProps, null, mergeProps)(_fullScreen2.default);});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(80)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else if (typeof exports !== "undefined") {factory(exports, require('react'), require('../../util/constants'));} else {var mod = { exports: {} };factory(mod.exports, global.react, global.constants);global.fullScreen = mod.exports;}})(this, function (exports, _react, _constants) {'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}



	  var FullScreen = function FullScreen(_ref) {var onClick = _ref.onClick,attributes = _objectWithoutProperties(_ref, ['onClick']);return (
	      _react2.default.createElement('button', _extends({}, attributes, { className: _constants.classes.FULL_SCREEN, onClick: onClick })));};

	  FullScreen.propTypes = {
	    children: _react2.default.PropTypes.node.isRequired,
	    onClick: _react2.default.PropTypes.func.isRequired };exports.default =


	  FullScreen;});

/***/ }
/******/ ]);