import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import VideoContainer from './video.container';
import Video from './video';

const setup = state => shallowSetup(VideoContainer, {
  children: (<source />),
}, state);

describe('TitleContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(Video);
    expect(wrapper.prop('require')).toBe(jPlayer.mediaSettings.video);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });
});
