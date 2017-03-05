import React from 'react';
import expect, { createSpy } from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { play, pause } from '../_actions/actions';
import { __get__ } from './playContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const uid = 'jPlayer-1';
const children = <div />;

describe('MuteContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      paused: true,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({}, { dispatch }, { uid, children });

    delete expected.onClick;

    expect(expected).toEqual({
      uid,
      children,
    });
  });

  it('mergeProps onClick when paused will play', () => {
    const dispatch = createSpy();
    const mergedProps = mergeProps(getJPlayers().jPlayers[uid], { dispatch }, { uid });

    mergedProps.onClick();

    expect(dispatch).toHaveBeenCalledWith(play(uid));
  });

  it('mergeProps onClick when playing will pause', () => {
    const dispatch = createSpy();
    const mergedProps = mergeProps(getJPlayers({ paused: false }).jPlayers[uid],
      { dispatch }, { uid });

    mergedProps.onClick();

    expect(dispatch).toHaveBeenCalledWith(pause(uid));
  });
});

