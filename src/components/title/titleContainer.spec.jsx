import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './titleContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('TitleContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const title = 'Test Title';
    const artist = 'Test Artist';
    const children = <div className="@@jPlayer-test" />;
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
        artist,
      },
    }), { children, id, ...attributes });

    expect(expected).toEqual({
      children,
      title,
      artist,
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
