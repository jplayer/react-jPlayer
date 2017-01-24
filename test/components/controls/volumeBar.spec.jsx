import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { customAttributeTests } from '../../common';
import VolumeBar from '../../../src/components/controls/volumeBar';
import VolumeBarValue from '../../../src/components/controls/volumeBarValue';
import { classes } from '../../../src/util/constants';

describe('<VolumeBar />', () => {
  const component = <VolumeBar />;
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
