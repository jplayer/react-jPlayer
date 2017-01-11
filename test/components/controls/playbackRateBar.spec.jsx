import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { customAttributeTests } from '../../common';
import PlaybackRateBar from '../../../src/components/controls/playbackRateBar';
import PlaybackRateBarValue from '../../../src/components/controls/values/playbackRateBar';

describe('<PlaybackRateBar />', () => {
  const elementSelector = 'div';
  const component = (
    <PlaybackRateBar>
      <PlaybackRateBarValue />
    </PlaybackRateBar>
  );
  const wrapper = mount(component);
  let instance;

  beforeEach(() => {
    instance = wrapper.instance();
  });

  it('renders child', () => {
    expect(wrapper.find(PlaybackRateBarValue).length).toBeTruthy();
  });

  it('moves playback on click', () => {
    let playbackRateBarValue;

    wrapper.setProps({
      playbackRate: newPlaybackRateBarValue => (playbackRateBarValue = newPlaybackRateBarValue)
    });

    wrapper.simulate('click');
    expect(playbackRateBarValue).toEqual(NaN);
  });

  it('moves playback on mouse move', () => {
    let playbackRateBarValue;

    instance.componentWillMount();
    instance.dragging = true;
    wrapper.setProps({
      playbackRate: newPlaybackRateBarValue => (playbackRateBarValue = newPlaybackRateBarValue),
      barDrag: true,
    });
    document.dispatchEvent(new Event('mousemove'));
    expect(playbackRateBarValue).toEqual(NaN);
  });

  it('starts dragging on mouse down', () => {
    instance.dragging = false;
    wrapper.simulate('mousedown');
    expect(instance.dragging).toBeTruthy();
  });

  it('stops dragging on mouse up', () => {
    instance.dragging = true;
    instance.componentWillMount();
    document.dispatchEvent(new Event('mouseup'));
    expect(instance.dragging).toBeFalsy();
  });

  customAttributeTests(component, elementSelector);
});
