import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, defaultStatus } from '../../util/constants';
import { __get__ } from './downloadContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};
const children = <div />;

describe('DownloadContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    expect(expected).toEqual({
      free: defaultOptions.media.free,
      url: defaultStatus.src,
      children,
      attributes,
    });
  });
});
