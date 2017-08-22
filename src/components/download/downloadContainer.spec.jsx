import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockDownload = () => <div className="@@download" />;
const DownloadContainer = proxyquire('./downloadContainer', {
  './download': mockDownload,
}).default;
const setup = (jPlayers, props) => containerSetup(DownloadContainer, jPlayers, props);

describe('DownloadContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        media: {},
      },
    };
  });

  it('renders Download when the media is free', () => {
    jPlayers[id].media.free = true;

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@download').exists()).toBe(true);
  });

  it('does not render Download when the media is not free', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@download').exists()).toBe(false);
  });
});
