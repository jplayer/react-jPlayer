import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audio from './audio';
import Media from '../media/mediaContainer';

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
    attributes: {
      children: (<track className="@@jPlayer-test" />),
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<Audio {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Audio />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    const audio = wrapper.find('audio');

    Object.entries(events).forEach((val) => {
      expect(wrapper.prop(val[0])).toBe(val[1]);
    });

    expect(audio.parent().type()).toBe(Media);
    expect(audio.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(audio.prop('data-test')).toBe(props.attributes['data-test']);
  });

  it('renders null when not required', () => {
    wrapper.setProps({ require: false });
    expect(wrapper.type()).toBe(null);
  });
});
