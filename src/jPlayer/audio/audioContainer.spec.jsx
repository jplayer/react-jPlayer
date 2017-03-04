import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './audioContainer';

const mapStateToProps = __get__('mapStateToProps');
const videoStates = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];

describe('AudioContainer', () => {
  videoStates.forEach((videoState) => {
    it(`require if no video (value: ${videoState.mediaSettings.video})`, () => {
      const expected = mapStateToProps(getJPlayers(videoState), { uid: 'jPlayer-1' });
      expect(expected.require).toBe(!videoState.mediaSettings.video);
    });
  });
});
