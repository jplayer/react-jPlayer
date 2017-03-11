import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions } from '../../util/constants';
import { __get__ } from './browserUnsupportedContainer';

const mapStateToProps = __get__('mapStateToProps');
const children = <div />;
const id = 'jPlayer-1';

describe('BrowserUnsupportedContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children });

    expect(expected).toEqual({
      foundSupported: defaultOptions.mediaSettings.foundSupported,
      children,
    });
  });
});
