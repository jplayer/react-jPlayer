import React from 'react';
import expect, { createSpy } from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './playbackRateBarValueContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('PlaybackRateBarValueContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      verticalPlaybackRate: false,
      minPlaybackRate: 0.5,
      maxPlaybackRate: 4,
      playbackRate: 1,
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
});
