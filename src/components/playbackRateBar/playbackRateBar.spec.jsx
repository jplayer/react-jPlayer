import expect from 'expect';

import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValueContainer';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const testProps = componentSetup(PlaybackRateBar, {
    clickMoveBar: expect.createSpy(),
    touchMoveBar: expect.createSpy(),
    ...props,
  });

  testProps.playbackRateBar = testProps.wrapper.find(`.${classes.PLAYBACK_RATE_BAR}`);

  return testProps;
};

describe('PlaybackRateBar', () => {
  describe('children', () => {
    it('overwrite default', () => {
      const children = 'playbackRate';
      const { playbackRateBar } = setup({ children });

      expect(playbackRateBar.prop('children')).toBe(children);
    });

    it('renders playbackRateBarValue as default', () => {
      const { playbackRateBar } = setup();

      expect(playbackRateBar.find(PlaybackRateBarValue).exists()).toBe(true);
    });
  });
});
