import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import BrowserUnsupported from './browserUnsupported';

const setup = (newProps) => {
  const props = {
    foundSupported: false,
    attributes: {
      'data-test': 'test',
    },
    ...newProps,
  };
  const wrapper = shallow(<BrowserUnsupported {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<BrowserUnsupported />', () => {
  it('renders self and sub components when no supported media types', () => {
    const { wrapper, props } = setup();

    expect(wrapper.children('.@@jPlayer-test').exists()).toBeFalsy();
    expect(wrapper.hasClass(classes.NO_BROWSER_SUPPORT)).toBeTruthy();
    expect(wrapper.find('h4').exists()).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props.attributes['data-test']);
  });

  it('renders null when supported media types', () => {
    const { wrapper } = setup();

    wrapper.setProps({ foundSupported: true });
    expect(wrapper.type()).toBe(null);
  });

  it('custom children overwrite default if specified', () => {
    const { wrapper } = setup({ children: <div className="@@jPlayer-test" /> });

    expect(wrapper.children('.@@jPlayer-test').exists()).toBeTruthy();
    expect(wrapper.find('h4').exists()).toBeFalsy();
  });
});
