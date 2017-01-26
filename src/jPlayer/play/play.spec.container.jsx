import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { play, pause } from '../actions';
import { mockStore } from '../../util/common.spec';
import PlayContainer from './play.container';
import Play from './play';

describe('Play Container', () => {
  const uid = 'player-1';
  let wrapper;
  let store;

  const renderWrapper = (state = {}) => {
    store = mockStore(state);
    expect.spyOn(store, 'dispatch');
    wrapper = shallow(
      <PlayContainer className="test">
        <div />
      </PlayContainer>,
      { context: { uid } },
    ).dive({ context: { store } });
  };

  beforeEach(() => {
    renderWrapper();
  });

  it('onClick toggles play if paused', () => {
    renderWrapper({ paused: true });
    wrapper.simulate('click');
    expect(store.dispatch).toHaveBeenCalledWith(play(uid));
  });

  it('onClick toggles pause if playing', () => {
    wrapper.simulate('click');
    expect(store.dispatch).toHaveBeenCalledWith(pause(uid));
  });

  it('renders component', () => {
    expect(wrapper.type()).toBe(Play);
  });

  it('maps children', () => {
    // expect(wrapper.prop('children').type).toBe(Play);
  });

  it('maps attributes', () => {
    expect(wrapper.prop('className')).toEqual('test');
  });
});
