import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Title from '../../src/components/title';
import { classes } from '../../src/util/constants';

describe('<Title />', () => {
  const component = (
    <Title title="fade" />
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders title as children', () => {
    expect(wrapper.prop('children')).toBe('fade');
  });

  it('has title class', () => {
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
  });

  customAttributeTests(component);
});
