import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import AudioContainer from './audio.container';
import Audio from './audio';

const setup = state => shallowSetup(AudioContainer, {
  children: (<track />),
}, state);

describe('AudioContainer', () => {
  it('render component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(Audio);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('require is true when video is false', () => {
    const { wrapper, jPlayer } = setup();

    expect(wrapper.prop('require')).toBe(!jPlayer.mediaSettings.video);
  });

  it('require is false when video is true', () => {
    const { wrapper, jPlayer } = setup({ mediaSettings: { video: true } });

    expect(wrapper.prop('require')).toBe(!jPlayer.mediaSettings.video);
  });
});
