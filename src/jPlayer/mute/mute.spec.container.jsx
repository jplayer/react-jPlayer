import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import { setMute } from '../_actions/actions';
import MuteContainer from './mute.container';
import Mute from './mute';

const setup = state => shallowSetup(MuteContainer, {
  children: (<i className="@@jPlayer-test" />),
}, state);

describe('MuteContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(Mute);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('onClick toggles muted on when muted false', () => {
    const { wrapper, state, jPlayer } = setup();

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setMute(
      !jPlayer.muted,
      state.uid,
    ));
  });

  it('onClick toggles muted off when muted true', () => {
    const { wrapper, state, jPlayer } = setup({ muted: true });

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setMute(
      !jPlayer.muted,
      state.uid,
    ));
  });
});
