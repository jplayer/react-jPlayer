import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PlayContainer from '../../../src/containers/controls/play';
import Play from '../../../src/components/controls/play';
import actions, { play, pause } from '../../../src/actions/jPlayerActions';
import { mockStore } from '../../common';
import configureMockStore from 'redux-mock-store';

describe('Play Container', () => {
  const id = 'audio-player-1';
  const children = <i />;
  const attributes = {
    className: 'test',
  };
  const store = mockStore({ paused: false });
  let dispatchSpy;
  let connected;
  let wrapper;

  beforeEach(() => {
    expect.spyOn(store, 'dispatch');
    connected = shallow(
      <PlayContainer className={attributes.className}>
        {children}
      </PlayContainer>,
      { context: { id } },
      );
    wrapper = connected.shallow({ context: { store } });
  });

  it('onClick toggles play if paused', () => {
    wrapper.simulate('click');
    expect(store.dispatch).toHaveBeenCalledWith(play(id));
  });
  it('onClick toggles pause if playing', () => {
    wrapper.simulate('click');
    expect(dispatchSpy).toHaveBeenCalledWith(pause(id));
  });
  it('renders component', () => expect(wrapper.type()).toBe(Play));
  it('maps children', () => expect(wrapper.prop('children')).toBe(children));
  it('maps attributes', () => expect(wrapper.prop('attributes')).toEqual(attributes));
});
