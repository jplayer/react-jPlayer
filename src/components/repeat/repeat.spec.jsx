import React from 'react';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import Repeat from './repeat';

const setup = () => {
  const props = {
    setLoop: createSpy(),
    children: (<i className="@@jPlayer-test" />),
    id: 'jPlayer-1',
    loop: false,
    'data-test': 'test',
  };

  const wrapper = shallow(<Repeat {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Repeat />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    wrapper.simulate('click');

    expect(props.setLoop).toHaveBeenCalledWith(props.id, props.loop);
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.hasClass(classes.REPEAT)).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });
});
