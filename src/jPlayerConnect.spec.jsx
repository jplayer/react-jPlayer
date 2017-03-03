import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers, getDefaultJPlayers } from './util/common.spec';
import { defaultOptions, statusDefaultValues } from './util/constants';
import jPlayerConnect, { __get__ } from './jPlayerConnect';
import * as actions from './jPlayer/_actions/actions';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const uid = 'jPlayer-1';

const MockPlayer = () => <div />;

describe('JPlayerConnect', () => {
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

  it('maps all actions to props', () => {
    const expected = mapDispatchToProps(Function.prototype);
    const jPlayerActions = actions;
    delete jPlayerActions.default;

    expect(expected).toIncludeKeys(Object.keys(jPlayerActions));
  });

  it('connects player to store', () => {
    const Component = jPlayerConnect(MockPlayer);
    const wrapper = shallow(<Component test="test" />);

    expect(wrapper.prop('uid')).toBe('MockPlayer');
    expect(wrapper.prop('test')).toBe('test');
  });
});
