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
const id = 'jPlayer-1';
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
    const expected = mapStateToProps(getJPlayers(), { id });

    expect(expected).toEqual({
      fullScreen: false,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({
      fullScreen: true,
    }, { dispatch }, { id, ...attributes });

    delete expected.onClick;

    expect(expected).toEqual({
      ...attributes,
    });
  });

  fullScreenStates.forEach((fullScreenState) => {
    it(`onClick toggles fullScreen (value: ${fullScreenState.fullScreen})`, () => {
      const expected = mergeProps(fullScreenState, { dispatch }, { id });

      expected.onClick();

      expect(dispatch).toHaveBeenCalledWith(setFullScreen(
        !fullScreenState.fullScreen,
        id,
      ));
    });
  });
});
