import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Video from './video';
import Media from '../media/mediaContainer';

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
    children: 'test',
    'data-test': 'test',
  };

  const wrapper = shallow(<Video {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Video />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    const video = wrapper.find('video');

    Object.entries(events).forEach((val) => {
      expect(wrapper.prop(val[0])).toBe(val[1]);
    });

    expect(video.parent().type()).toBe(Media);
    expect(video.prop('children')).toBe(props.children);
    expect(video.prop('data-test')).toBe(props['data-test']);
  });

  it('renders null when not required', () => {
    wrapper.setProps({ require: false });

    expect(wrapper.type()).toBe(null);
  });
});
