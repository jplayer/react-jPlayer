import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { setPlaybackRate } from '../../actions/actions';
import { __get__ } from './playbackRateBarContainer';
import BarEvents from '../../barEvents/barEvents';
import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValueContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const PlaybackRateBarContainer = __get__('PlaybackRateBarContainer');
const id = 'jPlayer-1';
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
const attributes = {
  'data-test': 'test',
  children: <div />,
};

describe('PlaybackRateBarContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    delete expected.movePlaybackRate;

    expect(expected).toEqual({
      attributes,
    });
  });

  it('merges props', () => {
    const expected = mergeProps({ attributes }, { dispatch }, { id });

    delete expected.onClick;
    delete expected.onTouch;

    expect(expected).toEqual({
      attributes,
    });
  });

  it('onClick moves playback rate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers(), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageX: 33 });

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(0.605, id));
  });

  it('onClick moves playback rate when verticalPlaybackRate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers({
      verticalPlaybackRate: true,
    }), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageY: 7 });

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(5.05, id));
  });

  it('onTouch moves playback rate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers(), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');
    const event = {
      preventDefault: createSpy(),
      touches: [
        { pageX: 33 },
      ],
    };

    mergedProps.onTouch(mockBar, event);

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(0.605, id));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('onTouch moves playback rate when verticalPlaybackRate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers({
      verticalPlaybackRate: true,
    }), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');
    const event = {
      preventDefault: createSpy(),
      touches: [
        { pageY: 7 },
      ],
    };

    mergedProps.onTouch(mockBar, event);

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(5.05, id));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('render passes move bar functions into barEvents', () => {
    const props = getProps();
    const wrapper = shallow(<PlaybackRateBarContainer {...props} />);

    expect(wrapper.type()).toBe(BarEvents);
    expect(wrapper.prop('clickMoveBar')).toBe(props.onClick);
    expect(wrapper.prop('touchMoveBar')).toBe(props.onTouch);
  });

  it('renders PlaybackRateBar', () => {
    const props = {
      ...getProps(),
      attributes,
    };
    const wrapper = shallow(<PlaybackRateBarContainer {...props} />)
      .find(PlaybackRateBar);

    expect(wrapper.type()).toBe(PlaybackRateBar);
    expect(wrapper.prop('data-test')).toBe(attributes['data-test']);
  });

  it('children is PlaybackRateBarValue as default', () => {
    const props = getProps();
    const wrapper = shallow(<PlaybackRateBarContainer {...props} />)
      .find(PlaybackRateBar);

    expect(wrapper.children().type()).toBe(PlaybackRateBarValue);
  });

  it('renders custom children', () => {
    const props = getProps();
    const wrapper = shallow(
      <PlaybackRateBarContainer {...props}>
        <div className="@@jPlayer-test" />
      </PlaybackRateBarContainer>,
    ).find(PlaybackRateBar);

    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.children().type()).toNotBe(PlaybackRateBarValue);
  });

  afterEach(() => {
    restoreSpies();
  });
});
