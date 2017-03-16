import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setLoop } from '../../actions/actions';
import { __get__ } from './repeatContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const id = 'jPlayer-1';

describe('RepeatContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id });

    expect(expected).toEqual({
      loop: false,
    });
  });

  const onClickData = [
    { loop: false },
    { loop: true },
  ];

  it('merges props', () => {
    const expected = mergeProps({}, { dispatch }, { id, ...attributes });

    delete expected.onClick;

    expect(expected).toEqual({
      ...attributes,
    });
  });

  it('mergeProps onClick toggles loop', () => {
    onClickData.forEach((onClickDatum) => {
      const mergedProps = mergeProps(getJPlayers(onClickDatum).jPlayers[id],
        { dispatch }, { id });

      mergedProps.onClick();

      expect(dispatch).toHaveBeenCalledWith(setLoop(id, !onClickDatum.loop));
    });
  });
});
