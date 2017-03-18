import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setOption } from '../../actions/actions';
import { __get__ } from './fullScreenContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const fullScreenStates = [
   { fullScreen: false },
   { fullScreen: true },
];
const id = 'jPlayer-1';
const children = <div />;
const attributes = {
  'data-test': 'test',
};

describe('FullScreenContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    expect(expected).toEqual({
      fullScreen: false,
      attributes,
      children,
    });
  });

  fullScreenStates.forEach((fullScreenState) => {
    it(`mapDispatchToProps onClick toggles fullScreen 
    (value: ${fullScreenState.fullScreen})`, () => {
      const mappedDispatched = mapDispatchToProps(dispatch, { id });

      mappedDispatched.onClick(fullScreenState.fullScreen);

      expect(dispatch).toHaveBeenCalledWith(setOption(
        id,
        'fullScreen',
        !fullScreenState.fullScreen,
      ));
    });
  });
});
