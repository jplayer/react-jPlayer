import merge from "lodash.merge";
import remove from "lodash/remove";
import get from "lodash/get";
import set from "lodash/set";
import {formats, browser, errors, hints, timeFormats} from "./constants";

export const mapStateToProps = ({jPlayers}, ownProps) => ({
    jPlayers,
    attributes: ownProps
});

export const updateObject = (existingObject, newValues) => ({
    ...existingObject, 
    ...newValues
});

export const noFormatSupportedError = (context) => ({
	context: context,
    message: errors.FORMAT_NO_SUPPORT,
    hint: hints.FORMAT_NO_SUPPORT
});

export const urlNotSupportedError = (context) => ({
	context: context,
	message: errors.URL_NO_SUPPORT,
	hint: hints.URL_NO_SUPPORT
});

export const urlNotSetError = (context) => ({
    context: context,
    message: errors.URL_NOT_SET,
    hint: hints.URL_NOT_SET
});

export const getOffset = (el) => ({top: el.getBoundingClientRect().top + document.body.scrollTop, left: el.getBoundingClientRect().left + document.body.scrollLeft});
export const getWidth = (el) => el.getBoundingClientRect().width;
export const getHeight = (el) => el.getBoundingClientRect().height;
export const isFunction = (obj) => Object.prototype.toString.call(obj) == '[object Function]';

export const uaBlocklist = (list) => {
	// list : object with properties that are all regular expressions. Property names are irrelevant.
	// Returns true if the user agent is matched in list.
	var	ua = navigator.userAgent.toLowerCase(),
		block = false;

	for (var p in list) {
		var re = list[p];

		if(re && re.test(ua)) {
			block = true;
			break;
		}
	}

	return block;
}

export const focusInstance = null;

export const uaBrowser = (userAgent) => {
	var ua = userAgent.toLowerCase();

	// Useragent RegExp
	var rwebkit = /(webkit)[ \/]([\w.]+)/;
	var ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
	var rmsie = /(msie) ([\w.]+)/;
	var rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

	var match = rwebkit.exec( ua ) ||
		ropera.exec( ua ) ||
		rmsie.exec( ua ) ||
		ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
		[];

	return { browser: match[1] || "", version: match[2] || "0" };
}

export const uaPlatform = (userAgent) => {
	var ua = userAgent.toLowerCase();

	// Useragent RegExp
	var rplatform = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/;
	var rtablet = /(ipad|playbook)/;
	var randroid = /(android)/;
	var rmobile = /(mobile)/;

	var platform = rplatform.exec( ua ) || [];
	var tablet = rtablet.exec( ua ) ||
		!rmobile.exec( ua ) && randroid.exec( ua ) ||
		[];

	if(platform[1]) {
		platform[1] = platform[1].replace(/\s/g, "_"); // Change whitespace to underscore. Enables dot notation.
	}

	return { platform: platform[1] || "", tablet: tablet[1] || "" };
}

// Internet Explorer (IE) Browser Document Mode Sniffer. Based on code at:
// http://msdn.microsoft.com/en-us/library/cc288325%28v=vs.85%29.aspx#GetMode
export const getDocMode = () => {
	var docMode;

	if (browser.msie) {
		if (document.documentMode) { // IE8 or later
			docMode = document.documentMode;
		} else { // IE 5-7
			docMode = 5; // Assume quirks mode unless proven otherwise

			if (document.compatMode && document.compatMode === "CSS1Compat") {
				docMode = 7; // standards mode
			}
		}
	}
	return docMode;
}

export const testPlaybackRate = (media) => {
	var rate = 0.5;

	// Wrapping in a try/catch, just in case older HTML5 browsers throw and error.
	try {
		if("playbackRate" in media) {
			media.playbackRate = rate;
			return media.playbackRate === rate;
		} else {
			return false;
		}
	} catch(err) {
		return false;
	}
}

export const testCanPlayType = (media) => {
	// IE9 on Win Server 2008 did not implement canPlayType(), but it has the property.
	try {
		media.canPlayType(formats.mp3.CODEC); // The type is irrelevant.
		return true;
	} catch(err) {
		return false;
	}
}

