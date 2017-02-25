import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { __get__ } from './audio.container';

const mapStateToProps = __get__('mapStateToProps');
const videoProps = [
  { mediaSettings: { video: false } },
  { mediaSettings: { video: true } },
];

describe('AudioContainer', () => {
  videoProps.forEach((videoProp) => {
    it(`require if no video (value: ${videoProp.mediaSettings.video})`, () => {
      const expected = mapStateToProps(setJPlayers(videoProp), { uid: 'jPlayer-1' });
      expect(expected.require).toBe(!videoProp.mediaSettings.video);
    });
  });
});
