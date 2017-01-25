import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import Buffer from './buffer';

describe('<Buffer />', () => {
  const component = <Buffer />;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('has buffer class', () => {
    expect(wrapper.hasClass(classes.BUFFER_BAR)).toBeTruthy();
  });

  customAttributeTests(component);
});
