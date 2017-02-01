import React from 'react';
import expect from 'expect';

import { loopOptions } from '../../util/constants';
import { shallowSetup } from '../../util/common.spec';
import { setLoop } from '../_actions/actions';
import RepeatContainer from './repeat.container';
import Repeat from './repeat';

const setup = state => shallowSetup(RepeatContainer, {
  children: (<i className="@@jPlayer-test" />),
}, state);

describe('RepeatContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props } = setup();

    expect(wrapper.type()).toBe(Repeat);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
    expect(wrapper.prop('uid')).toNotExist();
    expect(wrapper.prop('dispatch')).toNotExist();
  });

  it('onClick toggles looped if off', () => {
    const { wrapper, state } = setup();

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setLoop(loopOptions.LOOP, state.uid));
  });

  it('onClick toggles loop off if looped', () => {
    const { wrapper, state } = setup({ loop: loopOptions.LOOP });

    wrapper.simulate('click');

    expect(state.store.dispatch).toHaveBeenCalledWith(setLoop(loopOptions.OFF, state.uid));
  });
});
