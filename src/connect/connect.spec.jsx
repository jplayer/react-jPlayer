import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { getDefaultJPlayers, getJPlayers } from '../util/common.spec';
import { defaultOptions, defaultStatus } from '../util/constants';
import connect, { __get__ } from './connect';
import * as actions from '../actions/actions';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';
const jPlayerTwoId = 'jPlayer-2';
const mockPlayerOptions = {
  muted: true,
  id,
};
const dispatch = createSpy();
const jPlayerActions = actions;
delete jPlayerActions.default;

describe('JPlayerConnect', () => {
  let MockPlayer;

  beforeEach(() => {
    MockPlayer = () => <div />;
  });

  it('maps props with custom props', () => {
    const customProp = 'test';
    const jPlayers = getDefaultJPlayers().jPlayers;
    const expected = mapStateToProps({ jPlayers }, { id, customProp });

    expect(expected).toContain({
      customProp,
    });
  });

  it('custom props with same name as state get overwritten', () => {
    const props = {
      status: {},
    };
    const jPlayers = getJPlayers().jPlayers;
    const expected = mapStateToProps({ jPlayers }, { id, ...props });

    expect(defaultStatus).toEqual(expected.status);
  });

  it('maps current player', () => {
    const jPlayers = getDefaultJPlayers(1, true).jPlayers;
    const expected = mapStateToProps({ jPlayers }, { id });
    const status = {};
    const options = {};

    Object.keys(defaultOptions).forEach((key) => {
      const property = jPlayers[id][key];

      if (property !== undefined) {
        options[key] = property;
      }
    });

    Object.keys(defaultStatus).forEach((key) => {
      const property = jPlayers[id][key];

      if (property !== undefined) {
        status[key] = property;
      }
    });

    expect(expected).toEqual({
      options,
      status,
      id,
    });
  });

  it('maps other players', () => {
    const jPlayers = getDefaultJPlayers(3, true).jPlayers;
    const expected = mapStateToProps({ jPlayers }, { id: jPlayerTwoId });
    const otherJPlayers = {};

    delete jPlayers[jPlayerTwoId];

    Object.keys(jPlayers).forEach((jPlayerKey) => {
      const jPlayer = jPlayers[jPlayerKey];
      const status = {};
      const options = {};

      Object.keys(defaultOptions).forEach((key) => {
        if (jPlayer[key] !== undefined) {
          options[key] = jPlayer[key];
        }
      });

      Object.keys(defaultStatus).forEach((key) => {
        if (jPlayer[key] !== undefined) {
          status[key] = jPlayer[key];
        }
      });

      otherJPlayers[jPlayerKey] = {
        options,
        status,
      };
    });

    expect(otherJPlayers).toEqual(expected.jPlayers);
  });

  it('mapDispatchToProps handles all actions', () => {
    expect(mapDispatchToProps).toEqual({
      ...jPlayerActions,
    });
  });

  it('renders connected player', () => {
    const Component = connect(MockPlayer, mockPlayerOptions);
    const wrapper = shallow(<Component test="test" />);

    expect(wrapper.prop('id')).toBe(mockPlayerOptions.id);
    expect(wrapper.prop('test')).toBe('test');
  });

  it('component returns original jPlayer', () => {
    const Component = connect(MockPlayer, mockPlayerOptions);

    expect(Component.jPlayer).toBe(MockPlayer);
  });

  it('component returns options', () => {
    const Component = connect(MockPlayer, mockPlayerOptions);

    expect(Component.options).toBe(mockPlayerOptions);
  });

  afterEach(() => {
    dispatch.reset();
  });
});
