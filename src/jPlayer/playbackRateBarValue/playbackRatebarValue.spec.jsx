import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import PlaybackRateBarValue from './playbackRateBarValue';

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

const setup = () => {
  const props = {
    playbackRate: 1.0,
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<PlaybackRateBarValue {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<PlaybackRateBarValue />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR_VALUE)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  styleTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match styles`,
    () => {
      const { wrapper } = setup();

      wrapper.setProps(test.props);

      expect(wrapper.prop('style')).toEqual(test.expected);
    });
  });
});
