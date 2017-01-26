import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import Duration from './duration';

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
