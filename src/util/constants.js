export const actionNames = {
  SET_OPTION: 'SET_OPTION',
  SET_MEDIA: 'SET_MEDIA',
  CLEAR_MEDIA: 'CLEAR_MEDIA',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  PLAY_HEAD: 'PLAY_HEAD',
  VOLUME: 'VOLUME',
  MUTE: 'MUTE',
  FOCUS: 'FOCUS',
};

export const errors = {
  FORMAT_NO_SUPPORT: 'It is not possible to play any media format ' +
  'provided on this browser using your current defaultOptions.',
  URL_NO_SUPPORT: 'The media URL could not be loaded.',
  URL_NOT_SET: 'Attempted to issue media playback commands while no media url is set.',
  INVALID_GLOBAL_METHOD: 'You passed an invalid jPlayer method to the global array',
};

export const hints = {
  FORMAT_NO_SUPPORT: 'The browser may not support these file types.',
  URL_NO_SUPPORT: 'Check the media URL is valid.',
  URL_NOT_SET: 'Pass the media through the defaultOptions or use the setMedia()' +
  'action that is passed into the component props.',
  INVALID_GLOBAL_METHOD: 'Remove the invalid method from the "global" option',
};

export const classes = {
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
    NO_VOLUME_SUPPORT: 'jp-state-no-volume-support',
  },
};

export const formats = {
  mp3: {
    CODEC: 'audio/mpeg',
    MEDIA: 'audio',
  },
  m4a: { // AAC / MP4
    CODEC: 'audio/mp4; codecs="mp4a.40.2"',
    MEDIA: 'audio',
  },
  m3u8a: { // AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
    MEDIA: 'audio',
  },
  m3ua: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'audio',
  },
  oga: { // OGG
    CODEC: 'audio/ogg; codecs="vorbis, opus"',
    MEDIA: 'audio',
  },
  flac: { // FLAC
    CODEC: 'audio/x-flac',
    MEDIA: 'audio',
  },
  wav: { // PCM
    CODEC: 'audio/wav; codecs="1"',
    MEDIA: 'audio',
  },
  webma: { // WEBM
    CODEC: 'audio/webm; codecs="vorbis"',
    MEDIA: 'audio',
  },
  fla: { // FLV / F4A
    CODEC: 'audio/x-flv',
    MEDIA: 'audio',
  },
  rtmpa: { // RTMP AUDIO
    CODEC: 'audio/rtmp; codecs="rtmp"',
    MEDIA: 'audio',
  },
  m4v: { // H.264 / MP4
    CODEC: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video',
  },
  m3u8v: { // H.264 / AAC / MP4 / Apple HLS
    CODEC: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
    MEDIA: 'video',
  },
  m3uv: { // M3U
    CODEC: 'audio/mpegurl',
    MEDIA: 'video',
  },
  ogv: { // OGG
    CODEC: 'video/ogg; codecs="theora, vorbis"',
    MEDIA: 'video',
  },
  webmv: { // WEBM
    CODEC: 'video/webm; codecs="vorbis, vp8"',
    MEDIA: 'video',
  },
  flv: { // FLV / F4V
    CODEC: 'video/x-flv',
    MEDIA: 'video',
  },
  rtmpv: { // RTMP VIDEO
    CODEC: 'video/rtmp; codecs="rtmp"',
    MEDIA: 'video',
  },
};

export const internalStatus = {
  newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
  guiFadeOut: false,
};

export const defaultStatus = {
  mediaSettings: {
    require: false,
    video: false,
    foundSupported: false,
    formats: [],
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
  focused: false,
};

export const defaultOptions = {
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
    artist: '',
    poster: '',
    free: false,
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
    sepSec: '',
  },
};

export const keyIgnoreElementNames = ['A', 'INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
