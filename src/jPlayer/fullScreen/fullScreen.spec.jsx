import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../../src/util/constants';
import FullScreen from './fullScreen';

describe('<FullScreen />', () => {
  const component = (
    <FullScreen>
      <i className="fa fa-fullScreen" />
    </FullScreen>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.children('.fa-fullScreen').exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has fullScreen class', () => {
    expect(wrapper.hasClass(classes.FULL_SCREEN)).toBeTruthy();
  });

  customAttributeTests(component);
});
