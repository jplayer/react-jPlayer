(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "react", "react-motion", "lodash.merge", "lodash/isEqual", "../store", "../util/index", "./actions"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("react"), require("react-motion"), require("lodash.merge"), require("lodash/isEqual"), require("../store"), require("../util/index"), require("./actions"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react, global.reactMotion, global.lodash, global.isEqual, global.store, global.index, global.actions);
		global.index = mod.exports;
	}
})(this, function (exports, _react, _reactMotion, _lodash, _isEqual, _store, _index, _actions) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _store2 = _interopRequireDefault(_store);

	var utilities = _interopRequireWildcard(_index);

	var actions = _interopRequireWildcard(_actions);

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

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}

			return arr2;
		} else {
			return Array.from(arr);
		}
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

	var jPlayer = function jPlayer(WrappedComponent, AdditionalControls) {
		return function (_React$Component) {
			_inherits(JPlayer, _React$Component);

			_createClass(JPlayer, null, [{
				key: "propTypes",
				get: function get() {
					return {
						updateOptions: _react2.default.PropTypes.func.isRequired,
						functions: _react2.default.PropTypes.array,
						overrideFunctions: _react2.default.PropTypes.array,
						status: _react2.default.PropTypes.object,
						jPlayerStatus: _react2.default.PropTypes.func,
						jPlayerSelector: _react2.default.PropTypes.string,
						cssSelectorAncestor: _react2.default.PropTypes.string,
						html: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.element),
						supplied: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
						preload: _react2.default.PropTypes.string,
						volume: _react2.default.PropTypes.number,
						muted: _react2.default.PropTypes.bool,
						remainingDuration: _react2.default.PropTypes.bool,
						toggleDuration: _react2.default.PropTypes.bool,
						captureDuration: _react2.default.PropTypes.bool,
						playbackRate: _react2.default.PropTypes.number,
						defaultPlaybackRate: _react2.default.PropTypes.number,
						minPlaybackRate: _react2.default.PropTypes.number,
						maxPlaybackRate: _react2.default.PropTypes.number,
						stateClass: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
						smoothPlayBar: _react2.default.PropTypes.bool,
						fullScreen: _react2.default.PropTypes.bool,
						fullWindow: _react2.default.PropTypes.bool,
						autoHide: _react2.default.PropTypes.shape({
							restored: _react2.default.PropTypes.bool, // Controls the interface autohide feature.
							full: _react2.default.PropTypes.bool, // Controls the interface autohide feature.
							hold: _react2.default.PropTypes.number }),
						loop: _react2.default.PropTypes.string,
						nativeVideoControls: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
						noFullWindow: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
						noVolume: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string),
						timeFormat: _react2.default.PropTypes.shape({
							showHour: _react2.default.PropTypes.bool,
							showMin: _react2.default.PropTypes.bool,
							showSec: _react2.default.PropTypes.bool,
							padHour: _react2.default.PropTypes.bool,
							padMin: _react2.default.PropTypes.bool,
							padSec: _react2.default.PropTypes.bool,
							sepHour: _react2.default.PropTypes.string,
							sepMin: _react2.default.PropTypes.string,
							sepSec: _react2.default.PropTypes.string
						}),
						keyEnabled: _react2.default.PropTypes.bool,
						audioFullScreen: _react2.default.PropTypes.bool,
						keyBindings: _react2.default.PropTypes.shape({
							play: _react2.default.PropTypes.shape({
								key: _react2.default.PropTypes.number,
								fn: _react2.default.PropTypes.func
							}),
							fullScreen: _react2.default.PropTypes.shape({
								key: _react2.default.PropTypes.number,
								fn: _react2.default.PropTypes.func
							}),
							muted: _react2.default.PropTypes.shape({
								key: _react2.default.PropTypes.number,
								fn: _react2.default.PropTypes.func
							}),
							volumeUp: _react2.default.PropTypes.shape({
								key: _react2.default.PropTypes.number,
								fn: _react2.default.PropTypes.func
							}),
							volumeDown: _react2.default.PropTypes.shape({
								key: _react2.default.PropTypes.number,
								fn: _react2.default.PropTypes.func
							}),
							loop: _react2.default.PropTypes.shape({
								key: _react2.default.PropTypes.number,
								fn: _react2.default.PropTypes.func
							})
						}),
						verticalVolume: _react2.default.PropTypes.bool,
						verticalPlaybackRate: _react2.default.PropTypes.bool,
						globalVolume: _react2.default.PropTypes.bool, // Set to make volume and muted changes affect all jPlayer instances with this option enabled
						sizeCssClass: _react2.default.PropTypes.string,
						sizeFullCssClass: _react2.default.PropTypes.string,
						shuffleAnimation: _react2.default.PropTypes.shape({
							stiffness: _react2.default.PropTypes.number,
							damping: _react2.default.PropTypes.number,
							precision: _react2.default.PropTypes.number
						}),
						displayAnimation: _react2.default.PropTypes.shape({
							stiffness: _react2.default.PropTypes.number,
							damping: _react2.default.PropTypes.number,
							precision: _react2.default.PropTypes.number
						}),
						removeAnimation: _react2.default.PropTypes.shape({
							stiffness: _react2.default.PropTypes.number,
							damping: _react2.default.PropTypes.number,
							precision: _react2.default.PropTypes.number
						}),
						addAnimation: _react2.default.PropTypes.shape({
							stiffness: _react2.default.PropTypes.number,
							damping: _react2.default.PropTypes.number,
							precision: _react2.default.PropTypes.number
						}),
						onProgress: _react2.default.PropTypes.func,
						onLoadedData: _react2.default.PropTypes.func,
						onTimeUpdate: _react2.default.PropTypes.func,
						onDurationChange: _react2.default.PropTypes.func,
						onPlay: _react2.default.PropTypes.func,
						onPlaying: _react2.default.PropTypes.func,
						onPause: _react2.default.PropTypes.func,
						onWaiting: _react2.default.PropTypes.func,
						onSeeking: _react2.default.PropTypes.func,
						onSeeked: _react2.default.PropTypes.func,
						onVolumeChange: _react2.default.PropTypes.func,
						onRateChange: _react2.default.PropTypes.func,
						onSuspend: _react2.default.PropTypes.func,
						onEnded: _react2.default.PropTypes.func,
						onError: _react2.default.PropTypes.func,
						onLoadStart: _react2.default.PropTypes.func,
						onAbort: _react2.default.PropTypes.func,
						onEmptied: _react2.default.PropTypes.func,
						onStalled: _react2.default.PropTypes.func,
						onLoadedMetadata: _react2.default.PropTypes.func,
						onCanPlay: _react2.default.PropTypes.func,
						onCanPlayThrough: _react2.default.PropTypes.func
					};
				}
			}, {
				key: "defaultProps",
				get: function get() {
					return {
						cssSelectorAncestor: "#jp_container_1",
						jPlayerSelector: "#jplayer_1",
						preload: "metadata", // HTML5 Spec values: none, metadata, auto.
						supplied: ["mp3"], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,		
						captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.
						playbackRate: 1.0,
						defaultPlaybackRate: 1.0,
						minPlaybackRate: 0.5,
						maxPlaybackRate: 4,
						volume: 0.8, // The volume. Number 0 to 1.
						nativeVideoControls: {
							// Works well on standard browsers.
							// Phone and tablet browsers can have problems with the controls disappearing.
						},
						guiFadeInAnimation: {
							stiffness: 40 // Velocity of the animation (higher the faster), other properties automatically set in the Motion component
						},
						guiFadeOutAnimation: {
							stiffness: 40
						},
						html: {},
						jPlayerStatus: function jPlayerStatus() {},
						overrideFunctions: [],
						functions: [],
						status: defaultStatus,
						playClass: [jPlayer.className.play],
						pauseClass: [jPlayer.className.pause],
						posterClass: [],
						videoClass: [],
						repeatClass: [jPlayer.className.repeat],
						fullScreenClass: [jPlayer.className.fullScreen],
						volumeMaxClass: [jPlayer.className.volumeMax],
						volumeBarClass: [jPlayer.className.volumeBar],
						volumeBarValueClass: [jPlayer.className.volumeBarValue],
						playbackRateBarClass: [jPlayer.className.playbackRateBar],
						playbackRateBarValueClass: [jPlayer.className.playbackRateBarValue],
						seekBarClass: [jPlayer.className.seekBar],
						noSolutionClass: [jPlayer.className.noSolution]
					};
				}
			}]);

			function JPlayer(props) {
				_classCallCheck(this, JPlayer);

				var _this = _possibleConstructorReturn(this, (JPlayer.__proto__ || Object.getPrototypeOf(JPlayer)).call(this, props));

				_this._setupInternalProperties = function () {
					_this.solution = "html";
					_this.timeFormat = (0, _lodash2.default)(jPlayer.timeFormat, _this.props.timeFormat);
					_this.internal = {
						// instance: undefined
						// htmlDlyCmdId: undefined
						// mouse: undefined
						// cmdsIgnored
					};
				};

				_this._setupOptions = function () {
					_this.loopOptions = ["off", "loop"].concat(_this.props.loopOptions);

					// Classes added to the cssSelectorAncestor to indicate the state.
					_this.stateClass = (0, _lodash2.default)({
						playing: "jp-state-playing",
						seeking: "jp-state-seeking",
						muted: "jp-state-muted",
						looped: "jp-state-looped",
						fullScreen: "jp-state-full-screen",
						noVolume: "jp-state-no-volume"
					}, _this.props.stateClass);

					_this.autoHide = (0, _lodash2.default)({
						restored: false, // Controls the interface autoHide feature.
						full: true, // Controls the interface autoHide feature.
						hold: 2000 // Milliseconds. The period of the pause before autoHide beings.
					}, _this.props.autoHide);

					_this.noFullWindow = (0, _lodash2.default)({
						msie: /msie [0-6]\./,
						ipad: /ipad.*?os [0-4]\./,
						iphone: /iphone/,
						ipod: /ipod/,
						android_pad: /android [0-3]\.(?!.*?mobile)/,
						android_phone: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
						blackberry: /blackberry/,
						windows_ce: /windows ce/,
						iemobile: /iemobile/,
						webos: /webos/
					}, _this.props.noFullWindow);

					_this.noVolume = (0, _lodash2.default)({
						ipad: /ipad/,
						iphone: /iphone/,
						ipod: /ipod/,
						android_pad: /android(?!.*?mobile)/,
						android_phone: /android.*?mobile/,
						blackberry: /blackberry/,
						windows_ce: /windows ce/,
						iemobile: /iemobile/,
						webos: /webos/,
						playbook: /playbook/
					}, _this.props.noVolume);

					// The key control object, defining the key codes and the functions to execute.
					_this.keyBindings = (0, _lodash2.default)({
						// The parameter, f = this.focusInstance, will be checked truethy before attempting to call any of these functions.
						// Properties may be added to this object, in key/fn pairs, to enable other key controls. EG, for the playlist add-on.
						play: {
							key: 80, // p
							fn: function fn() {
								return _this.mergeOptions({ status: { paused: !_this.props.status.paused } });
							}
						},
						fullScreen: {
							key: 70, // f
							fn: function fn() {
								if (_this.props.status.video || _this.props.audioFullScreen) {
									_this.assignOptions({ fullScreen: !_this.props.fullScreen });
								}
							}
						},
						muted: {
							key: 77, // m
							fn: function fn() {
								return _this.assignOptions({ muted: !_this.props.muted });
							}
						},
						volumeUp: {
							key: 190, // .
							fn: function fn() {
								return _this.assignOptions({ volume: _this.props.volume + 0.1 });
							}
						},
						volumeDown: {
							key: 188, // ,
							fn: function fn() {
								return _this.assignOptions({ volume: _this.props.volume - 0.1 });
							}
						},
						loop: {
							key: 76, // l
							fn: function fn() {
								return _this.assignOptions({ loop: _this._incrementCurrentLoop() });
							}
						}
					}, _this.props.keyBindings);
				};

				_this._setupEvents = function () {
					_this.mediaEvent = {
						onProgress: function onProgress() {
							if (_this.internal.cmdsIgnored && _this.readyState > 0) {
								// Detect iOS executed the command
								_this.internal.cmdsIgnored = false;
							}
							_this._getHtmlStatus(_this.currentMedia, null, function () {
								_this._updateInterface();
								_this._trigger(_this.props.onProgress);
							});
						},
						onLoadedData: function onLoadedData() {
							_this.androidFix.setMedia = false; // Disable the fix after the first progress event.
							if (_this.androidFix.play) {
								// Play Android audio - performing the fix.
								_this.androidFix.play = false;
								_this.mergeOptions({ status: { paused: false, currentTime: _this.androidFix.time } });
							}
							if (_this.androidFix.pause) {
								// Pause Android audio at time - performing the fix.
								_this.androidFix.pause = false;
								_this.mergeOptions({ status: { paused: true, currentTime: _this.androidFix.time } });
							}
							_this._trigger(_this.props.onLoadedData);
						},
						onTimeUpdate: function onTimeUpdate() {
							_this._getHtmlStatus(_this.currentMedia);
							_this._trigger(_this.props.onTimeUpdate);
						},
						onDurationChange: function onDurationChange() {
							_this._getHtmlStatus(_this.currentMedia);
							_this._trigger(_this.props.onDurationChange);
						},
						onPlay: function onPlay() {
							_this._updateButtons(true);
							_this._htmlCheckWaitForPlay(); // So the native controls update this variable and puts the hidden interface in the correct state. Affects toggling native controls.
							_this._trigger(_this.props.onPlay);
						},
						onPlaying: function onPlaying() {
							_this._updateButtons(true);
							_this._seeked();
							_this._trigger(_this.props.onPlaying);
						},
						onPause: function onPause() {
							_this._updateButtons(false);
							_this._trigger(_this.props.onPause);
						},
						onWaiting: function onWaiting() {
							_this._seeking();
							_this._trigger(_this.props.onWaiting);
						},
						onSeeking: function onSeeking() {
							_this._seeking();
							_this._trigger(_this.props.onSeeking);
						},
						onSeeked: function onSeeked() {
							_this._seeked();
							_this._trigger(_this.props.onSeeked);
						},
						onVolumeChange: function onVolumeChange() {
							_this._updateMute();
							_this._updateVolume();
							_this._trigger(_this.props.onVolumeChange);
						},
						onRateChange: function onRateChange() {
							_this._updatePlaybackRate();
							_this._trigger(_this.props.onRateChange);
						},
						onSuspend: function onSuspend() {
							// Seems to be the only way of capturing that the iOS4 browser did not actually play the media from the page code. ie., It needs a user gesture.				
							_this._seeked();
							_this._trigger(_this.props.onSuspend);
						},
						onEnded: function onEnded() {
							// Order of the next few commands are important. Change the time and then pause.
							// Solves a bug in Firefox, where issuing pause 1st causes the media to play from the start. ie., The pause is ignored.
							if (!jPlayer.platform.webkit) {
								// Chrome crashes if you do this in conjunction with a setMedia command in an ended event handler. ie., The playlist demo.
								_this.currentMedia.currentTime = 0; // Safari does not care about this command. ie., It works with or without this line. (Both Safari and Chrome are Webkit.)
							}
							// Pause otherwise a click on the progress bar will play from that point, when it shouldn't, since it stopped playback.
							_this.mergeOptions({ status: { paused: true } });
							_this._updateButtons(false);
							// With override true. Otherwise Chrome leaves progress at full.
							_this._getHtmlStatus(_this.currentMedia, true);
							_this._trigger(_this.props.onEnded);
							if (_this.props.loop === "loop") {
								_this._trigger(_this.props.onRepeat);
							}
						},
						onError: function onError() {
							_this._updateButtons(false);
							_this._seeked();
							if (_this.props.status.srcSet) {
								// Deals with case of clearMedia() causing an error event.
								clearTimeout(_this.internal.htmlDlyCmdId); // Clears any delayed commands used in the HTML solution
								_this.mergeOptions({ status: {
										waitForLoad: true, // Allows the load operation to try again.
										waitForPlay: true // Reset since a play was captured..
									}
								});

								if (_this.props.status.video && !_this.props.status.nativeVideoControls) {
									_this.addClass(utilities.className.hidden, jPlayer.key.videoClass);
								}

								if (_this._validString(_this.props.status.media.poster) && !_this.props.status.nativeVideoControls) {
									_this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
								}
								_this.removeClass(utilities.className.hidden, jPlayer.key.videoPlayClass);

								_this._error({
									type: _this.error.URL,
									context: _this.props.status.src, // this.src shows absolute urls. Want context to show the url given.
									message: _this.errorMsg.URL,
									hint: _this.errorHint.URL
								});
							}
							_this._trigger(_this.props.onError);
						},
						onLoadStart: function onLoadStart() {
							return _this._trigger(_this.props.onLoadStart);
						},
						onAbort: function onAbort() {
							return _this._trigger(_this.props.onAbort);
						},
						onEmptied: function onEmptied() {
							return _this._trigger(_this.props.onEmptied);
						},
						onStalled: function onStalled() {
							return _this._trigger(_this.props.onStalled);
						},
						onLoadedMetadata: function onLoadedMetadata() {
							return _this._trigger(_this.props.onLoadedMetadata);
						},
						onCanPlay: function onCanPlay() {
							return _this._trigger(_this.props.onCanPlay);
						},
						onCanPlayThrough: function onCanPlayThrough() {
							return _this._trigger(_this.props.onCanPlayThrough);
						}
					};
				};

				_this._setupErrors = function () {
					_this.error = {
						NO_SOLUTION: "e_no_solution",
						NO_SUPPORT: "e_no_support",
						URL: "e_url",
						URL_NOT_SET: "e_url_not_set",
						VERSION: "e_version"
					};
					_this.errorMsg = {
						NO_SOLUTION: "No solution can be found by jPlayer in this browser. HTML can not be used.", // Used in: _init()
						NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", // Used in: setMedia()
						URL: "Media URL could not be loaded.",
						URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set." // Used in: load(), play(), pause(), stop() and playHead()
					};
					_this.errorHint = {
						NO_SOLUTION: "Review the jPlayer supplied option.",
						NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
						URL: "Check media URL is valid.",
						URL_NOT_SET: "Use setMedia() to set the media URL.",
						VERSION: "Update jPlayer files."
					};
				};

				_this._initBeforeRender = function () {
					_this.props.updateOptions(function (prevOptions) {
						return (0, _lodash2.default)({}, _this.constructor.defaultProps, prevOptions);
					});

					// On iOS, assume commands will be ignored before user initiates them.
					_this.internal.cmdsIgnored = jPlayer.platform.ipad || jPlayer.platform.iphone || jPlayer.platform.ipod;

					// Add key bindings focusInstance to 1st jPlayer instanced with key control enabled.
					if (_this.props.keyEnabled && !jPlayer.focusInstance) {
						jPlayer.focusInstance = _this;
					}

					// A fix for Android where older (2.3) and even some 4.x devices fail to work when changing the *audio* SRC and then playing immediately.
					_this.androidFix = {
						setMedia: false, // True when media set
						play: false, // True when a progress event will instruct the media to play
						pause: false, // True when a progress event will instruct the media to pause at a time.
						time: NaN // The play(time) parameter
					};

					_this.formats = []; // Array based on supplied string option. Order defines priority.
					_this.require = {}; // Which media types are required: video, audio.

					// In _init()'s this.desired code and setmedia(): Accessed via this[solution], where solution from this.solutions array.
					_this.html = {
						audio: {},
						video: {}
					};

					_this.css = {};
					_this.css.cs = {}; // Holds the css selector strings

					// Create the formats array, with prority based on the order of the supplied formats string
					for (var index1 = 0; index1 < _this.props.supplied.length; index1++) {
						var format = _this.props.supplied[index1].replace(/^\s+|\s+$/g, ""); //trim

						if (jPlayer.format[format]) {
							// Check format is valid.
							var dupFound = false;

							for (var index2 = 0; index2 < _this.formats.length; index2++) {
								var value2 = _this.formats[index2];

								if (format === value2) {
									dupFound = true;
									break;
								}
							}

							if (!dupFound) {
								_this.formats.push(format);
							}
						}
					}

					// Determine if we require solutions for audio, video or both media types.
					_this.require.audio = false;
					_this.require.video = false;

					for (var priority in _this.formats) {
						var format = _this.formats[priority];

						_this.require[jPlayer.format[format].media] = true;
					}

					var updateCssClass = function updateCssClass() {
						var sizeClass = _this.props.fullScreen ? _this.props.sizeFullCssClass : _this.props.sizeCssClass;
						_this.addClass(_this.stateClass[sizeClass], utilities.key.stateClass);
						_this.mergeOptions({ status: { cssClass: sizeClass } });
					};

					// Now required types are known, finish the options default settings.
					if (_this.require.video) {
						_this.addClass("jp-video", utilities.key.stateClass);

						_this.assignOptions((0, _lodash2.default)({
							sizeCssClass: "jp-video-270p",
							sizeFullCssClass: "jp-video-full"
						}, {
							sizeCssClass: _this.props.sizeCssClass,
							sizeFullCssClass: _this.props.sizeFullCssClass
						}), updateCssClass);
					} else {
						_this.addClass("jp-audio", utilities.key.stateClass);

						_this.assignOptions({
							sizeCssClass: _this.props.sizeCssClass,
							sizeFullCssClass: _this.props.sizeFullCssClass
						}, updateCssClass);
					}

					_this._setNextProps();

					_this.addClass(utilities.className.hidden, jPlayer.key.posterClass);

					// Determine the status for Blocklisted options.
					_this.mergeOptions({ status: {
							nativeVideoControls: _this._uaBlocklist(_this.props.nativeVideoControls),
							noVolume: _this._uaBlocklist(_this.props.noVolume),
							noFullWindow: _this._uaBlocklist(_this.props.noFullWindow)
						} });

					// Create event handlers if native fullscreen is supported
					if (jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled) {
						_this._fullscreenAddEventListeners();
					}
				};

				_this._initAfterRender = function () {
					_this.currentMedia.volume = _this.props.volume;
					_this.currentMedia.muted = _this.props.muted;
					_this.currentMedia.autoplay = _this.props.autoPlay;
					_this.currentMedia.loop = _this.props.loop === "loop" ? true : false;

					// The native controls are only for video and are disabled when audio is also used.
					_this._restrictNativeVideoControls();

					for (var priority = 0; priority < _this.formats.length; priority++) {
						var format = _this.formats[priority];

						_this.html.canPlay = _defineProperty({}, format, _this.html[jPlayer.format[format].media].available && "" !== _this._testCanPlayType(jPlayer.format[format].codec));
					}

					_this.html.desired = _this.require.audio || _this.require.video;

					// This is what jPlayer will support, based on solution and supplied.
					_this.html.support = {};

					for (var priotity = 0; priotity < _this.formats.length; priotity++) {
						var format = _this.formats[priotity];

						_this.html.support[format] = _this.html.canPlay[format] && _this.html.desired;
					}

					// If jPlayer is supporting any format in a solution, then the solution is used.
					_this.html.used = false;

					for (var formatPriority in _this.formats) {
						var format = _this.formats[formatPriority];

						if (_this.html.support[format]) {
							_this.html.used = true;
							break;
						}
					}

					if (jPlayer.platform.android) {
						_this.assignOptions({ preload: _this.props.preload !== 'auto' ? 'metadata' : 'auto' });
					}

					_this.html.active = false;

					// Set up the css selectors for the control and feedback entities.
					_this._cssSelectorAncestor();

					// If html is not being used by this browser, then media playback is not possible. Trigger an error event.
					if (!_this.html.used) {
						_this._error({
							type: _this.error.NO_SOLUTION, //Todo: fix errors
							context: "{solution:'" + _this.props.solution + "', supplied:'" + _this.props.supplied.join(", ") + "'}",
							message: _this.errorMsg.NO_SOLUTION,
							hint: _this.errorHint.NO_SOLUTION
						});
						_this.removeClass(utilities.className.hidden, jPlayer.key.noSolutionClass);
					} else {
						_this.addClass(utilities.className.hidden, jPlayer.key.noSolutionClass);
					}
					_this.mergeOptions({ status: { playbackRateEnabled: _this._testPlaybackRate() } }, function () {
						// Using the audio element capabilities for playbackRate. ie., Assuming video element is the same.
						if (_this.props.status.playbackRateEnabled) {
							_this.currentMedia.defaultPlaybackRate = _this.props.defaultPlaybackRate;
							_this.currentMedia.playbackRate = _this.props.playbackRate;
						}

						_this._updatePlaybackRate();
					});

					if (_this.props.status.nativeVideoControls) {
						_this.removeClass(utilities.className.hidden, jPlayer.key.videoClass);
						_this.assignStyle({ width: _this.props.status.width, height: _this.props.status.height }, "videoStyle");
					} else {
						_this.addClass(utilities.className.hidden, jPlayer.key.videoClass);
					}

					// Initialize the interface components with the options.
					_this._updateNativeVideoControls();

					// The other controls are now setup in _cssSelectorAncestor()
					_this.addClass(utilities.className.hidden, jPlayer.key.videoPlayClass);
				};

				_this._testCanPlayType = function (codec) {
					// IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
					try {
						_this.currentMedia.canPlayType(codec); // The type is irrelevant.
						return true;
					} catch (err) {
						return false;
					}
				};

				_this._testPlaybackRate = function () {
					var rate = 0.5;

					// Wrapping in a try/catch, just in case older HTML5 browsers throw and error.
					try {
						if ('playbackRate' in _this.currentMedia) {
							_this.currentMedia.playbackRate = rate;
							return _this.currentMedia.playbackRate === rate;
						} else {
							return false;
						}
					} catch (err) {
						return false;
					}
				};

				_this._uaBlocklist = function (list) {
					// list : object with properties that are all regular expressions. Property names are irrelevant.
					// Returns true if the user agent is matched in list.
					var ua = navigator.userAgent.toLowerCase(),
					    block = false;

					for (var p in list) {
						var re = list[p];

						if (re && re.test(ua)) {
							block = true;
							break;
						}
					}

					return block;
				};

				_this._restrictNativeVideoControls = function () {
					// Fallback to noFullWindow when nativeVideoControls is true and audio media is being used. Affects when both media types are used.
					if (_this.require.audio) {
						if (_this.props.status.nativeVideoControls) {
							_this.mergeOptions({ status: { nativeVideoControls: false, noFullWindow: true } });
						}
					}
				};

				_this._updateNativeVideoControls = function () {
					if (_this.html.video.available && _this.html.used) {
						// Turn the HTML Video controls on/off
						_this.setState({ videoControls: _this.props.status.nativeVideoControls });
						// For when option changed. The poster image is not updated, as it is dealt with in setMedia(). Acceptable degradation since seriously doubt these options will change on the fly. Can again review later.
						if (_this.props.status.nativeVideoControls && _this.require.video) {
							_this.addClass(utilities.className.hidden, jPlayer.key.posterClass);
							_this.assignStyle({ width: _this.props.status.width, height: _this.props.status.height }, "videoStyle");
						} else if (_this.props.status.waitForPlay && _this.props.status.video) {
							_this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
							_this.removeClass(utilities.className.hidden, jPlayer.key.videoClass);
						}
					}
				};

				_this._removeEventListeners = function () {
					//Remove the fullscreen event listeners
					var fs = jPlayer.nativeFeatures.fullscreen;

					if (_this.internal.fullscreenchangeHandler) {
						document.removeEventListener(fs.event.fullscreenchange, _this.internal.fullscreenchangeHandler, false);
					}
				};

				_this._getHtmlStatus = function (media, override) {
					var ct = 0,
					    cpa = 0,
					    sp = 0,
					    cpr = 0;

					var duration = media.duration;

					ct = media.currentTime;
					cpa = duration > 0 ? 100 * ct / duration : 0;
					if (_typeof(media.seekable) === "object" && media.seekable.length > 0) {
						sp = duration > 0 ? 100 * media.seekable.end(media.seekable.length - 1) / duration : 100;
						cpr = duration > 0 ? 100 * media.currentTime / media.seekable.end(media.seekable.length - 1) : 0; // Duration conditional for iOS duration bug. ie., seekable.end is a NaN in that case.
					} else {
						sp = 100;
						cpr = cpa;
					}

					if (override) {
						ct = 0;
						cpr = 0;
						cpa = 0;
					}

					_this.mergeOptions({ status: {
							seekPercent: sp,
							currentPercentRelative: cpr,
							currentPercentAbsolute: cpa,
							currentTime: ct,
							remaining: duration - ct,
							// Fixes the duration bug in iOS, where the durationchange event occurs when media.duration is not always correct.
							// Fixes the initial duration bug in BB OS7, where the media.duration is infinity and displays as NaN:NaN due to Date() using inifity.
							duration: isFinite(media.duration) ? duration : _this.props.status.duration,
							videoWidth: media.videoWidth,
							videoHeight: media.videoHeight,
							readyState: media.readyState,
							networkState: media.networkState,
							playbackRate: media.playbackRate,
							ended: media.ended
						} });
				};

				_this._trigger = function (func, error) {
					var jPlayerOptions = {
						version: Object.assign({}, jPlayer.version),
						element: _this.currentMedia,
						//status: merge({}, this.status), // Deep copy
						html: (0, _lodash2.default)({}, _this.html), // Deep copy
						error: Object.assign({}, error)
					};

					if (func !== undefined) {
						func.bind(_this)(jPlayerOptions);
					}
				};

				_this._updateButtons = function (playing) {
					if (playing === undefined) {
						playing = !_this.props.status.paused;
					} else {
						_this.mergeOptions({ status: { paused: !playing } });
					}

					if (playing) {
						_this.addClass(_this.stateClass.playing, utilities.key.stateClass);
					} else {
						_this.removeClass(_this.stateClass.playing, utilities.key.stateClass);
					}
					if (!_this.props.status.noFullWindow && _this.nextProps.fullWindow) {
						_this.addClass(_this.stateClass.fullScreen, utilities.key.stateClass);
					} else {
						_this.removeClass(_this.stateClass.fullScreen, utilities.key.stateClass);
					}
					if (_this.nextProps.loop === "loop") {
						_this.addClass(_this.stateClass.looped, utilities.key.stateClass);
					} else {
						_this.removeClass(_this.stateClass.looped, utilities.key.stateClass);
					}
				};

				_this._updateInterface = function () {
					_this.assignStyle({ width: _this.props.status.seekPercent + "%" }, "seekBarStyle");

					_this.props.smoothPlayBar ? _this.assignStyle({ width: _this.props.status.currentPercentAbsolute + "%" }, "playBarStyle") : _this.assignStyle({ width: _this.props.status.currentPercentRelative + "%" }, "playBarStyle");

					var currentTimeText = _this._convertTime(_this.props.status.currentTime);

					_this.setState({ currentTimeText: currentTimeText });

					var durationText = '',
					    duration = _this.props.status.duration,
					    remaining = _this.props.status.remaining;

					if (_this.props.status.media.duration === 'string') {
						durationText = _this.props.status.media.duration;
					} else {
						if (_this.props.status.media.duration === 'number') {
							duration = _this.props.status.media.duration;
							remaining = duration - _this.props.status.currentTime;
						}
						if (_this.nextProps.remainingDuration) {
							durationText = (remaining > 0 ? '-' : '') + _this._convertTime(remaining);
						} else {
							durationText = _this._convertTime(duration);
						}
					}

					_this.setState({ durationText: durationText });
				};

				_this._convertTime = ConvertTime.prototype.time;

				_this._seeking = function () {
					_this.addClass(jPlayer.className.seeking, jPlayer.key.seekBarClass);
					_this.addClass(_this.stateClass.seeking, utilities.key.stateClass);
				};

				_this._seeked = function () {
					_this.removeClass(jPlayer.className.seeking, jPlayer.key.seekBarClass);
					_this.removeClass(_this.stateClass.seeking, utilities.key.stateClass);
				};

				_this._escapeHtml = function (s) {
					return s.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
				};

				_this._qualifyURL = function (url) {
					var el = document.createElement('div');
					el.innerHTML = '<a href="' + _this._escapeHtml(url) + '">x</a>';
					return el.firstChild.href;
				};

				_this._absoluteMediaUrls = function (media) {
					for (var type in media) {
						var url = media[type];

						if (url && jPlayer.format[type] && url.substr(0, 5) !== "data:") {
							media[type] = _this._qualifyURL(url);
						}
					}

					return media;
				};

				_this.setMedia = function (media) {
					/*	media[format] = String: URL of format. Must contain all of the supplied option's video or audio formats.
     *	media.poster = String: Video poster URL.
     *	media.track = Array: Of objects defining the track element: kind, src, srclang, label, def.
     *	media.stream = Boolean: * NOT IMPLEMENTED * Designating actual media streams. ie., "false/undefined" for files.
     */
					var supported = false,
					    posterChanged = _this.props.status.media.poster !== media.poster; // Compare before reset. Important for OSX Safari as this.htmlElement.poster.src is absolute, even if original poster URL was relative.

					_this._resetMedia();

					_this.html.active = false;

					//Clear the Android Fix.
					_this.androidFix.setMedia = false;
					_this.androidFix.play = false;
					_this.androidFix.pause = false;

					// Convert all media URLs to absolute URLs.
					media = _this._absoluteMediaUrls(media);

					for (var formatPriority = 0; formatPriority < _this.formats.length; formatPriority++) {
						var format = _this.formats[formatPriority];
						var isVideo = jPlayer.format[format].media === 'video';

						if (_this.html.support[format] && _this._validString(media[format])) {
							// Format supported in solution and url given for format.

							if (isVideo) {
								_this._htmlSetVideo(media);
								_this.html.active = true;
								_this.mergeOptions({ status: { video: true } });
								_this.removeClass(utilities.className.hidden, jPlayer.key.videoPlayClass);
							} else {
								_this._htmlSetAudio(media);
								_this.html.active = true;

								// Setup the Android Fix - Only for HTML audio.
								if (jPlayer.platform.android) {
									_this.androidFix.setMedia = true;
								}
								_this.mergeOptions({ status: { video: false, media: media } });
								_this.addClass(utilities.className.hidden, jPlayer.key.videoPlayClass);
							}
							supported = true;
							break;
						}
					}

					if (supported) {
						if (!(_this.props.status.nativeVideoControls && _this.html.video.gate)) {
							// Set poster IMG if native video controls are not being used
							// Note: With IE the IMG onload event occurs immediately when cached.
							// Note: Poster hidden by default in _resetMedia()
							if (_this._validString(media.poster)) {
								if (posterChanged) {
									// Since some browsers do not generate img onload event.
									_this.setState({ posterSrc: media.poster });
								} else {
									_this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
								}
							}
						}

						if (typeof media.title === 'string') {
							_this.setState({ titleText: media.title });
						}

						_this.mergeOptions({ status: { srcSet: true } });
						_this._updateButtons(false);
						_this._trigger(_this.props.onSetMedia);
					} else {
						// jPlayer cannot support any formats provided in this browser
						// Send an error event
						_this._error({
							type: _this.error.NO_SUPPORT,
							context: "{supplied:'" + _this.props.supplied.join(", ") + "'}",
							message: _this.errorMsg.NO_SUPPORT,
							hint: _this.errorHint.NO_SUPPORT
						});
					}
				};

				_this._resetMedia = function () {
					_this._updateButtons(false);
					_this._updateInterface();
					_this._seeked();
					_this.addClass(utilities.className.hidden, jPlayer.key.posterClass);

					// Maintains the status properties that persist through a reset.	
					_this.mergeOptions({ status: defaultStatus });

					clearTimeout(_this.internal.htmlDlyCmdId);

					if (_this.html.active) {
						_this._htmlResetMedia();
					}
				};

				_this.clearMedia = function () {
					_this._resetMedia();

					if (_this.html.active) {
						_this._htmlClearMedia();
					}

					_this.html.active = false;
				};

				_this.load = function () {
					if (_this.props.status.srcSet) {
						if (_this.html.active) {
							_this._htmlLoad();
						}
					} else {
						_this._urlNotSetError("load");
					}
				};

				_this.focus = function () {
					if (_this.props.keyEnabled) {
						jPlayer.focusInstance = _this;
					}
				};

				_this.play = function (time) {
					if (_this.props.status.srcSet) {
						_this.focus();
						if (_this.html.active) {
							_this._htmlPlay(time);
						}
					} else {
						_this._urlNotSetError("play");
						_this.mergeOptions({ status: { paused: true } });
					}
				};

				_this.pause = function (time) {
					if (_this.props.status.srcSet) {
						if (_this.html.active) {
							_this._htmlPause(time);
						}
					} else {
						_this._urlNotSetError("pause");
					}
				};

				_this.stop = function () {
					if (_this.props.status.srcSet) {
						if (_this.html.active) {
							_this._htmlPause(0);
						}
					} else {
						_this._urlNotSetError("stop");
					}
				};

				_this.playHead = function (p) {
					p = _this._limitValue(p, 0, 100);
					if (_this.props.status.srcSet) {
						if (_this.html.active) {
							_this._htmlPlayHead(p);
						}
					} else {
						_this._urlNotSetError("playHead");
					}
				};

				_this.mute = function (mute) {
					if (_this.props.muted) {
						_this.assignOptions({ muted: false });
					} else {
						mute = mute === undefined ? true : !!mute;
						_this.assignOptions({ muted: mute });
					}
				};

				_this._updateMute = function (mute) {
					if (mute === undefined) {
						mute = _this.props.muted;
					}
					if (mute) {
						_this.addClass(_this.stateClass.muted, utilities.key.stateClass);
					} else {
						_this.removeClass(_this.stateClass.muted, utilities.key.stateClass);
					}
				};

				_this._updateVolume = function (v) {
					v = _this._limitValue(v, 0, 1);
					if (v === undefined) {
						v = _this.props.volume;
					}
					v = _this.props.muted ? 0 : v;

					if (_this.props.status.noVolume) {
						_this.addClass(_this.stateClass.noVolume, utilities.key.stateClass);
						_this.addClass(utilities.className.hidden, jPlayer.key.volumeBarClass);
						_this.addClass(utilities.className.hidden, jPlayer.key.volumeBarValueClass);
						_this.addClass(utilities.className.hidden, jPlayer.key.volumeMaxClass);
					} else {
						_this.removeClass(_this.stateClass.noVolume, utilities.key.stateClass);

						var volumeValue = v * 100 + "%";

						_this.assignStyle({
							width: !_this.props.verticalVolume ? volumeValue : null,
							height: _this.props.verticalVolume ? volumeValue : null
						}, "volumeBarValueStyle");

						_this.removeClass(utilities.className.hidden, jPlayer.key.volumeBarClass);
						_this.removeClass(utilities.className.hidden, jPlayer.key.volumeBarValueClass);
						_this.removeClass(utilities.className.hidden, jPlayer.key.volumeMaxClass);
					}
				};

				_this._cssSelectorAncestor = function (ancestor) {
					_this.removeClass(_this.props.status.cssClass, utilities.key.stateClass);
					_this.addClass(_this.props.status.cssClass, utilities.key.stateClass);

					// Set the GUI to the current state.
					_this._updateInterface();
					_this._updateButtons();
					_this._updateVolume();
					_this._updateMute();
				};

				_this.duration = function (e) {
					if (_this.props.toggleDuration) {
						if (_this.props.captureDuration) {
							e.stopPropagation();
						}
						_this.assignOptions({ remainingDuration: !_this.props.remainingDuration });
					}
				};

				_this._updatePlaybackRate = function () {
					var pbr = _this.nextProps.playbackRate,
					    ratio = (pbr - _this.props.minPlaybackRate) / (_this.props.maxPlaybackRate - _this.props.minPlaybackRate);
					if (_this.props.status.playbackRateEnabled) {

						_this.removeClass(utilities.className.hidden, jPlayer.key.playbackRateBarClass);
						_this.removeClass(utilities.className.hidden, jPlayer.key.playbackRateBarValueClass);

						var playbackRateBarValue = ratio * 100 + "%";

						_this.assignStyle({
							width: !_this.props.verticalPlaybackRate ? playbackRateBarValue : null,
							height: _this.props.verticalPlaybackRate ? playbackRateBarValue : null
						}, "playbackRateBarValueStyle");
					} else {
						_this.addClass(utilities.className.hidden, jPlayer.key.playbackRateBarClass);
						_this.addClass(utilities.className.hidden, jPlayer.key.playbackRateBarValueClass);
					}
				};

				_this._incrementCurrentLoop = function () {
					var loopIndex = _this.loopOptions.indexOf(_this.props.loop || _this.loopOptions[0]);

					if (loopIndex >= _this.loopOptions.length - 1) {
						loopIndex = -1;
					}
					return _this.loopOptions[++loopIndex];
				};

				_this._loop = function () {
					_this._updateButtons();
					_this._trigger(_this.props.onRepeat);
				};

				_this._setNextProps = function () {
					var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

					//props that get updated within the jPlayer component as well as through props
					_this.nextProps = {
						playbackRate: nextProps.playbackRate === undefined ? _this.props.playbackRate : nextProps.playbackRate,
						fullWindow: nextProps.fullWindow === undefined ? _this.props.fullWindow : nextProps.fullWindow,
						remainingDuration: nextProps.remainingDuration === undefined ? _this.props.remainingDuration : nextProps.remainingDuration,
						loop: nextProps.loop === undefined ? _this.props.loop : nextProps.loop,
						sizeCssClass: nextProps.sizeCssClass === undefined ? _this.props.sizeCssClass : nextProps.sizeCssClass,
						sizeFullCssClass: nextProps.sizeFullCssClass === undefined ? _this.props.sizeFullCssClass : nextProps.sizeFullCssClass
					};
				};

				_this._setOptions = function (options) {
					var dynamicOption = {
						status: function status(value) {
							var _loop = function _loop(key) {
								var option = value[key];

								var status = {
									paused: function paused() {
										return option ? _this.pause(options.status.currentTime) : _this.play(options.status.currentTime);
									},
									media: function media() {
										return _this.setMedia(option);
									}
								};

								if (status.hasOwnProperty(key) && !(0, _isEqual2.default)(_this.props.status[key], option)) {
									status[key]();
								}
							};

							for (var key in value) {
								_loop(key);
							}
						},
						volume: function volume(value) {
							if (_this.html.used) {
								_this.currentMedia.volume = value;
							}

							if (_this.props.globalVolume) {
								_this.props.dispatch(actions.updateOthersOption(_this.props.jPlayerSelector, value, "volume"));
							}
						},
						muted: function muted(value) {
							if (_this.html.used) {
								_this.currentMedia.muted = value;
							}

							if (_this.props.globalVolume) {
								_this.props.dispatch(actions.updateOthersOption(_this.props.jPlayerSelector, value, "muted"));
							}
						},
						autoPlay: function autoPlay(value) {
							if (_this.html.used) {
								_this.currentMedia.autoplay = value;
							}
						},
						playbackRate: function playbackRate(value) {
							if (_this.html.used) {
								_this.currentMedia.playbackRate = value;
							}
							_this._setNextProps({ playbackRate: value });
							_this._updatePlaybackRate();
						},
						defaultPlaybackRate: function defaultPlaybackRate(value) {
							if (_this.html.used) {
								_this.currentMedia.defaultPlaybackRate = value;
							}
							_this._updatePlaybackRate();
						},
						minPlaybackRate: function minPlaybackRate() {
							return _this._updatePlaybackRate();
						},
						maxPlaybackRate: function maxPlaybackRate() {
							return _this._updatePlaybackRate();
						},
						fullScreen: function fullScreen(value) {
							var wkv = jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
							if (!wkv || wkv && !_this.props.status.waitForPlay) {
								if (value) {
									_this._requestFullscreen();
								} else {
									_this._exitFullscreen();
								}
								if (!wkv) {
									_this.assignOptions({ fullWindow: value });
								}
							}
						},
						fullWindow: function fullWindow(value) {
							var sizeClass = _this.nextProps.fullWindow ? _this.props.sizeFullCssClass : _this.props.sizeCssClass;
							_this.removeClass(_this.props.status.cssClass, utilities.key.stateClass);
							_this.addClass(_this.stateClass[sizeClass], utilities.key.stateClass);
							_this._setNextProps({ fullWindow: value });
							_this.mergeOptions({ status: { cssClass: sizeClass } }, function () {
								return _this._trigger(_this.props.onResize);
							});
						},
						loop: function loop(value) {
							_this._setNextProps({ loop: value });
							_this._loop();
						},
						remainingDuration: function remainingDuration(value) {
							_this._setNextProps({ remainingDuration: value });
							_this._updateInterface();
						},
						nativeVideoControls: function nativeVideoControls() {
							//this.props.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls);
							_this._restrictNativeVideoControls();
						},
						noFullWindow: function noFullWindow() {
							//this.props.status.nativeVideoControls = this._uaBlocklist(this.props.nativeVideoControls); // Need to check again as noFullWindow can depend on this flag and the restrict() can override it.
							//this.props.status.noFullWindow = this._uaBlocklist(this.props.noFullWindow);
							_this._restrictNativeVideoControls();
						},
						noVolume: function noVolume() {
							//this.props.status.noVolume = this._uaBlocklist(this.props.noVolume);
							_this._updateVolume();
							_this._updateMute();
						},
						keyEnabled: function keyEnabled(value) {
							if (!value && _this === jPlayer.focusInstance) {
								jPlayer.focusInstance = null;
							}
						}
					};

					for (var key in options) {
						var _option = options[key];
						if (dynamicOption.hasOwnProperty(key) && !(0, _isEqual2.default)(_this.props[key], _option)) {
							dynamicOption[key](_option);
						}
					}
				};

				_this._setFunctions = function (functions) {
					if (!functions.length) {
						return;
					}

					functions.forEach(function (func) {
						return Array.isArray(func) ? _this[func.shift()].apply(_this, _toConsumableArray(func)) : _this[func]();
					});

					_this.assignOptions(_defineProperty({}, utilities.key.functions, []));
				};

				_this._updateSize = function () {
					// Video html resized if necessary at this time, or if native video controls being used.
					if (!_this.props.status.waitForPlay && _this.html.active && _this.props.status.video || _this.html.video.available && _this.html.used && _this.props.status.nativeVideoControls) {
						_this.assignStyle({ width: _this.props.status.width, height: _this.props.status.height }, "videoStyle");
					}
				};

				_this._fullscreenAddEventListeners = function () {
					var fs = jPlayer.nativeFeatures.fullscreen;

					if (fs.api.fullscreenEnabled) {
						if (fs.event.fullscreenchange) {
							// Create the event handler function and store it for removal.
							if (typeof _this.internal.fullscreenchangeHandler !== 'function') {
								_this.internal.fullscreenchangeHandler = function () {
									_this._fullscreenchange();
								};
							}
							document.addEventListener(fs.event.fullscreenchange, _this.internal.fullscreenchangeHandler, false);
						}
						// No point creating handler for fullscreenerror.
						// Either logic avoids fullscreen occurring (w3c/moz), or their is no event on the browser (webkit).
					}
				};

				_this._fullscreenchange = function () {
					// If nothing is fullscreen, then we cannot be in fullscreen mode.
					if (_this.props.fullScreen && !jPlayer.nativeFeatures.fullscreen.api.fullscreenElement()) {
						_this.assignOptions({ fullScreen: false });
					}
				};

				_this._requestFullscreen = function () {
					var e = document.querySelector(_this.props.cssSelectorAncestor),
					    fs = jPlayer.nativeFeatures.fullscreen;

					// This method needs the video element. For iOS and Android.
					if (fs.used.webkitVideo) {
						e = _this.currentMedia;
					}

					if (fs.api.fullscreenEnabled) {
						fs.api.requestFullscreen(e);
					}
				};

				_this._posterLoad = function () {
					if (!_this.props.status.video || _this.props.status.waitForPlay) {
						_this.removeClass(utilities.className.hidden, jPlayer.key.posterClass);
					}
				};

				_this._exitFullscreen = function () {
					var fs = jPlayer.nativeFeatures.fullscreen,
					    e;

					// This method needs the video element. For iOS and Android.
					if (fs.used.webkitVideo) {
						e = _this.video.element();
					}

					if (fs.api.fullscreenEnabled) {
						fs.api.exitFullscreen(e);
					}
				};

				_this._htmlInitMedia = function (media) {
					var mediaArray = media.track || [];
					var tracks = [];

					// Create any track elements given with the media, as an Array of track Objects.
					for (var index = 0; index < mediaArray.length; index++) {
						var v = array[index];
						var vDef = undefined;

						if (v.def) {
							vDef = v.def;
						}

						trackElements.push(_react2.default.createElement("track", { kind: v.Kind, src: v.src, srclang: v.srclang, label: v.label, "default": vDef }));
					}

					_this.setState({ tracks: tracks });
					_this.currentMedia.src = _this.props.status.src;

					if (_this.props.preload !== 'none') {
						_this._htmlLoad();
						_this._trigger(_this.props.onTimeUpdate);
					}
				};

				_this._htmlSetFormat = function (media, formatSetCallback) {
					// Always finds a format due to checks in setMedia()
					for (var priority = 0; priority < _this.formats.length; priority++) {
						var format = _this.formats[priority];

						if (_this.html.support[format] && media[format]) {
							_this.mergeOptions({ status: {
									src: media[format],
									formatType: format,
									format: _defineProperty({}, format, true)
								}, formatSetCallback: formatSetCallback });
							break;
						}
					}
				};

				_this._htmlSetAudio = function (media) {
					return _this._htmlSetFormat(media);
				};

				_this._htmlSetVideo = function (media) {
					_this._htmlSetFormat(media);
					if (_this.props.status.nativeVideoControls) {
						_this.video.element().poster = _this._validString(media.poster) ? media.poster : "";
					}
				};

				_this._htmlResetMedia = function () {
					if (_this.currentMedia) {
						if (!_this.props.status.nativeVideoControls) {
							_this.addClass(utilities.className.hidden, jPlayer.key.videoClass);
						}
						_this.currentMedia.pause();
					}
				};

				_this._htmlClearMedia = function () {
					if (_this.currentMedia) {
						_this.currentMedia.src = "about:blank";

						// The following load() is only required for Firefox 3.6 (PowerMacs).
						// Recent HTMl5 browsers only require the src change. Due to changes in W3C spec and load() effect.
						_this.currentMedia.load(); // Stops an old, "in progress" download from continuing the download. Triggers the loadstart, error and emptied events, due to the empty src. Also an abort event if a download was in progress.
					}
				};

				_this._htmlLoad = function (htmlLoadedCallback) {
					// This function remains to allow the early HTML5 browsers to work, such as Firefox 3.6
					// A change in the W3C spec for the media.load() command means that this is no longer necessary.
					// This command should be removed and actually causes minor undesirable effects on some browsers. Such as loading the whole file and not only the metadata.
					if (_this.props.status.waitForLoad) {
						_this.currentMedia.load();
						_this.mergeOptions({ status: { waitForLoad: false } });
					}
					clearTimeout(_this.internal.htmlDlyCmdId);
				};

				_this._htmlPlay = function (time) {
					_this.androidFix.pause = false; // Cancel the pause fix.

					_this._htmlLoad(); // Loads if required and clears any delayed commands.

					// Setup the Android Fix.
					if (_this.androidFix.setMedia) {
						_this.androidFix.play = true;
						_this.androidFix.time = time;
					} else if (!isNaN(time)) {
						// Attempt to play it, since iOS has been ignoring commands
						if (_this.internal.cmdsIgnored) {
							_this.currentMedia.play();
						}
						try {
							// !this.currentMedia.seekable is for old HTML5 browsers, like Firefox 3.6.
							// Checking seekable.length is important for iOS6 to work with setMedia().play(time)
							if (!_this.currentMedia.seekable || _typeof(_this.currentMedia.seekable) === "object" && _this.currentMedia.seekable.length > 0) {
								_this.currentMedia.currentTime = time;
								_this.currentMedia.play();
							} else {
								throw 1;
							}
						} catch (err) {
							_this.internal.htmlDlyCmdId = setTimeout(function () {
								_this.mergeOptions({ status: { paused: false, currentTime: time } });
							}, 250);
							return; // Cancel execution and wait for the delayed command.
						}
					} else {
						_this.currentMedia.play();
					}
				};

				_this._htmlPause = function (time) {
					_this.androidFix.play = false; // Cancel the play fix.

					if (time > 0) {
						// We do not want the stop() command, which does pause(0), causing a load operation.
						_this._htmlLoad();
					} else {
						clearTimeout(_this.internal.htmlDlyCmdId);
					}

					// Order of these commands is important for Safari (Win) and IE9. Pause then change currentTime.
					_this.currentMedia.pause();

					// Setup the Android Fix.
					if (_this.androidFix.setMedia) {
						_this.androidFix.pause = true;
						_this.androidFix.time = time;
					} else if (!isNaN(time)) {
						try {
							if (!_this.currentMedia.seekable || _typeof(_this.currentMedia.seekable) === "object" && _this.currentMedia.seekable.length > 0) {
								_this.currentMedia.currentTime = time;
							} else {
								throw 1;
							}
						} catch (err) {
							_this.internal.htmlDlyCmdId = setTimeout(function () {
								_this.mergeOptions({ status: { paused: true, currentTime: time } });
							}, 250);
							return; // Cancel execution and wait for the delayed command.
						}
					}
				};

				_this._htmlPlayHead = function (percent) {
					_this._htmlLoad();

					// This playHead() method needs a refactor to apply the android fix.
					try {
						if (_typeof(_this.currentMedia.seekable) === "object" && _this.currentMedia.seekable.length > 0) {
							_this.currentMedia.currentTime = percent * _this.currentMedia.seekable.end(_this.currentMedia.seekable.length - 1) / 100;
						} else if (_this.currentMedia.duration > 0 && !isNaN(_this.currentMedia.duration)) {
							_this.currentMedia.currentTime = percent * _this.currentMedia.duration / 100;
						} else {
							throw "e";
						}
					} catch (err) {
						_this.internal.htmlDlyCmdId = setTimeout(function () {
							_this.playHead(percent);
						}, 250);
						return; // Cancel execution and wait for the delayed command.
					}
				};

				_this._htmlCheckWaitForPlay = function () {
					if (_this.props.status.waitForPlay) {
						_this.mergeOptions({ status: { waitForPlay: false } });
						_this.addClass(utilities.className.hidden, jPlayer.key.videoPlayClass);

						if (_this.props.status.video) {
							_this.addClass(utilities.className.hidden, jPlayer.key.posterClass);
							_this.assignStyle({ width: _this.props.status.width, height: _this.props.status.height }, "videoStyle");
						}
					}
				};

				_this._validString = function (url) {
					return url && typeof url === "string";
				};

				_this._limitValue = function (value, min, max) {
					return value < min ? min : value > max ? max : value;
				};

				_this._urlNotSetError = function (context) {
					_this._error({
						type: _this.error.URL_NOT_SET,
						context: context,
						message: _this.errorMsg.URL_NOT_SET,
						hint: _this.errorHint.URL_NOT_SET
					});
				};

				_this._error = function (error) {
					_this._trigger(_this.props.onError, error);
				};

				_this.onPlayClick = function () {
					return _this.mergeOptions({ status: { paused: !_this.props.status.paused } });
				};

				_this.onSeekBarClick = function (e) {
					// Using $(e.currentTarget) to enable multiple seek bars
					var bar = e.currentTarget,
					    offset = getOffset(bar),
					    x = e.pageX - offset.left,
					    w = getWidth(bar),
					    p = 100 * x / w;

					_this.playHead(p);
				};

				_this.onPlaybackRateBarClick = function (e) {
					// Using e.currentTarget to enable multiple playbackRate bars
					var bar = e.currentTarget,
					    offset = getOffset(bar),
					    x = e.pageX - offset.left,
					    w = getWidth(bar),
					    y = getHeight(bar) - e.pageY + offset.top,
					    h = getHeight(bar),
					    ratio,
					    pbr;

					if (_this.props.verticalPlaybackRate) {
						ratio = y / h;
					} else {
						ratio = x / w;
					}

					pbr = ratio * (_this.props.maxPlaybackRate - _this.props.minPlaybackRate) + _this.props.minPlaybackRate;
					_this.assignOptions({ playbackRate: pbr });
				};

				_this.onVolumeBarClick = function (e) {
					// Using $(e.currentTarget) to enable multiple volume bars
					var bar = e.currentTarget,
					    offset = getOffset(bar),
					    x = e.pageX - offset.left,
					    w = getWidth(bar),
					    y = getHeight(bar) - e.pageY + offset.top,
					    h = getHeight(bar);

					if (_this.props.verticalVolume) {
						_this.assignOptions({ volume: y / h });
					} else {
						_this.assignOptions({ volume: x / w });
					}

					if (_this.props.muted) {
						_this.assignOptions({ muted: false });
					}
				};

				_this.onVolumeMaxClick = function () {
					_this.assignOptions({ volume: 1 });

					if (_this.props.muted) {
						_this.assignOptions({ muted: false });
					}
				};

				_this.onVideoPlayClick = function () {
					return _this.mergeOptions({ status: { paused: false } });
				};

				_this.onMuteClick = function () {
					return _this.assignOptions({ muted: !_this.props.muted });
				};

				_this.onRepeatClick = function () {
					return _this.assignOptions({ loop: _this._incrementCurrentLoop() });
				};

				_this.onFullScreenClick = function () {
					return _this.assignOptions({ fullScreen: !_this.props.fullScreen });
				};

				_this.state = {};
				debugger;
				_this.assignOptions = utilities.assignOptions.bind(_this);
				_this.mergeOptions = utilities.mergeOptions.bind(_this);
				_this.modifyOptionsArray = utilities.modifyOptionsArray.bind(_this);
				_this.addClass = utilities.addClass.bind(_this);
				_this.removeClass = utilities.removeClass.bind(_this);
				_this.assignStyle = utilities.assignStyle.bind(_this);

				_this._setupInternalProperties();
				_this._setupOptions();
				_this._setupEvents();
				_this._setupErrors();
				return _this;
			}
			// tellOthers = (command, conditions, ...others) => {
			// 	var	hasConditions = typeof conditions === 'function';

			// 	if(typeof command !== 'string') { // Ignore, since no command.
			// 		return; // Return undefined to maintain chaining.
			// 	}

			// 	for (var index in jPlayer.instances) {
			// 		var instance = jPlayer.instances[index];

			// 		if(this.jPlayerElement !== instance.jPlayerElement) { // Do not tell this instance.
			// 			if(!hasConditions || conditions.bind(instance)()) {
			// 				this.setOptions.bind(instance)(command, ...others);
			// 			}
			// 		}
			// 	}
			// }
			// pauseOthers = (time) => {
			// 	this.tellOthers("pause", function() {
			// 		// In the conditions function, the "this" context is the other instance's jPlayer object.
			// 		return this.props.status.srcSet;
			// 	}, time);
			// }
			// Empty strings return false


			_createClass(JPlayer, [{
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps) {
					this._setOptions(nextProps);
					this._setFunctions(nextProps.functions);
				}
			}, {
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					this._removeEventListeners();
					document.documentElement.removeEventListener("keydown", this._keyBindings);
				}
			}, {
				key: "componentWillMount",
				value: function componentWillMount() {
					this._initBeforeRender();
					// store.on("jPlayerChange", () => {
					// 	debugger
					// 	if (store.identifier !== this.props.jPlayerSelector) {
					// 		this.assignOptions({
					// 			volume: store.volume, 
					// 			muted: store.muted
					// 		});				
					// 	}
					// });
				}
			}, {
				key: "componentDidUpdate",
				value: function componentDidUpdate(prevProps, prevState) {
					this.currentMedia.loop = this.props.loop === "loop" ? true : false;

					if (this.props.status.nativeVideoControls !== prevProps.status.nativeVideoControls) {
						this._updateNativeVideoControls();
					}

					if (this.props.status.currentTime !== prevProps.status.currentTime || this.props.status.duration !== prevProps.status.duration) {
						this._updateInterface();
					}

					if (this.props.status.paused !== prevProps.status.paused || this.props.status.noFullWindow !== prevProps.status.noFullWindow || this.props.status.loop !== prevProps.status.loop || this.props.status.sizeCssClass !== prevProps.status.sizeCssClass || this.props.status.sizeFullCssClass !== prevProps.status.sizeFullCssClass || this.props.fullWindow !== prevProps.fullWindow || this.props.fullScreen !== prevProps.fullScreen) {
						this._updateButtons();
					}

					if (this.props.status.src !== prevProps.status.src) {
						this._htmlInitMedia(this.props.status.media);
					}

					if (this.props.status.waitForLoad !== prevProps.status.waitForLoad) {
						//if(time > 0) { // Avoids a setMedia() followed by stop() or pause(0) hiding the video play button.
						this._htmlCheckWaitForPlay();
						//}
					}

					if (prevProps.status.width !== this.props.status.width || prevProps.status.height !== this.props.status.height) {
						this.assignStyle({ width: this.props.status.width, height: this.props.status.height }, "jPlayerStyle");
					}
				}
			}, {
				key: "componentDidMount",
				value: function componentDidMount() {
					if (this.audio.element()) {
						this.currentMedia = this.audio.element();
						this.html.audio.available = !!this.audio.element().canPlayType && this._testCanPlayType(jPlayer.format.mp3.codec); // Test is for IE9 on Win Server 2008. 
					}

					if (this.video.element()) {
						this.currentMedia = this.video.element();
						this.html.video.available = !!this.video.element().canPlayType && this._testCanPlayType(jPlayer.format.m4v.codec);
					}

					this._initAfterRender();
				}
			}, {
				key: "render",
				value: function render() {
					var _this2 = this;

					return _react2.default.createElement(
						WrappedComponent,
						_extends({ playd: this.play }, this.props),
						_react2.default.createElement(
							"div",
							{ id: this.props.cssSelectorAncestor.slice(1), className: this.props.status.stateClass.join(" ") },
							this.props.children,
							_react2.default.createElement(
								"div",
								{ ref: function ref(jPlayerElement) {
										return _this2.jPlayerElement = jPlayerElement;
									}, id: this.props.jPlayerSelector.slice(1), className: "jp-jplayer", style: this.state.jPlayerStyle },
								_react2.default.createElement(Poster, { posterClass: this.props.posterClass.join(" "), src: this.state.posterSrc, onLoad: this._posterLoad, onClick: function onClick() {
										return _this2._trigger(_this2.props.onClick);
									} }),
								_react2.default.createElement(
									Audio,
									{ ref: function ref(audio) {
											return _this2.audio = audio;
										}, require: this.require.audio, events: this.mediaEvent },
									this.state.videoTracks
								),
								_react2.default.createElement(
									Video,
									{ ref: function ref(video) {
											return _this2.video = video;
										}, require: this.require.video, videoClass: this.props.videoClass.join(" "), style: this.state.videoStyle, onClick: function onClick() {
											return _this2._trigger(_this2.props.onClick);
										}, events: this.mediaEvent },
									this.state.videoTracks
								)
							),
							_react2.default.createElement(
								GUI,
								{ nativeVideoControls: this.props.status.nativeVideoControls, fullWindow: this.props.fullWindow, autoHide: this.autoHide, fadeInConfig: this.props.guiFadeInAnimation, fadeOutConfig: this.props.guiFadeOutAnimation },
								_react2.default.createElement(
									"div",
									{ className: "jp-controls" },
									_react2.default.createElement(
										"a",
										{ className: jPlayer.className.play, onClick: this.onPlayClick },
										this.props.html.play
									),
									_react2.default.createElement(
										"a",
										{ className: jPlayer.className.mute, onClick: this.onMuteClick },
										this.props.html.mute
									),
									_react2.default.createElement(
										"a",
										{ className: jPlayer.className.volumeMax, onClick: this.onVolumeMaxClick },
										this.props.html.volumeMax
									),
									_react2.default.createElement(
										"a",
										{ className: this.props.repeatClass.join(" "), onClick: this.onRepeatClick },
										this.props.html.repeat
									),
									_react2.default.createElement(
										"a",
										{ className: this.props.fullScreenClass.join(" "), onClick: this.onFullScreenClick },
										this.props.html.fullScreen
									),
									_react2.default.createElement(
										"div",
										{ className: this.props.volumeBarClass.join(" "), style: this.state.volumeBarStyle, onClick: this.onVolumeBarClick },
										_react2.default.createElement("div", { className: this.props.volumeBarValueClass.join(" "), style: this.state.volumeBarValueStyle })
									),
									_react2.default.createElement(
										"div",
										{ className: jPlayer.className.title },
										this.state.titleText
									),
									_react2.default.createElement(
										"div",
										{ className: this.props.playbackRateBarClass.join(" "), style: this.state.playbackRateBarStyle, onClick: this.onPlaybackRateBarClick },
										_react2.default.createElement("div", { className: this.props.playbackRateBarValueClass.join(" "), style: this.state.playbackRateBarValueStyle })
									),
									_react2.default.createElement(AdditionalControls, this.props.additionalControlProps)
								),
								_react2.default.createElement(
									"div",
									{ className: "jp-progress" },
									_react2.default.createElement(
										"div",
										{ className: this.props.seekBarClass.join(" "), style: this.state.seekBarStyle, onClick: this.onSeekBarClick },
										_react2.default.createElement(PlayBar, { smoothPlayBar: this.props.smoothPlayBar, currentPercentAbsolute: this.props.status.currentPercentAbsolute, playBarStyle: this.state.playBarStyle }),
										_react2.default.createElement(
											"div",
											{ className: jPlayer.className.currentTime },
											this.state.currentTimeText
										),
										_react2.default.createElement(
											"div",
											{ className: jPlayer.className.duration, onClick: this.state.durationOnClick },
											this.state.durationText
										)
									)
								)
							),
							_react2.default.createElement(
								"div",
								{ className: this.props.noSolutionClass.join(" "), style: this.state.noSolutionStyle },
								_react2.default.createElement(
									"span",
									null,
									"Update Required"
								),
								"To play the media you will need to update your browser to a recent version."
							)
						)
					);
				}
			}]);

			return JPlayer;
		}(_react2.default.Component);
	};

	var GUI = function (_React$Component2) {
		_inherits(GUI, _React$Component2);

		function GUI() {
			_classCallCheck(this, GUI);

			var _this3 = _possibleConstructorReturn(this, (GUI.__proto__ || Object.getPrototypeOf(GUI)).call(this));

			_this3._setFading = function (event) {
				if (!_this3.state.isFadingIn) {

					_this3.fadeHoldTimeout = setTimeout(function () {
						_this3.setState({ isFadingIn: false });
					}, _this3.props.autoHide.hold);
				}

				_this3.setState({ isFadingIn: true });
			};

			_this3._updateAutoHide = function () {
				return _react2.default.createElement(
					"div",
					{ className: _this3.props.nativeVideoControls ? utilities.className.hidden : null, onMouseMove: _this3._setFading, style: { width: "100%", height: "100%", position: "fixed", top: "0" } },
					_react2.default.createElement(
						_reactMotion.Motion,
						{ defaultStyle: { opacityToInterpTo: 1 }, style: { opacityToInterpTo: (0, _reactMotion.spring)(_this3.state.isFadingIn ? 1 : 0, _this3.state.isFadingIn ? _this3.props.fadeInConfig : _this3.props.fadeOutConfig) } },
						function (values) {
							return _react2.default.createElement(
								"div",
								{ className: "jp-gui", onMouseLeave: function onMouseLeave() {
										return _this3.setState({ isFadingIn: false });
									}, onMouseEnter: function onMouseEnter() {
										return clearTimeout(_this3.fadeHoldTimeout);
									}, style: { opacity: values.opacityToInterpTo, display: values.opacityToInterpTo <= 0.05 ? "none" : "" } },
								_this3.props.children
							);
						}
					)
				);
			};

			_this3.state = {};
			return _this3;
		}

		_createClass(GUI, [{
			key: "render",
			value: function render() {
				return this.props.fullWindow && this.props.autoHide.full || !this.props.fullWindow && this.props.autoHide.restored ? this._updateAutoHide() : _react2.default.createElement(
					"div",
					{ className: this.props.nativeVideoControls ? "jp-gui " + utilities.className.hidden : "jp-gui" },
					this.props.children
				);
			}
		}]);

		return GUI;
	}(_react2.default.Component);

	;

	var PlayBar = function PlayBar(props) {
		return props.smoothPlayBar ? _react2.default.createElement(
			_reactMotion.Motion,
			{ style: { smoothWidth: (0, _reactMotion.spring)(props.currentPercentAbsolute, [250]) } },
			function (values) {
				return _react2.default.createElement("div", { className: "jp-play-bar", style: { width: values.smoothWidth + "%" } });
			}
		) : _react2.default.createElement("div", { className: "jp-play-bar", style: props.playBarStyle });
	};

	PlayBar.defaultProps = {
		currentPercentAbsolute: 0
	};

	var Poster = function Poster(props) {
		return _react2.default.createElement("img", { className: props.posterClass, src: props.src, style: props.style, onLoad: props.onLoad, onClick: props.onClick });
	};

	var Audio = function (_React$Component3) {
		_inherits(Audio, _React$Component3);

		function Audio() {
			var _ref;

			var _temp, _this4, _ret2;

			_classCallCheck(this, Audio);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret2 = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref, [this].concat(args))), _this4), _this4.element = function () {
				return _this4.audioElement;
			}, _temp), _possibleConstructorReturn(_this4, _ret2);
		}

		_createClass(Audio, [{
			key: "render",
			value: function render() {
				var _this5 = this;

				return this.props.require ? _react2.default.createElement(
					"audio",
					_extends({ ref: function ref(audioElement) {
							return _this5.audioElement = audioElement;
						} }, this.props.events),
					this.props.children
				) : null;
			}
		}]);

		return Audio;
	}(_react2.default.Component);

	var Video = function (_React$Component4) {
		_inherits(Video, _React$Component4);

		function Video() {
			var _ref2;

			var _temp2, _this6, _ret3;

			_classCallCheck(this, Video);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret3 = (_temp2 = (_this6 = _possibleConstructorReturn(this, (_ref2 = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref2, [this].concat(args))), _this6), _this6.element = function () {
				return _this6.videoElement;
			}, _temp2), _possibleConstructorReturn(_this6, _ret3);
		}

		_createClass(Video, [{
			key: "render",
			value: function render() {
				var _this7 = this;

				return this.props.require && _react2.default.createElement(
					"video",
					_extends({ ref: function ref(videoElement) {
							return _this7.videoElement = videoElement;
						}, className: this.props.videoClass, style: this.props.style, onClick: this.props.onClick }, this.props.events),
					this.props.children
				);
			}
		}]);

		return Video;
	}(_react2.default.Component);

	var keyBindings = function keyBindings(event) {
		var f = jPlayer.focusInstance,
		    ignoreKey;

		//A jPlayer instance must be in focusInstance. ie., keyEnabled and the last one played.
		if (f) {
			// What generated the key press?
			for (var index = 0; index < jPlayer.keyIgnoreElementNames.length; index++) {
				var name = jPlayer.keyIgnoreElementNames[index];

				if (event.target.nodeName.toUpperCase() === name.toUpperCase()) {
					ignoreKey = true;
					break;
				}
			}

			if (!ignoreKey) {
				var keyBindings = f.keyBindings;

				for (var action in keyBindings) {
					var binding = keyBindings[action];

					if (binding && isFunction(binding.fn) && (typeof binding.key === 'number' && event.which === binding.key || typeof binding.key === 'string' && event.key === binding.key)) {
						event.preventDefault(); // Key being used by jPlayer, so prevent default operation.
						binding.fn.bind(f)();
						break;
					}
				}
			}
		}
	};

	var defaultStatus = {
		src: "",
		media: {},
		paused: true,
		format: {},
		formatType: "",
		waitForPlay: true, // Same as waitForLoad except in case where preloading.
		waitForLoad: true,
		srcSet: false,
		video: false, // True if playing a video
		seekPercent: 0,
		currentPercentRelative: 0,
		currentPercentAbsolute: 0,
		currentTime: 0,
		duration: 0,
		remaining: 0,
		videoWidth: 0, // Intrinsic width of the video in pixels.
		videoHeight: 0, // Intrinsic height of the video in pixels.
		readyState: 0,
		networkState: 0,
		playbackRate: 1, // Warning - Now both an option and a status property
		ended: 0,
		stateClass: []
		/*
  Persistant status properties created dynamically at _init():
  nativeVideoControls
  noFullWindow
  noVolume
  playbackRateEnabled
  */
	};

	jPlayer.key = {
		volumeBarClass: "volumeBarClass",
		volumeBarValueClass: "volumeBarValueClass",
		volumeMaxClass: "volumeMaxClass",
		playbackRateBarClass: "playbackRateBarClass",
		playbackRateBarValueClass: "playbackRateBarValueClass",
		seekBarClass: "seekBarClass",
		noSolutionClass: "noSolutionClass",
		posterClass: "posterClass",
		videoClass: "videoClass",
		videoPlayClass: "videoPlayClass",
		playClass: "playClass",
		pauseClass: "pauseClass",
		repeatClass: "repeatClass",
		fullScreenClass: "fullScreenClass"
	};

	jPlayer.className = {
		seeking: "jp-seeking-bg",
		mute: "jp-mute",
		volumeBar: "jp-volume-bar",
		volumeBarValue: "jp-volume-bar-value",
		volumeMax: "jp-volume-max",
		playbackRateBar: "jp-playback-rate-bar",
		playbackRateBarValue: "jp-playback-rate-bar-value",
		seekBar: "jp-seek-bar",
		noSolution: "jp-no-solution",
		play: "jp-play",
		pause: "jp-pause",
		repeat: "jp-repeat",
		fullScreen: "jp-full-screen",
		title: "jp-title",
		currentTime: "jp-current-time",
		duration: "jp-duration"
	};

	jPlayer.keys = function (en) {
		var event = "keydown";

		// Remove any binding, just in case enabled more than once.
		document.documentElement.removeEventListener(event, keyBindings);

		if (en) {
			document.documentElement.addEventListener(event, keyBindings);
		}
	}(true);

	jPlayer.timeFormat = {
		showHour: false,
		showMin: true,
		showSec: true,
		padHour: false,
		padMin: true,
		padSec: true,
		sepHour: ":",
		sepMin: ":",
		sepSec: ""
	};

	jPlayer.keyIgnoreElementNames = ["A", "INPUT", "TEXTAREA", "SELECT", "BUTTON"];
	jPlayer.focusInstance = null;

	jPlayer.uaBrowser = function (userAgent) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rwebkit = /(webkit)[ \/]([\w.]+)/;
		var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
		var rmsie = /(msie) ([\w.]+)/;
		var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

		var match = rwebkit.exec(ua) || ropera.exec(ua) || rmsie.exec(ua) || ua.indexOf("compatible") < 0 && rmozilla.exec(ua) || [];

		return { browser: match[1] || "", version: match[2] || "0" };
	};

	jPlayer.uaPlatform = function (userAgent) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
		var rtablet = /(ipad|playbook)/;
		var randroid = /(android)/;
		var rmobile = /(mobile)/;

		var platform = rplatform.exec(ua) || [];
		var tablet = rtablet.exec(ua) || !rmobile.exec(ua) && randroid.exec(ua) || [];

		if (platform[1]) {
			platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
		}

		return { platform: platform[1] || "", tablet: tablet[1] || "" };
	};

	// Internet Explorer (IE) Browser Document Mode Sniffer. Based on code at:
	// http://msdn.microsoft.com/en-us/library/cc288325%28v=vs.85%29.aspx#GetMode
	jPlayer.getDocMode = function () {
		var docMode;

		if (jPlayer.browser.msie) {
			if (document.documentMode) {
				// IE8 or later
				docMode = document.documentMode;
			} else {
				// IE 5-7
				docMode = 5; // Assume quirks mode unless proven otherwise

				if (document.compatMode && document.compatMode === "CSS1Compat") {
					docMode = 7; // standards mode
				}
			}
		}
		return docMode;
	};

	jPlayer.browser = {};
	jPlayer.platform = {};

	var browserMatch = jPlayer.uaBrowser(navigator.userAgent);

	if (browserMatch.browser) {
		jPlayer.browser[browserMatch.browser] = true;
		jPlayer.browser.version = browserMatch.version;
	}

	var platformMatch = jPlayer.uaPlatform(navigator.userAgent);

	if (platformMatch.platform) {
		jPlayer.platform[platformMatch.platform] = true;
		jPlayer.platform.mobile = !platformMatch.tablet;
		jPlayer.platform.tablet = !!platformMatch.tablet;
	}

	jPlayer.browser.documentMode = jPlayer.getDocMode();

	jPlayer.nativeFeatures = {
		init: function init() {
			/* Fullscreen function naming influenced by W3C naming.
   	* No support for: Mozilla Proposal: https://wiki.mozilla.org/Gecko:FullScreenAPI
   	*/
			var d = document,
			    v = d.createElement('video'),
			    spec = {
				// http://www.w3.org/TR/fullscreen/
				w3c: ['fullscreenEnabled', 'fullscreenElement', 'requestFullscreen', 'exitFullscreen', 'fullscreenchange', 'fullscreenerror'],
				// https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
				moz: ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror'],
				// http://developer.apple.com/library/safari/#documentation/WebKit/Reference/ElementClassRef/Element/Element.html
				// http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/DocumentAdditionsReference/DocumentAdditions/DocumentAdditions.html
				webkit: ['', 'webkitCurrentFullScreenElement', 'webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitfullscreenchange', ''],
				// http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
				// https://developer.apple.com/library/safari/samplecode/HTML5VideoEventFlow/Listings/events_js.html#//apple_ref/doc/uid/DTS40010085-events_js-DontLinkElementID_5
				// Events: 'webkitbeginfullscreen' and 'webkitendfullscreen'
				webkitVideo: ['webkitSupportsFullscreen', 'webkitDisplayingFullscreen', 'webkitEnterFullscreen', 'webkitExitFullscreen', '', ''],
				ms: ['', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError']
			},
			    specOrder = ['w3c', 'moz', 'webkit', 'webkitVideo', 'ms'],
			    fs,
			    i,
			    il;

			this.fullscreen = fs = {
				support: {
					w3c: !!d[spec.w3c[0]],
					moz: !!d[spec.moz[0]],
					webkit: typeof d[spec.webkit[3]] === 'function',
					webkitVideo: typeof v[spec.webkitVideo[2]] === 'function',
					ms: typeof v[spec.ms[2]] === 'function'
				},
				used: {}
			};

			// Store the name of the spec being used and as a handy boolean.
			for (i = 0, il = specOrder.length; i < il; i++) {
				var n = specOrder[i];
				if (fs.support[n]) {
					fs.spec = n;
					fs.used[n] = true;
					break;
				}
			}

			if (fs.spec) {
				var s = spec[fs.spec];
				fs.api = {
					fullscreenEnabled: true,
					fullscreenElement: function fullscreenElement(elem) {
						elem = elem ? elem : d; // Video element required for webkitVideo
						return elem[s[1]];
					},
					requestFullscreen: function requestFullscreen(elem) {
						return elem[s[2]](); // Chrome and Opera want parameter (Element.ALLOW_KEYBOARD_INPUT) but Safari fails if flag used.
					},
					exitFullscreen: function exitFullscreen(elem) {
						elem = elem ? elem : d; // Video element required for webkitVideo
						return elem[s[3]]();
					}
				};
				fs.event = {
					fullscreenchange: s[4],
					fullscreenerror: s[5]
				};
			} else {
				fs.api = {
					fullscreenEnabled: false,
					fullscreenElement: function fullscreenElement() {
						return null;
					},
					requestFullscreen: function requestFullscreen() {},
					exitFullscreen: function exitFullscreen() {}
				};
				fs.event = {};
			}
		}
	};
	jPlayer.nativeFeatures.init();

	var ConvertTime = function ConvertTime() {
		this.init();
	};

	ConvertTime.prototype = {
		init: function init() {
			this.options = {
				timeFormat: jPlayer.timeFormat
			};
		},
		time: function time(s) {
			s = s && typeof s === 'number' ? s : 0;

			var myTime = new Date(s * 1000),
			    hour = myTime.getUTCHours(),
			    min = this.timeFormat.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
			    sec = this.timeFormat.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
			    strHour = this.timeFormat.padHour && hour < 10 ? "0" + hour : hour,
			    strMin = this.timeFormat.padMin && min < 10 ? "0" + min : min,
			    strSec = this.timeFormat.padSec && sec < 10 ? "0" + sec : sec,
			    strTime = "";

			strTime += this.timeFormat.showHour ? strHour + this.timeFormat.sepHour : "";
			strTime += this.timeFormat.showMin ? strMin + this.timeFormat.sepMin : "";
			strTime += this.timeFormat.showSec ? strSec + this.timeFormat.sepSec : "";

			return strTime;
		}
	};

	var myConvertTime = new ConvertTime();

	jPlayer.convertTime = function (s) {
		return myConvertTime.time(s);
	};

	jPlayer.version = {
		script: "2.9.2"
	};

	// 'MPEG-4 support' : canPlayType('video/mp4; codecs="mp4v.20.8"')
	jPlayer.format = {
		mp3: {
			codec: 'audio/mpeg',
			media: 'audio'
		},
		m4a: { // AAC / MP4
			codec: 'audio/mp4; codecs="mp4a.40.2"',
			media: 'audio'
		},
		m3u8a: { // AAC / MP4 / Apple HLS
			codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
			media: 'audio'
		},
		m3ua: { // M3U
			codec: 'audio/mpegurl',
			media: 'audio'
		},
		oga: { // OGG
			codec: 'audio/ogg; codecs="vorbis, opus"',
			media: 'audio'
		},
		flac: { // FLAC
			codec: 'audio/x-flac',
			media: 'audio'
		},
		wav: { // PCM
			codec: 'audio/wav; codecs="1"',
			media: 'audio'
		},
		webma: { // WEBM
			codec: 'audio/webm; codecs="vorbis"',
			media: 'audio'
		},
		fla: { // FLV / F4A
			codec: 'audio/x-flv',
			media: 'audio'
		},
		rtmpa: { // RTMP AUDIO
			codec: 'audio/rtmp; codecs="rtmp"',
			media: 'audio'
		},
		m4v: { // H.264 / MP4
			codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
			media: 'video'
		},
		m3u8v: { // H.264 / AAC / MP4 / Apple HLS
			codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
			media: 'video'
		},
		m3uv: { // M3U
			codec: 'audio/mpegurl',
			media: 'video'
		},
		ogv: { // OGG
			codec: 'video/ogg; codecs="theora, vorbis"',
			media: 'video'
		},
		webmv: { // WEBM
			codec: 'video/webm; codecs="vorbis, vp8"',
			media: 'video'
		},
		flv: { // FLV / F4V
			codec: 'video/x-flv',
			media: 'video'
		},
		rtmpv: { // RTMP VIDEO
			codec: 'video/rtmp; codecs="rtmp"',
			media: 'video'
		}
	};

	var getOffset = function getOffset(el) {
		return { top: el.getBoundingClientRect().top + document.body.scrollTop, left: el.getBoundingClientRect().left + document.body.scrollLeft };
	};
	var getWidth = function getWidth(el) {
		return el.getBoundingClientRect().width;
	};
	var getHeight = function getHeight(el) {
		return el.getBoundingClientRect().height;
	};
	var isFunction = function isFunction(obj) {
		return Object.prototype.toString.call(obj) == '[object Function]';
	};

	exports.default = jPlayer;
});