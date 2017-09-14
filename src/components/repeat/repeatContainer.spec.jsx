import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockRepeat = ({ loop }) =>
  <button onClick={loop} />;
const RepeatContainer = proxyquire('./repeatContainer', {
  './repeat': mockRepeat,
}).default;
const setup = (jPlayers, props) => containerSetup(RepeatContainer, jPlayers, props);

describe('RepeatContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  describe('loop', () => {
    it('toggles to true when falsy', () => {
      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.loop).toBe(true);
    });

    it('toggles to false when true', () => {
      jPlayers[id].loop = true;

      const { wrapper, store } = setup(jPlayers);

      wrapper.simulate('click');

      const jPlayer = store.getState().jPlayers[id];

      expect(jPlayer.loop).toBe(false);
    });
  });
});
