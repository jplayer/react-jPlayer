import expect from 'expect';

import VolumeBarValue from './volumeBarValue';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(VolumeBarValue, {
  volume: 1,
  muted: false,
  verticalVolume: false,
  ...props,
});

describe('VolumeBarValue', () => {
  it('has volumeBarValue class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.VOLUME_BAR_VALUE)).toBe(true);
  });

  describe('styles', () => {
    it('map correctly when verticalVolume is false', () => {
      const { wrapper } = setup();

      expect(wrapper.prop('style')).toEqual({
        width: '100%',
        height: null,
      });
    });

    it('map correctly when verticalVolume is true', () => {
      const { wrapper } = setup({ verticalVolume: true });

      expect(wrapper.prop('style')).toEqual({
        width: null,
        height: '100%',
      });
    });
  });
});
