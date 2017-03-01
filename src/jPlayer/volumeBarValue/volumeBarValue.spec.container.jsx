import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { defaultOptions } from '../../util/constants';
import { __get__ } from './volumeBarValue.container';

const mapStateToProps = __get__('mapStateToProps');
const uid = 'jPlayer-1';

describe('DurationContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid });

    expect(expected).toEqual({
      verticalVolume: false,
      muted: false,
      volume: defaultOptions.volume,
    });
  });
});
