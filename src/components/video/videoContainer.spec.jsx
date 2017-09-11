/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockVideo = () =>
  <video />;
const videoContainer = proxyquire('./videoContainer', {
  './video': mockVideo,
}).default;
const setup = (jPlayers, props) => containerSetup(videoContainer, jPlayers, props);

describe('VideoContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        mediaSettings: {},
      },
    };
  });

  describe('require', () => {
    it('is true when video is true', () => {
      jPlayers[id].mediaSettings.video = true;

      const { wrapper } = setup(jPlayers);

      expect(wrapper.find(mockVideo).prop('require')).toBe(true);
    });

    it('is falsy when video is falsy', () => {
      const { wrapper } = setup(jPlayers);

      expect(wrapper.find(mockVideo).prop('require')).toBeFalsy();
    });
  });
});
