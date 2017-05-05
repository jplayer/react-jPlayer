import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audio from './audio';

const events = {
  onAbort: null,
  onCanPlay: null,
  onCanPlayThrough: null,
  onDurationChange: null,
  onEmptied: null,
  onEncrypted: null,
  onEnded: null,
  onError: null,
  onLoadedData: null,
  onLoadedMetadata: null,
  onLoadStart: null,
  onPause: null,
  onPlay: null,
  onPlaying: null,
  onProgress: null,
  onRateChange: null,
  onSeeked: null,
  onSeeking: null,
  onStalled: null,
  onSuspend: null,
  onTimeUpdate: null,
  onVolumeChange: null,
  onWaiting: null,
};

const setup = () => {
  const props = {
    events,
    require: true,
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Audio {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Audio', () => {
  let wrapper;
  let props;

  it('renders self and subcomponents', () => {
    ({ wrapper, props } = setup());

    const audio = wrapper.find('audio');

    Object.keys(events).forEach((key) => {
      expect(wrapper.prop(key)).toBe(events[key]);
    });

    expect(audio.prop('children')).toBe(props.children);
    expect(audio.prop('data-test')).toBe(props['data-test']);
  });

  it('renders null when not required', () => {
    ({ wrapper } = setup());

    wrapper.setProps({ require: false });
    expect(wrapper.type()).toBe(null);
  });
});
