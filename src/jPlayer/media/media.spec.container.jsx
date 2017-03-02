import React from 'react';
import expect, { createSpy, spyOn } from 'expect';
import { mount } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { defaultOptions, loopOptions } from '../../util/constants';
import { toPercentage, toRelativePercentage, urlNotSupportedError } from '../../util/index';
import { setOption, pause } from '../_actions/actions';
import { __get__, __Rewire__, __ResetDependency__ } from './media.container';

let mockCurrentMedia;
const uid = 'jPlayer-1';
const dispatchProps = {
  dispatch: createSpy(),
};
const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const MediaContainer = __get__('MediaContainer');
const getProps = state => ({
  ...getJPlayers(state).jPlayers[uid],
  setOption: createSpy(),
  pause: createSpy(),
});
const MockAudio = ({ setCurrentMedia, ...events }) => {
  setCurrentMedia(mockCurrentMedia);
  return <audio {...events} className="@@test-media" />;
};
MockAudio.propTypes = {
  setCurrentMedia: React.PropTypes.func.isRequired,
};
const MockVideo = ({ setCurrentMedia, ...events }) => {
  setCurrentMedia(mockCurrentMedia);
  return <video {...events} className="@@test-media" />;
};
MockVideo.propTypes = {
  setCurrentMedia: React.PropTypes.func.isRequired,
};
__Rewire__('canSetVolume', () => true);

