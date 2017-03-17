import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { setLoop } from '../../actions/actions';
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
      children,
      attributes,
    });
  });

  const onClickData = [
    { loop: false },
    { loop: true },
  ];

  it('mappedDispatch onClick toggles loop', () => {
    onClickData.forEach((onClickDatum) => {
      const mappedDispatch = mapDispatchToProps(dispatch, { id });

      mappedDispatch.onClick(onClickDatum.loop);

      expect(dispatch).toHaveBeenCalledWith(setLoop(id, !onClickDatum.loop));
    });
  });
});
