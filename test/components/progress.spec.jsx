import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../common';
import { classes } from '../../src/util/constants';
import Progress from '../../src/components/progress';
import SeekBar from '../../src/components/seekBar';

describe('<Progress />', () => {
  const component = (
    <Progress>
      <SeekBar />
    </Progress>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders children', () => {
    expect(wrapper.children(SeekBar).exists()).toBeTruthy();
  });

  it('has progress class', () => {
    expect(wrapper.hasClass(classes.PROGRESS)).toBeTruthy();
  });

  customAttributeTests(component);
});
