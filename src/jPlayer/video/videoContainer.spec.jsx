import expect from 'expect';

import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './videoContainer';

const mapStateToProps = __get__('mapStateToProps');
const videoStates = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];

describe('VideoContainer', () => {
  videoStates.forEach((videoState) => {
    it(`require if video (value: ${videoState.mediaSettings.video})`, () => {
      const expected = mapStateToProps(getJPlayers(videoState), { uid: 'jPlayer-1' });
      expect(expected.require).toBe(videoState.mediaSettings.video);
    });
  });
});
