import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Video from '../../src/components/video';
import Media from '../../src/containers/media';

describe('<Video />', () => {
  const component = (
    <Video require>
      <source src="movie.mp4" type="video/mp4" />
    </Video>
  );
  const events = {
    onProgress: Function.prototype,
    onTimeUpdate: Function.prototype,
    onDurationChange: Function.prototype,
    onRateChange: Function.prototype,
    onSeeking: Function.prototype,
    onSeeked: Function.prototype,
    onPlay: Function.prototype,
    onRepeat: Function.prototype,
    onEnded: Function.prototype,
    onError: Function.prototype,
    onPlaying: Function.prototype,
    onPause: Function.prototype,
    onWaiting: Function.prototype,
    onSuspend: Function.prototype,
    onVolumeChange: Function.prototype,
    onLoadStart: Function.prototype,
    onLoadedMetadata: Function.prototype,
    onAbort: Function.prototype,
    onEmptied: Function.prototype,
    onStalled: Function.prototype,
    onLoadedData: Function.prototype,
    onCanPlay: Function.prototype,
    onCanPlayThrough: Function.prototype,
  };
  let wrapper;
  let spy;

  beforeEach(() => {
    wrapper = shallow(component);
    spy = expect.createSpy();
  });

  it('renders null when not required', () => {
    wrapper.setProps({ require: false });
    expect(wrapper.type()).toBe(null);
  });

  it('media gets events as props', () => {
    wrapper.setProps({ events });

    Object.entries(events).forEach((val) => {
      expect(wrapper.prop(val[0])).toBe(val[1]);
    });
  });

  it('wraps video in mediaContainer', () => {
    expect(wrapper.find('video').parent().type()).toBe(Media);
  });

  it('renders children', () => {
    expect(wrapper.find('video').children('source').exists()).toBeTruthy();
  });

  it('calls handler on click', () => {
    
  });

  customAttributeTests(component, 'video');
});
