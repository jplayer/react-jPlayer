import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../../src/util/constants';
import Repeat from './repeat';

describe('<Repeat />', () => {
  const component = (
    <Repeat>
      <i className="fa fa-repeat" />
    </Repeat>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.children('.fa-repeat').exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has repeat class', () => {
    expect(wrapper.hasClass(classes.REPEAT)).toBeTruthy();
  });

  // customAttributeTests(component);
});
