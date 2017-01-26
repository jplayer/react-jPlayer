import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import { customAttributeTests } from '../../util/common.spec';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValue';

describe('<VolumeBar />', () => {
  const component = (
    <VolumeBar>
      <VolumeBarValue />
    </VolumeBar>
  );
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders children', () => {
    expect(wrapper.children(VolumeBarValue).exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    wrapper.setProps({ onClick: spy });
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('calls handler on mouse down', () => {
    wrapper.setProps({ onMouseDown: spy });
    wrapper.simulate('mousedown');
    expect(spy).toHaveBeenCalled();
  });

  it('has volumeBar class', () => {
    expect(wrapper.hasClass(classes.VOLUME_BAR)).toBeTruthy();
  });

  customAttributeTests(component);
});
