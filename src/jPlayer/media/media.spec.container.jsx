import React from 'react';
import expect, { createSpy, spyOn } from 'expect';
import { shallow, mount } from 'enzyme';

import { setJPlayers } from '../../util/common.spec';
import { defaultOptions, loopOptions } from '../../util/constants';
import { toPercentage, toRelativePercentage } from '../../util/index';
import { setOption, pause } from '../_actions/actions';
import { __get__, __Rewire__, __ResetDependency__ } from './media.container';

const uid = 'jPlayer-1';
const dispatchProps = {
  dispatch: createSpy(),
};
const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const MediaContainer = __get__('MediaContainer');
const setOptionSpy = createSpy();
const pauseSpy = createSpy();
const getProps = state => ({
  ...setJPlayers(state).jPlayers[uid],
  setOption: setOptionSpy,
  pause: pauseSpy,
});
const mockCurrentMedia = {
  currentTime: 30,
  duration: 90,
  seekable: {
    length: 22,
    end: end => end,
  },
  playbackRate: 0.35,
  play: createSpy(),
  pause: createSpy(),
};
const MockChildren = ({ setCurrentMedia }) => {
  setCurrentMedia(mockCurrentMedia);
  return null;
};
__Rewire__('canSetVolume', () => true);

describe('MediaContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid, children: MockChildren });

    expect(expected).toEqual({
      loop: loopOptions.OFF,
      showRemainingDuration: false,
      src: '',
      currentTime: 0,
      playHeadPercent: 0,
      paused: true,
      defaultPlaybackRate: defaultOptions.defaultPlaybackRate,
      playbackRate: 1.0,
      preload: 'metadata',
      volume: defaultOptions.volume,
      muted: false,
      autoplay: false,
      newTime: null,
      require: false,
      children: MockChildren,
    });
  });

  it('merges props', () => {
    const test = 'test';
    const expected = mergeProps({ test }, dispatchProps, { uid });

    expect(expected.test).toBe(test);
  });

  it('dispatches setOption in mergeProps when called', () => {
    const key = 'test';
    const value = true;
    mergeProps({}, dispatchProps, { uid }).setOption(key, value);

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(setOption(key, value, uid));
  });

  it('dispatches pause in mergeProps when called', () => {
    const time = 30;
    mergeProps({}, dispatchProps, { uid }).pause(time);

    expect(dispatchProps.dispatch).toHaveBeenCalledWith(pause(uid, time));
  });

  it('updates media on startup', () => {
    const media = {
      src: 'test.mp3',
      defaultPlaybackRate: 0.2,
      playbackRate: 0.2,
      preload: 'off',
      volume: 0.1,
      muted: true,
      autoplay: true,
    };
    const props = getProps({ ...media, loop: loopOptions.LOOP });
    const wrapper = mount(
      <MediaContainer {...props}>
        <MockChildren />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    Object.keys(media).forEach((key) => {
      expect(media[key]).toBe(instance.currentMedia[key],
        `Expected ${media[key]} to be ${instance.currentMedia[key]} for ${key}`);
    });
    expect(instance.currentMedia.loop).toBe(true,
      `Expected ${props.loop} to be ${instance.currentMedia.loop} for loop`);
    expect(props.setOption).toHaveBeenCalledWith('volumeSupported', true);
  });

  it('updates media when props change', () => {
    const sharedMedia = {
      src: 'test.mp3',
      defaultPlaybackRate: 0.2,
      playbackRate: 0.2,
      preload: 'off',
      volume: 0.1,
      muted: true,
      autoplay: true,
    };
    const wrapper = mount(
      <MediaContainer {...getProps()}>
        <MockChildren />
      </MediaContainer>,
    );
    const instance = wrapper.instance();
    const props = getProps({
      ...sharedMedia,
      loop: loopOptions.LOOP,
      newTime: 33,
    });

    wrapper.setProps(props);

    Object.keys(sharedMedia).forEach((key) => {
      expect(sharedMedia[key]).toBe(instance.currentMedia[key],
        `Expected ${sharedMedia[key]} to be ${instance.currentMedia[key]} for ${key}`);
    });
    expect(instance.currentMedia.loop).toBe(true,
      `Expected ${props.loop} to be ${instance.currentMedia.loop} for loop`);
    expect(instance.currentMedia.currentTime).toBe(33,
      `Expected ${props.newtime} to be ${instance.currentMedia.currentTime} for newtime`);
    expect(props.setOption).toHaveBeenCalledWith('newTime', null);
  });

  it('updates playHeadPercent when props change and seekable media', () => {
    const wrapper = mount(
      <MediaContainer {...getProps()}>
        <MockChildren />
      </MediaContainer>,
    );
    const instance = wrapper.instance();
    const playHeadPercent = 44;
    const props = getProps({
      playHeadPercent,
    });
    let seekEnd;

    instance.currentMedia.seekable.length = 28;
    spyOn(instance.currentMedia.seekable, 'end').andCall((end) => {
      seekEnd = end;

      return seekEnd;
    });

    wrapper.setProps(props);

    const expectedCurrentTime = toPercentage(playHeadPercent, seekEnd);
    const expectedCurrentPercentRelative = toRelativePercentage(instance.currentMedia.currentTime,
      seekEnd);
    expect(instance.currentMedia.currentTime).toBe(expectedCurrentTime);
    expect(setOptionSpy).toHaveBeenCalledWith(
      'currentPercentRelative', expectedCurrentPercentRelative,
    );
  });

  const pauseData = [
    { paused: true },
    { paused: false },
  ];

  it('sets the pause/play to current props', () => {
    pauseData.forEach((pauseDatum) => {
      const wrapper = mount(
        <MediaContainer {...getProps({ paused: !pauseDatum.paused })}>
          <MockChildren />
        </MediaContainer>,
      );
      const instance = wrapper.instance();
      const props = getProps({
        paused: pauseDatum.paused,
      });
      mockCurrentMedia.pause.andCall(() => {
        instance.paused = true;
      });
      mockCurrentMedia.play.andCall(() => {
        instance.paused = false;
      });

      wrapper.setProps(props);

      expect(instance.paused).toBe(pauseDatum.paused);
    });
  });

  it('updateMediaStatus updates relevant props', () => {
    const wrapper = mount(
      <MediaContainer {...getProps()}>
        <MockChildren />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.updateMediaStatus();
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
    setOptionSpy.reset();
    pauseSpy.reset();
    mockCurrentMedia.play.reset();
    mockCurrentMedia.pause.reset();
  });

  after(() => {
    __ResetDependency__('canSetVolume');
  });
});
