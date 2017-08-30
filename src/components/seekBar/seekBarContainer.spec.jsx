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
  pageX: 20,
  pageY: 100,
  preventDefault: Function.prototype,
};
const mockTouchEvent = {
  touches: [
    {
      pageX: 20,
      pageY: 100,
    },
  ],
  preventDefault: Function.prototype,
};
const mockSeekbar = props => (
  <div
    onClick={() => props.clickMoveBar(mockBar, mockClickEvent)}
    onTouchStart={() => props.touchMoveBar(mockBar, mockTouchEvent)}
  />
);
const SeekBarContainer = proxyquire('./seekBarContainer', {
  './seekBar': mockSeekbar,
}).default;
const setup = (jPlayers, props) => containerSetup(SeekBarContainer, jPlayers, props);

describe('SeekBarContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        src: 'www.test.com',
      },
    };
  });

  describe('moveSeekbar', () => {
    it('onClick moves playHead', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.playHeadPercent).toBe(100);
    });

    it('onTouch moves playHead', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('touchstart');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.playHeadPercent).toBe(100);
    });
  });
});
