import expect from 'expect';

import reducer from './reducer';
import { actionTypes } from '../util/constants';
import { getJPlayerState } from '../util/common.spec';

const mockActions = {
  SET_OPTION: {
    muted: true,
  },
  CLEAR_MEDIA: {},
  SET_MEDIA: {
    media: {
      sources: {
        mp3: 'test.mp3',
      },
    },
  },
  PLAY: {},
  PAUSE: {},
  PLAY_HEAD: {
    percent: 30,
  },
  VOLUME: {
    volume: 0.7,
  },
  MUTE: {
    muted: true,
  },
  DURATION: {
    remainingDuration: true,
  },
  PLAYBACK_RATE: {
    playbackRate: 2.3,
  },
  LOOP: {
    loop: 'loop',
  },
  FULL_SCREEN: {
    fullScreen: false,
  },
};

describe('jPlayer reducer', () => {
  const jPlayerActionTypes = actionTypes.jPlayer;
  let state;

  beforeEach(() => {
    state = getJPlayerState(3).jPlayers;
  });

  it('should return the state if action is invalid', () => {
    expect(reducer(state, '@@jPlayer-test')).toBe(state);
  });

  it('should set the global option for every action that requires it', () => {
    state['player-1'].global = Object.keys(mockActions);
    state['player-2'].global = [jPlayerActionTypes.MUTE];
    state['player-3'].global = Object.keys(mockActions);

    Object.keys(state).forEach(key => (state[key].src = 'test'));

    const globalTest = [
      {
        action: {
          type: jPlayerActionTypes.SET_OPTION,
          uid: 'player-1',
          key: 'autoplay',
          value: true,
        },
        expected: {
          'player-2': {
            autoplay: state['player-2'].autoplay,
          },
          'player-3': {
            autoplay: true,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.SET_MEDIA,
          uid: 'player-1',
          media: {
            sources: {
              mp3: 'test.mp3',
            },
          },
        },
        expected: {
          'player-2': {
            media: state['player-2'].media,
          },
          'player-3': {
            media: {
              sources: {
                mp3: 'test.mp3',
              },
            },
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.CLEAR_MEDIA,
          uid: 'player-1',
        },
        expected: {
          'player-2': {
            media: state['player-2'].media,
          },
          'player-3': {
            media: {},
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.PAUSE,
          uid: 'player-1',
          time: 30,
        },
        expected: {
          'player-2': {
            newTime: state['player-2'].newTime,
            paused: state['player-2'].paused,
          },
          'player-3': {
            newTime: 30,
            paused: true,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.PLAY,
          uid: 'player-1',
          time: 35,
        },
        expected: {
          'player-2': {
            newTime: state['player-2'].newTime,
            paused: state['player-2'].paused,
          },
          'player-3': {
            newTime: 35,
            paused: false,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.PLAY_HEAD,
          uid: 'player-1',
          percent: 15,
        },
        expected: {
          'player-2': {
            playHeadPercent: state['player-2'].playHeadPercent,
          },
          'player-3': {
            playHeadPercent: 15,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.VOLUME,
          uid: 'player-1',
          volume: 0.75,
        },
        expected: {
          'player-2': {
            volume: state['player-2'].volume,
            muted: state['player-2'].muted,
          },
          'player-3': {
            volume: 0.75,
            muted: false,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.MUTE,
          uid: 'player-1',
          mute: true,
        },
        expected: {
          'player-2': {
            muted: true,
          },
          'player-3': {
            muted: true,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.DURATION,
          uid: 'player-1',
          remainingDuration: false,
        },
        expected: {
          'player-2': {
            remainingDuration: state['player-2'].remainingDuration,
          },
          'player-3': {
            remainingDuration: true,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.PLAYBACK_RATE,
          uid: 'player-1',
          playbackRate: 2.5,
        },
        expected: {
          'player-2': {
            playbackRate: state['player-2'].playbackRate,
          },
          'player-3': {
            playbackRate: 2.5,
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.LOOP,
          uid: 'player-1',
          loop: 'loop',
        },
        expected: {
          'player-2': {
            loop: state['player-2'].loop,
          },
          'player-3': {
            loop: 'loop',
          },
        },
      },
      {
        action: {
          type: jPlayerActionTypes.FULL_SCREEN,
          uid: 'player-1',
          fullScreen: true,
        },
        expected: {
          'player-2': {
            fullScreen: state['player-2'].fullScreen,
          },
          'player-3': {
            fullScreen: true,
          },
        },
      },
    ];

    globalTest.forEach((test) => {
      const jPlayers = reducer(state, test.action);

      expect(jPlayers).toContain(test.expected, null,
        `action type: ${test.action.type} did not match expected output`);
    });
  });

  it('should focus on the jPlayer for every action apart from focus', () => {
    Object.entries(mockActions).forEach((mockActionKeyValue) => {
      const uid = 'player-1';
      const jPlayers = reducer(state, {
        type: mockActionKeyValue[0],
        uid,
        ...mockActionKeyValue[1],
      });

      Object.keys(jPlayers).forEach((key) => {
        if (uid === key) {
          expect(jPlayers[key].focus).toBeTruthy();
        } else {
          expect(jPlayers[key].focus).toBeFalsy();
        }
      });
    });
  });
});
