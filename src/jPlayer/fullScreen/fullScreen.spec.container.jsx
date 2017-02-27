import expect, { createSpy } from 'expect';

import { setJPlayers } from '../../util/common.spec';
import { setFullScreen } from '../_actions/actions';
import { __get__ } from './fullScreen.container';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const fullScreenStates = [
   { fullScreen: false },
   { fullScreen: true },
];
const uid = 'jPlayer-1';
const dispatchProps = {
  dispatch: createSpy(),
};

describe('FullScreenContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid });

    expect(expected).toEqual({
      fullScreen: false,
    });
  });

  fullScreenStates.forEach((fullScreenState) => {
    it(`onClick toggles fullScreen (value: ${fullScreenState.fullScreen})`, () => {
      const expected = mergeProps(fullScreenState, dispatchProps, { uid });

      expected.onClick();

      expect(dispatchProps.dispatch).toHaveBeenCalledWith(setFullScreen(
        !fullScreenState.fullScreen,
        uid,
      ));
    });
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
  });
});
