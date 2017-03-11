import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions } from '../../util/constants';
import { __get__ } from './volumeBarValueContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const id = 'jPlayer-1';

describe('VolumeBarValueContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      verticalVolume: false,
      muted: false,
      volume: defaultOptions.volume,
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
