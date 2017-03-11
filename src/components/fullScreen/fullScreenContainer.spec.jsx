import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setFullScreen } from '../../actions/actions';
import { __get__ } from './fullScreenContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const fullScreenStates = [
   { fullScreen: false },
   { fullScreen: true },
];
const uid = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('FullScreenContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      fullScreen: false,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({
      fullScreen: true,
    }, { dispatch }, { uid, ...attributes });

    delete expected.onClick;

    expect(expected).toEqual({
      ...attributes,
    });
  });

  fullScreenStates.forEach((fullScreenState) => {
    it(`onClick toggles fullScreen (value: ${fullScreenState.fullScreen})`, () => {
      const expected = mergeProps(fullScreenState, { dispatch }, { uid });

      expected.onClick();

      expect(dispatch).toHaveBeenCalledWith(setFullScreen(
        !fullScreenState.fullScreen,
        uid,
      ));
    });
  });
});
