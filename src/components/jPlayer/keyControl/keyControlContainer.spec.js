import expect from 'expect';

import { __get__ } from './keyControlContainer';
import { setOption, play, pause, setMute, setVolume } from '../../../actions/actions';

const mergeProps = __get__('mergeProps');
const dispatch = expect.createSpy();
const id = 'TestPlayer';
const state = {
  paused: false,
  fullScreen: false,
  muted: false,
  volume: 0,
};

const setup = (newState, newProps) => {
  const props = mergeProps({
    ...state,
    ...newState,
  }, { dispatch }, {
    id: 'TestPlayer',
    ...newProps,
  });

  return {
    props,
  };
};

describe('FooterPlayerContainer', () => {
  let props;

  beforeEach(() => {
    dispatch.reset();
  });

  it('should dispatch pause when playing', () => {
    ({ props } = setup());

    props.keyBindings.play.fn();

    expect(dispatch).toHaveBeenCalledWith(pause(id));
  });

  it('should dispatch play when paused', () => {
    ({ props } = setup({ paused: true }));

    props.keyBindings.play.fn();

    expect(dispatch).toHaveBeenCalledWith(play(id));
  });

  it('should dispatch setOption for fullscreen', () => {
    ({ props } = setup());

    props.keyBindings.fullScreen.fn();

    expect(dispatch).toHaveBeenCalledWith(setOption(id, 'fullScreen', !state.fullScreen));
  });

  it('should dispatch setMute for mute', () => {
    ({ props } = setup());

    props.keyBindings.mute.fn();

    expect(dispatch).toHaveBeenCalledWith(setMute(id, !state.muted));
  });

  it('should dispatch setVolume for volumeUp', () => {
    ({ props } = setup());

    props.keyBindings.volumeUp.fn();

    expect(dispatch).toHaveBeenCalledWith(setVolume(id, state.volume + 0.1));
  });

  it('should dispatch setVolume for volumeDown', () => {
    ({ props } = setup());

    props.keyBindings.volumeDown.fn();

    expect(dispatch).toHaveBeenCalledWith(setVolume(id, state.volume - 0.1));
  });

  it('should dispatch setOption for loop', () => {
    ({ props } = setup());

    props.keyBindings.loop.fn();

    expect(dispatch).toHaveBeenCalledWith(setOption(id, 'loop', !state.loop));
  });
});
