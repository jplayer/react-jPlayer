import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setFullScreen } from '../_actions/actions';
import { __get__ } from './fullScreenContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const fullScreenStates = [
   { fullScreen: false },
   { fullScreen: true },
];
const uid = 'jPlayer-1';
const dispatchProps = {
  dispatch: createSpy(),
};
const children = <div />;

describe('FullScreenContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      fullScreen: false,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({
      fullScreen: true,
    }, dispatchProps, { uid, children });

    delete expected.onClick;

    expect(expected).toEqual({
      uid,
      children,
    });
  });

  fullScreenStates.forEach((fullScreenState) => {
    it(`onClick toggles fullScreen (value: ${fullScreenState.fullScreen})`, () => {
      const expected = mergeProps(fullScreenState, dispatchProps, { uid });

      expected.onClick();

      expect(dispatchProps.dispatch).toHaveBeenCalledWith(setFullScreen(
        !fullScreenState.fullScreen,
        uid,
      ));
    });
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
  });
});
