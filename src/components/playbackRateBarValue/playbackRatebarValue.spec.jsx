import expect from 'expect';

import PlaybackRateBarValue from './playbackRateBarValue';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(PlaybackRateBarValue, {
  verticalPlaybackRate: false,
  minPlaybackRate: 0,
  maxPlaybackRate: 1,
  playbackRate: 0.5,
  ...props,
});

describe('PlaybackRateBarValue', () => {
  it('has playbackRateBarValue class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR_VALUE)).toBe(true);
  });

  describe('styles', () => {
    it('map correctly when verticalPlaybackRate is false', () => {
      const { wrapper } = setup();

      expect(wrapper.prop('style')).toEqual({
        width: '50%',
        height: null,
      });
    });

    it('map correctly when verticalPlaybackRate is true', () => {
      const { wrapper } = setup({ verticalPlaybackRate: true });

      expect(wrapper.prop('style')).toEqual({
        width: null,
        height: '50%',
      });
    });
  });
});
