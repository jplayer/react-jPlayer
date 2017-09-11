import expect from 'expect';

import Video from './video';
import Media from '../media/mediaContainer';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

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

const setup = (props) => {
  const values = componentSetup(Video, {
    ...props,
  });

  values.video = values.wrapper.dive();

  return values;
};

describe('Video', () => {
  describe('when video is required', () => {
    const require = true;

    it('renders video in Media', () => {
      const { video } = setup({ require });

      expect(video.find(Media).find('video').exists()).toBe(true);
    });

    Object.keys(events).forEach((key) => {
      it(`passes ${key} to Media`, () => {
        const { video } = setup({ ...events, require });

        expect(video.find(Media).prop(key)).toBe(events[key]);
      });
    });
  });

  it('renders nothing if video is not required', () => {
    const { video } = setup();

    expect(video.type()).toBe(null);
  });
});
