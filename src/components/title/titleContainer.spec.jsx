import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './titleContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};
const children = <div />;

describe('TitleContainer', () => {
  it('maps state', () => {
    const title = 'Test Title';
    const artist = 'Test Artist';
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { children, id, ...attributes });

    expect(expected).toEqual({
      title,
      artist,
      children,
      attributes,
    });
  });
});
