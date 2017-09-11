/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockAudio = () =>
  <audio />;
const audioContainer = proxyquire('./audioContainer', {
  './audio': mockAudio,
}).default;
const setup = (jPlayers, props) => containerSetup(audioContainer, jPlayers, props);

describe('AudioContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        mediaSettings: {},
      },
    };
  });

  describe('require', () => {
    it('is true when video is falsy', () => {
      const { wrapper } = setup(jPlayers);

      expect(wrapper.find(mockAudio).prop('require')).toBe(true);
    });

    it('is false when video is falsy', () => {
      jPlayers[id].mediaSettings.video = true;

      const { wrapper } = setup(jPlayers);

      expect(wrapper.find(mockAudio).prop('require')).toBe(false);
    });
  });
});
