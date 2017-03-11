import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../util/constants';
import BrowserUnsupported from './browserUnsupported';

const setup = (newProps) => {
  const props = {
    foundSupported: false,
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
    const { wrapper } = setup();

    expect(wrapper.hasClass('@@jPlayer-test')).toBeFalsy();
    expect(wrapper.hasClass(classes.NO_BROWSER_SUPPORT)).toBeTruthy();
  });

  it('renders null when supported media types', () => {
    const { wrapper } = setup();

    wrapper.setProps({ foundSupported: true });
    expect(wrapper.type()).toBe(null);
  });

  it('custom children overwrite default if specified', () => {
    const { wrapper } = setup({ children: <div className="@@jPlayer-test" /> });

    expect(wrapper.hasClass('@@jPlayer-test')).toBeTruthy();
    expect(wrapper.hasClass(classes.NO_BROWSER_SUPPORT)).toBeFalsy();
  });
});
