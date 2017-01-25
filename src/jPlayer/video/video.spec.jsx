import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import Video from './video';
import Media from '../media/media.container';

describe('<Video />', () => {
  const component = (
    <Video require>
      <source src="movie.mp4" type="video/mp4" />
    </Video>
  );
  const events = {
    onProgress: null,
    onTimeUpdate: null,
    onDurationChange: null,
    onRateChange: null,
    onSeeking: null,
    onSeeked: null,
    onPlay: null,
    onRepeat: null,
    onEnded: null,
    onError: null,
    onPlaying: null,
    onPause: null,
    onWaiting: null,
    onSuspend: null,
    onVolumeChange: null,
    onLoadStart: null,
    onLoadedMetadata: null,
    onAbort: null,
    onEmptied: null,
    onStalled: null,
    onLoadedData: null,
    onCanPlay: null,
    onCanPlayThrough: null,
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
