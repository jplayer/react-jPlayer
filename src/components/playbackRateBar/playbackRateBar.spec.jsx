import expect from 'expect';

import PlaybackRateBar from './playbackRateBar';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const id = 'TestPlayer';
const setup = props => componentSetup(PlaybackRateBar, {
  children: 'playbackRate',
  ...props,
});

describe('PlaybackRateBar', () => {
  it('has playbackRateBar class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR)).toBe(true);
  });

  it('calls onClick', () => {
    const onClick = expect.createSpy();
    const { wrapper } = setup({ onClick });

    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('calls onMouseDown', () => {
    const onMouseDown = expect.createSpy();
    const { wrapper } = setup({ onMouseDown });

    wrapper.simulate('mousedown');

    expect(onMouseDown).toHaveBeenCalled();
  });

  it('calls onTouchStart', () => {
    const onTouchStart = expect.createSpy();
    const { wrapper } = setup({ onTouchStart });

    wrapper.simulate('touchstart');

    expect(onTouchStart).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
