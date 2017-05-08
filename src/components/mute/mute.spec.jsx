import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Mute from './mute';

const setup = () => {
  const props = {
    setMute: createSpy(),
    muted: false,
    children: (<i className="@@jPlayer-test" />),
    id: 'jPlayer-1',
    'data-test': 'test',
  };

  const wrapper = shallow(<Mute {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('Mute', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.setMute).toHaveBeenCalledWith(props.id, !props.muted);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.MUTE)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
