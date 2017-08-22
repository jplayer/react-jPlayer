/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockAudio = () => <audio />;
const AudioContainer = proxyquire('./audioContainer', {
  './audio': mockAudio,
}).default;
const setup = (jPlayers, props) => containerSetup(AudioContainer, jPlayers, props);

describe('AudioContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        mediaSettings: {},
      },
    };
  });

  it('renders Audio when the media is audio', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('audio').exists()).toBe(true);
  });

  it('does not render Audio when the media is video', () => {
    jPlayers[id].mediaSettings.video = true;

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('audio').exists()).toBe(false);
  });
});
