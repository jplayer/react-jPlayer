import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import Duration from './duration';

const setup = (newProps) => {
  const props = {
    children: '50',
    'data-test': 'test',
    ...newProps,
  };

  const wrapper = shallow(<Duration {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Duration', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.hasClass(classes.DURATION)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  it('renders null if children is empty', () => {
    ({ wrapper, props } = setup({ children: '' }));

    expect(wrapper.type()).toBe(null);
  });
});
