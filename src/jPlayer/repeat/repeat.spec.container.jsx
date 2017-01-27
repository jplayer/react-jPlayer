import React from 'react';
import expect from 'expect';

import { loopOptions } from '../../util/constants';
import { shallowSetup } from '../../util/common.spec';
import { setLoop } from '../actions';
import RepeatContainer from './repeat.container';
import Repeat from './repeat';

const setup = state => shallowSetup(RepeatContainer, {
  children: (<i />),
}, state);

describe('RepeatContainer', () => {
  it('renders component and maps state', () => {
    const { wrapper, props, jPlayer } = setup();

    expect(wrapper.type()).toBe(Repeat);
    expect(wrapper.prop('children')).toBe(props.children);
    expect(wrapper.prop('data-attribute-test')).toEqual(props['data-attribute-test']);
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
