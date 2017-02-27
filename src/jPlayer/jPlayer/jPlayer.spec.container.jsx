import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { mount, shallow } from 'enzyme';

import { setJPlayers } from '../../util/common.spec';
import { noFormatSupportedError } from '../../util/index';
import { setMedia, setOption } from '../_actions/actions';
import { classes, loopOptions, defaultOptions, statusDefaultValues } from '../../util/constants';
import { __get__, __Rewire__, __ResetDependency__ } from './jPlayer.container';
import JPlayer from './jPlayer';

const stateClassTests = [
  { state: {
    // default state
  },
    expected: [classes.JPLAYER, classes.states.AUDIO, classes.states.IDLE,
      classes.states.VOLUME_HIGH, classes.states.NO_BROWSER_SUPPORT,
      classes.states.NO_VOLUME_SUPPORT],
  },
  { state: {
    mediaSettings: {
      video: true,
      foundSupported: false,
    },
    volumeSupported: false,
    paused: false,
    fullScreen: true,
    muted: true,
    seeking: true,
    loop: loopOptions.LOOP,
    currentTime: 30,
  },
    expected: [classes.JPLAYER, classes.states.VIDEO, classes.states.PLAYING,
      classes.states.FULL_SCREEN, classes.states.MUTED, classes.states.SEEKING,
      classes.states.LOOPED, classes.states.NO_BROWSER_SUPPORT, classes.states.NO_VOLUME_SUPPORT,
    ],
  },
  { state: {
    muted: false,
    volume: 0.45,
  },
    expected: [classes.JPLAYER, classes.states.AUDIO, classes.states.IDLE,
      classes.states.VOLUME_LOW, classes.states.NO_BROWSER_SUPPORT,
      classes.states.NO_VOLUME_SUPPORT],
  },
];
const uid = 'jPlayer-1';
const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const JPlayerContainer = __get__('JPlayerContainer');
const fullscreenchange = 'fullscreenchange';
const guiFadeHoldTimeout = 10;
const dispatchProps = {
  dispatch: createSpy(),
};
const MockJPlayer = ({ setJPlayer }) =>
  <div ref={setJPlayer} />;

MockJPlayer.propTypes = {
  setJPlayer: React.PropTypes.func.isRequired,
};

