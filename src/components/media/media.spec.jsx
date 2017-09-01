import React from 'react';
import expect from 'expect';

import Media from './media';
import Events from './events/eventsContainer';
import Track from './track/track';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const mockCurrentMedia = {
  src: 'www.test.com',
};
const setup = props => componentSetup(Media, {
  getCurrentMedia: expect.createSpy().andReturn(mockCurrentMedia),
  setCurrentMedia: expect.createSpy(),
  updateMediaStatus: expect.createSpy(),
  tracks: [],
  children: <div className="@@media" />,
  ...props,
});

describe('Media', () => {
  describe('Events', () => {
    it('passes currentMedia', () => {
      const { wrapper } = setup();

      expect(wrapper.prop('currentMedia')).toBe(mockCurrentMedia);
    });

    it('passes updateMediaStatus', () => {
      const { props, wrapper } = setup();

      expect(wrapper.prop('updateMediaStatus')).toBe(props.updateMediaStatus);
    });

    it('passes events', () => {
      const events = {
        onCanPlay: expect.createSpy(),
      };
      const { wrapper } = setup({ events });

      expect(wrapper.prop('onCanPlay')).toBe(events.onCanPlay);
    });
  });

  it('renders children as a child of Events', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Events).find('.@@media').exists()).toBe(true);
  });

  it('renders tracks as childrens child', () => {
    const tracks = [
      {
        default: true,
        kind: 'subtitles',
        src: 'www.test.vrt',
        label: 'Video Subtitles',
        srclang: 'en',
      },
    ];
    const { wrapper } = setup({ tracks });
    const mediaChildren = wrapper.find('.@@media').children();

    expect(mediaChildren.length).toBe(1);
    expect(mediaChildren.type()).toBe(Track);
  });
});
