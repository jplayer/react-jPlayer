import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import Title from './title';

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
