import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions } from '../../util/constants';
import { __get__ } from './volumeBarValueContainer';

const mapStateToProps = __get__('mapStateToProps');
const attributes = {
  'data-test': 'test',
};
const children = <div />;
const id = 'jPlayer-1';

describe('VolumeBarValueContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    expect(expected).toEqual({
      verticalVolume: false,
      muted: false,
      volume: defaultOptions.volume,
      children,
      attributes,
    });
  });
});
