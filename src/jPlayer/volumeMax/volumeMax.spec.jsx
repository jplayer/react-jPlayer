import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../../src/util/constants';
import VolumeMax from './volumeMax';

describe('<VolumeMax />', () => {
  const component = (
    <VolumeMax>
      <i className="fa fa-volume-up" />
    </VolumeMax>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.children('.fa-volume-up').exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has volumeMax class', () => {
    expect(wrapper.hasClass(classes.VOLUME_MAX)).toBeTruthy();
  });

  // customAttributeTests(component);
});
