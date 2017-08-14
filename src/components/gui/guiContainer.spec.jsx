import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import jPlayers from '../../reducer/reducer';

import { setOption } from '../../actions/actions';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockGuiAnimation = ({ onMouseMove }) => (
  <div onMouseMove={onMouseMove} />
);
const GuiContainer = proxyquire('./guiContainer', {
  './animation': mockGuiAnimation,
}).default;
const setup = (stateProperties, newProps) => {
  const props = {
    ...newProps,
  };

  const state = {
    jPlayers: {
      [id]: {
        ...stateProperties,
      },
    },
  };

  const store = createStore(combineReducers({ jPlayers }), state);

  const wrapper = mount(
    <Provider store={store}>
      <GuiContainer {...props} />
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

describe('GuiContainer', () => {
  let store;
  let wrapper;
  let mockSetTimeout;
  let mockClearTimeout;

  beforeEach(() => {
    mockSetTimeout = expect.spyOn(global, 'setTimeout');
    mockClearTimeout = expect.spyOn(global, 'clearTimeout');
  });

  describe('onMouseMove', () => {
    it('dispatches startGuiFadeOut to false if fullScreen is enabled', () => {
      ({ wrapper, store } = setup({ fullScreen: true, startGuiFadeOut: true }));

      wrapper.simulate('mousemove');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.startGuiFadeOut).toBe(false);
    });

    it('doesnt dispatch startGuiFadeOut to false if fullScreen is not enabled', () => {
      ({ wrapper, store } = setup({ fullScreen: false }));

      wrapper.simulate('mousemove');

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.startGuiFadeOut).toNotBe(false);
    });

    it('clears all timeouts if fullScreen is enabled', () => {
      ({ wrapper, store } = setup({ fullScreen: true }));

      mockSetTimeout.andReturn(1);

      store.dispatch(setOption(id, 'startGuiFadeOut', true));
      store.dispatch(setOption(id, 'startGuiFadeOut', false));

      mockSetTimeout.andReturn(2);
      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      wrapper.simulate('mousemove');

      expect(mockClearTimeout.calls.length).toBe(2);
      expect(mockClearTimeout).toHaveBeenCalledWith(1);
      expect(mockClearTimeout).toHaveBeenCalledWith(2);
    });

    it('doesnt clear any timeouts if fullScreen is not enabled', () => {
      ({ wrapper, store } = setup({ fullScreen: true }));

      mockSetTimeout.andReturn(1);

      store.dispatch(setOption(id, 'startGuiFadeOut', true));
      store.dispatch(setOption(id, 'fullScreen', false));

      wrapper.simulate('mousemove');

      expect(mockClearTimeout).toNotHaveBeenCalled();
    });
  });

  describe('startFade', () => {
    it('dispatches guiFadeOut to true if fullScreen, !paused and startGuiFadeOut', () => {
      ({ wrapper, store } = setup({ fullScreen: true }));

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.guiFadeOut).toBe(true);
    });

    it('doesnt dispatch guiFadeOut to true if !fullScreen', () => {
      ({ wrapper, store } = setup());

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.guiFadeOut).toNotBe(true);
    });

    it('doesnt dispatch guiFadeOut to true if paused', () => {
      ({ wrapper, store } = setup({ fullScreen: true, paused: true }));

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.guiFadeOut).toNotBe(true);
    });

    it('dispatchs guiFadeOut to false if !startGuiFadeOut', () => {
      ({ wrapper, store } = setup({ fullScreen: true, startGuiFadeOut: true }));

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', false));

      const testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.guiFadeOut).toBe(false);
    });
  });

  afterEach(() => {
    mockSetTimeout.restore();
    mockClearTimeout.restore();
  });
});
