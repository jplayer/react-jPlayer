import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Title from './title';

const setup = () => {
  const props = {
    children: 'fade',
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Title {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Title />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
