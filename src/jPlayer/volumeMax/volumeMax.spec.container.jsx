import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import { setVolume, setMute } from '../_actions/actions';
import VolumeMaxContainer from './volumeMax.container';
import VolumeMax from './volumeMax';

const setup = state => shallowSetup(VolumeMaxContainer, {
  children: (<i className="@@jPlayer-test" />),
}, state);

describe('VolumeMaxContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(VolumeMax);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('onClick sets volume to max', () => {
    const { wrapper, state } = setup();

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setVolume(state.uid, 1));
  });

  it('onClick toggle mute off if muted', () => {
    const { wrapper, state } = setup({ muted: true });

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setMute(false, state.uid));
  });
});
