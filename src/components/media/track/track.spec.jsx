import expect from 'expect';

import Track from './track';
import componentSetup from '../../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Track, {
  src: 'www.test.vrt',
  ...props,
});

describe('Track', () => {
  it('renders track element', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('track');
  });
});
