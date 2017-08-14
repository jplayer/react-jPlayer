import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Gui from './gui';
import { classes } from '../../util/constants';

const setup = () => {
  const props = {
    opacity: 0.33,
    onMouseMove: expect.createSpy(),
    children: (<div className="@@jPlayer-test" />),
    'data-test': 'test',
  };

  const wrapper = shallow(<Gui {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Gui', () => {
  let wrapper;
  let props;

  it('renders children', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
  });

  it('renders additional properties', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  it('renders gui class', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.hasClass(classes.GUI)).toBe(true);
  });

  it('handles onMouseMove', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('mousemove');

    expect(props.onMouseMove).toHaveBeenCalled();
  });

  it('sets opacity to the style', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('style').opacity).toBe(props.opacity);
  });
});
