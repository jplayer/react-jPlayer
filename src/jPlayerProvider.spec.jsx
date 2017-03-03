import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import merge from 'lodash.merge';
import { Provider } from 'react-redux';

import { defaultOptions, statusDefaultValues } from './util/constants';
import JPlayerProvider from './jPlayerProvider';

const MockPlayer = () => <div />;
const MockPlayerTwo = () => <div />;
const MockChildren = <div className="@@jPlayer-test" />;

MockPlayer.options = {
  muted: true,
};
MockPlayer.uid = MockPlayer.name;

MockPlayerTwo.options = {
  autoplay: true,
};
MockPlayerTwo.uid = MockPlayerTwo.name;

describe('JPlayerProvider', () => {
  it('sets initial state correctly with one player', () => {
    const wrapper = shallow(
      <JPlayerProvider jPlayers={MockPlayer}>
        {MockChildren}
      </JPlayerProvider>,
    );
    const store = wrapper.instance().store;

    expect(store.getState()).toEqual({
      jPlayers: {
        MockPlayer: merge({}, {
          ...statusDefaultValues,
          ...defaultOptions,
          id: MockPlayer.uid,
        }, MockPlayer.options),
      },
    });
  });

  it('sets initial state correctly with multiple players', () => {
    const wrapper = shallow(
      <JPlayerProvider jPlayers={[MockPlayer, MockPlayerTwo]}>
        {MockChildren}
      </JPlayerProvider>,
    );
    const store = wrapper.instance().store;

    expect(store.getState()).toEqual({
      jPlayers: {
        MockPlayer: merge({}, {
          ...statusDefaultValues,
          ...defaultOptions,
          id: MockPlayer.uid,
        }, MockPlayer.options),
        MockPlayerTwo: merge({}, {
          ...statusDefaultValues,
          ...defaultOptions,
          id: MockPlayerTwo.uid,
        }, MockPlayerTwo.options),
      },
    });
  });

  it('renders provider and children', () => {
    const wrapper = shallow(
      <JPlayerProvider jPlayers={MockPlayer}>
        {MockChildren}
      </JPlayerProvider>,
    );

    expect(wrapper.type()).toBe(Provider);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBe(true);
  });
});
