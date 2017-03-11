import React from 'react';
import expect, { createSpy } from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './playBarContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const uid = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('PlayBarContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, ...attributes });

    expect(expected).toEqual({
      smoothPlayBar: false,
      currentPercentAbsolute: 0,
      currentPercentRelative: 0,
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
});
