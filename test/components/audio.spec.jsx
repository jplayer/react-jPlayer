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
