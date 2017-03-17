import React from 'react';
import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './audioContainer';

const mapStateToProps = __get__('mapStateToProps');
const videoStates = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const id = 'jPlayer-1';
const events = {
  onProgress: null,
};

describe('AudioContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, events, ...attributes });
    expect(expected).toEqual({
      require: true,
      events,
      attributes,
    });
  });

  videoStates.forEach((videoState) => {
    it(`require if no video (value: ${videoState.mediaSettings.video})`, () => {
      const expected = mapStateToProps(getJPlayers(videoState), { id });
      expect(expected.require).toBe(!videoState.mediaSettings.video);
    });
  });
});
