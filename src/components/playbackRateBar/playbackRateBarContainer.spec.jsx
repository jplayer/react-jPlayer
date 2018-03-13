/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockBar = {
  getBoundingClientRect: () => ({
    width: 20,
    height: 200,
    top: 20,
    left: 0,
  }),
};
const mockClickEvent = {
  clientX: 20,
  clientY: 100,
  preventDefault: expect.createSpy(),
};
const mockTouchEvent = {
  touches: [
    {
      clientX: 20,
      clientY: 100,
    },
  ],
  preventDefault: expect.createSpy(),
};
const mockPlaybackRateBar = props => (
  <div
    onClick={() => props.clickMoveBar(mockBar, mockClickEvent)}
    onTouchStart={() => props.touchMoveBar(mockBar, mockTouchEvent)}
  />
);
const PlaybackRateBarContainer = proxyquire('./playbackRateBarContainer', {
  './playbackRateBar': mockPlaybackRateBar,
}).default;
const setup = (jPlayers, props) => containerSetup(PlaybackRateBarContainer, jPlayers, props);

describe('PlaybackRateBarContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        maxPlaybackRate: 1,
        minPlaybackRate: 0,
      },
    };
  });

  describe('movePlaybackRate', () => {
    it('verticalPlaybackRate when true gives expected output', () => {
      jPlayers[id].verticalPlaybackRate = true;

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.playbackRate).toBe(0.6);
    });

    it('onClick moves playbackRate', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.playbackRate).toBe(1);
    });

    it('onTouch moves playbackRate', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('touchstart');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.playbackRate).toBe(1);
    });
  });
});
