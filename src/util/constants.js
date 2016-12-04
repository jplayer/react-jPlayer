import {uaBrowser, uaPlatform, getDocMode} from "./index";

export const actionTypes = {
    UPDATE_OPTION: "UPDATE_OPTION",
    ADD_CLASS: "ADD_CLASS",
    REMOVE_CLASS: "REMOVE_CLASS"
}; 

export const keys = {
    VOLUME_BAR_CLASS: "volumeBarClass",
	VOLUME_BAR_VALUE_CLASS: "volumeBarValueClass",
	VOLUME_MAX_CLASS: "volumeMaxClass",
	PLAYBACK_RATE_BAR_CLASS: "playbackRateBarClass",
	PLAYBACK_RATE_BAR_VALUE_CLASS: "playbackRateBarValueClass",
	SEEK_BAR_CLASS: "seekBarClass",
	NO_SOLUTION_CLASS: "noSolutionClass",
	POSTER_CLASS: "posterClass",
	VIDEO_CLASS: "videoClass",
	VIDEO_PLAY_CLASS: "videoPlayClass",
	PLAY_CLASS: "playClass",
	PAUSE_CLASS: "pauseClass",
	REPEAT_CLASS: "repeatClass",
	FULL_SCREEN_CLASS: "fullScreenClass",
    STATE_CLASS: "stateClass"
};

export const classNames = {
	SEEKING: "jp-seeking-bg",
	MUTE: "jp-mute",
	VOLUME_BAR: "jp-volume-bar",
	VOLUME_BAR_VALUE: "jp-volume-bar-value",
	VOLUME_MAX: "jp-volume-max",
	PLAYBACK_RATE_BAR: "jp-playback-rate-bar",
	PLAYBACK_RATE_BAR_VALUE: "jp-playback-rate-bar-value",
	SEEK_BAR: "jp-seek-bar",
	NO_SOLUTION: "jp-no-solution",
	PLAY: "jp-play",
	PAUSE: "jp-pause",
	REPEAT: "jp-repeat",
	FULL_SCREEN: "jp-full-screen",
	TITLE: "jp-title",
	CURRENT_TIME: "jp-current-time",
	DURATION: "jp-duration",
    HIDDEN: "jp-hidden",
    states: {
        PLAYING: "jp-state-playing",
        SEEKING: "jp-state-seeking",
        MUTED: "jp-state-muted",
        LOOPED: "jp-state-looped",
        FULL_SCREEN: "jp-state-full-screen",
        NO_VOLUME: "jp-state-no-volume"	
    }
};

export const errors = {
    NO_SOLUTION: "e_no_solution",
    NO_SUPPORT: "e_no_support",
    URL: "e_url",
    URL_NOT_SET: "e_url_not_set",
    VERSION: "e_version"
};

export const errorMessages = {
    NO_SOLUTION: "No solution can be found by jPlayer in this browser. HTML can not be used.", // Used in: _init()
    NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.", // Used in: setMedia()
    URL: "Media URL could not be loaded.",
    URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set." // Used in: load(), play(), pause(), stop() and playHead()
};

export const errorHints = {
    NO_SOLUTION: "Review the jPlayer supplied option.",
    NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
    URL: "Check media URL is valid.",
    URL_NOT_SET: "Use setMedia() to set the media URL.",
    VERSION: "Update jPlayer files."
};

export const loopOptions = {
    OFF: "off",
    LOOP: "loop"
}

export const noFullWindows = {
    MSIE: /msie [0-6]\./,
    IPAD: /ipad.*?os [0-4]\./,
    IPHONE: /iphone/,
    IPOD: /ipod/,
    ANDROID_PAD: /android [0-3]\.(?!.*?mobile)/,
    ANDROID_PHONE: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
    BLACKBERRY: /blackberry/,
    WINDOWS_CE: /windows ce/,
    IEMOBILE: /iemobile/,
    WEBOS: /webos/
}

export const noVolumes = {
    IPAD: /ipad/,
    IPHONE: /iphone/,
    IPOD: /ipod/,
    ANDROID_PAD: /android(?!.*?mobile)/,
    ANDROID_PHONE: /android.*?mobile/,
    BLACKBERRY: /blackberry/,
    WINDOWS_CE: /windows ce/,
    IEMOBILE: /iemobile/,
    WEBOS: /webos/,
    PLAYBOOK: /playbook/
}

// 'MPEG-4 support' : canPlayType('video/mp4; codecs="mp4v.20.8"')
export const formats = {
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
}

export const timeFormats = {
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

export const keyIgnoreElementNames = ["A", "INPUT", "TEXTAREA", "SELECT", "BUTTON"];

export const browser = {};
export const platform = {};

const browserMatch = uaBrowser(navigator.userAgent);
const platformMatch = uaPlatform(navigator.userAgent);

if (browserMatch.browser) {
	browser[browserMatch.browser] = true;
	browser.version = browserMatch.version;
}

if (platformMatch.platform) {
	platform[platformMatch.platform] = true;
	platform.mobile = !platformMatch.tablet;
	platform.tablet = !!platformMatch.tablet;
}

browser.documentMode = getDocMode();