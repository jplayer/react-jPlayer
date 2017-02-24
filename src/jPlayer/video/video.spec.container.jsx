import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import VideoContainer from './video.container';
import Video from './video';

const setup = () => shallowSetup(VideoContainer, {
  children: (<source className="@@jPlayer-test" />),
});

describe('VideoContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(Video);
    expect(wrapper.prop('require')).toBe(jPlayer.mediaSettings.video);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
