import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setOption } from '../../actions/actions';
import { __get__ } from './repeatContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const attributes = {
  'data-test': 'test',
};
const children = <div />;
const id = 'jPlayer-1';

describe('RepeatContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    expect(expected).toEqual({
      loop: false,
      id,
      children,
      attributes,
    });
  });

  const loopDatum = [
    { loop: false },
    { loop: true },
  ];

  it('mappedDispatch onClick toggles loop', () => {
    loopDatum.forEach((datum) => {
      const mappedDispatch = mapDispatchToProps(dispatch);

      mappedDispatch.onClick(id, datum.loop);

      expect(dispatch).toHaveBeenCalledWith(setOption(id, 'loop', !datum.loop));
    });
  });
});
