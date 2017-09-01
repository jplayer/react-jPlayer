import expect from 'expect';

import Audio from './audio';
import Media from '../media/mediaContainer';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Audio, props);

describe('Audio', () => {
  it('renders audio in Media', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Media).find('audio').exists()).toBe(true);
  });

  it('passes events to media', () => {
    const events = {
      onCanPlay: expect.createSpy(),
    };
    const { wrapper } = setup({ events });

    expect(wrapper.find(Media).prop('events')).toBe(events);
  });
});
