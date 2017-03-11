import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Title from './title';

const setup = () => {
  const props = {
    children: 'fade',
    'data-test': 'test',
  };

  const wrapper = shallow(<Title {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Title />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
