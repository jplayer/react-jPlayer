import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import Title from './title';

describe('<Title />', () => {
  const component = (
    <Title>
      fade
    </Title>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.prop('children')).toBe('fade');
  });

  it('has title class', () => {
    expect(wrapper.hasClass(classes.TITLE)).toBeTruthy();
  });

  customAttributeTests(component);
});
