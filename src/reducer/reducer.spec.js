import expect, { createSpy, spyOn } from 'expect';

import reducer from './reducer';
import * as reducerData from '../util/mockData/mockReducerData';
import { actionNames, defaultOptions, formats } from '../util/constants';
import { getDefaultJPlayers, getJPlayers } from '../util/common.spec';

const jPlayerOneId = 'jPlayer-1';

const mockMedia = (mediaType) => {
  const media = document.createElement(mediaType);

  spyOn(document, 'createElement').andReturn(media);
  spyOn(media, 'canPlayType').andReturn('probably');
};

describe('jPlayer reducer', () => {
  let state;

  beforeEach(() => {
    state = getDefaultJPlayers().jPlayers;
    reducer.__Rewire__('shortid', {
      generate: () => 'testId',
    });
  });

  afterEach(() => {
    expect.restoreSpies();
    reducer.__ResetDependency__('shortid');
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toEqual(state);
  });

  it('should return empty state if the state is not specified', () => {
    expect(reducer(undefined, '@@jPlayer-test')).toEqual({});
  });

  it('should handle generic SET_OPTION value', () => {
    const jPlayer = reducer(state, {
      type: actionNames.SET_OPTION,
      id: jPlayerOneId,
      key: 'preload',
      value: 'test',
    })[jPlayerOneId];

    expect(jPlayer).toEqual({
      preload: 'test',
    });
  });

  it('setOption handles media', () => {
    const setMediaSpy = createSpy();

    reducer.__Rewire__('setMedia', (...args) => {
      setMediaSpy(...args);
      return getJPlayers(1);
    });

    const media = {
      sources: {
        mp3: 'test.mp3',
      },
    };

    reducer(state, {
      type: actionNames.SET_OPTION,
      id: jPlayerOneId,
      key: 'media',
      value: media,
    });

    expect(setMediaSpy).toHaveBeenCalledWith(state[jPlayerOneId], { media });
    reducer.__ResetDependency__('setMedia');
  });

  it('setOption handles no media', () => {
    const clearMediaSpy = createSpy();

    reducer.__Rewire__('clearMedia', (...args) => {
      clearMediaSpy(...args);
      return getJPlayers(1);
    });

    const media = {};

    reducer(state, {
      type: actionNames.SET_OPTION,
      id: jPlayerOneId,
      key: 'media',
      value: media,
    });

    expect(clearMediaSpy).toHaveBeenCalledWith(state[jPlayerOneId]);
    reducer.__ResetDependency__('clearMedia');
  });

  it('setOption handles playHeadPercent', () => {
    const percent = 22.3;
    const setPlayHeadSpy = createSpy();

    reducer.__Rewire__('setPlayHead', (...args) => {
      setPlayHeadSpy(...args);
      return getJPlayers(1);
    });

    reducer(state, {
      type: actionNames.SET_OPTION,
      id: jPlayerOneId,
      key: 'playHeadPercent',
      value: percent,
    });

    expect(setPlayHeadSpy).toHaveBeenCalledWith(state[jPlayerOneId], { percent });
    reducer.__ResetDependency__('setPlayHead');
  });

  it('setOption handles volume', () => {
    const volume = 0.23;
    const setVolume = createSpy();

    reducer.__Rewire__('setVolume', (...args) => {
      setVolume(...args);
      return getJPlayers(1);
    });

    reducer(state, {
      type: actionNames.SET_OPTION,
      id: jPlayerOneId,
      key: 'volume',
      value: volume,
    });

    expect(setVolume).toHaveBeenCalledWith(state[jPlayerOneId], { volume });
    reducer.__ResetDependency__('setVolume');
  });

  it('setOption handles muted', () => {
    const mute = true;
    const setMute = createSpy();

    reducer.__Rewire__('setMute', (...args) => {
      setMute(...args);
      return getJPlayers(1);
    });

    reducer(state, {
      type: actionNames.SET_OPTION,
      id: jPlayerOneId,
      key: 'muted',
      value: mute,
    });

    expect(setMute).toHaveBeenCalledWith(state[jPlayerOneId], { mute });
    reducer.__ResetDependency__('setMute');
  });

  it('SET_MEDIA should handle all possible formats', () => {
    Object.keys(formats).forEach((key) => {
      mockMedia(formats[key].MEDIA);

      const jPlayer = reducer(state, {
        type: actionNames.SET_MEDIA,
        id: jPlayerOneId,
        media: {
          sources: {
            [key]: `test.${key}`,
          },
        },
      })[jPlayerOneId];

      expect(jPlayer).toContain({
        mediaSettings: {
          video: formats[key].MEDIA === 'video',
          formats: [
            {
              supplied: key,
              supported: 'probably',
            },
          ],
        },
        src: `test.${key}`,
        paused: true,
        media: {
          ...{ ...defaultOptions.media, ...{ sources: { [key]: `test.${key}` } } },
        },
      });
    });
  });

  it('should handle SET_MEDIA', () => {
    mockMedia('audio');
    reducerData.setMediaData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerOneId];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAY', () => {
    reducerData.playData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerOneId]: {
          ...state[jPlayerOneId],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[jPlayerOneId];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PAUSE', () => {
    reducerData.pauseData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerOneId]: {
          ...state[jPlayerOneId],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[jPlayerOneId];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAY_HEAD', () => {
    reducerData.playHeadData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerOneId]: {
          ...state[jPlayerOneId],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[jPlayerOneId];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle VOLUME', () => {
    reducerData.volumeData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerOneId];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle MUTE', () => {
    reducerData.muteData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerOneId];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle FOCUS', () => {
    state = getDefaultJPlayers(3).jPlayers;

    reducerData.focusData.forEach((test) => {
      state[test.id] = test.state;

      const jPlayers = reducer(state, test.action);

      Object.keys(jPlayers).forEach((key) => {
        if (test.id !== key) {
          expect(jPlayers[key].focused).toBeFalsy();
        } else {
          expect(jPlayers[key].focused).toBeTruthy();
        }
      });
    });
  });
});
