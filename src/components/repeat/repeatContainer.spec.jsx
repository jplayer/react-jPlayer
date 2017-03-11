import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setLoop } from '../../actions/actions';
import { loopOptions } from '../../util/constants';
import { __get__ } from './repeatContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const uid = 'jPlayer-1';

describe('RepeatContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      loop: loopOptions.OFF,
    });
  });

  const onClickData = [
    { loop: loopOptions.OFF },
    { loop: loopOptions.LOOP },
  ];

  it('merges props', () => {
    const expected = mergeProps({}, { dispatch }, { uid, ...attributes });

    delete expected.onClick;

    expect(expected).toEqual({
      ...attributes,
    });
  });

  it('mergeProps onClick toggles loop', () => {
    onClickData.forEach((onClickDatum) => {
      const expected = onClickDatum.loop === loopOptions.LOOP ? loopOptions.OFF
        : loopOptions.LOOP;
      const mergedProps = mergeProps(getJPlayers(onClickDatum).jPlayers[uid],
        { dispatch }, { uid });

      mergedProps.onClick();

      expect(dispatch).toHaveBeenCalledWith(setLoop(expected, uid));
    });
  });
});
