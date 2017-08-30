import React from 'react';
import expect from 'expect';
import proxyquire from 'proxyquire';

import containerSetup from '../../util/specHelpers/containerSetup.spec';

proxyquire.noCallThru();

const id = 'TestPlayer';
const mockPoster = () => <image className="@@poster" />;
const PosterContainer = proxyquire('./posterContainer', {
  './poster': mockPoster,
}).default;
const setup = (jPlayers, props) => containerSetup(PosterContainer, jPlayers, props);

describe('PosterContainer', () => {
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: {
        media: {
          poster: null,
        },
      },
    };
  });

  it('renders Poster when the poster is supplied', () => {
    jPlayers[id].media.poster = 'test.jpg';

    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@poster').exists()).toBe(true);
  });

  it('does not render poster when the poster is not supplied', () => {
    const { wrapper } = setup(jPlayers);

    expect(wrapper.find('.@@poster').exists()).toBe(false);
  });
});
