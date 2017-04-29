import React from 'react';
import expect, { spyOn } from 'expect';
import { mount, shallow } from 'enzyme';

import { getJPlayers, mockCanvasContext } from '../../util/common.spec';
import { __get__, __Rewire__, __ResetDependency__ } from './bufferBarContainer';
import BufferBar from './bufferBar';

const state = {
  bufferedTimeRanges: [
    { start: 0, end: 20 },
    { start: 30, end: 50 },
  ],
  duration: 150,
  bufferColour: '#eee',
};

const mapStateToProps = __get__('mapStateToProps');
const BufferBarContainer = __get__('BufferBarContainer');
const id = 'jPlayer-1';
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const MockBufferBar = ({ setCanvas }) => <canvas ref={setCanvas} />;
__Rewire__('BufferBar', MockBufferBar);

MockBufferBar.propTypes = {
  setCanvas: PropTypes.func.isRequired,
};

describe('<BufferBarContainer />', () => {
  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(state), { id, ...attributes });
    expect(expected).toEqual({
      ...state,
      attributes,
    });
  });

  it('clears buffer bar if not buffered', () => {
    const wrapper = mount(<BufferBarContainer {...state} />);
    const instance = wrapper.instance();

    spyOn(instance.canvas, 'getContext').andReturn(mockCanvasContext);

    wrapper.setProps({ bufferedTimeRanges: [] });

    expect(mockCanvasContext.clearRect)
      .toHaveBeenCalledWith(0, 0, instance.canvas.width, instance.canvas.height);
  });

  it('doesn\'t fill buffer bar if values are same as previous', () => {
    const wrapper = mount(<BufferBarContainer {...state} />);
    const instance = wrapper.instance();

    spyOn(instance.canvas, 'getContext').andReturn(mockCanvasContext);

    wrapper.setProps({ bufferedTimeRanges: state.bufferedTimeRanges });

    expect(mockCanvasContext.fillRect).toNotHaveBeenCalled();
  });

  it('fills buffer bar if buffering', () => {
    const wrapper = mount(<BufferBarContainer {...state} />);
    const instance = wrapper.instance();
    const bufferedTimeRanges = [
       { start: 0, end: 10 },
       { start: 10, end: 25 },
    ];

    spyOn(instance.canvas, 'getContext').andReturn(mockCanvasContext);

    wrapper.setProps({ bufferedTimeRanges });

    expect(mockCanvasContext.fillRect.calls.length)
      .toBe(bufferedTimeRanges.length);
    expect(mockCanvasContext.fillStyle).toBe(state.bufferColour);
  });

  it('renders BufferBar', () => {
    __ResetDependency__('BufferBar');
    const wrapper = shallow(<BufferBarContainer {...state} attributes={attributes} />);

    expect(wrapper.type()).toBe(BufferBar);
    expect(wrapper.prop('attributes')).toBe(attributes);
  });

  afterEach(() => {
    mockCanvasContext.resetSpies();
  });

  after(() => {
    __ResetDependency__('BufferBar');
  });
});
