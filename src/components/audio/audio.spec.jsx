import expect from 'expect';

import Audio from './audio';
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
  const values = componentSetup(Audio, {
    ...props,
  });

  values.audio = values.wrapper.dive();

  return values;
};

describe('Audio', () => {
  describe('when audio is required', () => {
    const require = true;

    it('renders audio in Media', () => {
      const { audio } = setup({ require });

      expect(audio.find(Media).find('audio').exists()).toBe(true);
    });

    Object.keys(events).forEach((key) => {
      it(`passes ${key} to Media`, () => {
        const { audio } = setup({ ...events, require });

        expect(audio.find(Media).prop(key)).toBe(events[key]);
      });
    });
  });

  it('renders nothing if audio is not required', () => {
    const { audio } = setup();

    expect(audio.type()).toBe(null);
  });
});
