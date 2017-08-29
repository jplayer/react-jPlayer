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
  it('calls onClick', () => {
    const onClick = expect.createSpy();
    const { playbackRateBar } = setup({ onClick });

    playbackRateBar.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('calls onMouseDown', () => {
    const onMouseDown = expect.createSpy();
    const { playbackRateBar } = setup({ onMouseDown });

    playbackRateBar.simulate('mousedown');

    expect(onMouseDown).toHaveBeenCalled();
  });

  it('calls onTouchStart', () => {
    const onTouchStart = expect.createSpy();
    const { playbackRateBar } = setup({ onTouchStart });

    playbackRateBar.simulate('touchstart');

    expect(onTouchStart).toHaveBeenCalled();
  });

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
