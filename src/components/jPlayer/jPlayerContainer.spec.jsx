import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';
import { defaultOptions } from '../../util/constants';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockJPlayer = ({ onMouseMoveCapture }) =>
  <div onMouseMoveCapture={onMouseMoveCapture} />;
const JPlayerContainer = proxyquire('./jPlayerContainer', {
  './jPlayer': mockJPlayer,
  './states/states': () => 'jp-test',
}).default;
const setup = (jPlayers, props) => containerSetup(JPlayerContainer, jPlayers, {
  id,
  children: <div />,
  ...props,
});

describe('JPlayerContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        fullScreen: false,
        paused: false,
        startGuiFadeOut: false,
        media: defaultOptions.media,
      },
    };
  });

  it('sets media on load', () => {
    jPlayers[id].media = {
      title: 'testTitle',
      sources: [{ mp3: 'www.test.com' }],
    };

    const { store } = setup(jPlayers);
    const jPlayer = store.getState().jPlayers.TestPlayer;

    expect(jPlayer.media).toBe(jPlayers[id].media);
  });

  it('sets volumeSupported on load', () => {
    const { store } = setup(jPlayers);

    const jPlayer = store.getState().jPlayers.TestPlayer;

    expect(jPlayer.volumeSupported).toBe(true);
  });

  describe('onMouseMoveCapture', () => {
    it('sets startGuiFadeOut to false if fullScreen and paused', () => {
      jPlayers[id].fullScreen = true;
      jPlayers[id].paused = true;

      const { store, wrapper } = setup(jPlayers);

      wrapper.simulate('mousemove');

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.startGuiFadeOut).toBe(false);
    });

    it('sets startGuiFadeOut to false if fullScreen, !paused and startGuiFadeOut', () => {
      jPlayers[id].fullScreen = true;
      jPlayers[id].startGuiFadeOut = true;

      const { store, wrapper } = setup(jPlayers);

      wrapper.simulate('mousemove');

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.startGuiFadeOut).toBe(false);
    });

    it('sets startGuiFadeOut to true if fullScreen, !paused and !startGuiFadeOut', () => {
      jPlayers[id].fullScreen = true;

      const { store, wrapper } = setup(jPlayers);

      wrapper.simulate('mousemove');

      const jPlayer = store.getState().jPlayers.TestPlayer;

      expect(jPlayer.startGuiFadeOut).toBe(true);
    });
  });
});