export const nativeFeatures = {
	init: function() {
		/* Fullscreen function naming influenced by W3C naming.
			* No support for: Mozilla Proposal: https://wiki.mozilla.org/Gecko:FullScreenAPI
			*/
		var d = document,
			v = d.createElement('video'),
			spec = {
				// http://www.w3.org/TR/fullscreen/
				w3c: [
					'fullscreenEnabled',
					'fullscreenElement',
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenchange',
					'fullscreenerror'
				],
				// https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
				moz: [
					'mozFullScreenEnabled',
					'mozFullScreenElement',
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozfullscreenchange',
					'mozfullscreenerror'
				],
				// http://developer.apple.com/library/safari/#documentation/WebKit/Reference/ElementClassRef/Element/Element.html
				// http://developer.apple.com/library/safari/#documentation/UserExperience/Reference/DocumentAdditionsReference/DocumentAdditions/DocumentAdditions.html
				webkit: [
					'',
					'webkitCurrentFullScreenElement',
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					''
				],
				// http://developer.apple.com/library/safari/#documentation/AudioVideo/Reference/HTMLVideoElementClassReference/HTMLVideoElement/HTMLVideoElement.html
				// https://developer.apple.com/library/safari/samplecode/HTML5VideoEventFlow/Listings/events_js.html#//apple_ref/doc/uid/DTS40010085-events_js-DontLinkElementID_5
				// Events: 'webkitbeginfullscreen' and 'webkitendfullscreen'
				webkitVideo: [
					'webkitSupportsFullscreen',
					'webkitDisplayingFullscreen',
					'webkitEnterFullscreen',
					'webkitExitFullscreen',
					'',
					''
				],
				ms: [
					'',
					'msFullscreenElement',
					'msRequestFullscreen',
					'msExitFullscreen',
					'MSFullscreenChange',
					'MSFullscreenError'
				]
			},
			specOrder = [
				'w3c',
				'moz',
				'webkit',
				'webkitVideo',
				'ms'
			],
			fs, i, il;

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
		for(i = 0, il = specOrder.length; i < il; i++) {
			var n = specOrder[i];
			if(fs.support[n]) {
				fs.spec = n;
				fs.used[n] = true;
				break;
			}
		}

		if(fs.spec) {
			var s = spec[fs.spec];
			fs.api = {
				fullscreenEnabled: true,
				fullscreenElement: (elem) => {
					elem = elem ? elem : d; // Video element required for webkitVideo
					return elem[s[1]];
				},
				requestFullscreen: (elem) => {
					return elem[s[2]](); // Chrome and Opera want parameter (Element.ALLOW_KEYBOARD_INPUT) but Safari fails if flag used.
				},
				exitFullscreen: (elem) => {
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
				fullscreenElement: () => {
					return null;
				},
				requestFullscreen: () => {},
				exitFullscreen: () => {}
			};
			fs.event = {};
		}
	}
}

nativeFeatures.init();

export const escapeHtml = (s) =>  s.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;')

export const qualifyURL = (url) => {
	var el = document.createElement('div');
	el.innerHTML= '<a href="' + escapeHtml(url) + '">x</a>';
	return el.firstChild.href;
}

export const absoluteMediaUrls = (media) => {
	for (var type in media) {
		var url = media[type];

		if(url && formats[type] && url.substr(0, 5) !== "data:") {
			media[type] = qualifyURL(url);
		}
	}

	return media;
}

export const validString = (url) => (url && typeof url === "string"); // Empty strings return false

export const limitValue = (value, min, max) => (value < min) ? min : ((value > max) ? max : value);

export const convertTime = (s) => {
    s = (s && typeof s === "number") ? s : 0;

    const myTime = new Date(s * 1000),
        hour = myTime.getUTCHours(),
        min = timeFormats.showHour ? myTime.getUTCMinutes() : myTime.getUTCMinutes() + hour * 60,
        sec = timeFormats.showMin ? myTime.getUTCSeconds() : myTime.getUTCSeconds() + min * 60,
        strHour = (timeFormats.padHour && hour < 10) ? "0" + hour : hour,
        strMin = (timeFormats.padMin && min < 10) ? "0" + min : min,
        strSec = (timeFormats.padSec && sec < 10) ? "0" + sec : sec;

    let strTime = "";
        strTime += timeFormats.showHour ? strHour + timeFormats.sepHour : "";
        strTime += timeFormats.showMin ? strMin + timeFormats.sepMin : "";
        strTime += timeFormats.showSec ? strSec + timeFormats.sepSec : "";

        return strTime;
};