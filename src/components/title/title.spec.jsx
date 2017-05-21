import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Title from './title';

const setup = (newProps) => {
  const props = {
    attributes: {
      'data-test': 'test',
    },
    children: 'Fade - Alan Walker',
    ...newProps,
  };

  const wrapper = shallow(<Title {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Title', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });

  it('renders null if children is empty string', () => {
    ({ wrapper, props } = setup({ children: '' }));
    expect(wrapper.type()).toBe(null);
  });
});