describe('<JPlayerContainer />', () => {
  beforeEach(() => {
    spyOn(global, 'clearTimeout');
    spyOn(global, 'setTimeout').andReturn(guiFadeHoldTimeout);
    __Rewire__('JPlayer', MockJPlayer);
  });

  it('maps state', () => {
    const children = <div className="@@jPlayer-test" />;
    const expected = mapStateToProps(setJPlayers({
      guiFadeHoldTimeout: 0,
    }), { uid, children });

    delete expected.attributes;

    expect(expected).toEqual({
      media: defaultOptions.media,
      error: statusDefaultValues.error,
      fullScreen: false,
      keyEnabled: defaultOptions.keyEnabled,
      paused: true,
      guiFadeHoldTimeout: 0,
      guiFadeHoldTime: defaultOptions.guiFadeHoldTime,
      children,
    });
  });

  it('maps stateClasses', () => {
    stateClassTests.forEach((stateClassTest) => {
      const expected = mapStateToProps(setJPlayers(stateClassTest.state), { uid });
      const classStatesString = stateClassTest.expected.join(' ');

      expect(classStatesString).toBe(expected.attributes.className);
    });
  });

  it('merges props', () => {
    const expected = mergeProps(setJPlayers(), dispatchProps, { uid });

    expected.setMedia(defaultOptions.media);
    expected.setOption('muted', true);

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(setMedia(defaultOptions.media, uid));
    expect(dispatchProps.dispatch).toHaveBeenCalledWith(setOption('muted', true, uid));
    expect(expected.jPlayers).toExist();
  });

  it('listens for closing full screen if screenFull is enabled', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    spyOn(document, 'addEventListener');

    __Rewire__('screenfull', {
      enabled: true,
      raw: {
        fullscreenchange,
      },
    });

    const wrapper = shallow(<JPlayerContainer {...props} />);

    expect(document.addEventListener).toHaveBeenCalledWith(fullscreenchange,
      wrapper.instance().closeFullScreen);
  });

  it('stops listening for closing full screen if screenFull is enabled on unmount', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    spyOn(document, 'removeEventListener');

    __Rewire__('screenfull', {
      enabled: true,
      raw: {
        fullscreenchange,
      },
    });

    const wrapper = shallow(<JPlayerContainer {...props} />);
    const closeFullScreen = wrapper.instance().closeFullScreen;

    wrapper.unmount();

    expect(document.removeEventListener).toHaveBeenCalledWith(fullscreenchange,
      closeFullScreen);
  });

  it('sets media on load', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const setMediaSpy = createSpy();

    mount(<JPlayerContainer {...props} setMedia={setMediaSpy} />);

    expect(setMediaSpy).toHaveBeenCalledWith(props.media);
  });

  it('logs errors', () => {
    const spy = spyOn(console, 'error');
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const error = noFormatSupportedError('test');

    wrapper.setProps({ error });

    expect(spy).toHaveBeenCalledWith(error);
  });

  it('doesn\'t request full screen when screenfull not supported', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: false,
      request: spy,
    });

    wrapper.setProps({ fullScreen: true });

    expect(spy).toNotHaveBeenCalled();
    expect(document.body.style.visibility).toBe('hidden');
  });

  it('requests full screen when true and screenfull supported', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: true,
      request: spy,
    });

    wrapper.setProps({ fullScreen: true });

    expect(spy).toHaveBeenCalledWith(wrapper.instance().jPlayer);
    expect(document.body.style.visibility).toBe('hidden');
  });

  it('doesn\'t exit full screen when false and screenfull not supported', () => {
    const props = setJPlayers({ fullScreen: true }).jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: false,
      exit: spy,
    });

    wrapper.setProps({ fullScreen: false });

    expect(spy).toNotHaveBeenCalled();
    expect(document.body.style.visibility).toBe('visible');
  });

  it('exits full screen when false and screenfull supported', () => {
    const props = setJPlayers({ fullScreen: true }).jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: true,
      exit: spy,
    });

    wrapper.setProps({ fullScreen: false });

    expect(spy).toHaveBeenCalled();
    expect(document.body.style.visibility).toBe('visible');
  });

  it('starts gui fade out timer when not paused and full screen', () => {
    const spy = createSpy();
    const props = setJPlayers({ guiFadeHoldTimeout }).jPlayers['jPlayer-1'];
    const wrapper = mount(<JPlayerContainer {...props} setOption={spy} setMedia={() => null} />);

    wrapper.setProps({ paused: false, fullScreen: true });

    expect(clearTimeout).toHaveBeenCalledWith(guiFadeHoldTimeout);
    expect(spy).toHaveBeenCalledWith('guiFadeOut', false);
    expect(spy).toHaveBeenCalledWith('guiFadeHoldTimeout', guiFadeHoldTimeout);
    expect(setTimeout).toHaveBeenCalledWith(wrapper.instance().startGuiFadeOut,
      defaultOptions.guiFadeHoldTime);
  });

  it('starts gui fade out when not paused and full screen', () => {
    const spy = createSpy();
    const props = setJPlayers({ fullScreen: true, paused: false }).jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);
    wrapper.instance().startGuiFadeOut();

    expect(spy).toHaveBeenCalledWith('guiFadeOut', true);
  });

  it('doesn\'t start gui fade out when paused && full screen not true', () => {
    const spy = createSpy();
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);
    wrapper.instance().startGuiFadeOut();

    expect(spy).toNotHaveBeenCalled();
  });

  it('closeFullScreen sets fullscreen prop to false if screenfull not fullscreen', () => {
    const spy = createSpy();
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);

    __Rewire__('screenfull', {
      isFullscreen: false,
    });

    wrapper.instance().closeFullScreen();

    expect(spy).toHaveBeenCalledWith('fullScreen', false);
  });

  it('closeFullScreen doesn\t set fullscreen prop if screenfull is fullscreen', () => {
    const spy = createSpy();
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);

    __Rewire__('screenfull', {
      isFullscreen: true,
    });

    wrapper.instance().closeFullScreen();

    expect(spy).toNotHaveBeenCalled();
  });

  it('onMouseMove starts gui fade out if fullScreen and paused and ancestor' +
      'parent is not GUI', () => {
    const props = setJPlayers({ fullScreen: true, paused: true }).jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    __Rewire__('traverseParentsUntilClassName', () => false);

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove', { target: '.jp-sleek' });

    expect(instance.startGuiFadeOutTimer).toHaveBeenCalled();
  });

  it('onMouseMove doesn\'t start gui fade out if fullScreen and paused and ancestor' +
      'parent is GUI', () => {
    const props = setJPlayers({ fullScreen: true, paused: true }).jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    __Rewire__('traverseParentsUntilClassName', () => true);

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove', { target: '.jp-controls' });

    expect(instance.startGuiFadeOutTimer).toNotHaveBeenCalled();
  });

  it('onMouseMove doesn\'t start gui fade out if not fullScreen', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove');

    expect(instance.startGuiFadeOutTimer).toNotHaveBeenCalled();
  });

  it('onMouseMove starts gui fade out if fullScreen and not paused', () => {
    __ResetDependency__('JPlayer');
    const props = setJPlayers({ fullScreen: true, paused: false }).jPlayers['jPlayer-1'];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove');

    expect(instance.startGuiFadeOutTimer).toHaveBeenCalled();
  });

  it('renders JPlayer', () => {
    __ResetDependency__('JPlayer');

    const attributes = {
      'data-attribute-test': 'test',
    };
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const wrapper = shallow(
      <JPlayerContainer {...props} attributes={attributes}>
        <div className="@@jPlayer-test" />
      </JPlayerContainer>,
    );
    expect(wrapper.prop('keyEnabled')).toBe(defaultOptions.keyEnabled);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.type()).toBe(JPlayer);
    expect(wrapper.prop('setJPlayer')).toBe(wrapper.instance().setJPlayer);
    expect(wrapper.prop('attributes')).toEqual(attributes);
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
    __ResetDependency__('screenfull');
    __ResetDependency__('JPlayer');
    restoreSpies();
  });
});
