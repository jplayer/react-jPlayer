import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore, combineReducers } from 'redux';
import jPlayers from '../../../reducer/reducer';

import ScreenFullContainer from './screenFullContainer';
import { setOption } from '../../../actions/actions';

const fullscreenchange = 'fullscreenchange';
const id = 'TestPlayer';
const request = expect.createSpy();
const exit = expect.createSpy();
const setup = (stateProperties, screenFullProperties, newProps) => {
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

  ScreenFullContainer.__Rewire__('screenfull', {
    enabled: true,
    isFullscreen: true,
    raw: {
      fullscreenchange,
    },
    request,
    exit,
    ...screenFullProperties,
  });

  const store = createStore(combineReducers({ jPlayers }), state);

  const wrapper = mount(
    <Provider store={store}>
      <ScreenFullContainer {...props} />
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

describe('ScreenFullContainer', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    request.reset();
    exit.reset();
  });

  describe('closeFullScreenListener', () => {
    let testPlayer;

    it('dispatches full screen if screenFull is enabled', () => {
      ({ store } = setup({ fullScreen: true }, { isFullscreen: false }));

      document.dispatchEvent(new window.Event(fullscreenchange));
      testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.fullScreen).toBe(false);
    });

    it('doesnt dispatch full screen if screenFull is fullscreen', () => {
      ({ store } = setup({ fullScreen: true }));

      document.dispatchEvent(new window.Event(fullscreenchange));
      testPlayer = store.getState().jPlayers.TestPlayer;

      expect(store.fullScreen).toNotBe(false);
    });

    it('doesnt dispatch full screen if fullScreen is false', () => {
      ({ store } = setup(null, { isFullscreen: false }));

      document.dispatchEvent(new window.Event(fullscreenchange));
      testPlayer = store.getState().jPlayers.TestPlayer;

      expect(store.fullScreen).toNotBe(false);
    });

    it('doesnt dispatch full screen if screenFull is enabled when unmounted', () => {
      ({ wrapper, store } = setup({ fullScreen: true }));

      wrapper.unmount();

      document.dispatchEvent(new window.Event(fullscreenchange));
      testPlayer = store.getState().jPlayers.TestPlayer;

      expect(testPlayer.fullScreen).toBe(true);
    });
  });

  describe('requestFullScreen', () => {
    it('requests screenfull', () => {
      setup({ fullScreen: true });

      expect(request).toHaveBeenCalled();
      expect(document.body.style.visibility).toBe('hidden');
    });

    it('sets document visibility to hidden if screenfull not enabled', () => {
      setup({ fullScreen: true }, { enabled: false });

      expect(request).toNotHaveBeenCalled();
      expect(document.body.style.visibility).toBe('hidden');
    });

    it('doesnt set document visibility when fullScreen not true', () => {
      setup();

      expect(document.body.style.visibility).toNotBe('hidden');
    });
  });

  describe('exitFullScreen', () => {
    it('exits full screen if fullScreen not true and screenFull is enabled', () => {
      ({ store } = setup({ fullScreen: true }));

      store.dispatch(setOption(id, 'fullScreen', false));

      expect(exit).toHaveBeenCalled();
    });

    it('sets document visibility to visible if screenfull not enabled', () => {
      ({ store } = setup({ fullScreen: true }, { enabled: false }));

      store.dispatch(setOption(id, 'fullScreen', false));

      expect(exit).toNotHaveBeenCalled();
      expect(document.body.style.visibility).toBe('visible');
    });
  });

  afterEach(() => {
    ScreenFullContainer.__ResetDependency__('screenfull');
    document.body.style.visibility = 'visible';
  });
});
