import React from 'react';
import expect from 'expect';

import Bar from './bar';
import componentSetup from '../util/specHelpers/componentSetup.spec';

const setup = props => componentSetup(Bar, {
  children: <div className="@@bar" />,
  onClick: expect.createSpy(),
  onMouseDown: expect.createSpy(),
  onTouchStart: expect.createSpy(),
  setBar: expect.createSpy(),
  ...props,
});

describe('Bar', () => {
  it('calls onClick', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });

  it('calls onMouseDown', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('mousedown');

    expect(props.onMouseDown).toHaveBeenCalled();
  });

  it('calls onTouchStart', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('touchstart');

    expect(props.onTouchStart).toHaveBeenCalled();
  });

  it('children are rendered', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.@@bar').exists()).toBe(true);
  });
});
