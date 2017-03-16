import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setOption } from '../../actions/actions';
import { __get__ } from './guiContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('GuiContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
    spyOn(global, 'clearTimeout');
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers({
      guiFadeHoldTimeout: 0,
    }), { id });

    expect(expected).toEqual({
      fullScreen: false,
      paused: true,
      guiFadeOut: false,
      guiFadeHoldTimeout: 0,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({
      fullScreen: true,
      guiFadeOut: false,
    }, { dispatch }, { id, ...attributes });

    delete expected.onMouseMove;

    expect(expected).toEqual({
      fullScreen: true,
      guiFadeOut: false,
      ...attributes,
    });
  });

  it('onMouseMove fades gui out if fullScreen and not paused', () => {
    const guiFadeHoldTimeout = 0;
    const expected = mergeProps({
      fullScreen: true,
      paused: false,
      guiFadeHoldTimeout,
    },
    { dispatch }, { id });

    expected.onMouseMove();

    expect(dispatch).toHaveBeenCalledWith(setOption(
      id,
      'guiFadeOut',
      false,
    ));
    expect(clearTimeout).toHaveBeenCalledWith(guiFadeHoldTimeout);
  });

  it('does not fade out if not fullScreen and not paused', () => {
    const expected = mergeProps({
      fullScreen: false,
      paused: false,
    }, { dispatch }, { id });

    expected.onMouseMove();

    expect(dispatch).toNotHaveBeenCalled();
    expect(clearTimeout).toNotHaveBeenCalled();
  });

  it('does not fade out if fullScreen and paused', () => {
    const expected = mergeProps({
      fullScreen: true,
      paused: true,
    }, { dispatch }, { id });

    expected.onMouseMove();

    expect(dispatch).toNotHaveBeenCalled();
    expect(clearTimeout).toNotHaveBeenCalled();
  });

  afterEach(() => {
    restoreSpies();
  });
});
