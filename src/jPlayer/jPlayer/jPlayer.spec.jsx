import React from 'react';
import expect, { restoreSpies } from 'expect';
import { shallow } from 'enzyme';

import JPlayer from './jPlayer';
import KeyControl from '../keyControl/keyControl.container';

const setup = () => {
  const props = {
    children: (<div className="@@jPlayer-test" />),
    attributes: {
      'data-attribute-test': 'test',
    },
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
    expect(wrapper.prop('data-attribute-test')).toBe(props.attributes['data-attribute-test']);
  });

  it('doesn\'t enable keycontrols if !keyEnabled', () => {
    wrapper.setProps({ keyEnabled: false });
    expect(wrapper.children(KeyControl).exists()).toBeFalsy();
  });

  afterEach(() => {
    restoreSpies();
  });
});
