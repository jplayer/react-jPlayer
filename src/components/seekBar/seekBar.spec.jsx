import expect from 'expect';

import SeekBar from './seekBar';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const testProps = componentSetup(SeekBar, {
    seekPercent: 22,
    clickMoveBar: Function.prototype,
    touchMoveBar: Function.prototype,
    ...props,
  });

  testProps.seekBar = testProps.wrapper.find(`.${classes.SEEK_BAR}`);

  return testProps;
};

describe('Seekbar', () => {
  it('renders children', () => {
    const children = 'seekBar';
    const { seekBar } = setup({ children });

    expect(seekBar.prop('children')).toBe(children);
  });

  it('renders seekPercent as style width', () => {
    const { seekBar, props } = setup();

    expect(seekBar.prop('style').width).toBe(`${props.seekPercent}%`);
  });
});
