import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers, getDefaultJPlayers } from '../util/common.spec';
import { defaultOptions, statusDefaultValues } from '../util/constants';
import connect, { __get__ } from './connect';
import * as actions from '../actions/actions';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const uid = 'jPlayer-1';
const mockPlayerName = 'MockPlayer';
const mockPlayerOptions = {
  muted: true,
};
const getMappedActionsData = (newId, jPlayer = getDefaultJPlayers(1, true).jPlayers[uid]) => {
  const time = 33;
  const remaningDuration = 230;
  return [
    { action: 'setOption', args: ['muted', jPlayer.muted, newId] },
    { action: 'setMedia', args: [jPlayer.media, newId] },
    { action: 'clearMedia', args: [newId] },
    { action: 'play', args: [{ time, uid: newId }] },
    { action: 'pause', args: [{ time, uid: newId }] },
    { action: 'setPlayHead', args: [jPlayer.playHeadPercent, newId] },
    { action: 'setVolume', args: [jPlayer.volume, newId] },
    { action: 'setMute', args: [jPlayer.muted, newId] },
    { action: 'setDuration', args: [{ remaningDuration, uid: newId }] },
    { action: 'setPlaybackRate', args: [jPlayer.playbackRate, newId] },
    { action: 'setLoop', args: [jPlayer.loop, newId] },
    { action: 'setFullScreen', args: [jPlayer.fullScreen, newId] },
    { action: 'setFocus', args: [newId] },
  ];
};

describe('JPlayerConnect', () => {
  let MockPlayer;
  let dispatch;

  beforeEach(() => {
    MockPlayer = () => <div />;
    MockPlayer.options = mockPlayerOptions;
    dispatch = createSpy();
  });
  it('maps state with custom props', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, test: 'test' });

    expect(expected).toEqual({
      ...defaultOptions,
      ...statusDefaultValues,
      test: 'test',
    });
  });

  it('custom props with same name as state get overwritten', () => {
    const expected = mapStateToProps(getJPlayers({ muted: true }), { uid, muted: false });

    expect(expected).toEqual({
      ...defaultOptions,
      ...statusDefaultValues,
      muted: true,
    });
  });

  it('maps other players if they exist', () => {
    const expected = mapStateToProps(getDefaultJPlayers(3, true), { uid: 'jPlayer-2' });

    expect(expected).toEqual({
      ...defaultOptions,
      ...statusDefaultValues,
      jPlayers: {
        'jPlayer-1': {
          ...defaultOptions,
          ...statusDefaultValues,
        },
        'jPlayer-3': {
          ...defaultOptions,
          ...statusDefaultValues,
        },
      },
    });
  });

  it('all actions are mapped', () => {
    const mappedActions = mapDispatchToProps(Function.prototype, { uid });
    const jPlayerActions = actions;

    delete jPlayerActions.default;

    const actionsLength = Object.keys(jPlayerActions).length;
    const expectedLength = Object.keys(mappedActions).length;

    expect(expectedLength).toBe(actionsLength);
  });

  getMappedActionsData(uid).forEach(({ action, args }) => {
    it(`dispatches mapped ${action} when called with custom uid`, () => {
      const mappedActions = mapDispatchToProps(dispatch, { currentId: 'TestPlayer' });

      mappedActions[action](...args);
      expect(dispatch).toHaveBeenCalledWith(actions[action](...args));
    });
  });

  getMappedActionsData().forEach(({ action, args }, i) => {
    it(`dispatches mapped ${action} when called with default uid`, () => {
      const currentId = 'AudioPlayer';
      const mappedActions = mapDispatchToProps(dispatch, { currentId });

      mappedActions[action](...args);

      const expectedActionsArgs = getMappedActionsData(currentId)[i].args;
      expect(dispatch).toHaveBeenCalledWith(actions[action](...expectedActionsArgs));
    });
  });

  it('renders connected player', () => {
    const Component = connect(MockPlayer);
    const wrapper = shallow(<Component test="test" />);

    expect(wrapper.prop('uid')).toBe(mockPlayerName);
    expect(wrapper.prop('test')).toBe('test');
  });

  it('sets uid if function name is undefined', () => {
    Object.defineProperty(MockPlayer, 'name', { value: undefined });
    const Component = connect(MockPlayer);
    const wrapper = shallow(<Component />);

    expect(wrapper.prop('uid')).toBe(mockPlayerName);
  });

  it('component returns uid', () => {
    const Component = connect(MockPlayer);

    expect(Component.uid).toBe(mockPlayerName);
  });

  it('component returns options', () => {
    const Component = connect(MockPlayer);

    expect(Component.options).toBe(mockPlayerOptions);
  });
});
