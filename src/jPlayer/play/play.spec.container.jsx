import React from 'react';
import expect from 'expect';

import { shallowSetup } from '../../util/common.spec';
import { play, pause } from '../actions';
import PlayContainer from './play.container';
import Play from './play';

const setup = state => shallowSetup(PlayContainer, {
  children: (<i className="@@jPlayer-test" />),
}, state);

describe('PlayContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(Play);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('onClick toggles play if paused', () => {
    const { wrapper, state } = setup();

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(play(state.uid));
  });

  it('onClick toggles pause if playing', () => {
    const { wrapper, state } = setup({ paused: false });

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(pause(state.uid));
  });
});
