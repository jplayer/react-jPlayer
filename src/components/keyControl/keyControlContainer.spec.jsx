import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, keyIgnoreElementNames } from '../../util/constants';
import { play, pause, setMute, setVolume, setOption } from '../../actions/actions';
import { __get__ } from './keyControlContainer';

const id = 'jPlayer-1';
const dispatch = createSpy();
const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const mergePropsWithDefaultState = state => mergeProps(getJPlayers(state).jPlayers[id],
  { dispatch }, { id });
const KeyControlContainer = __get__('KeyControlContainer');

describe('KeyControlContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id });

    expect(expected).toEqual({
      paused: true,
      fullScreen: false,
      muted: false,
      volume: defaultOptions.volume,
      loop: false,
      keyBindings: defaultOptions.keyBindings,
      focused: false,
    });
  });

  it('merges props', () => {
    const focused = true;
    const { keyBindings, ...rest } = mergeProps({ focused }, { dispatch }, { id });

    expect(rest).toEqual({
      focused,
      id,
    });
    expect(Object.keys(keyBindings)).toEqual(['play', 'fullScreen',
      'mute', 'volumeUp', 'volumeDown', 'loop']);
  });

  it('merges custom keyBindings in to keyBindings', () => {
    const keyBindings = {
      test: {
        key: 33,
        fn: Function.prototype,
      },
    };
    const expected = mergePropsWithDefaultState({ keyBindings });

    expected.keyBindings.loop.fn();

    expect(expected.keyBindings.test).toEqual(keyBindings.test);
  });

  it('plays when play key is pressed and media is paused', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.play.fn();

    expect(dispatch).toHaveBeenCalledWith(play(id));
  });

  it('pauses when play key is pressed and media is playing', () => {
    const { keyBindings } = mergePropsWithDefaultState({ paused: false });

    keyBindings.play.fn();

    expect(dispatch).toHaveBeenCalledWith(pause(id));
  });

  const fullScreenData = [
    { fullScreen: false },
    { fullScreen: true },
  ];

  it('toggles full screen when full screen key is pressed', () => {
    fullScreenData.forEach((fullScreenDatum) => {
      const { keyBindings } = mergePropsWithDefaultState(fullScreenDatum);

      keyBindings.fullScreen.fn();

      expect(dispatch).toHaveBeenCalledWith(
        setOption(id, 'fullScreen', !fullScreenDatum.fullScreen),
      );
    });
  });

  const muteData = [
    { muted: false },
    { muted: true },
  ];

  it('toggles mute when mute key is pressed', () => {
    muteData.forEach((muteDatum) => {
      const { keyBindings } = mergePropsWithDefaultState(muteDatum);

      keyBindings.mute.fn();

      expect(dispatch).toHaveBeenCalledWith(
        setMute(id, !muteDatum.muted),
      );
    });
  });

  it('increments volume on volume up key press', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.volumeUp.fn();

    expect(dispatch).toHaveBeenCalledWith(
      setVolume(id, defaultOptions.volume + 0.1),
    );
  });

  it('decrements volume on volume down key press', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.volumeDown.fn();

    expect(dispatch).toHaveBeenCalledWith(
      setVolume(id, defaultOptions.volume - 0.1),
    );
  });

  it('loops on loop key press when loop is off', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.loop.fn();

    expect(dispatch).toHaveBeenCalledWith(setOption(id, 'loop', true));
  });

  it('turns loop off on loop key press when looping', () => {
    const { keyBindings } = mergePropsWithDefaultState({ loop: true });
    keyBindings.loop.fn();

    expect(dispatch).toHaveBeenCalledWith(setOption(id, 'loop', false));
  });

  it('Adds listener to onKeyDown event on startup', () => {
    spyOn(document, 'addEventListener');

    const wrapper = shallow(<KeyControlContainer {...mergePropsWithDefaultState()} />);

    expect(document.addEventListener)
      .toHaveBeenCalledWith('keydown', wrapper.instance().onKeyDown);
  });

  it('Removes listener to onKeyDown event on unmount', () => {
    spyOn(document, 'removeEventListener');

    const wrapper = shallow(<KeyControlContainer {...mergePropsWithDefaultState()} />);
    const instance = wrapper.instance();

    wrapper.unmount();

    expect(document.removeEventListener)
      .toHaveBeenCalledWith('keydown', instance.onKeyDown);
  });

  it('if focused element should be ignored then don\'t ' +
  'trigger key press function onKeyDown', () => {
    keyIgnoreElementNames.forEach((keyIgnoreElementName) => {
      const props = mergePropsWithDefaultState();
      spyOn(props.keyBindings.play, 'fn');

      const wrapper = shallow(<KeyControlContainer {...props} />);
      wrapper.instance().onKeyDown({
        target: {
          nodeName: keyIgnoreElementName.toLocaleLowerCase(),
        },
        key: 80,
      });
      expect(props.keyBindings.play.fn).toNotHaveBeenCalled();
    });
  });

  it('if this jPlayer doesn\'t have focus then don\'t ' +
  'trigger key press function onKeyDown', () => {
    const props = mergePropsWithDefaultState();
    spyOn(props.keyBindings.play, 'fn');

    const wrapper = shallow(<KeyControlContainer {...props} />);
    wrapper.instance().onKeyDown({
      target: {
        nodeName: 'document',
      },
      key: 80,
    });
    expect(props.keyBindings.play.fn).toNotHaveBeenCalled();
  });

  it('trigger key press function if focused, not an ignorable element ' +
  'and keyCode matches', () => {
    const props = mergePropsWithDefaultState({ focused: true });
    spyOn(props.keyBindings.play, 'fn');
    const wrapper = shallow(<KeyControlContainer {...props} />);
    wrapper.instance().onKeyDown({
      target: {
        nodeName: 'document',
      },
      preventDefault: Function.prototype,
      keyCode: 80,
    });
    expect(props.keyBindings.play.fn).toHaveBeenCalled();
  });

  it('Each keyBinding function triggered with correct key onKeyDown', () => {
    const props = mergePropsWithDefaultState({ focused: true });
    Object.keys(props.keyBindings).forEach((key) => {
      const keyBinding = props.keyBindings[key];

      spyOn(keyBinding, 'fn');
      const preventDefaultSpy = createSpy();
      const wrapper = shallow(<KeyControlContainer {...props} />);
      wrapper.instance().onKeyDown({
        target: {
          nodeName: 'document',
        },
        preventDefault: preventDefaultSpy,
        key: keyBinding.key,
      });
      expect(props.keyBindings.play.fn).toHaveBeenCalled();
      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  it('renders null', () => {
    const wrapper = shallow(<KeyControlContainer {...mergePropsWithDefaultState()} />);

    expect(wrapper.type()).toBe(null);
  });

  afterEach(() => {
    restoreSpies();
    dispatch.reset();
  });
});
