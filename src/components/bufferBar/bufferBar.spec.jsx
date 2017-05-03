import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import BufferBar from './bufferBar';

const setup = () => {
  const props = {
    setCanvas: Function.prototype,
    attributes: {
      'data-test': 'test',
    },
  };

  const wrapper = shallow(<BufferBar {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('BufferBar', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.hasClass(classes.BUFFER_BAR)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });
});
