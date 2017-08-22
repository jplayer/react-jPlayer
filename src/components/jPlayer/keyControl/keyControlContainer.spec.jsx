import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../../util/specHelpers/containerSetup.spec';

let onKeyDown;
const id = 'TestPlayer';
const mockKeyControl = ({ keyBindings }) =>
  <div onKeyDown={() => onKeyDown(keyBindings)} />;
const keyControlContainer = proxyquire('./keyControlContainer', {
  'react-jplayer-utils': { KeyControl: mockKeyControl },
}).default;
const setup = (jPlayers, props) => containerSetup(keyControlContainer, jPlayers, props);

describe('keyControlContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        src: 'www.test.com',
      },
    };
  });

  describe('custom keyBindings', () => {
    it('merges custom keyBinding with different name', () => {
      onKeyDown = ({ test }) => test.fn();

      const customKeySpy = expect.createSpy();
      const customKeyBindings = {
        test: {
          key: 20,
          fn: customKeySpy,
        },
      };
      const { wrapper } = setup(jPlayers, { keyBindings: customKeyBindings });

      wrapper.simulate('keydown');

      expect(customKeySpy).toHaveBeenCalled();
    });

    it('custom keyBinding overwrite default function with same name', () => {
      onKeyDown = ({ play }) => play.fn();

      const customKeySpy = expect.createSpy();
      const customKeyBindings = {
        play: {
          fn: customKeySpy,
        },
      };
      const { wrapper, store } = setup(jPlayers, { keyBindings: customKeyBindings });

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(customKeySpy).toHaveBeenCalled();
      expect(jPlayer.paused).toNotBe(true);
    });
  });

  describe('play', () => {
    it('pauses when playing', () => {
      onKeyDown = ({ play }) => play.fn();

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toBe(true);
    });

    it('plays when paused', () => {
      jPlayers[id].paused = true;
      onKeyDown = ({ play }) => play.fn();

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toBe(false);
    });
  });

  describe('fullScreen', () => {
    it('toggles fullScreen', () => {
      onKeyDown = ({ fullScreen }) => fullScreen.fn();
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.fullScreen).toBe(true);
    });
  });

  describe('mute', () => {
    it('toggles mute', () => {
      onKeyDown = ({ mute }) => mute.fn();

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.muted).toBe(true);
    });
  });

  describe('volumeUp', () => {
    it('increments volume', () => {
      jPlayers[id].volume = 0;
      onKeyDown = ({ volumeUp }) => volumeUp.fn();

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(0.1);
    });
  });

  describe('volumeDown', () => {
    it('decrements volume', () => {
      jPlayers[id].volume = 0.1;
      onKeyDown = ({ volumeDown }) => volumeDown.fn();

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(0);
    });
  });

  describe('loop', () => {
    it('toggles loop', () => {
      onKeyDown = ({ loop }) => loop.fn();

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('keydown');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.loop).toBe(true);
    });
  });
});
