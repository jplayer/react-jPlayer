import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './videoContainer';

const mapStateToProps = __get__('mapStateToProps');
const attributes = {
  'data-test': 'test',
};
const children = <div />;
const id = 'jPlayer-1';
const videoStates = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];

describe('VideoContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });
    expect(expected).toEqual({
      require: false,
      children,
      attributes,
    });
  });

  videoStates.forEach((videoState) => {
    it(`require if video (value: ${videoState.mediaSettings.video})`, () => {
      const expected = mapStateToProps(getJPlayers(videoState), { id });
      expect(expected.require).toBe(videoState.mediaSettings.video);
    });
  });
});
