import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import PlayContainer from '../../../src/containers/controls/play';
import Play from '../../../src/components/controls/play';
import { play, pause } from '../../../src/actions/jPlayerActions';

describe('Play Container', () => {
  const id = 'audio-player-one';
  const children = <i />;
  const attributes = {
    className: 'test',
  };
  const store = configureMockStore()({
    jPlayers: {
      'audio-player-one': { paused: false },
    },
  });
  let dispatchSpy;
  let wrapper;

  beforeEach(() => {
    dispatchSpy = expect.spyOn(store, 'dispatch');
    wrapper = shallow(
      <PlayContainer className={attributes.className}>
        {children}
      </PlayContainer>,
      { context: { id } },
      ).shallow({ context: { store } });
  });

  it('onClick toggles play if paused', () => {
    wrapper.simulate('click');
    expect(dispatchSpy).toHaveBeenCalledWith(play(id));
  });
  it('onClick toggles pause if playing', () => {
    wrapper.simulate('click');
    expect(dispatchSpy).toHaveBeenCalledWith(pause(id));
  });
  it('renders component', () => expect(wrapper.type()).toBe(Play));
  it('maps children', () => expect(wrapper.prop('children')).toBe(children));
  it('maps attributes', () => expect(wrapper.prop('attributes')).toEqual(attributes));
});
