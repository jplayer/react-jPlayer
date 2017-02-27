import expect from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { defaultOptions } from '../../util/constants';
import { __get__ } from './keyControl.container';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');

describe('DurationContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid: 'jPlayer-1' });

    expect(expected).toEqual({
      paused: true,
      fullScreen: false,
      muted: false,
      volume: defaultOptions.volume,
      loop: defaultOptions.loop,
      keyBindings: defaultOptions.keyBindings,
      focus: false,
    });
  });

  // it('merges props', () => {
  //   const expected = mergeProps(setJPlayers().jPlayers, )
  // });
});
