import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { __get__ } from './bufferBarContainer';
import BufferBar from './bufferBar';
import mockJPlayerOptions from '../../util/mockData/mockJPlayerOptions';
import mockCanvasContext from '../../util/mockData/mockCanvasContext';

const mapStateToProps = __get__('mapStateToProps');
const BufferBarContainer = __get__('BufferBarContainer');
const id = 'jPlayer-1';

const setup = () => {
  const props = {
    bufferedTimeRanges: mockJPlayerOptions.bufferedTimeRanges,
    duration: mockJPlayerOptions.duration,
    bufferColour: mockJPlayerOptions.bufferColour,
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = mount(<BufferBarContainer {...props} />);

  return {
    props,
    wrapper,
    instance: wrapper.instance(),
  };
};

describe('BufferBarContainer', () => {
  let wrapper;
  let props;
  let instance;
  let jPlayers;

  beforeEach(() => {
    jPlayers = {
      [id]: mockJPlayerOptions,
    };
  });

  afterEach(() => {
    mockCanvasContext.resetSpies();
  });

  it('maps state', () => {
    ({ props } = setup());
    const stateProps = mapStateToProps({ jPlayers }, { id, ...props.attributes });

    expect(stateProps).toEqual({
      bufferedTimeRanges: mockJPlayerOptions.bufferedTimeRanges,
      duration: mockJPlayerOptions.duration,
      bufferColour: mockJPlayerOptions.bufferColour,
      attributes: props.attributes,
    });
  });

  it('clears buffer bar if not buffered', () => {
    ({ wrapper, instance } = setup());

    expect.spyOn(instance.canvas, 'getContext').andReturn(mockCanvasContext);

    wrapper.setProps({ bufferedTimeRanges: [] });

    expect(mockCanvasContext.clearRect)
      .toHaveBeenCalledWith(0, 0, instance.canvas.width, instance.canvas.height);
  });

  it('doesn\'t fill buffer bar if values are same as previous', () => {
    ({ wrapper, props, instance } = setup());

    expect.spyOn(instance.canvas, 'getContext').andReturn(mockCanvasContext);

    wrapper.setProps({ bufferedTimeRanges: props.bufferedTimeRanges });

    expect(mockCanvasContext.fillRect).toNotHaveBeenCalled();
  });

  it('fills buffer bar if buffering', () => {
    ({ wrapper, props, instance } = setup());

    const bufferedTimeRanges = [
       { start: 0, end: 10 },
       { start: 10, end: 25 },
    ];

    expect.spyOn(instance.canvas, 'getContext').andReturn(mockCanvasContext);

    wrapper.setProps({ bufferedTimeRanges });

    expect(mockCanvasContext.fillRect.calls.length).toBe(bufferedTimeRanges.length);
    expect(mockCanvasContext.fillStyle).toBe(props.bufferColour);
  });

  it('renders BufferBar', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(BufferBar).is(BufferBar)).toBeTruthy();
    expect(wrapper.prop('attributes')).toEqual(props.attributes);
  });
});
