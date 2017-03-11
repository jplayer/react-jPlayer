import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, statusDefaultValues } from '../../util/constants';
import { __get__ } from './downloadContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('DownloadContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      free: defaultOptions.media.free,
      url: statusDefaultValues.src,
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
