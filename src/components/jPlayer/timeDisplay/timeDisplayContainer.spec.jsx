import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';

import TimeDisplayContainer from './timeDisplayContainer';
import reducer from '../../../reducer/reducer';
import { setOption } from '../../../actions/actions';
import { defaultOptions } from '../../../util/constants';

let jPlayers;
const id = 'TestPlayer';
const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const state = {
    jPlayers,
  };

  const store = createStore(combineReducers({ jPlayers: reducer }), state);

  const wrapper = mount(
    <Provider store={store}>
      <TimeDisplayContainer {...props} />
    </Provider>, {
      context: {
        id,
      },
      childContextTypes: {
        id: PropTypes.string,
      },
    },
  );

  return {
    wrapper,
    props,
    store,
  };
};

describe('TimeDisplayContainer', () => {
  beforeEach(() => {
    jPlayers = {
      [id]: {
        currentTime: 10,
        duration: 20,
        showRemainingDuration: false,
        timeFormats: defaultOptions.timeFormats,
      },
    };
  });

  describe('setDurationText', () => {
    it('converts and formats durationText to duration', () => {
      const { store } = setup();

      store.dispatch(setOption(id, 'duration', 222));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.durationText).toBe('03:42');
    });

    it('updates durationText when timeformats changes', () => {
      const { store } = setup();

      const newTimeFormats = {
        ...defaultOptions.timeFormats,
        sepMin: '-',
      };

      store.dispatch(setOption(id, 'timeFormats', newTimeFormats));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.durationText).toBe('00-20');
    });

    it('updates durationText when currentTime changes', () => {
      const { store } = setup();

      store.dispatch(setOption(id, 'currentTime', 13));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.durationText).toBe('00:20');
    });

    describe('when showRemainingDuration is true', () => {
      it('converts and formats durationText correctly to remaining time when is time remaining', () => {
        const { store } = setup();

        store.dispatch(setOption(id, 'showRemainingDuration', true));

        const testPlayer = store.getState().jPlayers.TestPlayer;

        expect(testPlayer.durationText).toBe('-00:10');
      });

      it('converts and formats durationText to time when no time remaining', () => {
        jPlayers[id].currentTime = 20;

        const { store } = setup();

        store.dispatch(setOption(id, 'showRemainingDuration', true));

        const testPlayer = store.getState().jPlayers.TestPlayer;

        expect(testPlayer.durationText).toBe('00:00');
      });
    });
  });

  describe('setCurrentTimeText', () => {
    it('converts and formats currentTimeText to currentTime', () => {
      const { store } = setup();

      store.dispatch(setOption(id, 'currentTime', 17));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.currentTimeText).toBe('00:17');
    });

    it('updates currentTimeText when timeformats changes', () => {
      const { store } = setup();

      const newTimeFormats = {
        ...defaultOptions.timeFormats,
        sepMin: '-',
      };

      store.dispatch(setOption(id, 'timeFormats', newTimeFormats));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.currentTimeText).toBe('00-10');
    });
  });
});
