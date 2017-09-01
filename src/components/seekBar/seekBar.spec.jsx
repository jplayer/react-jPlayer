import React from 'react';
import expect from 'expect';

import SeekBar from './seekBar';
import { classes } from '../../util/constants';
import componentSetup from '../../util/specHelpers/componentSetup.spec';

const setup = (props) => {
  const testProps = componentSetup(SeekBar, {
    seekPercent: 22,
    clickMoveBar: expect.createSpy(),
    touchMoveBar: expect.createSpy(),
    children: <div />,
    ...props,
  });

  testProps.seekBar = testProps.wrapper.find(`.${classes.SEEK_BAR}`);

  return testProps;
};

describe('Seekbar', () => {
  it('renders children', () => {
    const { seekBar, props } = setup();

    expect(seekBar.prop('children')).toBe(props.children);
  });

  it('renders seekPercent as style width', () => {
    const { seekBar, props } = setup();

    expect(seekBar.prop('style').width).toBe(`${props.seekPercent}%`);
  });
});
