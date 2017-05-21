import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Gui, { __get__ } from './gui';

const setup = (newProps) => {
  const props = {
    onMouseMove: createSpy(),
    children: (<div className="@@jPlayer-test" />),
    fullScreen: false,
    guiFadeOut: false,
    'data-test': 'test',
    ...newProps,
  };

  const wrapper = shallow(<Gui {...props} />);

  return {
    props,
    wrapper,
  };
};
const motion = __get__('motion');

describe('Gui', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());
    const gui = wrapper.dive();

    gui.simulate('mousemove');

    expect(props.onMouseMove).toHaveBeenCalled();
    expect(gui.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(gui.hasClass(classes.GUI)).toBeTruthy();
    expect(gui.prop('data-test')).toBe(props['data-test']);
  });

  it('default opacity for motion is 1', () => {
    ({ wrapper, props } = setup());
    expect(wrapper.prop('defaultStyle')).toEqual({
      opacity: 1,
    });
  });

  it('opacity for motion is 1 when fullScreen false', () => {
    ({ wrapper, props } = setup());
    expect(wrapper.prop('style')).toEqual({
      opacity: 1,
    });
  });

  it('opacity value is 1 when fullScreen true and guiFadeOut false', () => {
    ({ wrapper, props } = setup({ fullScreen: true }));
    expect(wrapper.prop('style').opacity.val).toBe(1);
  });

  it('opacity value is 0 when fullScreen true and guiFadeOut true', () => {
    ({ wrapper, props } = setup({ fullScreen: true, guiFadeOut: true }));
    expect(wrapper.prop('style').opacity.val).toBe(0);
  });

  it('opacity gets set to parameter opacity', () => {
    const opacity = 0.2;
    const motionWrapper = shallow(motion({ opacity }));
    expect(motionWrapper.prop('style').opacity).toBe(opacity);
  });

  it('display is none when opacity is', () => {
    const motionWrapper = shallow(motion({ opacity: 0 }));
    expect(motionWrapper.prop('style').display).toBe('none');
  });

  it('display is not none when opacity is not 0', () => {
    const motionWrapper = shallow(motion({ opacity: 0.1 }));
    expect(motionWrapper.prop('style').display).toBe('');
  });

  afterEach(() => {
    props.onMouseMove.reset();
  });
});
