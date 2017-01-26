import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Video from './video';
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
    children: (<source />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<Video {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Video />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();
    const video = wrapper.find('video');

    Object.entries(events).forEach((val) => {
      expect(wrapper.prop(val[0])).toBe(val[1]);
    });

    expect(video.parent().type()).toBe(Media);
    expect(video.prop('children')).toBe(props.children);
    expect(video.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });

  it('renders null when not required', () => {
    const { wrapper } = setup();

    wrapper.setProps({ require: false });

    expect(wrapper.type()).toBe(null);
  });
});
