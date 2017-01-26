import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Duration from './duration';

const setup = () => {
  const props = {
    children: '50',
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Duration {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Duration />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.DURATION)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
