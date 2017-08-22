import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockBrowserUnsupported = () => <div className="@@unsupported" />;
const BrowserUnsupportedContainer = proxyquire('./browserUnsupportedContainer', {
  './browserUnsupported': mockBrowserUnsupported,
}).default;
const setup = (jPlayers, props) => containerSetup(BrowserUnsupportedContainer, jPlayers, props);

describe('BrowserUnsupportedContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        mediaSettings: {},
      },
    };
  });

  it('renders BrowserUnsupported when the media is not supported', () => {
    jPlayers[id].mediaSettings.nonSupported = true;

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@unsupported').exists()).toBe(true);
  });

  it('does not render BrowserUnsupported when the media is supported', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@unsupported').exists()).toBe(false);
  });
});
