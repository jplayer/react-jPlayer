import React from 'react';
import expect, { createSpy } from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './videoContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const id = 'jPlayer-1';
const videoStates = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];

describe('VideoContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });
    expect(expected).toEqual({
      require: false,
      ...attributes,
    });
  });

  it('merges props', () => {
    const stateProps = getJPlayers();
    const expected = mergeProps({ ...stateProps, ...attributes }, dispatch, { id });

    expect(expected).toEqual({
      ...stateProps,
      ...attributes,
    });
  });

  videoStates.forEach((videoState) => {
    it(`require if video (value: ${videoState.mediaSettings.video})`, () => {
      const expected = mapStateToProps(getJPlayers(videoState), { id });
      expect(expected.require).toBe(videoState.mediaSettings.video);
    });
  });
});
