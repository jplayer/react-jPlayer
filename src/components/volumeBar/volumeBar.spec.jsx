import expect from 'expect';

import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValueContainer';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const testProps = componentSetup(VolumeBar, {
    clickMoveBar: expect.createSpy(),
    touchMoveBar: expect.createSpy(),
    ...props,
  });

  testProps.volumeBar = testProps.wrapper.find(`.${classes.VOLUME_BAR}`);

  return testProps;
};

describe('VolumeBar', () => {
  describe('children', () => {
    it('overwrite default', () => {
      const children = 'volume';
      const { volumeBar } = setup({ children });

      expect(volumeBar.prop('children')).toBe(children);
    });

    it('renders volumeBarValue as default', () => {
      const { volumeBar } = setup();

      expect(volumeBar.find(VolumeBarValue).exists()).toBe(true);
    });
  });
});
