import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';
import { getJPlayers } from '../../util/common.spec';
import { setPlayHead } from '../../actions/actions';
import { __get__ } from './seekBarContainer';
import Bar from '../bar';
import SeekBar from './seekBar';

const mapStateToProps = __get__('mapStateToProps');
const mergeProps = __get__('mergeProps');
const SeekBarContainer = __get__('SeekBarContainer');
const getBoundingClientRect = () => ({
  top: 10,
  left: 30,
  width: 100,
  height: 10,
});
const getProps = props => ({
  onClick: Function.prototype,
  onTouchMove: Function.prototype,
  ...props,
});
const attributes = {
  'data-test': 'test',
};
const children = <div />;
const id = 'jPlayer-1';

describe('SeekBarContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { id, children, ...attributes });

    delete expected.movePlayHead;

    expect(expected).toEqual({
      seekPercent: 0,
      children,
      attributes,
    });
  });

  it('merges props', () => {
    const seekPercent = 10;
    const expected = mergeProps({ seekPercent, children, attributes }, dispatch);

    delete expected.onClick;
    delete expected.onTouchMove;

    expect(expected).toEqual({
      seekPercent,
      attributes,
      children,
    });
  });

  it('onClick moves play head', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers(), { id });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageX: 33 });

    expect(dispatch).toHaveBeenCalledWith(setPlayHead(id, 3));
  });

  it('onTouchMove moves playback rate', () => {
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

    mergedProps.onTouchMove(mockBar, event);

    expect(dispatch).toHaveBeenCalledWith(setPlayHead(id, 3));
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('render passes move bar functions into bar', () => {
    const props = getProps();
    const wrapper = shallow(<SeekBarContainer {...props} />);

    expect(wrapper.type()).toBe(Bar);
    expect(wrapper.prop('clickMoveBar')).toBe(props.onClick);
    expect(wrapper.prop('touchMoveBar')).toBe(props.onTouchMove);
  });

  it('renders SeekBar', () => {
    const props = getProps({
      seekPercent: 77,
      attributes,
    });
    const wrapper = shallow(<SeekBarContainer {...props} />)
      .find(SeekBar);

    expect(wrapper.type()).toBe(SeekBar);
    expect(wrapper.prop('seekPercent')).toBe(props.seekPercent);
    expect(wrapper.prop('data-test')).toBe(attributes['data-test']);
  });

  afterEach(() => {
    restoreSpies();
  });
});
