import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { getDefaultJPlayers } from '../util/common.spec';
import { defaultOptions, defaultStatus } from '../util/constants';
import connect, { __get__ } from './connect';
import * as actions from '../actions/actions';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const getActions = __get__('getActions');
const id = 'jPlayer-1';
const jPlayerTwoId = 'jPlayer-2';
const mockPlayerName = 'MockPlayer';
const mockPlayerOptions = {
  muted: true,
};
const dispatch = createSpy();
const jPlayerActions = actions;
delete jPlayerActions.default;
const getMappedActionsData = (jPlayer = getDefaultJPlayers(1, true).jPlayers[id]) => [
  { action: 'setOption', args: ['muted', jPlayer.muted] },
  { action: 'setMedia', args: [jPlayer.media] },
  { action: 'clearMedia', args: [] },
  { action: 'play', args: [33] },
  { action: 'pause', args: [77] },
  { action: 'setPlayHead', args: [jPlayer.playHeadPercent] },
  { action: 'setVolume', args: [jPlayer.volume] },
  { action: 'setMute', args: [jPlayer.muted] },
  { action: 'setDuration', args: [230] },
  { action: 'setPlaybackRate', args: [jPlayer.playbackRate] },
  { action: 'setLoop', args: [jPlayer.loop] },
  { action: 'setFullScreen', args: [jPlayer.fullScreen] },
  { action: 'setFocus', args: [] },
];

describe('JPlayerConnect', () => {
  let MockPlayer;

  beforeEach(() => {
    MockPlayer = () => <div />;
    MockPlayer.options = mockPlayerOptions;
  });

  it('maps state', () => {
    const state = getDefaultJPlayers(2, true);
    const expected = mapStateToProps(state);

    expect(expected).toEqual(state.jPlayers);
  });

  it('merges props with custom props', () => {
    const customProp = 'test';
    const jPlayers = getDefaultJPlayers().jPlayers;
    const expected = mergeProps(jPlayers, { dispatch }, { id, customProp });

    expect(expected).toContain({
      customProp,
    });
  });

  it('custom props with same name as state get overwritten', () => {
    const options = 'test';
    const jPlayers = getDefaultJPlayers().jPlayers;
    const expected = mergeProps(jPlayers, { dispatch }, { id, options });

    expect(expected).toNotContain({
      options,
    });
  });

  it('merges current player', () => {
    const jPlayers = getDefaultJPlayers(1, true).jPlayers;
    const expected = mergeProps(jPlayers, { dispatch }, { id });
    const mergedActions = getActions();
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
      ...mergedActions,
      options,
      status,
    });
  });

  it('merges other players', () => {
    const jPlayers = getDefaultJPlayers(3, true).jPlayers;
    const expected = mergeProps(jPlayers, { dispatch }, { id: jPlayerTwoId });
    const mergedActions = getActions();
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
        ...mergedActions,
        options,
        status,
      };
    });

    expect(otherJPlayers).toEqual(expected.jPlayers);
  });

  it('all actions are mapped', () => {
    const jPlayers = getDefaultJPlayers().jPlayers;
    const mergedProps = mergeProps(jPlayers, { dispatch }, { id });

    expect(mergedProps).toIncludeKeys(Object.keys(jPlayerActions));
  });

  getMappedActionsData().forEach(({ action, args }) => {
    const mergedProps = mergeProps(getDefaultJPlayers(3, true).jPlayers, { dispatch }, { id });
    let expectedArgs;

    it(`dispatches current jPlayer mapped ${action} action when called`, () => {
      expectedArgs = [...args];

      mergedProps[action](...args);

      expectedArgs.push(id);
      expect(dispatch).toHaveBeenCalledWith(actions[action](...expectedArgs));
    });

    it(`dispatches other jPlayers mapped ${action} action when called`, () => {
      Object.keys(mergedProps.jPlayers).forEach((key) => {
        const jPlayer = mergedProps.jPlayers[key];
        expectedArgs = [...args];

        jPlayer[action](...args);

        expectedArgs.push(key);

        expect(dispatch).toHaveBeenCalledWith(actions[action](...expectedArgs));
      });
    });
  });

  it('renders connected player', () => {
    const Component = connect(MockPlayer);
    const wrapper = shallow(<Component test="test" />);

    expect(wrapper.prop('id')).toBe(mockPlayerName);
    expect(wrapper.prop('test')).toBe('test');
  });

  it('sets id if function name is undefined', () => {
    Object.defineProperty(MockPlayer, 'name', { value: undefined });
    const Component = connect(MockPlayer);
    const wrapper = shallow(<Component />);

    expect(wrapper.prop('id')).toBe(mockPlayerName);
  });

  it('component returns id', () => {
    const Component = connect(MockPlayer);

    expect(Component.id).toBe(mockPlayerName);
  });

  it('component returns original jPlayer', () => {
    const Component = connect(MockPlayer);

    expect(Component.jPlayer).toBe(MockPlayer);
  });

  afterEach(() => {
    dispatch.reset();
  });
});
