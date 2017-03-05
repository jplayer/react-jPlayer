import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setOption } from '../_actions/actions';
import { __get__ } from './guiContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const dispatchProps = {
  dispatch: createSpy(),
};
const uid = 'jPlayer-1';
const children = <div />;

describe('GuiContainer', () => {
  beforeEach(() => {
    spyOn(global, 'clearTimeout');
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers({
      guiFadeHoldTimeout: 0,
    }), { uid });

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
    }, dispatchProps, { uid, children });

    delete expected.onMouseMove;

    expect(expected).toEqual({
      fullScreen: true,
      guiFadeOut: false,
      uid,
      children,
    });
  });

  it('onMouseMove fades gui out if fullScreen and not paused', () => {
    const guiFadeHoldTimeout = 0;
    const expected = mergeProps({
      fullScreen: true,
      paused: false,
      guiFadeHoldTimeout,
    },
    dispatchProps, { uid });

    expected.onMouseMove();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(setOption(
      'guiFadeOut',
      false,
      uid,
    ));
    expect(clearTimeout).toHaveBeenCalledWith(guiFadeHoldTimeout);
  });

  it('does not fade out if not fullScreen and not paused', () => {
    const expected = mergeProps({
      fullScreen: false,
      paused: false,
    }, dispatchProps, { uid });

    expected.onMouseMove();

    expect(dispatchProps.dispatch).toNotHaveBeenCalled();
    expect(clearTimeout).toNotHaveBeenCalled();
  });

  it('does not fade out if fullScreen and paused', () => {
    const expected = mergeProps({
      fullScreen: true,
      paused: true,
    }, dispatchProps, { uid });

    expected.onMouseMove();

    expect(dispatchProps.dispatch).toNotHaveBeenCalled();
    expect(clearTimeout).toNotHaveBeenCalled();
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
    restoreSpies();
  });
});
