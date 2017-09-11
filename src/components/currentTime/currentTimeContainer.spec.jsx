import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockCurrentTime = () =>
  <div />;
const currentTimeContainer = proxyquire('./currentTimeContainer', {
  './currentTime': mockCurrentTime,
}).default;
const setup = (jPlayers, props) => containerSetup(currentTimeContainer, jPlayers, props);

describe('CurrentTimeContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        currentTimeText: '2:20',
      },
    };
  });

  it('passes in currentTimeText', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockCurrentTime).prop('currentTimeText')).toBe('2:20');
  });
});
