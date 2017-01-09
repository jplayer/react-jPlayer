import { connectWithId } from '../util/index';
import JPlayer from '../components/jPlayer';

const mapStateToProps = ({ jPlayers }, { id, children, ...attributes }) => ({
  timeFormats: jPlayers[id].timeFormats,
  mediaSettings: jPlayers[id].mediaSettings,
  media: jPlayers[id].media,
  supplied: jPlayers[id].supplied,
  error: jPlayers[id].error,
  paused: jPlayers[id].paused,
  fullScreen: jPlayers[id].fullScreen,
  muted: jPlayers[id].muted,
  volume: jPlayers[id].volume,
  seeking: jPlayers[id].seeking,
  loop: jPlayers[id].loop,
  shuffled: jPlayers[id].shuffled,
  keyEnabled: jPlayers[id].keyEnabled,
  id,
  children,
  attributes,
});

export default connectWithId(mapStateToProps)(JPlayer);

export const defaultValues = {
  mediaSettings: {
    video: false,
    formats: [], // Order defines priority.
    available: '',
    playableFormat: {},
  },
};

export const statusDefaultValues = {
  paused: true,
  format: {},
  formatType: '',
  waitForPlay: true, // Same as waitForLoad except in case where preloading.
  waitForLoad: true,
  srcSet: false,
  video: false, // True if playing a video
  seekPercent: 0,
  currentPercentRelative: 0,
  currentPercentAbsolute: 0,
  newTime: 0,
  currentTime: 0,
  duration: 0,
  remaining: 0,
  videoWidth: 0, // Intrinsic width of the video in pixels.
  videoHeight: 0, // Intrinsic height of the video in pixels.
  readyState: 0,
  networkState: 0,
  ended: 0,
};

export const jPlayerDefaultOptions = {
  preload: 'metadata', // HTML5 Spec values: none, metadata, auto.
  globalPause: true,
  captureDuration: true, // When true, clicks on the duration are captured and no longer propagate up the DOM.
  minPlaybackRate: 0.5,
  maxPlaybackRate: 4,
  supplied: ['mp3'], // Defines which formats jPlayer will try and support and the priority by the order. 1st is highest,
  loopOptions: ['loop-playlist'],
  playbackRate: 1.0,
  defaultPlaybackRate: 1.0,
  bufferColour: '#dddddd', // Canvas fillStyle property Colour, gradient or pattern (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  volume: 0.8, // The volume. Number 0 to 1
  barDrag: true,
  media: {},
  global: [],
};
