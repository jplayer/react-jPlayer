import React from 'react';
import expect, { createSpy } from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { play, pause } from '../../actions/actions';
import { __get__ } from './playContainer';

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};
const children = <div />;

describe('MuteContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    expect(expected).toEqual({
      paused: true,
      id,
      children,
      attributes,
    });
  });

  it('mapDispatchToProps onClick when paused will play', () => {
    const mergedProps = mapDispatchToProps(dispatch);

    mergedProps.onClick(id, true);

    expect(dispatch).toHaveBeenCalledWith(play(id));
  });

  it('mapDispatchToProps onClick when playing will pause', () => {
    const mergedProps = mapDispatchToProps(dispatch);

    mergedProps.onClick(id, false);

    expect(dispatch).toHaveBeenCalledWith(pause(id));
  });
});

