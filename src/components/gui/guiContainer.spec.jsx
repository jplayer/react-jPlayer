import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';
import containerSetup from '../../util/specHelpers/containerSetup.spec';

import { setOption } from '../../actions/actions';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockGuiAnimation = ({ onMouseMove }) => (
  <div onMouseMove={onMouseMove} />
);
const GuiContainer = proxyquire('./guiContainer', {
  './animation': mockGuiAnimation,
}).default;

const setup = (jPlayers, props) => containerSetup(GuiContainer, jPlayers, props);

describe('GuiContainer', () => {
  let jPlayers;
  let mockSetTimeout;
  let mockClearTimeout;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
    mockSetTimeout = expect.spyOn(global, 'setTimeout');
    mockClearTimeout = expect.spyOn(global, 'clearTimeout');
  });

  describe('onMouseMove', () => {
    it('dispatches startGuiFadeOut to false if fullScreen is enabled', () => {
      jPlayers[id].fullScreen = true;
      jPlayers[id].startGuiFadeOut = true;

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('mousemove');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.startGuiFadeOut).toBe(false);
    });

    it('doesnt dispatch startGuiFadeOut to false if fullScreen is not enabled', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('mousemove');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.startGuiFadeOut).toNotBe(false);
    });

    it('clears all timeouts if fullScreen is enabled', () => {
      jPlayers[id].fullScreen = true;

      const { wrapper, store } = setup(jPlayers);

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
      jPlayers[id].fullScreen = true;

      const { wrapper, store } = setup(jPlayers);

      mockSetTimeout.andReturn(1);

      store.dispatch(setOption(id, 'startGuiFadeOut', true));
      store.dispatch(setOption(id, 'fullScreen', false));

      wrapper.simulate('mousemove');

      expect(mockClearTimeout).toNotHaveBeenCalled();
    });
  });

  describe('startFade', () => {
    it('dispatches guiFadeOut to true if fullScreen, !paused and startGuiFadeOut', () => {
      jPlayers[id].fullScreen = true;

      const { store } = setup(jPlayers);

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.guiFadeOut).toBe(true);
    });

    it('doesnt dispatch guiFadeOut to true if !fullScreen', () => {
      const { store } = setup(jPlayers);

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.guiFadeOut).toNotBe(true);
    });

    it('doesnt dispatch guiFadeOut to true if paused', () => {
      jPlayers[id].fullScreen = true;
      jPlayers[id].paused = true;

      const { store } = setup(jPlayers);

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', true));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.guiFadeOut).toNotBe(true);
    });

    it('dispatchs guiFadeOut to false if !startGuiFadeOut', () => {
      jPlayers[id].fullScreen = true;
      jPlayers[id].startGuiFadeOut = true;

      const { store } = setup(jPlayers);

      mockSetTimeout.andCall((fn) => {
        fn();
      });

      store.dispatch(setOption(id, 'startGuiFadeOut', false));

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.guiFadeOut).toBe(false);
    });
  });

  afterEach(() => {
    mockSetTimeout.restore();
    mockClearTimeout.restore();
  });
});
