import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockPlay = ({ play, paused }) =>
  <button onClick={() => play(id, paused)} />;
const PlayContainer = proxyquire('./playContainer', {
  './play': mockPlay,
}).default;
const setup = (jPlayers, props) => containerSetup(PlayContainer, jPlayers, props);

describe('PlayContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        src: 'test.mp3',
      },
    };
  });

  it('plays media when paused onClick', () => {
    jPlayers[id].paused = true;
    const { wrapper, store } = setup(jPlayers);

    wrapper.simulate('click');

    const jPlayer = store.getState().jPlayers[id];

    expect(jPlayer.paused).toBe(false);
  });

  it('pauses media when playing onClick', () => {
    const { wrapper, store } = setup(jPlayers);

    wrapper.simulate('click');

    const jPlayer = store.getState().jPlayers[id];

    expect(jPlayer.paused).toBe(true);
  });
});
