import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PlayContainer from './play.container';
import Play from './play';
import { play, pause } from '../actions';
import { mockStore } from '../../util/common.spec';

describe('Play Container', () => {
  const uid = 'audio-player-1';
  const children = <i />;
  let wrapper;
  let store;

  const renderWrapper = (state) => {
    store = mockStore(state);
    expect.spyOn(store, 'dispatch');
    wrapper = shallow(
      <PlayContainer className="test">
        {children}
      </PlayContainer>,
      { context: { uid } },
    ).shallow({ context: { store } });
  };

  beforeEach(() => {
    renderWrapper({ paused: false });
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
    expect(wrapper.prop('children')).toBe(children);
  });

  it('maps attributes', () => {
    expect(wrapper.prop('className')).toEqual('test');
  });
});
