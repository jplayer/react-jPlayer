import expect from 'expect';

import Video from './video';
import Media from '../media/mediaContainer';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

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

    it('passes events to media', () => {
      const events = {
        onCanPlay: expect.createSpy(),
      };
      const { video } = setup({ require, events });

      expect(video.find(Media).prop('events')).toBe(events);
    });
  });

  it('renders nothing if video is not required', () => {
    const { video } = setup();

    expect(video.type()).toBe(null);
  });
});
