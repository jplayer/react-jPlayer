import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setOption } from '../../actions/actions';
import { __get__ } from './fullScreenContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
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
      id,
      attributes,
      children,
    });
  });

  const fullScreenData = [
    { fullScreen: false },
    { fullScreen: true },
  ];

  fullScreenData.forEach((datum) => {
    it(`mapDispatchToProps onClick toggles fullScreen 
    (value: ${datum.fullScreen})`, () => {
      const mappedDispatched = mapDispatchToProps(dispatch);

      mappedDispatched.onClick(id, datum.fullScreen);

      expect(dispatch).toHaveBeenCalledWith(setOption(
        id,
        'fullScreen',
        !datum.fullScreen,
      ));
    });
  });
});
