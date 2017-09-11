import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockDuration = () =>
  <div />;
const durationContainer = proxyquire('./durationContainer', {
  './duration': mockDuration,
}).default;
const setup = (jPlayers, props) => containerSetup(durationContainer, jPlayers, props);

describe('DurationContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        durationText: '2:50',
      },
    };
  });

  it('passes in durationText', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockDuration).prop('durationText')).toBe('2:50');
  });
});
