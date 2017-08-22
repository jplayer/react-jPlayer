import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import { defaultStatus } from '../../util/constants';
import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockDuration = () => <div className="@@duration" />;
const DurationContainer = proxyquire('./durationContainer', {
  './duration': mockDuration,
}).default;
const setup = (jPlayers, props) => containerSetup(DurationContainer, jPlayers, props);

describe('DurationContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        durationText: defaultStatus.durationText,
      },
    };
  });

  it('renders Duration when the durationText is not the default value', () => {
    jPlayers[id].durationText = '2:20';

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@duration').exists()).toBe(true);
  });

  it('does not render Duration when the durationText is the default value', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@duration').exists()).toBe(false);
  });
});
