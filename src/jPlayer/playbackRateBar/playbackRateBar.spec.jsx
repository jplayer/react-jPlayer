import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../../src/util/constants';
import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValue.container';

const setup = () => {
  const props = {
    onClick: createSpy(),
    onMouseDown: createSpy(),
    setPlaybackRate: Function.prototype,
    children: (<PlaybackRateBarValue />),
  };

  const wrapper = shallow(<PlaybackRateBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<PlaybackRateBar />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');
    wrapper.simulate('mousedown');

    expect(wrapper.children(PlaybackRateBarValue).exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.PLAYBACK_RATE_BAR)).toBeTruthy();
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onMouseDown).toHaveBeenCalled();
  });

  // customAttributeTests(component);
});
