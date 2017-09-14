import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockFullScreen = ({ setFullScreen }) =>
  <button onClick={() => setFullScreen(id, true)} />;
const FullScreenContainer = proxyquire('./fullScreenContainer', {
  './fullScreen': mockFullScreen,
}).default;
const setup = (jPlayers, props) => containerSetup(FullScreenContainer, jPlayers, props);

describe('FullScreenContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {},
    };
  });

  it('sets fullScreen', () => {
    const { wrapper, store } = setup(jPlayers);

    wrapper.simulate('click');

    const jPlayer = store.getState().jPlayers[id];

    expect(jPlayer.fullScreen).toBe(true);
  });
});
