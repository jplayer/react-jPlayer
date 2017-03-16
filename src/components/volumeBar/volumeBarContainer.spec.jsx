import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import { getJPlayers } from '../../util/common.spec';
import { setVolume } from '../../actions/actions';
import { __get__ } from './volumeBarContainer';
import BarEvents from '../../barEvents/barEvents';
import VolumeBar from './volumeBar';
import VolumeBarValue from '../volumeBarValue/volumeBarValueContainer';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const VolumeBarContainer = __get__('VolumeBarContainer');
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

describe('VolumeBarContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, ...attributes });

    delete expected.moveVolumeBar;

    expect(expected).toEqual({
      attributes,
    });
  });

  it('merges props', () => {
    const stateProps = getJPlayers();
    const expected = mergeProps({ ...stateProps, attributes }, dispatch, { id });

    delete expected.onClick;
    delete expected.onTouch;

    expect(expected).toEqual({
      attributes,
    });
  });

  it('onClick moves volume bar', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers(), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageX: 33 });

    expect(dispatch).toHaveBeenCalledWith(setVolume(id, 0.03));
  });

  it('onClick moves volume bar when verticalVolume', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers({
      verticalVolume: true,
    }), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageY: 7 });

    expect(dispatch).toHaveBeenCalledWith(setVolume(id, 1.3));
  });

  it('onTouch moves volume bar', () => {
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

    expect(dispatch).toHaveBeenCalledWith(setVolume(id, 0.03));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('onTouch moves volume bar when verticalVolume', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers({
      verticalVolume: true,
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

    expect(dispatch).toHaveBeenCalledWith(setVolume(id, 1.3));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('render passes move bar functions into barEvents', () => {
    const props = getProps();
    const wrapper = shallow(<VolumeBarContainer {...props} />);

    expect(wrapper.type()).toBe(BarEvents);
    expect(wrapper.prop('clickMoveBar')).toBe(props.onClick);
    expect(wrapper.prop('touchMoveBar')).toBe(props.onTouch);
  });

  it('renders VolumeBar', () => {
    const props = {
      ...getProps(),
      attributes,
    };
    const wrapper = shallow(<VolumeBarContainer {...props} />)
      .find(VolumeBar);

    expect(wrapper.type()).toBe(VolumeBar);
    expect(wrapper.prop('data-test')).toBe(attributes['data-test']);
  });

  it('children is VolumeBarValue as default', () => {
    const props = getProps();
    const wrapper = shallow(<VolumeBarContainer {...props} />)
      .find(VolumeBar);

    expect(wrapper.children().type()).toBe(VolumeBarValue);
  });

  it('renders custom children', () => {
    const props = getProps();
    const wrapper = shallow(
      <VolumeBarContainer {...props}>
        <div className="@@jPlayer-test" />
      </VolumeBarContainer>,
    ).find(VolumeBar);

    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.children().type()).toNotBe(VolumeBarValue);
  });

  afterEach(() => {
    restoreSpies();
  });
});
