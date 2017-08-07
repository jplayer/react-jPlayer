import expect, { spyOn } from 'expect';

import initializeOptions from '../initializeOptions/initializeOptions';
import reducer from './reducer';
import { actionNames, defaultOptions, defaultStatus } from '../util/constants';

const mockMedia = (mediaType) => {
  const media = document.createElement(mediaType);

  spyOn(document, 'createElement').andReturn(media);
  spyOn(media, 'canPlayType').andReturn('probably');
};
const id = 'TestPlayer';

describe('jPlayer reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      [id]: {},
    };
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toEqual(state);
  });

  it('should return initial state if the state is not specified', () => {
    const jPlayerOptions = {
      id,
    };
    initializeOptions(jPlayerOptions);
    expect(reducer(undefined, '@@jPlayer-test')).toEqual({
      [id]: {
        ...defaultStatus,
        ...defaultOptions,
        ...jPlayerOptions,
      },
    });
  });

  it('should handle generic SET_OPTION value', () => {
    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'preload',
      value: 'auto',
    });

    expect(newState[id]).toEqual({
      preload: 'auto',
    });
  });

  it('setOption handles media', () => {
    mockMedia('audio');
    const src = 'test.mp3';

    const media = {
      sources: {
        mp3: src,
      },
    };

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'media',
      value: media,
    });

    expect(newState[id].media).toBe(media);
  });

  it('setOption handles no media', () => {
    const media = {};

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'media',
      value: media,
    });

    expect(newState[id]).toEqual({
      ...defaultStatus,
    });
  });

  it('setOption handles playHeadPercent', () => {
    const percent = 22.3;
    const src = 'test.mp3';

    state[id].src = src;

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'playHeadPercent',
      value: percent,
    });

    expect(newState[id]).toEqual({
      playHeadPercent: percent,
      src,
    });
  });

  it('setOption handles volume', () => {
    const volume = 0.23;

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'volume',
      value: volume,
    });

    expect(newState[id]).toEqual({
      volume,
      muted: false,
    });
  });

  it('setOption handles muted', () => {
    const mute = true;

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'muted',
      value: mute,
    });

    expect(newState[id]).toEqual({
      muted: mute,
    });
  });

  it('should handle SET_MEDIA', () => {
    mockMedia('audio');
    const src = 'test.mp3';
    const media = {
      sources: {
        mp3: src,
      },
    };

    const newState = reducer(state, {
      type: actionNames.SET_MEDIA,
      id,
      media,
    });

    expect(newState[id]).toEqual({
      ...defaultStatus,
      mediaSettings: {
        formats: [{
          supplied: 'mp3',
          supported: 'probably',
        }],
        video: false,
        nonSupported: false,
      },
      media,
      video: false,
      src,
      error: undefined,
    });
  });

  it('SET_MEDIA should handle non supported format', () => {
    mockMedia('audio');
    const media = {
      sources: {
        xxx: 'test.xxx',
      },
    };

    const newState = reducer(state, {
      type: actionNames.SET_MEDIA,
      id,
      media,
    });

    expect(newState[id].error).toExist();
  });

  describe('PLAY', () => {
    it('should handle with src and no custom time', () => {
      const src = 'test.mp3';
      state[id].src = 'test.mp3';

      const newState = reducer(state, {
        type: actionNames.PLAY,
        id,
      });

      expect(newState[id]).toEqual({
        paused: false,
        src,
        newTime: null,
      });
    });

    it('should handle with src and custom time', () => {
      const src = 'test.mp3';
      const time = 23;
      state[id].src = 'test.mp3';

      const newState = reducer(state, {
        type: actionNames.PLAY,
        id,
        time,
      });

      expect(newState[id]).toEqual({
        paused: false,
        src,
        newTime: time,
      });
    });

    it('should handle with no src', () => {
      const newState = reducer(state, {
        type: actionNames.PLAY,
        id,
      });

      expect(newState[id].error).toExist();
    });
  });

  describe('PAUSE', () => {
    it('should handle with src and no custom time', () => {
      const src = 'test.mp3';
      state[id].src = 'test.mp3';

      const newState = reducer(state, {
        type: actionNames.PAUSE,
        id,
      });

      expect(newState[id]).toEqual({
        paused: true,
        src,
        newTime: null,
      });
    });

    it('should handle with src and custom time', () => {
      const src = 'test.mp3';
      const time = 23;
      state[id].src = 'test.mp3';

      const newState = reducer(state, {
        type: actionNames.PAUSE,
        id,
        time,
      });

      expect(newState[id]).toEqual({
        paused: true,
        src,
        newTime: time,
      });
    });

    it('should handle PAUSE with no src', () => {
      const newState = reducer(state, {
        type: actionNames.PAUSE,
        id,
      });

      expect(newState[id].error).toExist();
    });
  });

  describe('PLAY_HEAD', () => {
    it('should handle with src', () => {
      const percent = 22;
      const src = 'test.mp3';
      state[id].src = 'test.mp3';

      const newState = reducer(state, {
        type: actionNames.PLAY_HEAD,
        id,
        percent,
      });

      expect(newState[id]).toEqual({
        playHeadPercent: percent,
        src,
      });
    });

    it('should handle with no src', () => {
      const newState = reducer(state, {
        type: actionNames.PLAY_HEAD,
        id,
      });

      expect(newState[id].error).toExist();
    });
  });

  describe('VOLUME', () => {
    it('muted should be true when volume <= 0', () => {
      const newState = reducer(state, {
        type: actionNames.VOLUME,
        id,
        volume: -10,
      });

      expect(newState[id]).toEqual({
        volume: 0,
        muted: true,
      });
    });

    it('muted should be false when volume >= 0', () => {
      const newState = reducer(state, {
        type: actionNames.VOLUME,
        id,
        volume: 10,
      });

      expect(newState[id]).toEqual({
        volume: 1,
        muted: false,
      });
    });
  });

  it('should handle MUTE', () => {
    const newState = reducer(state, {
      type: actionNames.MUTE,
      id,
      mute: true,
    });

    expect(newState[id]).toEqual({
      muted: true,
    });
  });

  // it('should handle MUTE', () => {
  //   reducerData.muteData.forEach((test) => {
  //     const jPlayer = reducer(state, test.action)[jPlayerOneId];

  //     Object.keys(test.expected).forEach((key) => {
  //       expect(jPlayer[key]).toEqual(test.expected[key]);
  //     });
  //   });
  // });

  // it('should handle FOCUS', () => {
  //   state = getDefaultJPlayers(3).jPlayers;

  //   reducerData.focusData.forEach((test) => {
  //     state[test.id] = test.state;

  //     const jPlayers = reducer(state, test.action);

  //     Object.keys(jPlayers).forEach((key) => {
  //       if (test.id !== key) {
  //         expect(jPlayers[key].focused).toBeFalsy();
  //       } else {
  //         expect(jPlayers[key].focused).toBeTruthy();
  //       }
  //     });
  //   });
  // });
});
