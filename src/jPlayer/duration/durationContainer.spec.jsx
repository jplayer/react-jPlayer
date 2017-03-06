import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { statusDefaultValues } from '../../util/constants';
import { __get__ } from './durationContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const uid = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('DurationContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, ...attributes });

    expect(expected).toEqual({
      children: statusDefaultValues.durationText,
      ...attributes,
    });
  });

  it('merges props', () => {
    const stateProps = getJPlayers();
    const expected = mergeProps({ ...stateProps, ...attributes }, dispatch, { uid });

    expect(expected).toEqual({
      ...stateProps,
      ...attributes,
    });
  });

  it('maps custom children if specified', () => {
    const children = '2:35';
    const expected = mapStateToProps(getJPlayers(), { uid, children });

    expect(expected.children).toBe(children);
  });
});
