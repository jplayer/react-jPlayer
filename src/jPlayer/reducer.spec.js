import expect, { spyOn } from 'expect';
import merge from 'lodash.merge';

import reducer from './reducer';
import { setMediaData, clearMediaData, pauseData, playData, playHeadData, volumeData, muteData,
  durationData, playbackRateData, loopData, fullScreenData, focusData } from './constants.spec';
import { actionTypes, statusDefaultValues, defaultOptions, errors, hints,
  formats } from '../util/constants';
import { getJPlayerState } from '../util/common.spec';

const jPlayerActionTypes = actionTypes.jPlayer;
const playerIdOne = 'player-1';
const playerIdTwo = 'player-2';
const playerIdThree = 'player-3';

describe('jPlayer reducer', () => {
  let state;

  beforeEach(() => {
    state = getJPlayerState(1).jPlayers;
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toBe(state);
  });

  it('SET_MEDIA should handle all possible formats', () => {
    Object.keys(formats).forEach((key) => {
      const media = document.createElement(formats[key].MEDIA);

      spyOn(document, 'createElement').andReturn(media);
      spyOn(media, 'canPlayType').andReturn('probably');

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

      document.createElement.restore();
    });
  });

  it('should handle SET_MEDIA', () => {
    const audio = document.createElement('audio');

    spyOn(document, 'createElement').andReturn(audio);
    spyOn(audio, 'canPlayType').andReturn('probably');

    setMediaData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
    document.createElement.restore();
  });

  it('should handle CLEAR_MEDIA', () => {
    clearMediaData.forEach((test) => {
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

  it('should handle SET_MEDIA', () => {
    fullScreenData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAY', () => {
    playData.forEach((test) => {
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
    pauseData.forEach((test) => {
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
    playHeadData.forEach((test) => {
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
    volumeData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle MUTE', () => {
    muteData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle DURATION', () => {
    durationData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle PLAYBACK_RATE', () => {
    playbackRateData.forEach((test) => {
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
    loopData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
      });
    });
  });

  it('should handle FULL_SCREEN', () => {
    fullScreenData.forEach((test) => {
      const jPlayer = reducer(state, test.action)[playerIdOne];

      Object.keys(test.expected).forEach((key) => {
        expect(jPlayer[key]).toEqual(test.expected[key]);
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

  it('should handle FOCUS', () => {
    state = getJPlayerState(3).jPlayers;

    focusData.forEach((test) => {
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

  it('should set the global option for every action that requires it', () => {
    state = getJPlayerState(3).jPlayers;

    state[playerIdOne].global = Object.keys(jPlayerActionTypes);
    state[playerIdTwo].global = [jPlayerActionTypes.MUTE];
    state[playerIdThree].global = Object.keys(jPlayerActionTypes);

    Object.values(jPlayerActionTypes).forEach((actionType) => {
      const jPlayers = reducer(state, {
        type: actionType,
        uid: playerIdOne,
      });

      // expect(jPlayers).toContain(test.expected, null,
      //  `action type: ${test.action.type} did not match expected output`);
    });
  });
});
