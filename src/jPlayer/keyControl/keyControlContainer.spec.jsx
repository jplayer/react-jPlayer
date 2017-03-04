import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, loopOptions, keyIgnoreElementNames } from '../../util/constants';
import { play, pause, setFullScreen, setMute, setVolume,
  setLoop } from '../_actions/actions';
import { __get__ } from './keyControlContainer';

const uid = 'jPlayer-1';
const dispatchProps = {
  dispatch: createSpy(),
};
const mapStateToProps = __get__('mapStateToProps');
const mergeProps = state => __get__('mergeProps')(getJPlayers(state).jPlayers[uid],
  dispatchProps, { uid });
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
    const { keyBindings, ...rest } = mergeProps();

    expect(rest).toEqual({
      focus: false,
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
    const expected = mergeProps({ keyBindings });

    expected.keyBindings.loop.fn();

    expect(expected.keyBindings.test).toEqual(keyBindings.test);
  });

  it('plays when play key is pressed and media is paused', () => {
    const { keyBindings } = mergeProps();

    keyBindings.play.fn();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(play(uid));
  });

  it('pauses when play key is pressed and media is playing', () => {
    const { keyBindings } = mergeProps({ paused: false });

    keyBindings.play.fn();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(pause(uid));
  });

  const fullScreenData = [
    { fullScreen: false },
    { fullScreen: true },
  ];

  it('toggles full screen when full screen key is pressed', () => {
    fullScreenData.forEach((fullScreenDatum) => {
      const { keyBindings } = mergeProps(fullScreenDatum);

      keyBindings.fullScreen.fn();

      expect(dispatchProps.dispatch).toHaveBeenCalledWith(
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
      const { keyBindings } = mergeProps(muteDatum);

      keyBindings.mute.fn();

      expect(dispatchProps.dispatch).toHaveBeenCalledWith(
        setMute(!muteDatum.muted, uid),
      );
    });
  });

  it('increments volume on volume up key press', () => {
    const { keyBindings } = mergeProps();

    keyBindings.volumeUp.fn();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(
      setVolume(defaultOptions.volume + 0.1, uid),
    );
  });

  it('decrements volume on volume down key press', () => {
    const { keyBindings } = mergeProps();

    keyBindings.volumeDown.fn();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(
      setVolume(defaultOptions.volume - 0.1, uid),
    );
  });

  it('loops on loop key press when loop is off', () => {
    const { keyBindings } = mergeProps();

    keyBindings.loop.fn();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(
      setLoop(loopOptions.LOOP, uid),
    );
  });

  it('turns loop off on loop key press when looping', () => {
    const { keyBindings } = mergeProps({ loop: loopOptions.LOOP });
    keyBindings.loop.fn();

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(
      setLoop(loopOptions.OFF, uid),
    );
  });

  it('Adds listener to onKeyDown event on startup', () => {
    spyOn(document, 'addEventListener');

    const wrapper = shallow(<KeyControlContainer {...mergeProps()} />);

    expect(document.addEventListener)
      .toHaveBeenCalledWith('keydown', wrapper.instance().onKeyDown);
  });

  it('Removes listener to onKeyDown event on unmount', () => {
    spyOn(document, 'removeEventListener');

    const wrapper = shallow(<KeyControlContainer {...mergeProps()} />);
    const instance = wrapper.instance();

    wrapper.unmount();

    expect(document.removeEventListener)
      .toHaveBeenCalledWith('keydown', instance.onKeyDown);
  });

  it('if focused element should be ignored then don\'t ' +
  'trigger key press function onKeyDown', () => {
    keyIgnoreElementNames.forEach((keyIgnoreElementName) => {
      const props = mergeProps();
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
    const props = mergeProps();
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
    const props = mergeProps({ focus: true });
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
    const props = mergeProps({ focus: true });
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
    const wrapper = shallow(<KeyControlContainer {...mergeProps()} />);

    expect(wrapper.type()).toBe(null);
  });

  afterEach(() => {
    restoreSpies();
    dispatchProps.dispatch.reset();
  });
});
