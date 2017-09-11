import expect from 'expect';

import keyControlContainer from './keyControlContainer';
import containerSetup from '../../../util/specHelpers/containerSetup.spec';

const id = 'TestPlayer';
const keyDown = 'keydown';
const setup = (jPlayers, props) => containerSetup(keyControlContainer, jPlayers, props);

describe('keyControlContainer', () => {
  let jPlayers;
  let event;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        focused: true,
        keyEnabled: true,
        src: 'www.test.com',
      },
    };
    event = document.createEvent('Event');
  });

  describe('custom keyBindings', () => {
    it('merges custom keyBinding with different name', () => {
      const customKeySpy = expect.createSpy();
      const customKeyBindings = {
        test: {
          key: 20,
          fn: customKeySpy,
        },
      };

      setup(jPlayers, { keyBindings: customKeyBindings });

      event.keyCode = 20;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      expect(customKeySpy).toHaveBeenCalled();
    });

    it('custom keyBinding overwrite default function with same name', () => {
      const customKeySpy = expect.createSpy();
      const customKeyBindings = {
        play: {
          key: 20,
          fn: customKeySpy,
        },
      };

      setup(jPlayers, { keyBindings: customKeyBindings });

      event.key = 20;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      expect(customKeySpy).toHaveBeenCalled();
    });
  });

  describe('play', () => {
    it('pauses when playing', () => {
      const { store } = setup(jPlayers);

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toBe(true);
    });

    it('plays when paused', () => {
      jPlayers[id].paused = true;

      const { store } = setup(jPlayers);

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toBe(false);
    });
  });

  describe('fullScreen', () => {
    it('toggles fullScreen', () => {
      const { store } = setup(jPlayers);

      event.keyCode = 70;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.fullScreen).toBe(true);
    });
  });

  describe('mute', () => {
    it('toggles mute', () => {
      const { store } = setup(jPlayers);

      event.keyCode = 77;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.muted).toBe(true);
    });
  });

  describe('volumeUp', () => {
    it('increments volume', () => {
      jPlayers[id].volume = 0;

      const { store } = setup(jPlayers);

      event.keyCode = 190;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(0.1);
    });
  });

  describe('volumeDown', () => {
    it('decrements volume', () => {
      jPlayers[id].volume = 0.1;

      const { store } = setup(jPlayers);

      event.keyCode = 188;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.volume).toBe(0);
    });
  });

  describe('loop', () => {
    it('toggles loop', () => {
      const { store } = setup(jPlayers);

      event.keyCode = 76;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.loop).toBe(true);
    });
  });

  describe('onKeyDown', () => {
    it('doesnt handle the key down if focused is false', () => {
      jPlayers[id].focused = false;

      const { store } = setup(jPlayers);

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toNotBe(true);
    });

    it('doesnt handle the key down if keyEnabled is false', () => {
      jPlayers[id].keyEnabled = false;

      const { store } = setup(jPlayers);

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toNotBe(true);
    });
  });

  describe('unmount', () => {
    it('should remove onKeyDown event listener', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.unmount();

      event.keyCode = 80;
      event.initEvent(keyDown);
      document.dispatchEvent(event);

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.paused).toNotBe(true);
    });
  });
});
