import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../../util/specHelpers/containerSetup.spec';
import { setOption } from '../../../actions/actions';

let ScreenFullContainer;
const id = 'TestPlayer';
const fullscreenchange = 'fullscreenchange';

const setup = (jPlayers, screenfull, props) => {
  ScreenFullContainer = proxyquire('./screenFullContainer', {
    screenfull,
  }).default;

  return containerSetup(ScreenFullContainer, jPlayers, props);
};

describe('ScreenFullContainer', () => {
  let jPlayers;
  let screenfull;
  let request;
  let exit;

  beforeEach(() => {
    request = expect.createSpy();
    exit = expect.createSpy();
    jPlayers = {
      [id]: {},
    };
    screenfull = {
      enabled: false,
      isFullscreen: false,
      raw: {
        fullscreenchange,
      },
      request,
      exit,
    };
  });

  describe('closeFullScreenListener', () => {
    it('sets fullScreen to false if screenFull is enabled', () => {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      const { store } = setup(jPlayers, screenfull);

      document.dispatchEvent(new window.Event(fullscreenchange));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.fullScreen).toBe(false);
    });

    it('doesnt set fullScreen to false if screenFull is full screen', () => {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;
      screenfull.isFullscreen = true;

      const { store } = setup(jPlayers, screenfull);

      document.dispatchEvent(new window.Event(fullscreenchange));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.fullScreen).toNotBe(false);
    });

    it('doesnt set full screen to false if fullScreen is false', () => {
      screenfull.enabled = true;

      const { store } = setup(jPlayers, screenfull);

      document.dispatchEvent(new window.Event(fullscreenchange));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.fullScreen).toNotBe(false);
    });

    it('doesnt sets full screen to false if screenFull is enabled when unmounted', () => {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      const { wrapper, store } = setup(jPlayers, screenfull);

      wrapper.unmount();

      document.dispatchEvent(new window.Event(fullscreenchange));

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.fullScreen).toBe(true);
    });
  });

  describe('requestFullScreen', () => {
    it('requests screenfull when fullScreen and screenfull is enabled', () => {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      setup(jPlayers, screenfull);

      expect(request).toHaveBeenCalled();
      expect(document.body.style.visibility).toBe('hidden');
    });

    it('sets document visibility to hidden if fullScreen and screenfull not enabled', () => {
      jPlayers[id].fullScreen = true;

      setup(jPlayers, screenfull);

      expect(request).toNotHaveBeenCalled();
      expect(document.body.style.visibility).toBe('hidden');
    });

    it('visibility stays as visible when fullScreen not true', () => {
      setup(jPlayers, screenfull);

      expect(document.body.style.visibility).toBe('visible');
    });
  });

  describe('exitFullScreen', () => {
    it('exits full screen if fullScreen not true and screenFull is enabled', () => {
      jPlayers[id].fullScreen = true;
      screenfull.enabled = true;

      const { store } = setup(jPlayers, screenfull);

      store.dispatch(setOption(id, 'fullScreen', false));

      expect(exit).toHaveBeenCalled();
    });

    it('sets document visibility to visible if fullScreen not true and screenfull not enabled', () => {
      jPlayers[id].fullScreen = true;

      const { store } = setup(jPlayers, screenfull);

      store.dispatch(setOption(id, 'fullScreen', false));

      expect(exit).toNotHaveBeenCalled();
      expect(document.body.style.visibility).toBe('visible');
    });
  });

  afterEach(() => {
    document.body.style.visibility = 'visible';
  });
});
