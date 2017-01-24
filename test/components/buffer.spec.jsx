import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Buffer from '../../src/components/buffer';
import { classes } from '../../src/util/constants';

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
