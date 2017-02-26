import React from 'react';
import expect from 'expect';

import { setJPlayers, dispatchProps } from '../../util/common.spec';
import { setMedia, setOption } from '../_actions/actions';
import { classes, loopOptions, defaultOptions, statusDefaultValues } from '../../util/constants';
import { __get__ } from './jPlayer.container';

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

describe('<JPlayerContainer />', () => {
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

  afterEach(() => {
    dispatchProps.dispatch.reset();
  });
});
