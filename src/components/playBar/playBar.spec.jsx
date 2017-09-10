import expect from 'expect';

import PlayBar from './playBar';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(PlayBar, {
  smoothPlayBar: false,
  smoothWidth: 22,
  currentPercentRelative: 33,
  ...props,
});

describe('PlayBar', () => {
  it('has gui class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.PLAY_BAR)).toBe(true);
  });

  describe('width', () => {
    it('is smoothWidth when smoothPlayBar is true', () => {
      const { wrapper, props } = setup({ smoothPlayBar: true });

      expect(wrapper.prop('style').width).toBe(`${props.smoothWidth}%`);
    });

    it('is smoothWidth when smoothPlayBar is true', () => {
      const { wrapper, props } = setup();

      expect(wrapper.prop('style').width).toBe(`${props.currentPercentRelative}%`);
    });
  });
});
