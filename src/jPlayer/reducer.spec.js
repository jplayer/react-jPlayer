import expect from 'expect';
import merge from 'lodash.merge';

import reducer from './reducer';
import { clearMediaData, pauseData, playData, playHeadData, volumeData, muteData,
  durationData, playbackRateData, loopData, fullScreenData } from './constants.spec';
import { actionTypes, statusDefaultValues, defaultOptions, errors, hints } from '../util/constants';
import { getJPlayerState } from '../util/common.spec';

const jPlayerActionTypes = actionTypes.jPlayer;
const playerIdOne = 'player-1';

describe('jPlayer reducer', () => {
  let state;

  beforeEach(() => {
    state = getJPlayerState(1).jPlayers;
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toBe(state);
  });

  // it('should set the global option for every action that requires it', () => {
  //   state[playerIdOne].global = Object.keys(mockActions);
  //   state[playerIdTwo].global = [jPlayerActionTypes.MUTE];
  //   state[playerIdThree].global = Object.keys(mockActions);

  //   Object.keys(state).forEach(key => (state[key].src = 'test'));

  //   const globalTest = [
  //     {
  //       action: {
  //         type: jPlayerActionTypes.SET_OPTION,
  //         uid: playerIdOne,
  //         key: 'autoplay',
  //         value: true,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           autoplay: state[playerIdTwo].autoplay,
  //         },
  //         [playerIdThree]: {
  //           autoplay: true,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.SET_MEDIA,
  //         uid: playerIdOne,
  //         media: {
  //           sources: {
  //             mp3: 'test.mp3',
  //           },
  //         },
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           media: state[playerIdTwo].media,
  //         },
  //         [playerIdThree]: {
  //           media: {
  //             sources: {
  //               mp3: 'test.mp3',
  //             },
  //           },
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.CLEAR_MEDIA,
  //         uid: playerIdOne,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           media: state[playerIdTwo].media,
  //         },
  //         [playerIdThree]: {
  //           media: {},
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.PAUSE,
  //         uid: playerIdOne,
  //         time: 30,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           newTime: state[playerIdTwo].newTime,
  //           paused: state[playerIdTwo].paused,
  //         },
  //         [playerIdThree]: {
  //           newTime: 30,
  //           paused: true,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.PLAY,
  //         uid: playerIdOne,
  //         time: 35,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           newTime: state[playerIdTwo].newTime,
  //           paused: state[playerIdTwo].paused,
  //         },
  //         [playerIdThree]: {
  //           newTime: 35,
  //           paused: false,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.PLAY_HEAD,
  //         uid: playerIdOne,
  //         percent: 15,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           playHeadPercent: state[playerIdTwo].playHeadPercent,
  //         },
  //         [playerIdThree]: {
  //           playHeadPercent: 15,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.VOLUME,
  //         uid: playerIdOne,
  //         volume: 0.75,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           volume: state[playerIdTwo].volume,
  //           muted: state[playerIdTwo].muted,
  //         },
  //         [playerIdThree]: {
  //           volume: 0.75,
  //           muted: false,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.MUTE,
  //         uid: playerIdOne,
  //         mute: true,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           muted: true,
  //         },
  //         [playerIdThree]: {
  //           muted: true,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.DURATION,
  //         uid: playerIdOne,
  //         remainingDuration: false,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           remainingDuration: state[playerIdTwo].remainingDuration,
  //         },
  //         [playerIdThree]: {
  //           remainingDuration: true,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.PLAYBACK_RATE,
  //         uid: playerIdOne,
  //         playbackRate: 2.5,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           playbackRate: state[playerIdTwo].playbackRate,
  //         },
  //         [playerIdThree]: {
  //           playbackRate: 2.5,
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.LOOP,
  //         uid: playerIdOne,
  //         loop: 'loop',
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           loop: state[playerIdTwo].loop,
  //         },
  //         [playerIdThree]: {
  //           loop: 'loop',
  //         },
  //       },
  //     },
  //     {
  //       action: {
  //         type: jPlayerActionTypes.FULL_SCREEN,
  //         uid: playerIdOne,
  //         fullScreen: true,
  //       },
  //       expected: {
  //         [playerIdTwo]: {
  //           fullScreen: state[playerIdTwo].fullScreen,
  //         },
  //         [playerIdThree]: {
  //           fullScreen: true,
  //         },
  //       },
  //     },
  //   ];

  //   globalTest.forEach((test) => {
  //     const jPlayers = reducer(state, test.action);

  //     expect(jPlayers).toContain(test.expected, null,
  //       `action type: ${test.action.type} did not match expected output`);
  //   });
  // });

  it('should focus on the jPlayer for every action apart from focus', () => {
    state[playerIdOne] = merge({}, statusDefaultValues, defaultOptions, {
      global: Object.keys(jPlayerActionTypes),
    });

    Object.keys(jPlayerActionTypes).forEach((type) => {
      if (type !== jPlayerActionTypes.FOCUS) {
        const jPlayers = reducer(state, {
          type,
          uid: playerIdOne,
        });

        Object.keys(jPlayers).forEach((key) => {
          if (key === playerIdOne) {
            expect(jPlayers[key].focus).toBeTruthy();
          } else {
            expect(jPlayers[key].focus).toBeFalsy();
          }
        });
      }
    });
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
});
