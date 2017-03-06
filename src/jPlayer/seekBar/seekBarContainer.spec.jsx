import React from 'react';
import expect, { createSpy, spyOn, restoreSpies } from 'expect';
import { shallow } from 'enzyme';
import { getJPlayers } from '../../util/common.spec';
import { setPlayHead } from '../_actions/actions';
import { __get__ } from './seekBarContainer';
import BarEvents from '../barEvents';
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
  onTouch: Function.prototype,
  ...props,
});
const attributes = {
  'data-test': 'test',
  children: <div />,
};
const uid = 'jPlayer-1';

describe('SeekBarContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = createSpy();
  });

  it('maps state', () => {
    const expected = mapStateToProps(getJPlayers(), { uid, ...attributes });

    delete expected.movePlayHead;

    expect(expected).toEqual({
      seekPercent: 0,
      ...attributes,
    });
  });

  it('merges props', () => {
    const seekPercent = 10;
    const expected = mergeProps({ seekPercent, ...attributes }, dispatch, { uid });

    delete expected.onClick;
    delete expected.onTouch;

    expect(expected).toEqual({
      seekPercent,
      ...attributes,
    });
  });

  it('onClick moves play head', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers(), { uid });
    const mergedProps = mergeProps(mappedProps, { dispatch });
    const mockBar = document.createElement('div');

    mergedProps.onClick(mockBar, { pageX: 33 });

    expect(dispatch).toHaveBeenCalledWith(setPlayHead(3, uid));
  });

  it('onTouch moves playback rate', () => {
    spyOn(document, 'createElement').andReturn({
      getBoundingClientRect,
    });
    const mappedProps = mapStateToProps(getJPlayers(), { uid });
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
