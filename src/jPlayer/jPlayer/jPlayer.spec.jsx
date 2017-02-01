import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import JPlayer from './jPlayer';
import KeyControl from '../keyControl/keyControl.container';

const setup = () => {
  const props = {
    children: (<div className="@@jPlayer-test" />),
    'data-attribute-test': 'test',
  };

  const wrapper = shallow(<JPlayer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<JPlayer />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.children(KeyControl).exists()).toBeTruthy();
    expect(wrapper.prop('data-attribute-test')).toBe(props['data-attribute-test']);
  });
});
