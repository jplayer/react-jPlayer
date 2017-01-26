import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../../src/util/constants';
import PlaybackRateBarValue from './playbackRateBarValue';

describe('<PlaybackRateBarValue />', () => {
  const component = <PlaybackRateBarValue />;
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

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  styleTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match styles`,
    () => {
      wrapper.setProps(test.props);
      expect(wrapper.prop('style')).toEqual(test.expected);
    });
  });

  it('has playbackRateBarValue class', () => {
    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR_VALUE)).toBeTruthy();
  });

  // customAttributeTests(component);
});
