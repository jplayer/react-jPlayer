import expect, { spyOn } from 'expect';
import merge from 'lodash.merge';

import reducer from './reducer';
import * as reducerData from './constants.spec';
import { actionTypes, defaultOptions, formats } from '../util/constants';
import { getJPlayerState } from '../util/common.spec';

const jPlayerActionTypes = actionTypes.jPlayer;
const playerIdOne = 'player-1';
const playerIdTwo = 'player-2';
const playerIdThree = 'player-3';

export const setup = (mediaType) => {
  const media = document.createElement(mediaType);

  spyOn(document, 'createElement').andReturn(media);
  spyOn(media, 'canPlayType').andReturn('probably');
};

export const tearDown = () => {
  expect.restoreSpies();
};

describe('jPlayer reducer', () => {
  let state;

  beforeEach(() => {
    state = getJPlayerState(1).jPlayers;
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toBe(state);
  });

  it('should handle SET_OPTION', () => {
    const jPlayer = reducer(state, {
      type: jPlayerActionTypes.SET_OPTION,
      uid: playerIdOne,
      key: 'preload',
      value: 'test',
    })[playerIdOne];

    expect(jPlayer).toEqual({
      preload: 'test',
    });
  });

  it('should handle CLEAR_MEDIA', () => {
    reducerData.clearMediaData.forEach((test) => {
      const newState = {
        ...state,
        [playerIdOne]: {
          ...state[playerIdOne],
          ...test.state,
        },
      };

      const jPlayer = reducer(newState, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('SET_MEDIA should handle all possible formats', () => {
    Object.keys(formats).forEach((key) => {
      setup(formats[key].MEDIA);

      const jPlayer = reducer(state, {
        type: jPlayerActionTypes.SET_MEDIA,
        uid: playerIdOne,
        media: {
          sources: {
            [key]: `test.${key}`,
          },
        },
      })[playerIdOne];

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

      tearDown();
    });
  });

  it('should handle SET_MEDIA', () => {
    setup('audio');
    reducerData.fullScreenData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
    tearDown();
  });

  it('should handle PLAY', () => {
    reducerData.playData.forEach((test) => {
      const newState = {
        ...state,
        [playerIdOne]: {
          ...state[playerIdOne],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PAUSE', () => {
    reducerData.pauseData.forEach((test) => {
      const newState = {
        ...state,
        [playerIdOne]: {
          ...state[playerIdOne],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAY_HEAD', () => {
    reducerData.playHeadData.forEach((test) => {
      const newState = {
        ...state,
        [playerIdOne]: {
          ...state[playerIdOne],
          ...test.state,
        },
      };
      const jPlayer = reducer(newState, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle VOLUME', () => {
    reducerData.volumeData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle MUTE', () => {
    reducerData.muteData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle DURATION', () => {
    reducerData.durationData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAYBACK_RATE', () => {
    reducerData.playbackRateData.forEach((test) => {
      const newState = {
        ...state,
        [playerIdOne]: {
          ...state[playerIdOne],
          ...test.state,
        },
      };

      const jPlayer = reducer(newState, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle LOOP', () => {
    reducerData.loopData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle FULL_SCREEN', () => {
    reducerData.fullScreenData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle FOCUS', () => {
    state = getJPlayerState(3).jPlayers;

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
    state[playerIdOne] = merge({}, defaultOptions);

    Object.keys(jPlayerActionTypes).forEach((type) => {
      if (type !== jPlayerActionTypes.FOCUS) {
        const jPlayers = reducer(state, {
          type,
          uid: playerIdOne,
        });

        Object.keys(jPlayers).forEach((key) => {
          if (key !== playerIdOne) {
            expect(jPlayers[key].focus).toBeFalsy();
          } else {
            expect(jPlayers[key].focus).toBeTruthy();
          }
        });
      }
    });
  });

  it('should set the global option for every action that requires it', () => {
    // eslint-disable-next-line no-unused-vars
    const { focusData, ...globalActions } = reducerData;

    setup('audio');

    state = getJPlayerState(3).jPlayers;
    state[playerIdOne].global = Object.keys(jPlayerActionTypes);
    state[playerIdTwo].global = [jPlayerActionTypes.MUTE, jPlayerActionTypes.VOLUME];
    state[playerIdThree].global = Object.keys(jPlayerActionTypes);

    Object.values(globalActions).forEach((dataArray) => {
      dataArray.forEach((data) => {
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
            Expected ${JSON.stringify(jPlayers[key])} to exclude ${JSON.stringify(data.expected)}`);
        });

        jPlayersWithGlobalOption.forEach((key) => {
          expect(jPlayers[key]).toInclude(data.expected, null,
            `Action ${data.action.type}: 
            Expected ${JSON.stringify(jPlayers[key])} to include ${JSON.stringify(data.expected)}`);
        });
      });
    });
    tearDown();
  });
});
