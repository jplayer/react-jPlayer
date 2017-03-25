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
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<PlaybackRateBarValue {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<PlaybackRateBarValue />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR_VALUE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });

  styleTests.forEach((test) => {
    it(`props (${Object.entries(test.props).join(' & ')}) match styles`,
    () => {
      wrapper.setProps(test.props);

      expect(wrapper.prop('style')).toEqual(test.expected);
    });
  });
});
