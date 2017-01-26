import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audio from './audio';
import Media from '../media/media.container';

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

const setup = () => {
  const props = {
    events,
    require: true,
    children: (<track />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Audio {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Audio />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();
    const audio = wrapper.find('audio');

    Object.entries(events).forEach((val) => {
      expect(wrapper.prop(val[0])).toBe(val[1]);
    });
    expect(audio.parent().type()).toBe(Media);
    expect(audio.children(props.children.type).exists()).toBeTruthy();
    expect(audio.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  it('renders null when not required', () => {
    const { wrapper } = setup();

    wrapper.setProps({ require: false });
    expect(wrapper.type()).toBe(null);
  });
});
