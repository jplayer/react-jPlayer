import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import BrowserUnsupported from './browserUnsupported';

const setup = () => {
  const props = {
    foundSupported: false,
    children: <div className="@@jPlayer-test" />,
  };
  const wrapper = shallow(<BrowserUnsupported {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<BrowserUnsupported />', () => {
  let wrapper;

  beforeEach(() => {
    ({ wrapper } = setup());
  });

  it('renders self and sub components when no supported media types', () => {
    expect(wrapper.hasClass('@@jPlayer-test')).toBeTruthy();
  });

  it('renders null when supported media types', () => {
    wrapper.setProps({ foundSupported: true });
    expect(wrapper.type()).toBe(null);
  });
});
