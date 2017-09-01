import expect from 'expect';

import PlayBarAnimation from './animation';
import PlayBar from './playBar';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(PlayBarAnimation, {
  smoothPlayBar: false,
  currentPercentRelative: 33,
  currentPercentAbsolute: 22,
  ...props,
});

describe('PlayBarAnimation', () => {
  it('renders PlayBar as a child', () => {
    const { wrapper } = setup();

    expect(wrapper.dive().type()).toBe(PlayBar);
  });

  describe('Motion', () => {
    it('smoothWidth for motion is currentPercentAbsolute', () => {
      const { wrapper, props } = setup();

      expect(wrapper.prop('style').smoothWidth.val).toBe(props.currentPercentAbsolute);
    });
  });
});
