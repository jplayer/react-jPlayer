import React from 'react';
import expect from 'expect';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from '../../../reducer/reducer';

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

  const store = createStore(reducer, state);

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
    it('dispatches full screen if screenFull is enabled', () => {
      ({ store } = setup({ fullScreen: true }, { isFullscreen: false }));

      expect.spyOn(store, 'dispatch');

      document.dispatchEvent(new window.Event(fullscreenchange));

      expect(store.dispatch).toHaveBeenCalledWith(setOption(id, 'fullScreen', false));
    });

    it('doesnt dispatch full screen if screenFull is fullscreen', () => {
      ({ wrapper, store } = setup({ fullScreen: true }));

      document.dispatchEvent(new window.Event(fullscreenchange));

      expect(store.getActions()).toNotEqual([setOption(id, 'fullScreen', false)]);
    });

    it('doesnt dispatch full screen if fullScreen is false', () => {
      ({ wrapper, store } = setup(null, { isFullscreen: false }));

      document.dispatchEvent(new window.Event(fullscreenchange));

      expect(store.getActions()).toNotEqual([setOption(id, 'fullScreen', false)]);
    });

    it('doesnt dispatch full screen if screenFull is enabled when unmounted', () => {
      ({ wrapper, store } = setup({ fullScreen: true }));

      wrapper.unmount();

      document.dispatchEvent(new window.Event(fullscreenchange));

      expect(store.getActions()).toNotEqual([setOption(id, 'fullScreen', false)]);
    });
  });

  describe('requestFullScreen', () => {
    it('requests screenfull on load', () => {
      setup({ fullScreen: true });

      expect(request).toHaveBeenCalled();
      expect(document.body.style.visibility).toBe('hidden');
    });

    it('doesnt request screenfull on load if screenfull not enabled', () => {
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
      ({ wrapper, store } = setup({ fullScreen: true }));

      wrapper.setProps({ fullScreen: false });

      expect(exit).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    ScreenFullContainer.__ResetDependency__('screenfull');
    document.body.style.visibility = 'visible';
  });
});
