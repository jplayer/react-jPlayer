import expect from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { __get__ } from './playbackRateBarValueContainer';

const mapStateToProps = __get__('mapStateToProps');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
};

describe('PlaybackRateBarValueContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    expect(expected).toEqual({
      verticalPlaybackRate: false,
      minPlaybackRate: 0.5,
      maxPlaybackRate: 4,
      playbackRate: 1,
      attributes,
    });
  });
});
