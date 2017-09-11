import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockBrowserUnsupported = () =>
  <div />;
const browserUnsupportedContainer = proxyquire('./browserUnsupportedContainer', {
  './browserUnsupported': mockBrowserUnsupported,
}).default;
const setup = (jPlayers, props) => containerSetup(browserUnsupportedContainer, jPlayers, props);

describe('BrowserUnsupportedContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        mediaSettings: {
          nonSupported: true,
        },
      },
    };
  });

  it('passes in nonSupported', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockBrowserUnsupported).prop('nonSupported')).toBe(true);
  });
});
