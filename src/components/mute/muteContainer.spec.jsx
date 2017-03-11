import React from 'react';
import expect, { createSpy } from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { setMute } from '../../actions/actions';
import { __get__ } from './muteContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const uid = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('MuteContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      muted: false,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({}, { dispatch }, { uid, ...attributes });

    delete expected.onClick;

    expect(expected).toEqual({
      ...attributes,
    });
  });

  const muteData = [
    { muted: false },
    { muted: true },
  ];

  it('mergeProps onClick toggle mute', () => {
    muteData.forEach((muteDatum) => {
      const mergedProps = mergeProps(getJPlayers(muteDatum).jPlayers[uid],
        { dispatch }, { uid });

      mergedProps.onClick();

      expect(dispatch).toHaveBeenCalledWith(setMute(!muteDatum.muted, uid));
    });
  });
});
