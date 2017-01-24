import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../common';
import Play from '../../../src/components/controls/play';
import { classes } from '../../../src/util/constants';

describe('<Play />', () => {
  const component = (
    <Play>
      <i className="fa fa-play" />
    </Play>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.children('.fa-play').exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has play class', () => {
    expect(wrapper.hasClass(classes.PLAY)).toBeTruthy();
  });

  customAttributeTests(component);
});
