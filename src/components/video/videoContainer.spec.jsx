/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockVideo = () => <video />;
const VideoContainer = proxyquire('./videoContainer', {
  './video': mockVideo,
}).default;
const setup = (jPlayers, props) => containerSetup(VideoContainer, jPlayers, props);

describe('VideoContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        mediaSettings: {},
      },
    };
  });

  it('renders Video when the media is video', () => {
    jPlayers[id].mediaSettings.video = true;
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('video').exists()).toBe(true);
  });

  it('does not render Video when the media is not video', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('video').exists()).toBe(false);
  });
});
