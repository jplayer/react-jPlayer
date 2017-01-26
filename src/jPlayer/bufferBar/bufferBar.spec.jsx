import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import BufferBar from './bufferBar';

const setup = () => {
  const props = {
    setCanvas: Function.prototype,
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<BufferBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<BufferBar />', () => {
  it('renders self and subcomponents', () => {
    const { wrapper, props } = setup();

    expect(wrapper.hasClass(classes.BUFFER_BAR)).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
