import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Duration from '../../src/components/duration';
import { classes } from '../../src/util/constants';

describe('<Duration />', () => {
  const component = (
    <Duration>
      <div className="duration" />
    </Duration>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.children('.duration').exists()).toBeTruthy();
  });

  it('has duration class', () => {
    expect(wrapper.hasClass(classes.DURATION)).toBeTruthy();
  });

  customAttributeTests(component);
});
