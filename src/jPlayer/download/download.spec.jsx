import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { classes } from '../../../src/util/constants';
import { customAttributeTests } from '../../util/common.spec';
import Download from './download';

describe('<Download />', () => {
  const component = (
    <Download free href="">
      <i className="fa fa-download" />
    </Download>
  );
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(component);
  });

  it('renders null when audio is not free', () => {
    wrapper.setProps({ free: false });
    expect(wrapper.node).toBe(null);
  });

  it('renders children', () => {
    expect(wrapper.children('.fa-download').exists()).toBeTruthy();
  });

  it('has download class', () => {
    expect(wrapper.hasClass(classes.DOWNLOAD)).toBeTruthy();
  });

  customAttributeTests(component);
});
