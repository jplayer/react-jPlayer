import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';
import { setJPlayers } from '../../util/common.spec';
import { setPlayHead } from '../_actions/actions';
import { __get__ } from './seekBar.container';
import BarEvents from '../barEvents';
import SeekBar from './seekBar';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const SeekBarContainer = __get__('SeekBarContainer');
const uid = 'jPlayer-1';
const getBoundingClientRect = () => ({
  top: 10,
  left: 30,
  width: 100,
  height: 10,
});
const getProps = props => ({
  onClick: Function.prototype,
  onTouch: Function.prototype,
  ...props,
});

describe('SeekBarContainer', () => {
  it('maps state', () => {
    const expected = mapStateToProps(setJPlayers(), { uid });

    delete expected.movePlayHead;

    expect(expected).toEqual({
      seekPercent: 0,
    });
  });

  it('merges props', () => {
    const expected = mergeProps(setJPlayers().jPlayers[uid],
      { dispatch: null });

    delete expected.onClick;
    delete expected.onTouch;

    expect(expected).toEqual({
      seekPercent: 0,
    });
  });

  it('onClick moves play head', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const dispatch = createSpy();
    const mappedProps = mapStateToProps(setJPlayers(), { uid });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageX: 33 });

    expect(dispatch).toHaveBeenCalledWith(setPlayHead(3, uid));
  });

  it('onTouch moves playback rate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const dispatch = createSpy();
    const mappedProps = mapStateToProps(setJPlayers(), { uid });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');
    const event = {
      preventDefault: createSpy(),
      touches: [
        { pageX: 33 },
      ],
    };

    mergedProps.onTouch(mockBar, event);

    expect(dispatch).toHaveBeenCalledWith(setPlayHead(3, uid));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('render passes move bar functions into barEvents', () => {
    const props = getProps();
    const wrapper = shallow(<SeekBarContainer {...props} />);

    expect(wrapper.type()).toBe(BarEvents);
    expect(wrapper.prop('clickMoveBar')).toBe(props.onClick);
    expect(wrapper.prop('touchMoveBar')).toBe(props.onTouch);
  });

  it('renders SeekBar', () => {
    const props = getProps({
      attributes: {
        'data-attribute-test': 'test',
      },
      seekPercent: 77,
    });
    const wrapper = shallow(<SeekBarContainer {...props} />)
      .find(SeekBar);

    expect(wrapper.type()).toBe(SeekBar);
    expect(wrapper.prop('seekPercent')).toBe(props.seekPercent);
    expect(wrapper.prop('attributes')).toBe(props.attributes);
  });

  afterEach(() => {
    restoreSpies();
  });
});
