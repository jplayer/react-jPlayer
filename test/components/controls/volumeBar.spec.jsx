import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { customAttributeTests, barDraggingTests } from '../../common';
import VolumeBar from '../../../src/components/controls/volumeBar';
import VolumeBarValue from '../../../src/components/controls/values/volumeBar';

describe('<VolumeBar />', () => {
  const elementSelector = 'div';
  const component = (
    <VolumeBar>
      <VolumeBarValue />
    </VolumeBar>
  );
  const wrapper = mount(component);
  const props = {
    barValueFn: 'volume',
  };

  it('renders child', () => {
    expect(wrapper.find(VolumeBarValue).length).toBeTruthy();
  });

  barDraggingTests(wrapper, props);
  customAttributeTests(component, elementSelector);
});
