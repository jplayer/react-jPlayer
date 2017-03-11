import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { statusDefaultValues } from '../../util/constants';
import { __get__ } from './currentTimeContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('CurrentTimeContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      children: statusDefaultValues.currentTimeText,
      ...attributes,
    });
  });

  it('merges props', () => {
    const stateProps = getJPlayers();
    const expected = mergeProps({ ...stateProps, ...attributes }, dispatch, { id });

    expect(expected).toEqual({
      ...stateProps,
      ...attributes,
    });
  });

  it('maps custom children if specified', () => {
    const children = '0:20';
    const expected = mapStateToProps(getJPlayers(), { id: 'jPlayer-1', children });

    expect(expected.children).toBe(children);
  });
});
