import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import { setFullScreen } from '../_actions/actions';
import FullScreenContainer from './fullScreen.container';
import FullScreen from './fullScreen';

const setup = state => shallowSetup(FullScreenContainer, {
  children: (<i className="@@jPlayer-test" />),
}, state);

describe('FullScreenContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(FullScreen);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('onClick toggles fullScreen on when fullScreen false', () => {
    const { wrapper, state, jPlayer } = setup();

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setFullScreen(
      !jPlayer.fullScreen,
      state.uid,
    ));
  });

  it('onClick toggles fullScreen off when fullScreen true', () => {
    const { wrapper, state, jPlayer } = setup({ fullScreen: true });

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setFullScreen(
      !jPlayer.fullScreen,
      state.uid,
    ));
  });
});
