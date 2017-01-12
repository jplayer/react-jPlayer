import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { customAttributeTests } from '../../../common';
import PlaybackRateBarValue from '../../../../src/components/controls/values/playbackRateBar';

describe('<PlaybackRateBarValue />', () => {
  const elementSelector = 'div';
  const component = <PlaybackRateBarValue />;
  let wrapper;
  const styleTests = [
    { props: {
      playbackRate: 1,
      minPlaybackRate: 0.5,
      maxPlaybackRate: 4,
    },
      expected: { width: '14.285714285714285%', height: null } },
    { props: {
      playbackRate: 1,
      verticalPlaybackRate: true,
      minPlaybackRate: 0.5,
      maxPlaybackRate: 4,
    },
      expected: { width: null, height: '14.285714285714285%' } },
    { props: {
      playbackRate: 3,
      minPlaybackRate: 2,
      maxPlaybackRate: 4,
    },
      expected: { width: '50%', height: null } },
  ];

  beforeEach(() => {
    wrapper = shallow(component);
  });

  styleTests.forEach((test) => {
    it(`playback rate bar with the props (${Object.entries(test.props).join(' & ')}) match styles`,
    () => {
      wrapper.setProps(test.props);
      expect(wrapper.prop('style')).toEqual(test.expected);
    });
  });

  customAttributeTests(component, elementSelector);
});
