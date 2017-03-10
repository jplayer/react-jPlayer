import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, loopOptions, keyIgnoreElementNames } from '../../util/constants';
import { play, pause, setFullScreen, setMute, setVolume,
  setLoop } from '../_actions/actions';
import { __get__ } from './keyControlContainer';

const uid = 'jPlayer-1';
const dispatch = createSpy();
const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const mergePropsWithDefaultState = state => mergeProps(getJPlayers(state).jPlayers[uid],
  { dispatch }, { uid });
const KeyControlContainer = __get__('KeyControlContainer');

describe('KeyControlContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid });

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

  it('merges props', () => {
    const focus = true;
    const { keyBindings, ...rest } = mergeProps({ focus }, { dispatch }, { uid });

    expect(rest).toEqual({
      focus,
      uid,
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

    expect(dispatch).toHaveBeenCalledWith(play({ uid }));
  });

  it('pauses when play key is pressed and media is playing', () => {
    const { keyBindings } = mergePropsWithDefaultState({ paused: false });

    keyBindings.play.fn();

    expect(dispatch).toHaveBeenCalledWith(pause({ uid }));
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
        setFullScreen(!fullScreenDatum.fullScreen, uid),
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
        setMute(!muteDatum.muted, uid),
      );
    });
  });

  it('increments volume on volume up key press', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.volumeUp.fn();

    expect(dispatch).toHaveBeenCalledWith(
      setVolume(defaultOptions.volume + 0.1, uid),
    );
  });

  it('decrements volume on volume down key press', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.volumeDown.fn();

    expect(dispatch).toHaveBeenCalledWith(
      setVolume(defaultOptions.volume - 0.1, uid),
    );
  });

  it('loops on loop key press when loop is off', () => {
    const { keyBindings } = mergePropsWithDefaultState();

    keyBindings.loop.fn();

    expect(dispatch).toHaveBeenCalledWith(
      setLoop(loopOptions.LOOP, uid),
    );
  });

  it('turns loop off on loop key press when looping', () => {
    const { keyBindings } = mergePropsWithDefaultState({ loop: loopOptions.LOOP });
    keyBindings.loop.fn();

    expect(dispatch).toHaveBeenCalledWith(
      setLoop(loopOptions.OFF, uid),
    );
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
    const props = mergePropsWithDefaultState({ focus: true });
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
    const props = mergePropsWithDefaultState({ focus: true });
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
