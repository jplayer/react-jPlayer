import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import BrowserUnsupported from './browserUnsupported';

const setup = (newProps) => {
  const props = {
    foundSupported: false,
    'data-test': 'test',
    ...newProps,
  };
  const wrapper = shallow(<BrowserUnsupported {...props} />);

  return {
    props,
    wrapper,
  };
};
const children = 'test';

describe('BrowserUnsupported', () => {
  let wrapper;
  let props;

  it('renders self and sub components when no supported media types', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.prop('children')).toNotBe(children);
    expect(wrapper.hasClass(classes.NO_BROWSER_SUPPORT)).toBeTruthy();
    expect(wrapper.find('h4').exists()).toBeTruthy();
    expect(wrapper.prop('data-test')).toBe(props['data-test']);
  });

  it('renders null when supported media types', () => {
    ({ wrapper, props } = setup());

    wrapper.setProps({ foundSupported: true });
    expect(wrapper.type()).toBe(null);
  });

  it('custom children overwrite default if specified', () => {
    ({ wrapper, props } = setup({ children }));

    expect(wrapper.prop('children')).toBe(children);
    expect(wrapper.find('h4').exists()).toBeFalsy();
  });
});
