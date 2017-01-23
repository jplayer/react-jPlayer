import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { customAttributeTests, barDraggingTests } from '../../common';
import PlaybackRateBar from '../../../src/components/controls/playbackRateBar';
import PlaybackRateBarValue from '../../../src/components/controls/playbackRateBarValue';

describe('<PlaybackRateBar />', () => {
  const component = (
    <PlaybackRateBar>
      <PlaybackRateBarValue />
    </PlaybackRateBar>
  );
  const wrapper = mount(component);
  const props = {
    barValueFn: 'playbackRate',
  };

  it('renders child', () => {
    expect(wrapper.find(PlaybackRateBarValue).length).toBeTruthy();
  });

  barDraggingTests(wrapper, props);
  customAttributeTests(component);
});
