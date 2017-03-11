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
  const title = 'Test Title';
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
      },
    }), { id, ...attributes });

    expect(expected).toEqual({
      children: title,
      ...attributes,
    });
  });

  it('mapState maps custom children if specified over title', () => {
    const children = <div className="@@jPlayer-test" />;
    const expected = mapStateToProps(getJPlayers({
      media: {
        title,
      },
    }), { children, id });

    expect(expected).toEqual({
      children,
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
