(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "lodash.merge", "lodash/remove", "lodash/get", "lodash/set", "./constants"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("lodash.merge"), require("lodash/remove"), require("lodash/get"), require("lodash/set"), require("./constants"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.lodash, global.remove, global.get, global.set, global.constants);
		global.index = mod.exports;
	}
})(this, function (exports, _lodash, _remove, _get, _set, _constants) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.convertTime = exports.limitValue = exports.validString = exports.absoluteMediaUrls = exports.qualifyURL = exports.escapeHtml = exports.nativeFeatures = exports.testCanPlayType = exports.testPlaybackRate = exports.getDocMode = exports.uaPlatform = exports.uaBrowser = exports.focusInstance = exports.uaBlocklist = exports.isFunction = exports.getHeight = exports.getWidth = exports.getOffset = exports.urlNotSetError = exports.urlNotSupportedError = exports.noFormatSupportedError = exports.updateObject = exports.mapStateToProps = undefined;

	var _lodash2 = _interopRequireDefault(_lodash);

	var _remove2 = _interopRequireDefault(_remove);

	var _get2 = _interopRequireDefault(_get);

	var _set2 = _interopRequireDefault(_set);

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

	var mapStateToProps = exports.mapStateToProps = function mapStateToProps(_ref, ownProps) {
		var jPlayers = _ref.jPlayers;
		return {
			jPlayers: jPlayers,
			attributes: ownProps
		};
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
		return { top: el.getBoundingClientRect().top + document.body.scrollTop, left: el.getBoundingClientRect().left + document.body.scrollLeft };
	};
	var getWidth = exports.getWidth = function getWidth(el) {
		return el.getBoundingClientRect().width;
	};
	var getHeight = exports.getHeight = function getHeight(el) {
		return el.getBoundingClientRect().height;
	};
	var isFunction = exports.isFunction = function isFunction(obj) {
		return Object.prototype.toString.call(obj) == '[object Function]';
	};

	var uaBlocklist = exports.uaBlocklist = function uaBlocklist(list) {
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

	var focusInstance = exports.focusInstance = null;

	var uaBrowser = exports.uaBrowser = function uaBrowser(userAgent) {
		var ua = userAgent.toLowerCase();

		// Useragent RegExp
		var rwebkit = /(webkit)[ \/]([\w.]+)/;
		var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
		var rmsie = /(msie) ([\w.]+)/;
		var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

		var match = rwebkit.exec(ua) || ropera.exec(ua) || rmsie.exec(ua) || ua.indexOf("compatible") < 0 && rmozilla.exec(ua) || [];

		return { browser: match[1] || "", version: match[2] || "0" };
	};

	var uaPlatform = exports.uaPlatform = function uaPlatform(userAgent) {
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
	var getDocMode = exports.getDocMode = function getDocMode() {
		var docMode;

		if (_constants.browser.msie) {
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

	var testPlaybackRate = exports.testPlaybackRate = function testPlaybackRate(media) {
		var rate = 0.5;

		// Wrapping in a try/catch, just in case older HTML5 browsers throw and error.
		try {
			if ("playbackRate" in media) {
				media.playbackRate = rate;
				return media.playbackRate === rate;
			} else {
				return false;
			}
		} catch (err) {
			return false;
		}
	};

	var testCanPlayType = exports.testCanPlayType = function testCanPlayType(media) {
		// IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
		try {
			media.canPlayType(_constants.formats.mp3.CODEC); // The type is irrelevant.
			return true;
		} catch (err) {
			return false;
		}
	};

	var nativeFeatures = exports.nativeFeatures = {
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

	nativeFeatures.init();

	var escapeHtml = exports.escapeHtml = function escapeHtml(s) {
		return s.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
	};

	var qualifyURL = exports.qualifyURL = function qualifyURL(url) {
		var el = document.createElement('div');
		el.innerHTML = '<a href="' + escapeHtml(url) + '">x</a>';
		return el.firstChild.href;
	};

	// Convert all media URLs to absolute URLs.
	var absoluteMediaUrls = exports.absoluteMediaUrls = function absoluteMediaUrls(media) {
		for (var type in media) {
			var url = media[type];

			if (url && _constants.formats[type] && url.substr(0, 5) !== "data:") {
				media[type] = qualifyURL(url);
			}
		}

		return media;
	};

	var validString = exports.validString = function validString(url) {
		return url && typeof url === "string";
	}; // Empty strings return false

	var limitValue = exports.limitValue = function limitValue(value, min, max) {
		return value < min ? min : value > max ? max : value;
	};

	var convertTime = exports.convertTime = function convertTime(s) {
		s = s && typeof s === "number" ? s : 0;

		var myTime = new Date(s * 1000),
		    hour = myTime.getUTCHours(),
		    min = _constants.timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
		    sec = _constants.timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
		    strHour = _constants.timeFormats.padHour && hour < 10 ? "0" + hour : hour,
		    strMin = _constants.timeFormats.padMin && min < 10 ? "0" + min : min,
		    strSec = _constants.timeFormats.padSec && sec < 10 ? "0" + sec : sec;

		var strTime = "";
		strTime += _constants.timeFormats.showHour ? strHour + _constants.timeFormats.sepHour : "";
		strTime += _constants.timeFormats.showMin ? strMin + _constants.timeFormats.sepMin : "";
		strTime += _constants.timeFormats.showSec ? strSec + _constants.timeFormats.sepSec : "";

		return strTime;
	};
});