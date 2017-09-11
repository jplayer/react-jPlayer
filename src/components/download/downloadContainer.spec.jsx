import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockDownload = () =>
  <div />;
const downloadContainer = proxyquire('./downloadContainer', {
  './download': mockDownload,
}).default;
const setup = (jPlayers, props) => containerSetup(downloadContainer, jPlayers, props);

describe('DownloadContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        media: {
          free: true,
        },
        src: 'test.com',
      },
    };
  });

  it('passes in free', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockDownload).prop('free')).toBe(true);
  });

  it('passes in url', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find(mockDownload).prop('url')).toBe('test.com');
  });
});
