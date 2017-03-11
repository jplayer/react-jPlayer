import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './audioContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const videoStates = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const uid = 'jPlayer-1';

describe('AudioContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, ...attributes });
    expect(expected).toEqual({
      require: true,
      ...attributes,
    });
  });

  it('merges props', () => {
    const stateProps = getJPlayers();
    const expected = mergeProps({ ...stateProps, ...attributes }, dispatch, { uid });

    expect(expected).toEqual({
      ...stateProps,
      ...attributes,
    });
  });

  videoStates.forEach((videoState) => {
    it(`require if no video (value: ${videoState.mediaSettings.video})`, () => {
      const expected = mapStateToProps(getJPlayers(videoState), { uid });
      expect(expected.require).toBe(!videoState.mediaSettings.video);
    });
  });
});
