import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockTitleContainer = () => <div className="@@title" />;
const TitleContainer = proxyquire('./titleContainer', {
  './title': mockTitleContainer,
}).default;
const setup = (jPlayers, props) => containerSetup(TitleContainer, jPlayers, props);

describe('TitleContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        media: {
          artist: null,
          title: null,
        },
      },
    };
  });

  it('renders Title when the title is not empty', () => {
    jPlayers[id].media.artist = 'dj tiesto';

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@title').exists()).toBe(true);
  });

  it('does not render Title when the title is empty', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@title').exists()).toBe(false);
  });
});
