import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';
import { setJPlayers } from '../../util/common.spec';
import { setPlaybackRate } from '../_actions/actions';
import { __get__ } from './playbackRateBar.container';
import BarEvents from '../barEvents';
import PlaybackRateBar from './playbackRateBar';
import PlaybackRateBarValue from '../playbackRateBarValue/playbackRateBarValue.container';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const PlaybackRateBarContainer = __get__('PlaybackRateBarContainer');
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

describe('PlaybackRateBarContainer', () => {
  it('onClick moves playback rate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const dispatch = createSpy();
    const mappedProps = mapStateToProps(setJPlayers(), { uid });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageX: 33 });

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(0.605, uid));
  });

  it('onClick moves playback rate when verticalPlaybackRate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const dispatch = createSpy();
    const mappedProps = mapStateToProps(setJPlayers({
      verticalPlaybackRate: true,
    }), { uid });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageY: 7 });

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(5.05, uid));
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

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(0.605, uid));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('onTouch moves playback rate when verticalPlaybackRate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const dispatch = createSpy();
    const mappedProps = mapStateToProps(setJPlayers({
      verticalPlaybackRate: true,
    }), { uid });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');
    const event = {
      preventDefault: createSpy(),
      touches: [
        { pageY: 7 },
      ],
    };

    mergedProps.onTouch(mockBar, event);

    expect(dispatch).toHaveBeenCalledWith(setPlaybackRate(5.05, uid));
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
    const props = getProps({
      attributes: {
        'data-attribute-test': 'test',
      },
    });
    const wrapper = shallow(<PlaybackRateBarContainer {...props} />)
      .find(PlaybackRateBar);

    expect(wrapper.type()).toBe(PlaybackRateBar);
    expect(wrapper.prop('attributes')).toBe(props.attributes);
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
