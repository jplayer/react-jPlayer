import { defaultOptions, defaultStatus, actionNames,
  errors, hints } from '../../util/constants';

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
      type: actionNames.CLEAR_MEDIA,
      id: jPlayerOneId,
    },
    expected: {
      ...defaultStatus,
      media: defaultOptions.media,
    },
  },
];

export const setMediaData = [
  {
    action: {
      type: actionNames.SET_MEDIA,
      id: jPlayerOneId,
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
        ...defaultOptions.media,
        id: 'testId',
        sources: {
          mp3: 'test.mp3',
          oga: 'test.ogg',
        },
      },
    },
  },
  {
    action: {
      type: actionNames.SET_MEDIA,
      id: jPlayerOneId,
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
      type: actionNames.PLAY,
      time: 30,
      id: jPlayerOneId,
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
      type: actionNames.PLAY,
      time: NaN,
      id: jPlayerOneId,
    },
    expected: {
      newTime: null,
      paused: false,
    },
  },
  {
    action: {
      type: actionNames.PLAY,
      time: 30,
      id: jPlayerOneId,
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
      type: actionNames.PLAY_HEAD,
      percent: 300,
      id: jPlayerOneId,
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
      type: actionNames.PLAY_HEAD,
      percent: -100,
      id: jPlayerOneId,
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
      type: actionNames.PLAY_HEAD,
      percent: 30,
      id: jPlayerOneId,
    },
    expected: {
      playHeadPercent: 30,
    },
  },
  {
    action: {
      type: actionNames.PLAY_HEAD,
      percent: 30,
      id: jPlayerOneId,
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
      type: actionNames.PAUSE,
      time: 30,
      id: jPlayerOneId,
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
      type: actionNames.PAUSE,
      time: NaN,
      id: jPlayerOneId,
    },
    expected: {
      newTime: null,
      paused: true,
    },
  },
  {
    action: {
      type: actionNames.PAUSE,
      time: 30,
      id: jPlayerOneId,
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
      type: actionNames.VOLUME,
      volume: 30,
      id: jPlayerOneId,
    },
    expected: {
      volume: 1,
      muted: false,
    },
  },
  {
    action: {
      type: actionNames.VOLUME,
      volume: -30,
      id: jPlayerOneId,
    },
    expected: {
      volume: 0,
      muted: true,
    },
  },
  {
    action: {
      type: actionNames.VOLUME,
      volume: 0.3,
      id: jPlayerOneId,
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
      type: actionNames.MUTE,
      mute: true,
      id: jPlayerOneId,
    },
    expected: {
      muted: true,
    },
  },
  {
    action: {
      type: actionNames.MUTE,
      mute: false,
      id: jPlayerOneId,
    },
    expected: {
      muted: false,
    },
  },
];

export const focusData = [
  {
    id: jPlayerTwoId,
    state: {
      keyEnabled: true,
    },
    action: {
      type: actionNames.MUTE,
      mute: true,
      id: jPlayerOneId,
    },
  },
  {
    id: jPlayerOneId,
    state: {
      keyEnabled: true,
    },
    action: {
      type: actionNames.FOCUS,
      id: jPlayerOneId,
    },
  },
];
