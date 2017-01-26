import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { customAttributeTests } from '../../util/common.spec';
import { classes } from '../../util/constants';
import BufferBar from './bufferBar';

describe('<BufferBar />', () => {
  const component = <BufferBar />;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('has bufferBar class', () => {
    expect(wrapper.hasClass(classes.BUFFER_BAR)).toBeTruthy();
  });

  customAttributeTests(component);
});
