import expect, { spyOn } from 'expect';

import reducer from './reducer';
import * as reducerData from './reducerData.spec';
import { actionNames, defaultOptions, formats } from '../util/constants';
import { getDefaultJPlayers } from '../util/common.spec';

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
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toEqual(state);
  });

  it('should return empty state if the state is not specified', () => {
    expect(reducer(undefined, '@@jPlayer-test')).toEqual({});
  });

  it('should handle SET_OPTION', () => {
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

  it('should handle CLEAR_MEDIA', () => {
    reducerData.clearMediaData.forEach((test) => {
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

  it('should focus on the jPlayer for every action apart from focus', () => {
    state = getDefaultJPlayers(2, true).jPlayers;

    Object.keys(actionNames).forEach((type) => {
      if (type !== actionNames.FOCUS) {
        const jPlayers = reducer(state, {
          type,
          id: jPlayerOneId,
        });

        Object.keys(jPlayers).forEach((key) => {
          if (key !== jPlayerOneId) {
            expect(jPlayers[key].focused).toBeFalsy();
          } else {
            expect(jPlayers[key].focused).toBeTruthy();
          }
        });
      }
    });
  });

  afterEach(() => {
    expect.restoreSpies();
  });
});
