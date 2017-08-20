/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const mockBrowserUnsupported = () => <div className="@@unsupported" />;
const BrowserUnsupportedContainer = proxyquire('./browserUnsupportedContainer', {
  './browserUnsupported': mockBrowserUnsupported,
}).default;
const setup = (jPlayers, props) => containerSetup(BrowserUnsupportedContainer, jPlayers, props);

describe('BrowserUnsupportedContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      TestPlayer: {
        mediaSettings: {},
      },
    };
  });

  it('renders BrowserUnsupported when the media is not supported', () => {
    jPlayers.TestPlayer.mediaSettings.nonSupported = true;

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@unsupported').exists()).toBe(true);
  });

  it('does not render BrowserUnsupported when the media is supported', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@unsupported').exists()).toBe(false);
  });
});
