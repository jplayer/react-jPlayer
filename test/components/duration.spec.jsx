import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Duration from '../../src/components/duration';
import { classes } from '../../src/util/constants';

describe('<Duration />', () => {
  const children = '';
  const component = <Duration />;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.prop('children')).toBe(children);
  });

  it('has duration class', () => {
    wrapper.setProps({ className: classes.DURATION });
    expect(wrapper.hasClass(classes.DURATION)).toBeTruthy();
  });

  customAttributeTests(component);
});
