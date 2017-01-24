import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import Audio from '../../src/components/audio';
import Media from '../../src/containers/media';

describe('<Audio />', () => {
  const component = (
    <Audio require>
      <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
    </Audio>
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

  beforeEach(() => {
    wrapper = shallow(component);
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

  it('wraps audio in mediaContainer', () => {
    expect(wrapper.find('audio').parent().type()).toBe(Media);
  });

  it('renders children', () => {
    expect(wrapper.find('audio').children('track').exists()).toBeTruthy();
  });

  customAttributeTests(component, 'audio');
});
