import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockMute = ({ setMute }) =>
  <button onClick={() => setMute(id, true)} />;
const MuteContainer = proxyquire('./muteContainer', {
  './mute': mockMute,
}).default;
const setup = (jPlayers, props) => containerSetup(MuteContainer, jPlayers, props);

describe('MuteContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  it('sets muted', () => {
    const { wrapper, store } = setup(jPlayers);

    wrapper.simulate('click');

    const jPlayer = store.getState().jPlayers[id];

    expect(jPlayer.muted).toBe(true);
  });
});
