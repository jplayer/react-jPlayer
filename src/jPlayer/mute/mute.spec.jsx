import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../../src/util/constants';
import Mute from './mute';

describe('<Mute />', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = expect.createSpy();
    wrapper = shallow(
      <Mute onClick={spy}>
        <i className="fa fa-mute" />
      </Mute>,
    );
  });

  it('renders children', () => {
    expect(wrapper.children('.fa-mute').exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has mute class', () => {
    expect(wrapper.hasClass(classes.MUTE)).toBeTruthy();
  });

  // customAttributeTests(component);
});
