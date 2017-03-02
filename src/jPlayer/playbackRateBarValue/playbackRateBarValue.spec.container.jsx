import expect from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './playbackRateBarValue.container';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('PlaybackRateBarValueContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      verticalPlaybackRate: false,
      minPlaybackRate: 0.5,
      maxPlaybackRate: 4,
      playbackRate: 1,
    });
  });
});
