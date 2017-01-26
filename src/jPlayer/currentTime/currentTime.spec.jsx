import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import CurrentTime from './currentTime';

describe('<CurrentTime />', () => {
  const component = (
    <CurrentTime>
      0:00
    </CurrentTime>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.prop('children')).toBe('0:00');
  });

  it('has currentTime class', () => {
    expect(wrapper.hasClass(classes.CURRENT_TIME)).toBeTruthy();
  });

  // customAttributeTests(component);
});
