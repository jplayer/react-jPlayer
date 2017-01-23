import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { customAttributeTests } from '../../common';
import VolumeBar from '../../../src/components/controls/volumeBar';
import VolumeBarValue from '../../../src/components/controls/volumeBarValue';

describe('<VolumeBar />', () => {
  const component = (
    <VolumeBar>
      <VolumeBarValue />
    </VolumeBar>
  );
  const wrapper = mount(component);

  it('renders child', () => {
    expect(wrapper.find(VolumeBarValue).length).toBeTruthy();
  });

  customAttributeTests(component);
});
