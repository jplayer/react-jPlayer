import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { mount, shallow } from 'enzyme';

import { setJPlayers, dispatchProps } from '../../util/common.spec';
import { setMedia, setOption } from '../_actions/actions';
import { classes, loopOptions, defaultOptions, statusDefaultValues } from '../../util/constants';
import { __get__, __Rewire__, __ResetDependency__ } from './jPlayer.container';

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

const MockJPlayer = ({ setJPlayer }) => <div ref={setJPlayer} />;

MockJPlayer.propTypes = {
  setJPlayer: React.PropTypes.func.isRequired,
};

describe('<JPlayerContainer />', () => {
  before(() => {
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
    const fullscreenchange = 'fullscreenchange';
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

  // it('doesn\'t listen for closing full screen if screenfull is not enabled', () => {
  //   const props = setJPlayers().jPlayers['jPlayer-1'];
  //   shallow(<JPlayerContainer {...props} />);
  //   spyOn(document, 'addEventListener');

  //   expect(document.addEventListener).toNotHaveBeenCalled();
  // });

  it('sets media on load', () => {
    const props = setJPlayers().jPlayers['jPlayer-1'];
    const setMediaSpy = createSpy();

    mount(<JPlayerContainer {...props} setMedia={setMediaSpy} />);

    expect(setMediaSpy).toHaveBeenCalledWith(props.media);
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
    __ResetDependency__('screenfull');
    restoreSpies();
  });

  after(() => {
    __ResetDependency__('JPlayer');
  });
});
