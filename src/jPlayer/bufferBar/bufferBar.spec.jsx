import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import BufferBar from './bufferBar';

describe('<BufferBar />', () => {
  let wrapper;
  let canvas;

  beforeEach(() => {
    wrapper = mount(<BufferBar setCanvas={ref => (canvas = ref)} />);
  });

  it('ref is canvas', () => {
    expect(canvas).toBe(wrapper.find('canvas').node);
  });

  it('has bufferBar class', () => {
    expect(wrapper.hasClass(classes.BUFFER_BAR)).toBeTruthy();
  });

  // // customAttributeTests(component);
});