describe('MediaContainer', () => {
  beforeEach(() => {
    mockCurrentMedia = {
      currentTime: 90,
      duration: 250,
      buffered: {
        length: 2,
        start: start => start,
        end: end => end,
      },
      seekable: {
        length: 22,
        end: end => end,
      },
      playbackRate: 0.35,
      play: createSpy(),
      pause: createSpy(),
    };
  });
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, children: MockAudio });

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
      children: MockAudio,
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
        <MockAudio />
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
        <MockAudio />
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
        <MockAudio />
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
    expect(props.setOption).toHaveBeenCalledWith(
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
          <MockAudio />
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

  it('updateMediaStatus updates status properties to correct values', () => {
    const props = getProps();

    const wrapper = mount(
      <MediaContainer {...props}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.updateMediaStatus();

    expect(props.setOption).toHaveBeenCalledWith('durationText', '04:10');
    expect(props.setOption).toHaveBeenCalledWith('currentTimeText', '01:30');
    expect(props.setOption).toHaveBeenCalledWith('seekPercent', 52.5);
    expect(props.setOption).toHaveBeenCalledWith('currentPercentRelative', 428.57142857142856);
    expect(props.setOption).toHaveBeenCalledWith('currentPercentAbsolute', 225);
    expect(props.setOption).toHaveBeenCalledWith('currentTime', instance.currentMedia.currentTime);
    expect(props.setOption).toHaveBeenCalledWith('remaining', 160);
    expect(props.setOption).toHaveBeenCalledWith('duration', instance.currentMedia.duration);
    expect(props.setOption)
      .toHaveBeenCalledWith('playbackRate', instance.currentMedia.playbackRate);
  });

  it('updateMediaStatus sets durationText correctly when showRemainingDuration', () => {
    const props = getProps({ showRemainingDuration: true });

    const wrapper = mount(
      <MediaContainer {...props}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.updateMediaStatus();

    expect(props.setOption).toHaveBeenCalledWith('durationText', '-02:40');
  });

  it('updateMediaStatus sets durationText to 00:00 if time remaining is 0', () => {
    const props = getProps({ showRemainingDuration: true });
    mockCurrentMedia.duration = 90;
    mockCurrentMedia.currentTime = 90;

    const wrapper = mount(
      <MediaContainer {...props}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.updateMediaStatus();

    expect(props.setOption).toHaveBeenCalledWith('durationText', '00:00');
  });

  it('getSeekableEnd gets the end of the seekable time', () => {
    const props = getProps();
    const wrapper = mount(
      <MediaContainer {...props}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();
    const seekEnd = instance.getSeekableEnd();

    expect(seekEnd).toBe(mockCurrentMedia.seekable.length - 1);
  });

  it('getCurrentPercentRelative doesn\'t get the current percent relative if not seekable', () => {
    mockCurrentMedia.seekable.length = 0;
    const props = getProps();
    const wrapper = mount(
      <MediaContainer {...props}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();
    const currentPercentRelative = instance.getCurrentPercentRelative();

    expect(currentPercentRelative).toBe(0);
  });

  it('onProgress event updates media status', () => {
    const props = getProps();
    const onProgress = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onProgress={onProgress}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    spyOn(instance, 'updateMediaStatus');

    instance.events.onProgress();

    const expected = [
      { start: 0, end: 0 },
      { start: 1, end: 1 },
    ];

    expect(props.setOption).toHaveBeenCalledWith('bufferedTimeRanges', expected);
    expect(onProgress).toHaveBeenCalled();
    expect(instance.updateMediaStatus).toHaveBeenCalled();
  });

  it('onTimeUpdate event updates media status', () => {
    const props = getProps();
    const onTimeUpdate = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onTimeUpdate={onTimeUpdate}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    spyOn(instance, 'updateMediaStatus');

    instance.events.onTimeUpdate();

    expect(onTimeUpdate).toHaveBeenCalled();
    expect(instance.updateMediaStatus).toHaveBeenCalled();
  });

  it('onDurationChange event updates media status', () => {
    const props = getProps();
    const onDurationChange = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onDurationChange={onDurationChange}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    spyOn(instance, 'updateMediaStatus');

    instance.events.onDurationChange();

    expect(onDurationChange).toHaveBeenCalled();
    expect(instance.updateMediaStatus).toHaveBeenCalled();
  });

  it('onSeeking event sets seeking to true', () => {
    const props = getProps();
    const onSeeking = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onSeeking={onSeeking}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.events.onSeeking();

    expect(onSeeking).toHaveBeenCalled();
    expect(props.setOption).toHaveBeenCalledWith('seeking', true);
  });

  it('onSeeked event sets seeking to false', () => {
    const props = getProps();
    const onSeeked = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onSeeked={onSeeked}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.events.onSeeked();

    expect(onSeeked).toHaveBeenCalled();
    expect(props.setOption).toHaveBeenCalledWith('seeking', false);
  });

  it('onPlay event sets paused to false', () => {
    const props = getProps();
    const onPlay = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onPlay={onPlay}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.events.onPlay();

    expect(onPlay).toHaveBeenCalled();
    expect(props.setOption).toHaveBeenCalledWith('paused', false);
  });

  it('onEnded event updates media status', () => {
    const props = getProps();
    const onEnded = createSpy();
    const onRepeat = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onEnded={onEnded} onRepeat={onRepeat}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    spyOn(instance, 'updateMediaStatus');

    instance.events.onEnded();

    expect(instance.updateMediaStatus).toHaveBeenCalled();
    expect(props.pause).toHaveBeenCalledWith(0);
    expect(onEnded).toHaveBeenCalled();
    expect(onRepeat).toNotHaveBeenCalled();
  });

  it('onEnded calls loop callback if looping', () => {
    const props = getProps({ loop: loopOptions.LOOP });
    const onRepeat = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onRepeat={onRepeat}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.events.onEnded();

    expect(onRepeat).toHaveBeenCalled();
  });

  it('onError sets error to urlNotSupported', () => {
    const props = getProps();
    const onError = createSpy();
    const wrapper = mount(
      <MediaContainer {...props} onError={onError}>
        <MockAudio />
      </MediaContainer>,
    );
    const instance = wrapper.instance();

    instance.events.onError();

    expect(props.setOption)
      .toHaveBeenCalledWith('error', urlNotSupportedError(props.src));
    expect(onError).toHaveBeenCalled();
  });

  const renderData = [
    { video: true },
    { video: false },
  ];

  it('renders children with events passed in', () => {
    renderData.forEach((renderDatum) => {
      const props = getProps();
      const wrapper = mount(
        <MediaContainer {...props}>
          {renderDatum.video ? <MockVideo /> : <MockAudio />}
        </MediaContainer>,
      );
      const childProps = wrapper.find('.@@test-media').props();
      const instance = wrapper.instance();

      Object.keys(instance.events).forEach((key) => {
        const event = instance.events[key];

        expect(event).toBe(childProps[key]);
      });
    });
  });

  afterEach(() => {
    dispatchProps.dispatch.reset();
    mockCurrentMedia.play.reset();
    mockCurrentMedia.pause.reset();
  });

  after(() => {
    __ResetDependency__('canSetVolume');
  });
});
