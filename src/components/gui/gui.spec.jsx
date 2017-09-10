import React from 'react';
import expect from 'expect';

import Gui from './gui';
import componentSetup from '../../util/specHelpers/componentSetup.spec';
import { classes } from '../../util/constants';

const setup = props => componentSetup(Gui, {
  opacity: 0.7,
  onMouseMove: expect.createSpy(),
  children: <div />,
  ...props,
});

describe('Gui', () => {
  it('has gui class', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass(classes.GUI)).toBe(true);
  });

  it('calls onMouseMove', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('mousemove');

    expect(props.onMouseMove).toHaveBeenCalled();
  });

  it('opacity is set on the style', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('style').opacity).toBe(props.opacity);
  });

  it('children are rendered', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
  });
});
