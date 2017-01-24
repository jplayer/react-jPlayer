import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../src/util/constants';
import Seekbar from '../../src/components/seekBar';
import PlayBar from '../../src/components/playBar';

describe('<SeekBar />', () => {
  let wrapper;
  let spy;
  const seekPercent = 33;

  beforeEach(() => {
    spy = expect.createSpy();
    wrapper = shallow(
      <Seekbar onClick={spy} seekPercent={seekPercent}>
        <PlayBar currentPercentAbsolute={0} currentPercentRelative={0} />
      </Seekbar>,
    );
  });

  it('renders children', () => {
    expect(wrapper.children(PlayBar).exists()).toBeTruthy();
  });

  it('has seekBar class', () => {
    expect(wrapper.hasClass(classes.SEEK_BAR)).toBeTruthy();
  });

  it('calls handler on mouse down', () => {
    wrapper.setProps({ onMouseDown: spy });
    wrapper.simulate('mousedown');
    expect(spy).toHaveBeenCalled();
  });

  it('calls handler on mouse click', () => {
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('width is equal to seekPercent', () => {
    expect(wrapper.prop('style').width).toBe(`${seekPercent}%`);
  });

  // customAttributeTests(component);
});
