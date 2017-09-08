import expect from 'expect';

import initializeOptions from '../initializeOptions/initializeOptions';
import reducer from './reducer';
import { actionNames, defaultOptions, defaultStatus } from '../util/constants';

const mockMedia = (mediaType) => {
  const media = document.createElement(mediaType);

  expect.spyOn(document, 'createElement').andReturn(media);
  expect.spyOn(media, 'canPlayType').andReturn('probably');
};
const id = 'TestPlayer';

describe('reducer', () => {
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

  it('does focus on current player if keyEnabled true', () => {
    state[id].keyEnabled = true;
    state.SecondPlayer = {
      focused: true,
    };

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'preload',
      value: 'auto',
    });

    expect(newState[id].focused).toBe(true);
    expect(newState.SecondPlayer.focused).toNotBe(true);
  });

  it('focuses on first keyEnabled player if current keyEnabled is false', () => {
    state[id].keyEnabled = false;
    state.SecondPlayer = {
      keyEnabled: true,
    };

    const newState = reducer(state, {
      type: actionNames.SET_OPTION,
      id,
      key: 'preload',
      value: 'auto',
    });

    expect(newState[id].focused).toNotBe(true);
    expect(newState.SecondPlayer.focused).toBe(true);
  });

  describe('SET_OPTION', () => {
    it('should handle generic value', () => {
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

    it('should handle media', () => {
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

    it('should handle no media', () => {
      const media = {};

      const newState = reducer(state, {
        type: actionNames.SET_OPTION,
        id,
        key: 'media',
        value: media,
      });

      expect(newState[id]).toEqual({
        ...defaultStatus,
        media: defaultOptions.media,
      });
    });

    it('should handle playHeadPercent', () => {
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

    it('should handle volume', () => {
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

    it('should handle muted', () => {
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
  });

  describe('SET_MEDIA', () => {
    it('should handle media', () => {
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

    it('should handle non supported format', () => {
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
  });

  describe('CLEAR_MEDIA', () => {
    it('should reset the status', () => {
      const src = 'test.mp3';
      state[id].src = src;

      const newState = reducer(state, {
        type: actionNames.CLEAR_MEDIA,
        id,
      });

      expect(newState[id]).toEqual({
        ...defaultStatus,
        media: defaultOptions.media,
      });
    });
  });

  describe('PLAY', () => {
    it('should handle with src and no custom time', () => {
      const src = 'test.mp3';
      state[id].src = src;

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
      const time = 23;
      const src = 'test.mp3';
      state[id].src = src;

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
      state[id].src = src;

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
      const time = 23;
      const src = 'test.mp3';
      state[id].src = src;

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
      state[id].src = src;

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

  describe('MUTE', () => {
    it('should set muted', () => {
      const newState = reducer(state, {
        type: actionNames.MUTE,
        id,
        mute: true,
      });

      expect(newState[id]).toEqual({
        muted: true,
      });
    });
  });

  describe('FOCUS', () => {
    it('does not focus if keyEnabled not true', () => {
      const newState = reducer(state, {
        type: actionNames.FOCUS,
        id,
      });

      expect(newState[id]).toEqual({});
    });

    it('other player keeps focused if keyEnabled not true', () => {
      state.SecondPlayer = {
        keyEnabled: true,
        focused: true,
      };

      const newState = reducer(state, {
        type: actionNames.FOCUS,
        id,
      });

      expect(newState.SecondPlayer).toEqual({
        keyEnabled: true,
        focused: true,
      });
    });

    it('does focus if keyEnabled true', () => {
      state[id].keyEnabled = true;

      const newState = reducer(state, {
        type: actionNames.FOCUS,
        id,
      });

      expect(newState[id]).toEqual({
        focused: true,
        keyEnabled: true,
      });
    });

    it('sets all other jPlayers focused to false if keyEnabled true', () => {
      state.SecondPlayer = {
        keyEnabled: true,
      };
      state[id].keyEnabled = true;

      const newState = reducer(state, {
        type: actionNames.FOCUS,
        id,
      });

      expect(newState.SecondPlayer).toEqual({
        keyEnabled: true,
        focused: false,
      });
    });
  });
});
