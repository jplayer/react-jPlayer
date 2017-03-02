import expect, { spyOn } from 'expect';

import reducer from './reducer';
import * as reducerData from './data.spec';
import { actionTypes, defaultOptions, formats } from '../../util/constants';
import { InvalidGlobalMethodException } from '../../util/index';
import { getDefaultJPlayers } from '../../util/common.spec';

const jPlayerActionTypes = actionTypes.jPlayer;
const jPlayerIds = [
  'jPlayer-1',
  'jPlayer-2',
  'jPlayer-3',
];

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
    expect(reducer(state, '@@jPlayer-test')).toBe(state);
  });

  it('should return empty state if the state is not specified', () => {
    expect(reducer(undefined, '@@jPlayer-test')).toEqual({});
  });

  it('should handle SET_OPTION', () => {
    const jPlayer = reducer(state, {
      type: jPlayerActionTypes.SET_OPTION,
      uid: jPlayerIds[0],
      key: 'preload',
      value: 'test',
    })[jPlayerIds[0]];

    expect(jPlayer).toEqual({
      preload: 'test',
    });
  });

  it('should handle CLEAR_MEDIA', () => {
    reducerData.clearMediaData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerIds[0]]: {
          ...state[jPlayerIds[0]],
          ...test.state,
        },
      };

      const jPlayer = reducer(newState, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('SET_MEDIA should handle all possible formats', () => {
    Object.keys(formats).forEach((key) => {
      mockMedia(formats[key].MEDIA);

      const jPlayer = reducer(state, {
        type: jPlayerActionTypes.SET_MEDIA,
        uid: jPlayerIds[0],
        media: {
          sources: {
            [key]: `test.${key}`,
          },
        },
      })[jPlayerIds[0]];

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
    reducerData.fullScreenData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAY', () => {
    reducerData.playData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerIds[0]]: {
          ...state[jPlayerIds[0]],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PAUSE', () => {
    reducerData.pauseData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerIds[0]]: {
          ...state[jPlayerIds[0]],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAY_HEAD', () => {
    reducerData.playHeadData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerIds[0]]: {
          ...state[jPlayerIds[0]],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle VOLUME', () => {
    reducerData.volumeData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle MUTE', () => {
    reducerData.muteData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle DURATION', () => {
    reducerData.durationData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAYBACK_RATE', () => {
    reducerData.playbackRateData.forEach((test) => {
      const newState = {
        ...state,
        [jPlayerIds[0]]: {
          ...state[jPlayerIds[0]],
          ...test.state,
        },
      };

      const jPlayer = reducer(newState, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle LOOP', () => {
    reducerData.loopData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle FULL_SCREEN', () => {
    reducerData.fullScreenData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[jPlayerIds[0]];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle FOCUS', () => {
    state = getDefaultJPlayers(3).jPlayers;

    reducerData.focusData.forEach((test) => {
      state[test.uid] = test.state;

      const jPlayers = reducer(state, test.action);

      Object.keys(jPlayers).forEach((key) => {
        if (test.uid !== key) {
          expect(jPlayers[key].focus).toBeFalsy();
        } else {
          expect(jPlayers[key].focus).toBeTruthy();
        }
      });
    });
  });

  it('should focus on the jPlayer for every action apart from focus', () => {
    state = getDefaultJPlayers(2, true).jPlayers;

    Object.keys(jPlayerActionTypes).forEach((type) => {
      if (type !== jPlayerActionTypes.FOCUS) {
        const jPlayers = reducer(state, {
          type,
          uid: jPlayerIds[0],
        });

        Object.keys(jPlayers).forEach((key) => {
          if (key !== jPlayerIds[0]) {
            expect(jPlayers[key].focus).toBeFalsy();
          } else {
            expect(jPlayers[key].focus).toBeTruthy();
          }
        });
      }
    });
  });

  it('should return an error when invalid action specified for the global option', () => {
    state = getDefaultJPlayers(2, true).jPlayers;
    const actionType = 'INVALID_ACTION';

    state[jPlayerIds[0]].global = [actionType];

    expect(() => {
      reducer(state, {
        uid: jPlayerIds[1],
        type: jPlayerActionTypes.MUTE,
        muted: true,
      });
    }).toThrow(InvalidGlobalMethodException);
  });

  it('should set the global option for every action that requires it', () => {
    const { ...globalActions } = reducerData;

    mockMedia('audio');

    state = getDefaultJPlayers(3).jPlayers;
    state[jPlayerIds[0]].global = Object.keys(jPlayerActionTypes);
    state[jPlayerIds[1]].global = [jPlayerActionTypes.MUTE, jPlayerActionTypes.VOLUME];
    state[jPlayerIds[2]].global = Object.keys(jPlayerActionTypes);

    Object.keys(globalActions).forEach((globalAction) => {
      const globalActionData = globalActions[globalAction];

      if (Array.isArray(globalActionData) && globalAction !== 'focusData') {
        globalActionData.forEach((data) => {
          const jPlayersWithGlobalOption = Object.keys(state).filter(key => (
            state[key].global.includes(data.action.type)),
          );
          const jPlayersWithoutGlobalOption = Object.keys(state).filter(key => (
            !state[key].global.includes(data.action.type)),
          );
          const newState = { ...state };

          jPlayersWithGlobalOption.forEach((key) => {
            newState[key] = {
              ...newState[key],
              ...data.state,
            };
          });

          const jPlayers = reducer(newState, {
            ...data.action,
          });

          jPlayersWithoutGlobalOption.forEach((key) => {
            expect(jPlayers[key]).toExclude(data.expected, null,
              `Action ${data.action.type}: 
              Expected ${JSON.stringify(jPlayers[key])} to
              exclude ${JSON.stringify(data.expected)}`);
          });

          jPlayersWithGlobalOption.forEach((key) => {
            expect(jPlayers[key]).toInclude(data.expected, null,
              `Action ${data.action.type}: 
              Expected ${JSON.stringify(jPlayers[key])} to
              include ${JSON.stringify(data.expected)}`);
          });
        });
      }
    });
  });

  afterEach(() => {
    expect.restoreSpies();
  });
});
