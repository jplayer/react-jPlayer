import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { internalStatus } from '../../util/constants';
import { __get__ } from './browserUnsupportedContainer';

const mapStateToProps = __get__('mapStateToProps');
const children = <div />;
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};

describe('BrowserUnsupportedContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    expect(expected).toEqual({
      foundSupported: internalStatus.mediaSettings.foundSupported,
      attributes,
      children,
    });
  });
});
