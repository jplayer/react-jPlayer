import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import CurrentTime from '../../src/components/currentTime';
import { classes } from '../../src/util/constants';

describe('<CurrentTime />', () => {
  const children = '0:00';
  const component = (
    <CurrentTime>
      {children}
    </CurrentTime>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.prop('children')).toBe(children);
  });

  it('has currentTime class', () => {
    wrapper.setProps({ className: classes.CURRENT_TIME });
    expect(wrapper.hasClass(classes.CURRENT_TIME)).toBeTruthy();
  });

  customAttributeTests(component);
});
