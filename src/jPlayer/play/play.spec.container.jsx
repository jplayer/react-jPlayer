import expect, { createSpy } from 'expect';
import { setJPlayers } from '../../util/common.spec';
import { play, pause } from '../_actions/actions';
import { __get__ } from './play.container';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const uid = 'jPlayer-1';

describe('MuteContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid });

    expect(expected).toEqual({
      paused: true,
    });
  });

  it('mergeProps onClick when paused will play', () => {
    const dispatch = createSpy();
    const mergedProps = mergeProps(setJPlayers().jPlayers[uid], { dispatch }, { uid });

    mergedProps.onClick();

    expect(dispatch).toHaveBeenCalledWith(play(uid));
  });

  it('mergeProps onClick when playing will pause', () => {
    const dispatch = createSpy();
    const mergedProps = mergeProps(setJPlayers({ paused: false }).jPlayers[uid],
      { dispatch }, { uid });

    mergedProps.onClick();

    expect(dispatch).toHaveBeenCalledWith(pause(uid));
  });
});

