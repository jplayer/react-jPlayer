import expect from 'expect';

import Video from './video';
import Media from '../media/mediaContainer';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Video, props);

describe('Video', () => {
  it('renders video in Media', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Media).find('video').exists()).toBe(true);
  });

  it('passes events to media', () => {
    const events = {
      onCanPlay: expect.createSpy(),
    };
    const { wrapper } = setup({ events });

    expect(wrapper.find(Media).prop('events')).toBe(events);
  });
});
