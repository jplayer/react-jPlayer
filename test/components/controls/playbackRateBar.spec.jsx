import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { customAttributeTests } from '../../common';
import PlaybackRateBar from '../../../src/components/controls/playbackRateBar';
import PlaybackRateBarValue from '../../../src/components/controls/playbackRateBarValue';

describe('<PlaybackRateBar />', () => {
  const component = <PlaybackRateBar />;
  const wrapper = mount(component);

  it('renders child', () => {
    expect(wrapper.find(PlaybackRateBarValue).length).toBeTruthy();
  });

  customAttributeTests(component);
});
