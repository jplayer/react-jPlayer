import { defaultOptions, statusDefaultValues, actionTypes, loopOptions,
  errors, hints } from '../util/constants';

const jPlayerActionTypes = actionTypes.jPlayer;
const jPlayerOneId = 'jPlayer-1';
const jPlayerTwoId = 'jPlayer-2';

export const clearMediaData = [
  {
    state: {
      media: {
        sources: {
          mp3: 'test.mp3',
          title: 'test',
          artist: 'test-artist',
        },
      },
    },
    action: {
      type: jPlayerActionTypes.CLEAR_MEDIA,
      uid: jPlayerOneId,
    },
    expected: {
      ...statusDefaultValues,
      media: defaultOptions.media,
    },
  },
];

export const setMediaData = [
  {
    action: {
      type: jPlayerActionTypes.SET_MEDIA,
      uid: jPlayerOneId,
      media: {
        sources: {
          mp3: 'test.mp3',
          oga: 'test.ogg',
        },
      },
    },
    expected: {
      mediaSettings: {
        video: false,
        foundSupported: true,
        formats: [
          {
            supplied: 'mp3',
            supported: 'probably',
          },
          {
            supplied: 'oga',
            supported: 'probably',
          },
        ],
      },
      src: 'test.mp3',
      paused: true,
      media: {
        ...{ ...defaultOptions.media, ...{ sources: { mp3: 'test.mp3', oga: 'test.ogg' } } },
      },
    },
  },
  {
    action: {
      type: jPlayerActionTypes.SET_MEDIA,
      uid: jPlayerOneId,
      media: {
        sources: {
          test: 'test.mp3',
        },
      },
    },
    expected: {
      error: {
        context: '{ media.sources: \'test\' }',
        hint: hints.FORMAT_NO_SUPPORT,
        message: errors.FORMAT_NO_SUPPORT,
      },
    },
  },
];

export const playData = [
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY,
      time: 30,
      uid: jPlayerOneId,
    },
    expected: {
      newTime: 30,
      paused: false,
    },
  },
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY,
      time: NaN,
      uid: jPlayerOneId,
    },
    expected: {
      newTime: null,
      paused: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PLAY,
      time: 30,
      uid: jPlayerOneId,
    },
    expected: {
      error: {
        context: 'play',
        hint: hints.URL_NOT_SET,
        message: errors.URL_NOT_SET,
      },
    },
  },
];

export const playHeadData = [
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 300,
      uid: jPlayerOneId,
    },
    expected: {
      playHeadPercent: 100,
    },
  },
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: -100,
      uid: jPlayerOneId,
    },
    expected: {
      playHeadPercent: 0,
    },
  },
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 30,
      uid: jPlayerOneId,
    },
    expected: {
      playHeadPercent: 30,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 30,
      uid: jPlayerOneId,
    },
    expected: {
      error: {
        context: 'setPlayHead',
        hint: hints.URL_NOT_SET,
        message: errors.URL_NOT_SET,
      },
    },
  },
];

export const pauseData = [
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PAUSE,
      time: 30,
      uid: jPlayerOneId,
    },
    expected: {
      newTime: 30,
      paused: true,
    },
  },
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PAUSE,
      time: NaN,
      uid: jPlayerOneId,
    },
    expected: {
      newTime: null,
      paused: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PAUSE,
      time: 30,
      uid: jPlayerOneId,
    },
    expected: {
      error: {
        context: 'pause',
        hint: hints.URL_NOT_SET,
        message: errors.URL_NOT_SET,
      },
    },
  },
];

export const volumeData = [
  {
    action: {
      type: jPlayerActionTypes.VOLUME,
      volume: 30,
      uid: jPlayerOneId,
    },
    expected: {
      volume: 1,
      muted: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.VOLUME,
      volume: -30,
      uid: jPlayerOneId,
    },
    expected: {
      volume: 0,
      muted: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.VOLUME,
      volume: 0.3,
      uid: jPlayerOneId,
    },
    expected: {
      volume: 0.3,
      muted: false,
    },
  },
];

export const muteData = [
  {
    action: {
      type: jPlayerActionTypes.MUTE,
      mute: true,
      uid: jPlayerOneId,
    },
    expected: {
      muted: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.MUTE,
      mute: false,
      uid: jPlayerOneId,
    },
    expected: {
      muted: false,
    },
  },
];

export const durationData = [
  {
    action: {
      type: jPlayerActionTypes.DURATION,
      remainingDuration: true,
      uid: jPlayerOneId,
    },
    expected: {
      remainingDuration: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.DURATION,
      remainingDuration: false,
      uid: jPlayerOneId,
    },
    expected: {
      remainingDuration: true,
    },
  },
];

export const playbackRateData = [
  {
    state: {
      maxPlaybackRate: defaultOptions.maxPlaybackRate,
    },
    action: {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate: 30,
      uid: jPlayerOneId,
    },
    expected: {
      playbackRate: defaultOptions.maxPlaybackRate,
    },
  },
  {
    state: {
      minPlaybackRate: defaultOptions.minPlaybackRate,
    },
    action: {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate: -30,
      uid: jPlayerOneId,
    },
    expected: {
      playbackRate: defaultOptions.minPlaybackRate,
    },
  },
  {
    state: {
      minPlaybackRate: defaultOptions.minPlaybackRate,
      maxPlaybackRate: defaultOptions.maxPlaybackRate,
    },
    action: {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate: 1.3,
      uid: jPlayerOneId,
    },
    expected: {
      playbackRate: 1.3,
    },
  },
];

export const loopData = [
  {
    action: {
      type: jPlayerActionTypes.LOOP,
      loop: loopOptions.OFF,
      uid: jPlayerOneId,
    },
    expected: {
      loop: loopOptions.OFF,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.LOOP,
      loop: loopOptions.LOOP,
      uid: jPlayerOneId,
    },
    expected: {
      loop: loopOptions.LOOP,
    },
  },
];

export const fullScreenData = [
  {
    action: {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen: false,
      uid: jPlayerOneId,
    },
    expected: {
      fullScreen: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen: true,
      uid: jPlayerOneId,
    },
    expected: {
      fullScreen: true,
    },
  },
];

export const focusData = [
  {
    uid: jPlayerTwoId,
    state: {
      keyEnabled: true,
    },
    action: {
      type: jPlayerActionTypes.MUTE,
      mute: true,
      uid: jPlayerOneId,
    },
  },
  {
    uid: jPlayerOneId,
    state: {
      keyEnabled: true,
    },
    action: {
      type: jPlayerActionTypes.FOCUS,
      uid: jPlayerOneId,
    },
  },
];

export const globalData = {
  clearMediaData,
  setMediaData,
  playData,
  playHeadData,
  pauseData,
  volumeData,
  durationData,
  playbackRateData,
  loopData,
  fullScreenData,
};
