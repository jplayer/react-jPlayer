import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockRepeat = ({ setLoop }) =>
  <div onClick={() => setLoop(id, true)} />;
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

  it('sets loop', () => {
    const { wrapper, store } = setup(jPlayers);

    wrapper.simulate('click');

    const jPlayer = store.getState().jPlayers[id];

    expect(jPlayer.loop).toBe(true);
  });
});
