import expect, { createSpy } from 'expect';
import { getJPlayers } from '../../util/common.spec';
import { setMute } from '../_actions/actions';
import { __get__ } from './mute.container';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const uid = 'jPlayer-1';

describe('MuteContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

    expect(expected).toEqual({
      muted: false,
    });
  });

  const muteData = [
    { muted: false },
    { muted: true },
  ];

  it('mergeProps onClick toggle mute', () => {
    muteData.forEach((muteDatum) => {
      const dispatch = createSpy();
      const mergedProps = mergeProps(getJPlayers(muteDatum).jPlayers[uid],
        { dispatch }, { uid });

      mergedProps.onClick();

      expect(dispatch).toHaveBeenCalledWith(setMute(!muteDatum.muted, uid));
    });
  });
});
