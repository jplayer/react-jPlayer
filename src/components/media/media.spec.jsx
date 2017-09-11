import React from 'react';
import expect from 'expect';

import Media from './media';
import Events from './events/eventsContainer';
import Track from './track/track';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const events = {
  onAbort: expect.createSpy(),
  onCanPlay: expect.createSpy(),
  onCanPlayThrough: expect.createSpy(),
  onDurationChange: expect.createSpy(),
  onEmptied: expect.createSpy(),
  onEncrypted: expect.createSpy(),
  onEnded: expect.createSpy(),
  onError: expect.createSpy(),
  onLoadedData: expect.createSpy(),
  onLoadedMetadata: expect.createSpy(),
  onLoadStart: expect.createSpy(),
  onPause: expect.createSpy(),
  onPlay: expect.createSpy(),
  onPlaying: expect.createSpy(),
  onProgress: expect.createSpy(),
  onRateChange: expect.createSpy(),
  onSeeked: expect.createSpy(),
  onSeeking: expect.createSpy(),
  onStalled: expect.createSpy(),
  onSuspend: expect.createSpy(),
  onTimeUpdate: expect.createSpy(),
  onVolumeChange: expect.createSpy(),
  onWaiting: expect.createSpy(),
};

const setup = props => componentSetup(Media, {
  setCurrentMedia: expect.createSpy(),
  updateMediaStatus: expect.createSpy(),
  tracks: [],
  children: <div />,
  ...events,
  ...props,
});

describe('Media', () => {
  describe('Events', () => {
    it('passes updateMediaStatus', () => {
      const { props, wrapper } = setup();

      expect(wrapper.prop('updateMediaStatus')).toBe(props.updateMediaStatus);
    });

    Object.keys(events).forEach((key) => {
      it(`passes ${key} to Events`, () => {
        const { wrapper } = setup({ require });

        expect(wrapper.prop(key)).toBe(events[key]);
      });
    });
  });

  it('renders children as a child of Events', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Events).find(`.${classes.MEDIA}`).exists()).toBe(true);
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
    const mediaChildren = wrapper.find(`.${classes.MEDIA}`).children();

    expect(mediaChildren.length).toBe(1);
    expect(mediaChildren.type()).toBe(Track);
  });
});
