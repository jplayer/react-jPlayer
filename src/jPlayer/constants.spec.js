import { defaultOptions, statusDefaultValues, actionTypes, loopOptions,
   errors, hints } from '../util/constants';

const jPlayerActionTypes = actionTypes.jPlayer;
const playerIdOne = 'player-1';
const playerIdTwo = 'player-2';

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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      newTime: 30,
      paused: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PLAY,
      time: 30,
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      playHeadPercent: 30,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 30,
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      newTime: 30,
      paused: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PAUSE,
      time: 30,
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      muted: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.MUTE,
      mute: false,
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      remainingDuration: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.DURATION,
      remainingDuration: false,
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      loop: loopOptions.OFF,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.LOOP,
      loop: loopOptions.LOOP,
      uid: playerIdOne,
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
      uid: playerIdOne,
    },
    expected: {
      fullScreen: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen: true,
      uid: playerIdOne,
    },
    expected: {
      fullScreen: true,
    },
  },
];

export const focusData = [
  {
    uid: playerIdTwo,
    state: {
      keyEnabled: true,
    },
    action: {
      type: jPlayerActionTypes.MUTE,
      muted: true,
      uid: playerIdOne,
    },
  },
  {
    uid: playerIdOne,
    state: {
      keyEnabled: true,
    },
    action: {
      type: jPlayerActionTypes.FOCUS,
      uid: playerIdOne,
    },
  },
];

// const globalTest = [
//   {
//     action: {
//       type: jPlayerActionTypes.SET_OPTION,
//       uid: playerIdOne,
//       key: 'autoplay',
//       value: true,
//     },
//     expected: {
//       autoplay: true,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.SET_MEDIA,
//       uid: playerIdOne,
//       media: {
//         sources: {
//           mp3: 'test.mp3',
//         },
//       },
//     },
//     expected: {
//       media: {
//         sources: {
//           mp3: 'test.mp3',
//         },
//       },
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.CLEAR_MEDIA,
//       uid: playerIdOne,
//     },
//     expected: {
//       media: {},
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.PAUSE,
//       uid: playerIdOne,
//       time: 30,
//     },
//     expected: {
//       newTime: 30,
//       paused: true,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.PLAY,
//       uid: playerIdOne,
//     },
//     expected: {
//       newTime: 35,
//       paused: false,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.PLAY_HEAD,
//       uid: playerIdOne,
//       percent: 15,
//     },
//     expected: {
//       playHeadPercent: 15,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.VOLUME,
//       uid: playerIdOne,
//       volume: 0.75,
//     },
//     expected: {
//       volume: 0.75,
//       muted: false,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.MUTE,
//       uid: playerIdOne,
//       mute: true,
//     },
//     expected: {
//       muted: true,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.DURATION,
//       uid: playerIdOne,
//       remainingDuration: false,
//     },
//     expected: {
//       remainingDuration: true,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.PLAYBACK_RATE,
//       uid: playerIdOne,
//       playbackRate: 2.5,
//     },
//     expected: {
//       playbackRate: 2.5,
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.LOOP,
//       uid: playerIdOne,
//       loop: 'loop',
//     },
//     expected: {
//       loop: 'loop',
//     },
//   },
//   {
//     action: {
//       type: jPlayerActionTypes.FULL_SCREEN,
//       uid: playerIdOne,
//       fullScreen: true,
//     },
//     expected: {
//       fullScreen: true,
//     },
//   },
// ];
