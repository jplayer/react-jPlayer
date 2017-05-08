/* import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { mount, shallow } from 'enzyme';
import PropTypes from 'prop-types';

import { getJPlayers } from '../../util/common.spec';
import noFormatSupportedError from '../../util/errorHandlers/noFormatSupportedError';
import { classes, defaultOptions } from '../../util/constants';
import { setOption, setMedia } from '../../actions/actions';
import { __get__, __Rewire__, __ResetDependency__ } from './jPlayerContainer';
import JPlayer from './jPlayer';

const customClassName = '@@jPlayer-test';
const stateClassTests = [
  { state: {
    // default state
  },
    expected: [customClassName, classes.JPLAYER, classes.states.AUDIO, classes.states.IDLE,
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
    loop: true,
    currentTime: 30,
  },
    expected: [customClassName, classes.JPLAYER, classes.states.VIDEO, classes.states.PLAYING,
      classes.states.FULL_SCREEN, classes.states.MUTED, classes.states.SEEKING,
      classes.states.LOOPED, classes.states.NO_BROWSER_SUPPORT, classes.states.NO_VOLUME_SUPPORT,
    ],
  },
  { state: {
    muted: false,
    volume: 0.45,
  },
    expected: [customClassName, classes.JPLAYER, classes.states.AUDIO, classes.states.IDLE,
      classes.states.VOLUME_LOW, classes.states.NO_BROWSER_SUPPORT,
      classes.states.NO_VOLUME_SUPPORT],
  },
];

const mapStateToProps = __get__('mapStateToProps');
const mapDispatchToProps = __get__('mapDispatchToProps');
const JPlayerContainer = __get__('JPlayerContainer');
const fullscreenchange = 'fullscreenchange';
const guiFadeHoldTimeout = 10;
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div className="@@jPlayer-test" />,
};
const MockJPlayer = ({ setJPlayer }) =>
  <div ref={setJPlayer} />;

MockJPlayer.propTypes = {
  setJPlayer: PropTypes.func.isRequired,
};

describe('<JPlayerContainer />', () => {
  beforeEach(() => {
    spyOn(global, 'clearTimeout');
    spyOn(global, 'setTimeout').andReturn(guiFadeHoldTimeout);
    __Rewire__('JPlayer', MockJPlayer);
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers({
      guiFadeHoldTimeout: 0,
    }), { id, ...attributes });

    delete expected.attributes.className;

    const { children, ...restOfAttributes } = attributes;

    expect(expected).toEqual({
      media: defaultOptions.media,
      error: {},
      fullScreen: false,
      keyEnabled: defaultOptions.keyEnabled,
      paused: true,
      guiFadeHoldTimeout: 0,
      guiFadeHoldTime: defaultOptions.guiFadeHoldTime,
      id,
      children,
      attributes: restOfAttributes,
    });
  });

  it('maps stateClasses', () => {
    stateClassTests.forEach((stateClassTest) => {
      const expected = mapStateToProps(getJPlayers(stateClassTest.state),
        { id, className: customClassName });
      const classStatesString = stateClassTest.expected.join(' ');

      expect(classStatesString).toBe(expected.attributes.className);
    });
  });

  it('mapDispatchToProps returns correct actions', () => {
    const expected = mapDispatchToProps();

    expect(expected).toEqual({
      setMedia,
      setOption,
    });
  });

  it('listens for closing full screen if screenFull is enabled', () => {
    const props = getJPlayers().jPlayers[id];
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
    const props = getJPlayers().jPlayers[id];
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
    const props = getJPlayers().jPlayers[id];
    const setMediaSpy = createSpy();

    mount(<JPlayerContainer {...props} setMedia={setMediaSpy} />);

    expect(setMediaSpy).toHaveBeenCalledWith(id, props.media);
  });

  it('requestsFullScreen on load', () => {
    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} setMedia={() => null} />);
    const instance = wrapper.instance();

    spyOn(instance, 'requestFullScreen');

    instance.componentDidMount();

    expect(instance.requestFullScreen).toHaveBeenCalled();
  });

  it('logs errors', () => {
    const spy = spyOn(console, 'error');
    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const error = noFormatSupportedError('test');

    wrapper.setProps({ error });

    expect(spy).toHaveBeenCalledWith(error);
  });

  it('doesn\'t request full screen when screenfull not supported', () => {
    const props = getJPlayers({ fullScreen: true }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: false,
      request: spy,
    });

    instance.componentDidUpdate({ fullScreen: false });

    expect(spy).toNotHaveBeenCalled();
    expect(document.body.style.visibility).toBe('hidden');
  });

  it('requests full screen when true and screenfull supported', () => {
    const props = getJPlayers({ fullScreen: true }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: true,
      request: spy,
    });

    instance.componentDidUpdate({ fullScreen: false });

    expect(spy).toHaveBeenCalledWith(wrapper.instance().jPlayer);
    expect(document.body.style.visibility).toBe('hidden');
  });

  it('doesn\'t exit full screen when false and screenfull not supported', () => {
    const props = getJPlayers({ fullScreen: false }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: false,
      exit: spy,
    });

    instance.componentDidUpdate({ fullScreen: true });

    expect(spy).toNotHaveBeenCalled();
    expect(document.body.style.visibility).toBe('visible');
  });

  it('exits full screen when false and screenfull supported', () => {
    const props = getJPlayers({ fullScreen: false }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();
    const spy = createSpy();

    __Rewire__('screenfull', {
      enabled: true,
      exit: spy,
    });

    instance.componentDidUpdate({ fullScreen: true });

    expect(spy).toHaveBeenCalled();
    expect(document.body.style.visibility).toBe('visible');
  });

  it('starts gui fade out timer when not paused and full screen', () => {
    const spy = createSpy();
    const props = getJPlayers({ guiFadeHoldTimeout }).jPlayers[id];
    const wrapper = mount(<JPlayerContainer {...props} setOption={spy} setMedia={() => null} />);

    wrapper.setProps({ paused: false, fullScreen: true });

    expect(clearTimeout).toHaveBeenCalledWith(guiFadeHoldTimeout);
    expect(spy).toHaveBeenCalledWith(id, 'guiFadeOut', false);
    expect(spy).toHaveBeenCalledWith(id, 'guiFadeHoldTimeout', guiFadeHoldTimeout);
    expect(setTimeout).toHaveBeenCalledWith(wrapper.instance().startGuiFadeOut,
      defaultOptions.guiFadeHoldTime);
  });

  it('starts gui fade out when not paused and full screen', () => {
    const spy = createSpy();
    const props = getJPlayers({ fullScreen: true, paused: false }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);
    wrapper.instance().startGuiFadeOut();

    expect(spy).toHaveBeenCalledWith(id, 'guiFadeOut', true);
  });

  it('doesn\'t start gui fade out when paused && full screen not true', () => {
    const spy = createSpy();
    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);
    wrapper.instance().startGuiFadeOut();

    expect(spy).toNotHaveBeenCalled();
  });

  it('closeFullScreen sets fullscreen prop to false if screenfull not fullscreen', () => {
    const spy = createSpy();
    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);

    __Rewire__('screenfull', {
      isFullscreen: false,
    });

    wrapper.instance().closeFullScreen();

    expect(spy).toHaveBeenCalledWith(id, 'fullScreen', false);
  });

  it('closeFullScreen doesn\t set fullscreen prop if screenfull is fullscreen', () => {
    const spy = createSpy();
    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} setOption={spy} />);

    __Rewire__('screenfull', {
      isFullscreen: true,
    });

    wrapper.instance().closeFullScreen();

    expect(spy).toNotHaveBeenCalled();
  });

  it('onMouseMove starts gui fade out if fullScreen and paused and ancestor' +
      'parent is not GUI', () => {
    const props = getJPlayers({ fullScreen: true, paused: true }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove', {
      target: document.body,
    });

    expect(instance.startGuiFadeOutTimer).toHaveBeenCalled();
  });

  it('onMouseMove doesn\'t start gui fade out if fullScreen and paused and ancestor' +
      'parent is GUI', () => {
    const props = getJPlayers({ fullScreen: true, paused: true }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove', {
      target: {
        className: classes.PLAY,
        parentNode: {
          className: 'jp-controls',
          parentNode: {
            className: `${classes.GUI} test-gui`,
          },
        },
      },
    });

    expect(instance.startGuiFadeOutTimer).toNotHaveBeenCalled();
  });

  it('onMouseMove doesn\'t start gui fade out if not fullScreen', () => {
    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove');

    expect(instance.startGuiFadeOutTimer).toNotHaveBeenCalled();
  });

  it('onMouseMove starts gui fade out if fullScreen and not paused', () => {
    __ResetDependency__('JPlayer');
    const props = getJPlayers({ fullScreen: true, paused: false }).jPlayers[id];
    const wrapper = shallow(<JPlayerContainer {...props} />);
    const instance = wrapper.instance();

    spyOn(instance, 'startGuiFadeOutTimer');

    wrapper.simulate('mouseMove');

    expect(instance.startGuiFadeOutTimer).toHaveBeenCalled();
  });

  it('renders JPlayer', () => {
    __ResetDependency__('JPlayer');

    const props = getJPlayers().jPlayers[id];
    const wrapper = shallow(
      <JPlayerContainer {...props} attributes={attributes}>
        {attributes.children}
      </JPlayerContainer>,
    );
    expect(wrapper.prop('keyEnabled')).toBe(defaultOptions.keyEnabled);
    expect(wrapper.type()).toBe(JPlayer);
    expect(wrapper.prop('setJPlayer')).toBe(wrapper.instance().setJPlayer);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-test')).toEqual(attributes['data-test']);
  });

  afterEach(() => {
    __ResetDependency__('screenfull');
    __ResetDependency__('JPlayer');
    restoreSpies();
  });
});*/
