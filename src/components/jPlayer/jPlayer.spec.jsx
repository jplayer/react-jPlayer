import React from 'react';
import expect, { restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import JPlayer from './jPlayer';

const setup = () => {
  const props = {
    children: (<div className="@@jPlayer-test" />),
    'data-test': 'test',
  };

  const wrapper = shallow(<JPlayer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('jPlayer', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    ({ wrapper, props } = setup());
  });

  it('renders self and subcomponents', () => {
    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  afterEach(() => {
    restoreSpies();
  });
});
